import 'dart:async';
import 'dart:convert';

import 'package:flint_client/flint_client.dart';
import 'package:flint_ui/flint_ui.dart';
import 'package:universal_web/web.dart' as web;

import '../shared/auth_panel.dart';
import '../shared/page_shell.dart';

class QuestionDetailPage extends Component {
  final Map<String, dynamic> props;

  QuestionDetailPage(this.props);

  final FormController _answerFormState = useForm({'body': ''});
  FormErrors _answerErrors = const FormErrors();
  String? _answerMessage;
  bool _answerLoading = false;
  final StateSignal<List<Map<String, dynamic>>?> _answersSignal =
      StateSignal<List<Map<String, dynamic>>?>(null);
  final Set<String> _deletingAnswerIds = {};
  Timer? _answersTimer;
  FlintWebSocketClient? _answersSocket;
  String _liveStatus = 'Connecting';

  Map<String, dynamic> get _question =>
      (props['question'] as Map?)?.cast<String, dynamic>() ?? const {};

  List<Map<String, dynamic>> get _answers =>
      _answersSignal.value ?? _initialAnswers;

  List<Map<String, dynamic>> get _initialAnswers {
    final raw = props['answers'];
    if (raw is List) {
      return raw
          .whereType<Map>()
          .map((answer) => answer.cast<String, dynamic>())
          .toList();
    }
    return const [];
  }

  bool get _isAuthenticated =>
      props['isAuthenticated'] == true || authSession.isLoggedIn;
  bool get _canAnswer =>
      props['canAnswer'] == true ||
      {'admin', 'contributor', 'dev'}.contains(authSession.role);

  String get _slug => _question['slug']?.toString() ?? '';

  @override
  void didMount() {
    _connectAnswerSocket();
    _startAnswerRefresh();
  }

  @override
  void didUpdate() {
    _connectAnswerSocket();
    _startAnswerRefresh();
  }

  @override
  void willUnmount() {
    _answersSignal.dispose();
    _answersSocket?.dispose();
    _answersTimer?.cancel();
  }

  @override
  View build() {
    return SiteLayout(
      props: props,
      body: Container(
        dartStyle: const DartStyle(
          width: SizeValue.percent(100),
          maxWidth: 960,
          margin: EdgeInsets.symmetric(horizontal: SizeValue.auto),
          padding: EdgeInsets.symmetric(horizontal: 16, vertical: 34),
          display: Display.grid,
          gap: 22,
          overflow: Overflow.hidden,
          md: DartStyle(
              padding: EdgeInsets.symmetric(horizontal: 16, vertical: 48)),
        ),
        children: [
          _questionCard(),
          StateSignalListener<List<Map<String, dynamic>>?>(
            _answersSignal,
            (answers) => _answersList(answers ?? _initialAnswers),
          ),
          if (!_isAuthenticated)
            AuthPanel(
              title: 'Sign in to answer',
              body:
                  'Create an account or sign in to answer this question and help improve the Flint knowledge base.',
              backHref: '/questions',
              backLabel: 'Back to Questions',
            )
          else if (_canAnswer)
            _answerForm()
          else
            _permissionPanel(),
        ],
      ),
    );
  }

  View _questionCard() {
    return Container(
      dartStyle: const DartStyle(
        display: Display.grid,
        gap: 14,
        padding: EdgeInsets.all(20),
        minWidth: 0,
        radius: 22,
        border: Border(color: Color.rgba(30, 41, 59, 0.9), width: 1),
        background: Color.rgba(15, 23, 42, 0.72),
        md: DartStyle(padding: EdgeInsets.all(28)),
      ),
      children: [
        Row(
          dartStyle: const DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            gap: 10,
          ),
          children: [
            _pill(_question['tag']?.toString() ?? 'Question'),
            Text.span(
              _question['date']?.toString() ?? '',
              dartStyle: const DartStyle(fontSize: 12, color: Color('#64748b')),
            ),
          ],
        ),
        Text.h1(
          _question['title']?.toString() ?? 'Question',
          dartStyle: const DartStyle(
            margin: EdgeInsets.all(0),
            fontSize: 29,
            lineHeight: 1.2,
            color: Colors.white,
            md: DartStyle(fontSize: 34),
          ),
        ),
        Text.p(
          _question['body']?.toString() ?? '',
          dartStyle: const DartStyle(
            margin: EdgeInsets.all(0),
            fontSize: 15,
            lineHeight: 1.75,
            color: Color('#cbd5e1'),
          ),
        ),
        Text.span(
          'By ${_question['author']?.toString() ?? 'Community'}',
          dartStyle: const DartStyle(fontSize: 12, color: Color('#94a3b8')),
        ),
      ],
    );
  }

  View _answersList(List<Map<String, dynamic>> answers) {
    return Container(
      dartStyle: const DartStyle(display: Display.grid, gap: 14),
      children: [
        Row(
          dartStyle: const DartStyle(
            display: Display.flex,
            alignItems: AlignItems.center,
            justifyContent: JustifyContent.between,
            gap: 12,
            flexWrap: FlexWrap.wrap,
          ),
          children: [
            Text.h2(
              'Answers',
              dartStyle: const DartStyle(
                fontSize: 22,
                color: Colors.white,
                margin: EdgeInsets.all(0),
              ),
            ),
            _liveBadge(),
          ],
        ),
        if (answers.isEmpty)
          Text.p(
            'No answers yet. Be the first to help.',
            dartStyle: const DartStyle(color: Color('#94a3b8')),
          )
        else
          for (final answer in answers) _answerCard(answer),
      ],
    );
  }

  View _liveBadge() {
    final connected = _liveStatus == 'Live';
    return Container(
      dartStyle: DartStyle(
        display: Display.inlineFlex,
        alignItems: AlignItems.center,
        gap: 7,
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
        radius: 999,
        border: Border(
          color: connected
              ? const Color.rgba(52, 211, 153, 0.36)
              : const Color.rgba(251, 191, 36, 0.32),
          width: 1,
        ),
        background: connected
            ? const Color.rgba(52, 211, 153, 0.1)
            : const Color.rgba(251, 191, 36, 0.08),
      ),
      children: [
        Container(
          dartStyle: DartStyle(
            width: 7,
            height: 7,
            radius: 999,
            background:
                connected ? const Color('#6ee7b7') : const Color('#fbbf24'),
          ),
        ),
        Text.span(
          _liveStatus,
          dartStyle: DartStyle(
            fontSize: 12,
            fontWeight: 800,
            color: connected ? const Color('#a7f3d0') : const Color('#fde68a'),
          ),
        ),
      ],
    );
  }

  View _answerCard(Map<String, dynamic> answer) {
    final answerId = answer['id']?.toString();
    final canDelete = answer['can_edit'] == true && answerId != null;
    final deleting = answerId != null && _deletingAnswerIds.contains(answerId);

    return Container(
      dartStyle: const DartStyle(
        display: Display.grid,
        gap: 10,
        padding: EdgeInsets.all(16),
        minWidth: 0,
        radius: 14,
        border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
        background: Color.rgba(15, 23, 42, 0.58),
        md: DartStyle(padding: EdgeInsets.all(18)),
      ),
      children: [
        Text.p(
          answer['body']?.toString() ?? '',
          dartStyle: const DartStyle(
            margin: EdgeInsets.all(0),
            fontSize: 14,
            lineHeight: 1.7,
            color: Color('#cbd5e1'),
          ),
        ),
        Row(
          dartStyle: const DartStyle(
            display: Display.flex,
            alignItems: AlignItems.center,
            justifyContent: JustifyContent.between,
            gap: 12,
            flexWrap: FlexWrap.wrap,
          ),
          children: [
            Text.span(
              'By ${answer['author']?.toString() ?? 'Community'}',
              dartStyle: const DartStyle(fontSize: 12, color: Color('#94a3b8')),
            ),
            if (canDelete)
              Button(
                variant: ButtonVariant.ghost,
                tone: Tone.danger,
                size: ComponentSize.sm,
                loading: deleting,
                onPressed: (_) => _deleteAnswer(answerId),
                children: [
                  Icon(Icons.trash, size: 14),
                  Text.span('Delete'),
                ],
              ),
          ],
        ),
      ],
    );
  }

  View _answerForm() {
    final slug = _question['slug']?.toString() ?? '';
    return Container(
      dartStyle: const DartStyle(
        padding: EdgeInsets.all(22),
        minWidth: 0,
        radius: 16,
        border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
        background: Color.rgba(15, 23, 42, 0.62),
      ),
      children: [
        Form(
          onSubmit: (event) => _submitAnswer(event, slug),
          dartStyle: const DartStyle(display: Display.grid, gap: 14),
          children: [
            if (_answerMessage != null) _answerMessageBox(),
            TextArea(
              label: 'Your answer',
              name: 'body',
              required: true,
              controller: _answerFormState.controller('body'),
              errors: _answerErrors,
              rows: 7,
              placeholder: 'Share the fix, explanation, or example...',
              textareaDartStyle: _textAreaStyle,
            ),
            Button(
              props: const {'type': 'submit'},
              tone: Tone.primary,
              loading: _answerLoading,
              children: [Icon(Icons.send, size: 15), Text.span('Post Answer')],
            ),
          ],
        ),
      ],
    );
  }

  View _answerMessageBox() {
    return Container(
      dartStyle: const DartStyle(
        padding: EdgeInsets.all(12),
        radius: 10,
        border: Border(color: Color.rgba(248, 113, 113, 0.35), width: 1),
        background: Color.rgba(248, 113, 113, 0.08),
      ),
      child: Text.p(
        _answerMessage!,
        dartStyle: const DartStyle(
          margin: EdgeInsets.all(0),
          fontSize: 13,
          color: Color('#fca5a5'),
        ),
      ),
    );
  }

  Future<void> _submitAnswer(Object event, String slug) async {
    if (event is web.Event) event.preventDefault();
    if (_answerLoading) return;

    setState(() {
      _answerLoading = true;
      _answerErrors = const FormErrors();
      _answerMessage = null;
    });

    final localErrors = _validateAnswer();
    if (localErrors.isNotEmpty) {
      final errorMessage = _toastErrorMessage(
        localErrors,
        'Please check your answer.',
      );
      setState(() {
        _answerLoading = false;
        _answerErrors = localErrors;
      });
      toast.error('Answer not posted', message: errorMessage);
      return;
    }

    try {
      final token = authSession.token;
      final response = await clientRouter.post<Map<String, dynamic>>(
        '/questions/$slug/answers',
        body: _answerFormState.data,
        headers: {
          'Accept': 'application/json',
          'X-Requested-With': 'FlintClient',
          if (token != null) 'Authorization': 'Bearer $token',
        },
      );
      final data = response.data;
      if (response.success && data != null) {
        final answer = data['answer'];
        if (answer is Map) {
          _addAnswer(answer.cast<String, dynamic>());
        } else {
          await _refreshAnswers();
        }
        _answerFormState.reset(['body']);
        setState(() {
          _answerLoading = false;
          _answerErrors = const FormErrors();
          _answerMessage = null;
        });
        toast.success('Answer posted', message: 'Added to the thread.');
        return;
      }

      final errors = FormErrors.from(data);
      final errorMessage = _toastErrorMessage(
        errors,
        data?['message']?.toString() ?? 'Could not post answer.',
      );
      setState(() {
        _answerLoading = false;
        _answerErrors = errors;
        _answerMessage = errors.isEmpty ? errorMessage : null;
      });
      toast.error('Answer not posted', message: errorMessage);
    } on FlintError catch (error) {
      final data = _errorData(error);
      final errors = FormErrors.from(data);
      final errorMessage = _toastErrorMessage(
        errors,
        data?['message']?.toString() ?? 'Could not post answer.',
      );
      setState(() {
        _answerLoading = false;
        _answerErrors = errors;
        _answerMessage = errors.isEmpty ? errorMessage : null;
      });
      toast.error('Answer not posted', message: errorMessage);
    } catch (_) {
      setState(() {
        _answerLoading = false;
        _answerMessage = 'Could not post answer. Please try again.';
      });
      toast.error('Answer not posted', message: _answerMessage);
    }
  }

  String _toastErrorMessage(FormErrors errors, String fallback) {
    if (errors.isEmpty) return fallback;
    return errors.firstMessages.values.take(3).join(' ');
  }

  FormErrors _validateAnswer() {
    final body = _answerFormState.string('body').trim();
    final errors = <String, List<String>>{};
    if (body.isEmpty) {
      errors['body'] = ['The body field is required.'];
    } else if (body.length < 10) {
      errors['body'] = ['The body must be at least 10 characters.'];
    }
    return FormErrors(errors);
  }

  Map<String, dynamic>? _errorData(FlintError error) {
    final data = error.data;
    if (data is Map<String, dynamic>) return data;
    if (data is Map) {
      return data.map((key, value) => MapEntry(key.toString(), value));
    }
    return null;
  }

  void _startAnswerRefresh() {
    final slug = _slug;
    if (slug.isEmpty || _answersTimer != null) return;
    _answersTimer = Timer.periodic(
      const Duration(seconds: 4),
      (_) => _refreshAnswers(),
    );
  }

  void _connectAnswerSocket() {
    final slug = _slug;
    if (slug.isEmpty || _answersSocket != null) return;

    final socket = clientRouter.client.ws('/questions/$slug/live');
    socket.on('connect', (_) {
      print('[questions.live] connect');
      setState(() => _liveStatus = 'Live');
    });
    socket.on('connected', (data) {
      print('[questions.live] connected payload: $data');
      setState(() => _liveStatus = 'Live');
    });
    socket.on('answer.created', (data) {
      print('[questions.live] answer.created payload: $data');
      if (data is Map) {
        _addAnswer(data.cast<String, dynamic>());
      }
    });
    socket.on('answer.deleted', (data) {
      print('[questions.live] answer.deleted payload: $data');
      if (data is Map) {
        final id = data['id']?.toString();
        if (id != null) _removeAnswer(id);
      }
    });
    socket.on('disconnect', (_) {
      print('[questions.live] disconnect');
      setState(() => _liveStatus = 'Reconnecting');
    });
    socket.on('error', (_) {
      print('[questions.live] error');
      setState(() => _liveStatus = 'Reconnecting');
    });
    socket.on('reconnect_failed', (_) {
      print('[questions.live] reconnect_failed');
      setState(() => _liveStatus = 'Offline');
    });
    _answersSocket = socket;
    socket.connect();
  }

  Future<void> _refreshAnswers() async {
    final slug = _slug;
    if (slug.isEmpty) return;

    try {
      final token = authSession.token;
      final response = await clientRouter.get<Map<String, dynamic>>(
        '/api/questions/$slug',
        headers: {
          'Accept': 'application/json',
          if (token != null) 'Authorization': 'Bearer $token',
        },
      );
      final rawAnswers = response.data?['answers'];
      if (rawAnswers is! List) return;

      final answers = rawAnswers
          .whereType<Map>()
          .map((answer) => answer.cast<String, dynamic>())
          .toList();
      final currentSignature = jsonEncode(_answers);
      final nextSignature = jsonEncode(answers);
      if (currentSignature == nextSignature) return;

      _answersSignal.value = answers;
    } catch (_) {
      // Live refresh should never interrupt reading or answering.
    }
  }

  void _addAnswer(Map<String, dynamic> answer) {
    final current = _answers;
    final answerId = answer['id']?.toString();
    final exists = answerId != null &&
        current.any((item) => item['id']?.toString() == answerId);
    if (exists) return;
    _answersSignal.update((answers) => [...(answers ?? current), answer]);
  }

  Future<void> _deleteAnswer(String answerId) async {
    final slug = _slug;
    if (slug.isEmpty || _deletingAnswerIds.contains(answerId)) return;

    final confirmed = web.window.confirm('Delete this answer?');
    if (!confirmed) return;

    setState(() => _deletingAnswerIds.add(answerId));

    try {
      final token = authSession.token;
      final response = await clientRouter.post<Map<String, dynamic>>(
        '/questions/$slug/answers/$answerId/delete',
        headers: {
          'Accept': 'application/json',
          'X-Requested-With': 'FlintClient',
          if (token != null) 'Authorization': 'Bearer $token',
        },
      );

      if (response.success) {
        _removeAnswer(answerId);
        toast.success('Answer deleted', message: 'Removed from the thread.');
      } else {
        final message =
            response.data?['message']?.toString() ?? 'Could not delete answer.';
        toast.error('Delete failed', message: message);
      }
    } on FlintError catch (error) {
      final data = _errorData(error);
      final message =
          data?['message']?.toString() ?? 'Could not delete answer.';
      toast.error('Delete failed', message: message);
    } catch (_) {
      toast.error('Delete failed', message: 'Could not delete answer.');
    } finally {
      setState(() => _deletingAnswerIds.remove(answerId));
    }
  }

  void _removeAnswer(String answerId) {
    final current = _answers;
    if (!current.any((answer) => answer['id']?.toString() == answerId)) return;
    _answersSignal.update(
      (answers) => (answers ?? current)
          .where((answer) => answer['id']?.toString() != answerId)
          .toList(),
    );
  }

  View _permissionPanel() {
    return Text.p(
      'Your account can read answers but cannot post yet.',
      dartStyle: const DartStyle(color: Color('#fbbf24')),
    );
  }

  View _pill(String label) {
    return Container(
      dartStyle: const DartStyle(
        padding: EdgeInsets.symmetric(horizontal: 10, vertical: 5),
        radius: 999,
        border: Border(color: Color.rgba(125, 211, 252, 0.28), width: 1),
        background: Color.rgba(14, 165, 233, 0.1),
      ),
      child: label,
    );
  }
}

const _textAreaStyle = DartStyle(
  minHeight: 160,
  background: Color.rgba(2, 6, 23, 0.72),
  border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
  color: Colors.white,
);

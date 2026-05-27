import 'package:flint_client/flint_client.dart';
import 'package:flint_ui/flint_ui.dart';
import 'package:universal_web/web.dart' as web;

import '../shared/auth_panel.dart';
import '../shared/page_shell.dart';

class BlogDetailPage extends Component {
  BlogDetailPage(this.props);

  final Map<String, dynamic> props;
  final FormController _commentState = useForm({'body': ''});

  FormErrors _commentErrors = const FormErrors();
  String? _commentMessage;
  bool _commentLoading = false;

  Map<String, dynamic> get _post =>
      (props['post'] as Map?)?.cast<String, dynamic>() ?? const {};

  List<Map<String, dynamic>> get _comments {
    final raw = props['comments'];
    if (raw is List) {
      return raw
          .whereType<Map>()
          .map((comment) => comment.cast<String, dynamic>())
          .toList();
    }
    return const [];
  }

  String get _postBodyHtml => props['postBodyHtml']?.toString() ?? '';
  bool get _isAuthenticated =>
      props['isAuthenticated'] == true || authSession.isLoggedIn;

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
          _article(),
          _commentsSection(),
          if (_isAuthenticated)
            _commentForm()
          else
            AuthPanel(
              title: 'Sign in to comment',
              body:
                  'Create an account or sign in to join the discussion on this Flint post.',
              backHref: '/blog',
              backLabel: 'Back to Blog',
            ),
        ],
      ),
    );
  }

  View _article() {
    final title = _post['title']?.toString() ?? 'Blog post';
    final tag = _post['tag']?.toString() ?? 'Blog';
    final date = _post['date']?.toString() ?? '';
    final author = _post['author']?.toString() ?? 'Flint Team';
    final excerpt = _post['excerpt']?.toString() ?? '';

    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 22,
        padding: const EdgeInsets.all(22),
        minWidth: 0,
        overflow: Overflow.hidden,
        radius: 24,
        border: const Border(color: Color.rgba(30, 41, 59, 0.95), width: 1),
        background: Background.layers([
          Gradient.linear(
            145,
            [
              GradientStop(Color.rgba(16, 185, 129, 0.12), 0),
              GradientStop(Color.rgba(14, 165, 233, 0.08), 45),
              GradientStop(Color.rgba(15, 23, 42, 0.82), 100),
            ],
          ),
          const Color.rgba(15, 23, 42, 0.72),
        ]),
        md: const DartStyle(padding: EdgeInsets.all(32)),
      ),
      children: [
        Link(
          href: '/blog',
          dartStyle: const DartStyle(
            display: Display.inlineFlex,
            alignItems: AlignItems.center,
            gap: 7,
            width: SizeValue('max-content'),
            color: Color('#94a3b8'),
          ),
          children: [
            Icon(Icons.arrowLeft, size: 15),
            Text.span(
              'Back to Blog',
              dartStyle: const DartStyle(fontSize: 13, fontWeight: 700),
            ),
          ],
        ),
        Row(
          dartStyle: const DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            alignItems: AlignItems.center,
            gap: 10,
          ),
          children: [
            _pill(tag),
            if (date.isNotEmpty)
              Row(
                dartStyle: const DartStyle(
                  display: Display.inlineFlex,
                  alignItems: AlignItems.center,
                  gap: 6,
                ),
                children: [
                  Icon(Icons.calendar, size: 13, color: const Color('#94a3b8')),
                  Text.span(
                    date,
                    dartStyle: const DartStyle(
                      fontSize: 12,
                      fontWeight: 650,
                      color: Color('#94a3b8'),
                    ),
                  ),
                ],
              ),
          ],
        ),
        Text.h1(
          title,
          dartStyle: const DartStyle(
            margin: EdgeInsets.all(0),
            fontSize: 31,
            fontWeight: 760,
            lineHeight: 1.12,
            color: Colors.white,
            md: DartStyle(fontSize: 40),
          ),
        ),
        if (excerpt.isNotEmpty)
          Text.p(
            excerpt,
            dartStyle: const DartStyle(
              margin: EdgeInsets.all(0),
              fontSize: 16,
              lineHeight: 1.72,
              color: Color('#cbd5e1'),
            ),
          ),
        Row(
          dartStyle: const DartStyle(
            display: Display.inlineFlex,
            alignItems: AlignItems.center,
            gap: 8,
          ),
          children: [
            Icon(Icons.user, size: 15, color: const Color('#94a3b8')),
            Text.span(
              'By $author',
              dartStyle: const DartStyle(
                fontSize: 13,
                fontWeight: 700,
                color: Color('#94a3b8'),
              ),
            ),
          ],
        ),
        Container(
          dartStyle: const DartStyle(
            padding: EdgeInsets.only(top: 8),
            border: Border(color: Color.rgba(30, 41, 59, 0.72), width: 0),
          ),
          children: [
            HtmlContent(
              id: 'blog-post-body',
              html: _postBodyHtml,
              className: 'markdown-body',
              props: const {
                'style': {
                  'min-width': '0',
                  'max-width': '100%',
                  'overflow-wrap': 'break-word',
                },
              },
            ),
          ],
        ),
      ],
    );
  }

  View _commentsSection() {
    final comments = _comments;
    return Container(
      dartStyle: const DartStyle(
        display: Display.grid,
        gap: 14,
        padding: EdgeInsets.all(18),
        radius: 18,
        border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
        background: Color.rgba(15, 23, 42, 0.58),
        md: DartStyle(padding: EdgeInsets.all(24)),
      ),
      children: [
        Row(
          dartStyle: const DartStyle(
            display: Display.flex,
            justifyContent: JustifyContent.between,
            alignItems: AlignItems.center,
            gap: 12,
          ),
          children: [
            Text.h2(
              'Comments',
              dartStyle: const DartStyle(
                margin: EdgeInsets.all(0),
                fontSize: 22,
                color: Colors.white,
              ),
            ),
            Text.span(
              '${comments.length}',
              dartStyle: const DartStyle(
                fontSize: 13,
                fontWeight: 800,
                color: Color('#a7f3d0'),
              ),
            ),
          ],
        ),
        if (comments.isEmpty)
          Text.p(
            'No comments yet. Start the conversation.',
            dartStyle: const DartStyle(
              margin: EdgeInsets.all(0),
              color: Color('#94a3b8'),
            ),
          )
        else
          for (final comment in comments) _commentCard(comment),
      ],
    );
  }

  View _commentCard(Map<String, dynamic> comment) {
    return Container(
      dartStyle: const DartStyle(
        display: Display.grid,
        gap: 8,
        padding: EdgeInsets.all(16),
        radius: 14,
        border: Border(color: Color.rgba(51, 65, 85, 0.78), width: 1),
        background: Color.rgba(2, 6, 23, 0.35),
      ),
      children: [
        Row(
          dartStyle: const DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            alignItems: AlignItems.center,
            gap: 8,
          ),
          children: [
            Text.span(
              comment['author']?.toString() ?? 'Community',
              dartStyle: const DartStyle(
                fontSize: 13,
                fontWeight: 800,
                color: Colors.white,
              ),
            ),
            Text.span(
              comment['date']?.toString() ?? '',
              dartStyle: const DartStyle(fontSize: 12, color: Color('#64748b')),
            ),
          ],
        ),
        Text.p(
          comment['body']?.toString() ?? '',
          dartStyle: const DartStyle(
            margin: EdgeInsets.all(0),
            fontSize: 14,
            lineHeight: 1.7,
            color: Color('#cbd5e1'),
          ),
        ),
      ],
    );
  }

  View _commentForm() {
    final slug = _post['slug']?.toString() ?? '';
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
          onSubmit: (event) => _submitComment(event, slug),
          dartStyle: const DartStyle(display: Display.grid, gap: 14),
          children: [
            if (_commentMessage != null) _commentMessageBox(),
            TextArea(
              label: 'Comment',
              name: 'body',
              required: true,
              controller: _commentState.controller('body'),
              errors: _commentErrors,
              rows: 6,
              placeholder: 'Share a thought, question, or improvement...',
              textareaDartStyle: _textAreaStyle,
            ),
            Button(
              props: const {'type': 'submit'},
              tone: Tone.primary,
              loading: _commentLoading,
              children: [
                Icon(Icons.send, size: 15),
                Text.span('Submit Comment'),
              ],
            ),
          ],
        ),
      ],
    );
  }

  View _commentMessageBox() {
    return Container(
      dartStyle: const DartStyle(
        padding: EdgeInsets.all(12),
        radius: 10,
        border: Border(color: Color.rgba(248, 113, 113, 0.35), width: 1),
        background: Color.rgba(248, 113, 113, 0.08),
      ),
      child: Text.p(
        _commentMessage!,
        dartStyle: const DartStyle(
          margin: EdgeInsets.all(0),
          fontSize: 13,
          color: Color('#fca5a5'),
        ),
      ),
    );
  }

  Future<void> _submitComment(Object event, String slug) async {
    if (event is web.Event) event.preventDefault();
    if (_commentLoading) return;

    setState(() {
      _commentLoading = true;
      _commentErrors = const FormErrors();
      _commentMessage = null;
    });

    final localErrors = _validateComment();
    if (localErrors.isNotEmpty) {
      final errorMessage = _toastErrorMessage(
        localErrors,
        'Please check your comment.',
      );
      setState(() {
        _commentLoading = false;
        _commentErrors = localErrors;
      });
      toast.error('Comment not posted', message: errorMessage);
      return;
    }

    try {
      final token = authSession.token;
      final response = await clientRouter.post<Map<String, dynamic>>(
        '/blog/$slug/comments',
        body: _commentState.data,
        headers: {
          'Accept': 'application/json',
          'X-Requested-With': 'FlintClient',
          if (token != null) 'Authorization': 'Bearer $token',
        },
      );
      final data = response.data;
      if (response.success && data != null) {
        toast.success('Comment posted', message: 'Refreshing comments...');
        navigation.assign(data['redirectTo']?.toString() ?? '/blog/$slug');
        return;
      }

      final errors = FormErrors.from(data);
      final errorMessage = _toastErrorMessage(
        errors,
        data?['message']?.toString() ?? 'Could not post comment.',
      );
      setState(() {
        _commentLoading = false;
        _commentErrors = errors;
        _commentMessage = errors.isEmpty ? errorMessage : null;
      });
      toast.error('Comment not posted', message: errorMessage);
    } on FlintError catch (error) {
      final data = _errorData(error);
      final errors = FormErrors.from(data);
      final errorMessage = _toastErrorMessage(
        errors,
        data?['message']?.toString() ?? 'Could not post comment.',
      );
      setState(() {
        _commentLoading = false;
        _commentErrors = errors;
        _commentMessage = errors.isEmpty ? errorMessage : null;
      });
      toast.error('Comment not posted', message: errorMessage);
    } catch (_) {
      setState(() {
        _commentLoading = false;
        _commentMessage = 'Could not post comment. Please try again.';
      });
      toast.error('Comment not posted', message: _commentMessage);
    }
  }

  String _toastErrorMessage(FormErrors errors, String fallback) {
    if (errors.isEmpty) return fallback;
    return errors.firstMessages.values.take(3).join(' ');
  }

  FormErrors _validateComment() {
    final body = _commentState.string('body').trim();
    final errors = <String, List<String>>{};
    if (body.isEmpty) {
      errors['body'] = ['The body field is required.'];
    } else if (body.length < 3) {
      errors['body'] = ['The body must be at least 3 characters.'];
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

  View _pill(String label) {
    return Container(
      dartStyle: const DartStyle(
        width: SizeValue('max-content'),
        padding: EdgeInsets.symmetric(horizontal: 10, vertical: 5),
        radius: 999,
        border: Border(color: Color.rgba(52, 211, 153, 0.28), width: 1),
        background: Color.rgba(52, 211, 153, 0.08),
      ),
      children: [
        Text.span(
          label,
          dartStyle: const DartStyle(
            fontSize: 11,
            fontWeight: 800,
            color: Color('#a7f3d0'),
          ),
        ),
      ],
    );
  }
}

const _textAreaStyle = DartStyle(
  minHeight: 150,
  background: Color.rgba(2, 6, 23, 0.72),
  border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
  color: Colors.white,
);

import 'package:flint_ui/flint_ui.dart';

class FlashBanner extends FlintComponent {
  final Map<String, dynamic> props;
  FlashBanner(this.props);

  String get _success => props['flashSuccess']?.toString() ?? '';
  String get _error => props['flashError']?.toString() ?? '';

  @override
  FlintNode build() {
    if (_success.isEmpty && _error.isEmpty) {
      return h('span', props: {}, children: []);
    }
    return Container(
      dartStyle: _wrap,
      children: [
        if (_success.isNotEmpty)
          Container(
            dartStyle: _successBanner,
            children: [Text.p(_success, dartStyle: _bannerText)],
          ),
        if (_error.isNotEmpty)
          Container(
            dartStyle: _errorBanner,
            children: [Text.p(_error, dartStyle: _bannerText)],
          ),
      ],
    );
  }
}

const _wrap = DartStyle(
  maxWidth: 1152,
  padding: EdgeInsets.symmetric(horizontal: 16, vertical: 0),
  margin: EdgeInsets.only(top: 16, bottom: 0),
  display: Display.grid,
  gap: 8,
);

const _successBanner = DartStyle(
  padding: EdgeInsets.symmetric(horizontal: 16, vertical: 12),
  radius: 12,
  border: Border(color: Color.rgba(52, 211, 153, 0.4), width: 1),
  background: Color.rgba(52, 211, 153, 0.1),
);

const _errorBanner = DartStyle(
  padding: EdgeInsets.symmetric(horizontal: 16, vertical: 12),
  radius: 12,
  border: Border(color: Color.rgba(248, 113, 113, 0.4), width: 1),
  background: Color.rgba(248, 113, 113, 0.1),
);

const _bannerText = DartStyle(
  fontSize: 14,
  color: Colors.white,
  margin: EdgeInsets.all(0),
);

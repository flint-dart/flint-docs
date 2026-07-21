import 'package:flint_ui/flint_ui.dart';

class PlatformSection extends Component {
  @override
  View build() {
    return Container(
      dartStyle: DartStyle(
        width: SizeValue.percent(100),
        maxWidth: 1152,
        margin: EdgeInsets.symmetric(horizontal: SizeValue.auto),
        padding: EdgeInsets.symmetric(horizontal: 16, vertical: 64),
      ),
      children: [
        Container(
          dartStyle: DartStyle(
            display: Display.grid,
            gap: 10,
            maxWidth: 720,
          ),
          children: [
            Text.h2(
              'One framework, one structure',
              dartStyle: DartStyle(
                margin: EdgeInsets.all(0),
                fontSize: 32,
                fontWeight: 700,
                lineHeight: 1.15,
                color: ThemeToken.color('text'),
              ),
            ),
            Text.p(
              'Routes, controllers, content, and browser UI each get their own place.',
              dartStyle: DartStyle(
                margin: EdgeInsets.all(0),
                fontSize: 15,
                lineHeight: 1.65,
                color: ThemeToken.color('muted'),
              ),
            ),
          ],
        ),
        Row(
          dartStyle: DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            gap: 14,
            margin: EdgeInsets.only(top: 26, bottom: 0),
          ),
          children: [
            _feature(
              'Routes',
              'Group routes by feature and register controllers with app.controller().',
              DartStyle(
                minWidth: 56,
                padding: EdgeInsets.all(2),
                radius: 9999,
                background: Color('#38bdf8'),
              ),
            ),
            _feature(
              'Controllers',
              'Extend Controller directly and keep request handlers easy to scan.',
              DartStyle(
                minWidth: 56,
                padding: EdgeInsets.all(2),
                radius: 9999,
                background: Color('#34d399'),
              ),
            ),
            _feature(
              'Content',
              'Store docs as Markdown, then render them where the UI needs them.',
              DartStyle(
                minWidth: 56,
                padding: EdgeInsets.all(2),
                radius: 9999,
                background: Color('#f59e0b'),
              ),
            ),
            _feature(
              'UI',
              'Use Flint UI pages for interactive docs without returning to template files.',
              DartStyle(
                minWidth: 56,
                padding: EdgeInsets.all(2),
                radius: 9999,
                background: Color('#fb7185'),
              ),
            ),
          ],
        ),
      ],
    );
  }

  View _feature(String title, String body, DartStyle accent) {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 12,
        minWidth: 250,
        padding: EdgeInsets.all(18),
        radius: 8,
        border: Border(color: Color.rgba(51, 65, 85, 0.82), width: 1),
        background: ThemeToken.color('panel'),
      ),
      children: [
        Container(dartStyle: accent),
        Text.h3(
          title,
          dartStyle: DartStyle(
            margin: EdgeInsets.all(0),
            fontSize: 16,
            fontWeight: 700,
            color: ThemeToken.color('text'),
          ),
        ),
        Text.p(
          body,
          dartStyle: DartStyle(
            margin: EdgeInsets.all(0),
            fontSize: 13,
            lineHeight: 1.6,
            color: Color('#9ca8ba'),
          ),
        ),
      ],
    );
  }
}

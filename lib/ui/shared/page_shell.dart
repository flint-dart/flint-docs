import 'package:flint_dart/ui.dart';
import 'nav_bar.dart';
import 'flash_banner.dart';
import 'footer.dart';

class SiteLayout extends Component {
  Map<String, dynamic> props;
  FlintNode body;

  SiteLayout({required this.props, required this.body});

  @override
  void updateFrom(covariant SiteLayout next) {
    props = next.props;
    body = next.body;
  }

  @override
  View build() {
    return Container(
      dartStyle: _shell,
      children: [
        NavBar(props),
        FlashBanner(props),
        Container(
          dartStyle: const DartStyle(
            width: SizeValue.percent(100),
            display: Display.flex,
            flexDirection: FlexDirection.column,
            alignItems: AlignItems.center,
          ),
          children: [body],
        ),
        Footer(),
      ],
    );
  }
}

final _shell = DartStyle(
  display: Display.flex,
  flexDirection: FlexDirection.column,
  minHeight: const SizeValue('100vh'),
  width: const SizeValue.percent(100),
  minWidth: 0,
  background: ThemeToken.color('bg'),
  color: ThemeToken.color('text'),
);

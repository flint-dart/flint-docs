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
        body,
        Footer(),
      ],
    );
  }
}

final _shell = DartStyle(
  display: Display.grid,
  minWidth: 0,
  background: ThemeToken.color('bg'),
  color: ThemeToken.color('text'),
);

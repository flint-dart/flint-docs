import 'package:flint_dart/ui.dart';

import '../components/home/build_for.dart';
import '../components/home/dart_amplified.dart';
import '../components/home/final_cta.dart';
import '../components/home/hero.dart';
import '../components/home/platform_section.dart';
import '../components/home/trusted_bar.dart';
import '../components/home/workflow_section.dart';
import '../shared/page_shell.dart';

class HomePage extends Component {
  final Map<String, dynamic> props;
  HomePage(this.props);

  @override
  View build() {
    return SiteLayout(
      props: props,
      body: Container(
        dartStyle: const DartStyle(
          display: Display.grid,
        ),
        children: [
          HomeHero(),
          TrustedBar(),
          PlatformSection(),
          DartAmplified(),
          BuildFor(),
          WorkflowSection(),
          FinalCta(),
        ],
      ),
    );
  }
}

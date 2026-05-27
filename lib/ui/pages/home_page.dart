import 'package:flint_ui/flint_ui.dart';

import '../components/home/build_for.dart';
import '../components/home/counter_proof.dart';
import '../components/home/final_cta.dart';
import '../components/home/hero.dart';
import '../components/home/platform_section.dart';
import '../components/home/quick_start.dart';
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
        dartStyle: DartStyle(
          display: Display.grid,
          background: Color('#05070d'),
        ),
        children: [
          HomeHero(),
          TrustedBar(),
          BuildFor(),
          CounterProof(),
          QuickStart(),
          PlatformSection(),
          WorkflowSection(),
          FinalCta(),
        ],
      ),
    );
  }
}

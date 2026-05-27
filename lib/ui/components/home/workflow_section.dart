import 'package:flint_ui/flint_ui.dart';

import '../code_board.dart';

class WorkflowSection extends Component {
  @override
  View build() {
    return Container(
      dartStyle: DartStyle(
        width: SizeValue.percent(100),
        maxWidth: 1152,
        margin: EdgeInsets.symmetric(horizontal: SizeValue.auto),
        padding: EdgeInsets.symmetric(horizontal: 16, vertical: 64),
        background: Background.layers([
          Gradient.linear(
            135,
            [
              GradientStop(Color.rgba(15, 23, 42, 0.28), 0),
              GradientStop(Color.rgba(8, 47, 73, 0.16), 100),
            ],
          ),
          Color.rgba(15, 23, 42, 0.18),
        ]),
      ),
      children: [
        Container(
          dartStyle: DartStyle(
            display: Display.grid,
            gridTemplateColumns: GridTemplateColumns.one,
            alignItems: AlignItems.center,
            gap: 28,
            lg: DartStyle(
              gridTemplateColumns: GridTemplateColumns.tracks([
                GridTrack.minmax(360, GridTrack.oneFr),
                GridTrack.minmax(SizeValue.zero, SizeValue.fr(0.88)),
              ]),
              gap: 36,
            ),
          ),
          children: [
            CodeBoard(
              filename: 'docs_routes.dart',
              label: 'copy route',
              code: _routeCode,
            ),
            Container(
              dartStyle: const DartStyle(
                display: Display.grid,
                gap: 12,
                minWidth: 300,
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
                    Icon(Icons.route, size: 16, color: Color('#67e8f9')),
                    Text.span(
                      'FlintDart standard',
                      dartStyle: const DartStyle(
                        display: Display.block,
                        fontSize: 12,
                        fontWeight: 800,
                        color: Color('#67e8f9'),
                      ),
                    ),
                  ],
                ),
                Text.h2(
                  'Feature routes stay obvious.',
                  dartStyle: const DartStyle(
                    margin: EdgeInsets.all(0),
                    fontSize: 32,
                    fontWeight: 700,
                    lineHeight: 1.15,
                    color: Colors.white,
                  ),
                ),
                Text.p(
                  'The app composes route groups, each route group owns a feature, and each controller owns the request behavior. That is the structure we will keep using across docs, blog, and questions.',
                  dartStyle: const DartStyle(
                    margin: EdgeInsets.all(0),
                    fontSize: 15,
                    lineHeight: 1.65,
                    color: Color('#a8b3c5'),
                  ),
                ),
              ],
            ),
          ],
        ),
      ],
    );
  }
}

const _routeCode = '''class DocsRoutes extends RouteGroup {
  @override
  void register(Flint app) {
    final docs = app.controller(DocsController.new);
    docs.get('/', (c) => c.home());
    docs.get('/guides/:topic', (c) => c.guidesTopic());
  }
}''';

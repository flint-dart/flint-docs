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
              dartStyle: DartStyle(
                display: Display.grid,
                gap: 12,
                minWidth: 300,
              ),
              children: [
                Row(
                  dartStyle: DartStyle(
                    display: Display.flex,
                    flexWrap: FlexWrap.wrap,
                    alignItems: AlignItems.center,
                    gap: 8,
                  ),
                  children: [
                    Icon(Icons.route,
                        size: 16, color: ThemeToken.color('primary')),
                    Text.span(
                      'FlintDart standard',
                      dartStyle: DartStyle(
                        display: Display.block,
                        fontSize: 12,
                        fontWeight: 800,
                        color: ThemeToken.color('primary'),
                      ),
                    ),
                  ],
                ),
                Text.h2(
                  'Full-stack features stay organized.',
                  dartStyle: DartStyle(
                    margin: EdgeInsets.all(0),
                    fontSize: 32,
                    fontWeight: 700,
                    lineHeight: 1.15,
                    color: ThemeToken.color('text'),
                  ),
                ),
                Text.p(
                  'Composed route groups handle API endpoints and render browser pages seamlessly. Controllers manage backend actions and return type-safe page structures directly to Flint UI components, keeping the entire lifecycle structured.',
                  dartStyle: DartStyle(
                    margin: EdgeInsets.all(0),
                    fontSize: 15,
                    lineHeight: 1.65,
                    color: ThemeToken.color('muted'),
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

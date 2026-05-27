## Layout

Row/column layout primitives and spacing utilities.

Use `Row` and `Column` to compose layouts. Most widgets accept padding/margin via `EdgeInsets` and borders via `BoxBorder`.

Row({required List<FlintWidget> children, double gap = 16.0, List<int> columnWidths = const []})

Horizontal layout optimized for consistent HTML/email rendering.

Column({required List<FlintWidget> children, double gap = 5.0})

Vertical layout with adjustable spacing between children.

EdgeInsets.all/only/symmetric(...)

Apply consistent padding and margin.

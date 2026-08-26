## Table Sync

To apply model table definitions to your database, register them in `lib/config/table_registry.dart` and run the CLI sync command.

```dart
import 'dart:isolate';
import 'package:flint_dart/schema.dart';
import '../src/models/user_model.dart';
import '../src/models/post_model.dart';

void main(List args, SendPort sendPort) {
  runTableRegistry([
    User().table,
    PostModel().table,
  ], null, sendPort);
}
```

```bash
flint migrate
```

Use `flint migrate --drop` to drop and recreate tables when needed.

### Renaming columns safely

When renaming a column that already has data, use `renamedFrom` so Flint runs a database rename instead of treating the change as a drop/add.

```dart
Column(
  name: 'developer',
  type: ColumnType.string,
  renamedFrom: 'dev',
)
```

You can also add database comments and, for MySQL, place new columns after an existing column.

```dart
Column(
  name: 'nickname',
  type: ColumnType.string,
  comment: 'Public display name',
  after: 'email', // MySQL only
)
```

## Schema

Define tables, columns, indexes, and foreign keys.

Table({required String name, required List<Column> columns})

Define a table schema. An `id` column is added if none is provided.

Column({required String name, required ColumnType type, ...})

Define a column, optionally setting primary key, uniqueness, defaults, nullability, comments, placement hints, or rename metadata.

Index({required String name, required List<String> columns, bool isUnique = false})

Define indexes for faster lookups.

ForeignKey({required String column, required String referenceTable, required String referenceColumn, required ForeignKeyAction onDelete, required ForeignKeyAction onUpdate})

Declare foreign key constraints.

### Example

```dart
final usersTable = Table(
  name: 'users',
  columns: [
    Column(name: 'email', type: ColumnType.string, isUnique: true),
    Column(name: 'name', type: ColumnType.string),
    Column(name: 'created_at', type: ColumnType.timestamp, defaultValue: Default.currentTimestamp()),
  ],
  indexes: [
    Index(name: 'users_email_idx', columns: ['email'], isUnique: true),
  ],
);
```

### Column metadata

Use `comment` for database column comments, `after` to place newly added MySQL columns after another column, and `renamedFrom` when an existing column is being renamed.

```dart
Column(
  name: 'developer',
  type: ColumnType.string,
  comment: 'Public developer name',
  after: 'email', // MySQL only
  renamedFrom: 'dev',
)
```

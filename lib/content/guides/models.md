## Models & Tables

Flint Dart does not rely on separate migration files. Your table schema lives inside the model using `Table` and `Column`. Only define your custom fields; the framework manages `id`, `created_at`, and `updated_at` for you.

A **Table** describes the database table name. A **Column** describes one field (name, type, length, and options). If your model file feels too long, you can move the table definition into a separate file and reuse it in the model.

```dart
import 'package:flint_dart/model.dart';
import 'package:flint_dart/schema.dart';

class User extends Model {
  User() : super(() => User());

  String get name => getAttribute("name");
  String get email => getAttribute("email");
  String get password => getAttribute("password");
  String get profilePicUrl => getAttribute("profilePicUrl");

  @override
  Table get table => Table(
        name: 'users',
        columns: [
          Column(name: 'name', type: ColumnType.string, length: 255),
          Column(name: 'email', type: ColumnType.string, length: 255),
          Column(
            name: 'password',
            type: ColumnType.string,
          ),
          Column(
            name: 'profilePicUrl',
            type: ColumnType.string,
          ),
        ],
      );
}
```

You can also define the table in its own file and reference it:

```dart
// lib/models/user_table.dart
import 'package:flint_dart/schema.dart';

final userTable = Table(
  name: 'users',
  columns: [
    Column(name: 'name', type: ColumnType.string, length: 255),
    Column(name: 'email', type: ColumnType.string, length: 255),
    Column(name: 'password', type: ColumnType.string),
    Column(name: 'profilePicUrl', type: ColumnType.string),
  ],
);

// lib/models/user_model.dart
class User extends Model {
  @override
  Table get table => userTable;
}
```

Use `getAttribute` to read values from the internal map, and `setAttribute` or `setAttributes` to assign values when creating or updating models.

### ORM

The ORM is a friendly way to talk to your database without writing raw SQL. Think of a model like a "row helper" for a table. You call simple methods, and Flint builds the SQL for you.

Each line below shows a real task: finding a user, getting a list, creating a record, updating, and deleting. These are the core CRUD actions every new developer should learn first.

```dart
// READ: get a single user by ID
final user = await User().find(1);

// READ: list users with a filter
final users = await User()
  .where('email', 'test@example.com')
  .orderBy('created_at', desc: true)
  .limit(10)
  .get();

// CREATE: add a new user
final created = await User().create({
  'name': 'Ada',
  'email': 'ada@example.com',
  'password': 'secret',
});

// UPDATE: change an existing user
await User()
  .where('id', 1)
  .update(data: {'name': 'Ada Lovelace'});

// DELETE: remove a user
await User().delete(1);
```

- `find(id)` - fetch one record by primary key.

- `where(...).get()` - build a query and return a list of models.

- `create(data)` - insert a new record and return the created model.

- `update(data: ...)` - update matching records (use `where()` first).

- `delete(id)` - delete by primary key.

Tip: chain methods in the order you read them. "Where email is X, order by date, limit 10, get." This makes the code easy to understand without knowing SQL.

### More ORM Methods

These helpers cover common patterns like "find or create" and "upsert".

```dart
// Save current model (create or update based on id)
final user = User()..setAttributes({'name': 'Ada', 'email': 'ada@example.com'});
await user.save();

// Find or create
final existing = await User().firstOrCreate(
  where: {'email': 'ada@example.com'},
  data: {'name': 'Ada'},
);

// Upsert (update if exists, otherwise create)
final upserted = await User().upsert(
  where: {'email': 'ada@example.com'},
  data: {'name': 'Ada Lovelace'},
);

// Upsert many
final results = await User().upsertMany([
  {'where': {'email': 'a@ex.com'}, 'data': {'name': 'A'}},
  {'where': {'email': 'b@ex.com'}, 'data': {'name': 'B'}},
]);
```

- `refresh(id?)` - reload the model from the database.

- `save()` - create or update based on primary key.

- `firstOrCreate(where, data)` - get first match or create it.

- `upsert(where, data)` - update if found, else create.

- `upsertMany(list)` - batch upsert using `where` + `data`.

- `all()` - alias of `get()`. It returns all rows only when you have not already chained filters.

- `whereSimple(field, value)` - simple where without chaining.

- `whereInSimple(field, values)` - where in without chaining.

- `countAll()` - total count.

- `countWhere(field, value)` - count with filter.

- `truncate()` - delete all records in the table.

`orWhere(...)` now works consistently for model queries too. The grouped OR conditions are appended after the normal `where(...)` chain, so `where('status', 'active').orWhere('email', 'ada@example.com').orWhere('name', 'Ada')` behaves like `WHERE status = ? AND (email = ? OR name = ?)`.

### ORM Query

Chain query helpers step by step to build readable queries.

```dart
// 1) Start a query
final query = User();

// 2) Add filters
query.where('status', 'active');

// 3) Add ordering and limits
query.orderBy('created_at', desc: true).limit(10);

// 4) Execute
final users = await query.get();
```

### ORM Relations

Relations are how models "connect" to each other (like users and posts).

Think of it like friends: a **User** can have many **Posts**, and a **Post** belongs to one **User**. You declare that in the model's `relations` getter.

```dart
import 'package:flint_dart/model.dart';
import 'package:flint_dart/relations.dart';

class User extends Model {
  @override
  Map get relations => {
        'posts': Relations.hasMany('posts', () => Post()),
      };
}

class Post extends Model

{ @override Map get relations => { 'author': Relations.belongsTo('author', () => User()), }; } ``` The keys (`'posts'`, `'author'`) are the names you will use when loading relations.

```dart
// Load relations when querying
final posts = await Post()
  .withRelation('author')
  .withRelation('comments')
  .get();

// Load relations on a single model
final user = await User().find(1);
if (user != null) {
  await user.load('posts');
}
```

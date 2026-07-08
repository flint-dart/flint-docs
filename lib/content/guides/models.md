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

Relations are how models connect to each other. A `User` can have many `Post` records, and each `Post` belongs to one `User`. Declare those links once in the model's `relations` getter, then use the relation name everywhere else.

```dart
import 'package:flint_dart/model.dart';
import 'package:flint_dart/relations.dart';

class User extends Model {
  User() : super(() => User());

  @override
  Map<String, RelationDefinition> get relations => {
        'posts': Relations.hasMany<Post>(
          'posts',
          () => Post(),
          foreignKey: 'user_id',
        ),
      };
}

class Post extends Model {
  Post() : super(() => Post());

  @override
  Map<String, RelationDefinition> get relations => {
        'author': Relations.belongsTo<User>(
          'author',
          () => User(),
          foreignKey: 'user_id',
        ),
      };
}
```

The keys, such as `posts` and `author`, are the names you use when loading, counting, or querying relations.

```dart
// Load relations when querying
final posts = await Post()
    .withRelation('author')
    .get();

// Load relations on a single model
final user = await User().find(1);
if (user != null) {
  await user.load('posts');
}
```

Use `withRelations` when a page needs several relations at once:

```dart
final user = await User()
    .withRelations(['posts', 'activities', 'invoices'])
    .find(userId);
```

Use `loadMany` when you already have the model:

```dart
final invoice = await Invoice().find(invoiceId);
if (invoice != null) {
  await invoice.loadMany(['user', 'items']);
}
```

#### Relation Queries

Use `relationQuery` when you want to start from the relation metadata but still build a custom query.

```dart
final latestPosts = await user
    .relationQuery(
      'posts',
      constrain: (query) => query
          .where('status', '=', 'published')
          .orderBy('created_at', desc: true)
          .limit(5),
    )
    .get();
```

This keeps the foreign key and relation rules in the model. The page or service only describes the extra filter it needs.

#### Relation Counts

Use `countRelation` for one count:

```dart
final postCount = await user.countRelation('posts');
```

Use `hasRelated` when you only need a yes/no answer:

```dart
final hasPublishedPosts = await user.hasRelated(
  'posts',
  constrain: (query) => query.where('status', '=', 'published'),
);
```

Use `relationCounts` when you need several counts from the same relation. This is useful for sidebars, dashboards, and admin/customer summaries.

```dart
final counts = await user.relationCounts('hostings', {
  'total': null,
  'shared': (query) => query.where('hostingType', '=', 'shared'),
  'vps': (query) => query.where('hostingType', '=', 'vps'),
  'vds': (query) => query.where('hostingType', '=', 'vds'),
});

final hasVps = (counts['vps'] ?? 0) > 0;
```

Use `loadRelationCount` when the count should live on the model payload:

```dart
await user.loadRelationCount('posts', as: 'postCount');

return user.toMap(); // includes postCount
```

#### Relation-First Detail Pages

For detail pages, prefer a small service or presenter that loads relations and shapes the payload. This keeps controllers thin and prevents the API response and Flint UI page from drifting apart.

```dart
class AdminInvoicePresenter {
  const AdminInvoicePresenter();

  Future<Map<String, dynamic>> detail(Invoice invoice) async {
    await invoice.load('user');
    await invoice.load('items');

    final user = invoice.getRelation<User>('user');
    final items = (invoice.getRelation<List>('items') ?? const [])
        .whereType<InvoiceItem>()
        .toList();

    for (final item in items) {
      await item.loadMany(['product', 'hosting', 'domain', 'requestedTld']);
    }

    return {
      ...invoice.toMap(),
      'user': user?.toMap(),
      'items': [
        for (final item in items)
          {
            ...item.toMap(),
            'product': item.getRelation<Product>('product')?.toMap(),
            'hosting': item.getRelation<Hosting>('hosting')?.toMap(),
            'domain': item.getRelation<Domain>('domain')?.toMap(),
          },
      ],
    };
  }
}
```

Then both API controllers and Flint page controllers can use the same payload:

```dart
final invoice = await Invoice().find(id);
if (invoice == null) return res.status(404).json({'error': 'Not found'});

final data = await const AdminInvoicePresenter().detail(invoice);
return res.json({'success': true, 'data': data});
```

The rule of thumb is simple: put relation knowledge on the model, put detail payload composition in a service, and keep controllers focused on authentication, routing, and responses.

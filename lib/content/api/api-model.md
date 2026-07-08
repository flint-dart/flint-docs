## Model

Base ORM model for CRUD, relations, and typed attribute access.

                Property
                Type
                Description

                `table`

Table

                Schema definition for the model.

                `primaryKey`

String

                Primary key column (defaults to `id`).

                `conceal`

List<String>

                Fields hidden from `toMap()`.

                `qb`

QueryBuilder

                Query builder scoped to the model table.

Future<T?> find(dynamic id)

Find a model by its primary key.

Future<T?> firstWhere(String key, dynamic value)

Return the first record matching a field condition.

Future<List<T>> get()

Fetch all rows using the current query builder state.

Future<List<T>> all()

Alias of `get()`. If you already chained `where(...)`, `orWhere(...)`, or ordering methods, `all()` keeps those filters.

T withRelation(String name, {List<String>? columns})

Eager load a relation by name.

Future<T> load(String relation, {List<String>? columns})

Load a relation on a single model instance.

QueryBuilder relationQuery(String name, {void Function(QueryBuilder query)? constrain})

Build a query from a named relation. The relation metadata supplies the foreign-key rules, and the optional `constrain` callback adds filters, ordering, or limits.

Future<int> countRelation(String name, {void Function(QueryBuilder query)? constrain, String column = '*'})

Count related records through a named relation.

Future<Map<String, int>> relationCounts(String name, Map<String, void Function(QueryBuilder query)?> groups, {String column = '*'})

Count the same relation multiple ways. Use this for dashboards and navigation checks that need grouped counts from one relation.

Future<T> loadRelationCount(String name, {String? as, void Function(QueryBuilder query)? constrain, String column = '*'})

Count related records and store the result as an attribute on the model. The default attribute name is `<relationName>Count`.

Future<bool> hasRelated(String name, {void Function(QueryBuilder query)? constrain})

Return whether at least one related record exists.

Map<String, dynamic> toMap()

Return a sanitized map of attributes.

### Example

```dart
class User extends Model {
  User() : super(() => User());

  @override
  Table get table => Table(
    name: 'users',
    columns: [
      Column(name: 'email', type: ColumnType.string, isUnique: true),
      Column(name: 'name', type: ColumnType.string),
    ],
  );
}

final user = await User().find('uuid');
final filtered = await User()
  .where('status', 'active')
  .orWhere('email', 'ada@example.com')
  .all();

final counts = await user.relationCounts('hostings', {
  'total': null,
  'shared': (query) => query.where('hostingType', '=', 'shared'),
  'vps': (query) => query.where('hostingType', '=', 'vps'),
});

await user.loadRelationCount('posts', as: 'postCount');
```

## Query Builder

Chainable SQL builder for filtering, sorting, aggregates, and pagination.

                Method
                Returns
                Notes

                `select([List? fields])`

QueryBuilder

                Select specific columns (defaults to `*`).

                `where(String field, String operator, dynamic value)`

QueryBuilder

                Add a WHERE clause with an operator.

                `whereIn/whereNotIn(String field, List values)`

QueryBuilder

                Filter against a list of values.

                `whereLike/whereContains/whereStartsWith/whereEndsWith(...)`

QueryBuilder

                Filter using LIKE helpers.

                `orWhere(String field, String operator, dynamic value)`

QueryBuilder

                Append an OR condition inside the grouped OR clause set. Example: `where('status', '=', 'active').orWhere('email', '=', 'ada@example.com').orWhere('name', '=', 'Ada')` compiles to `WHERE status = ? AND (email = ? OR name = ?)`.

                `orderBy(String field, [String direction = 'ASC'])`

QueryBuilder

                Sort results by a column.

                `groupBy(String field)`

QueryBuilder

                Group results by a column.

                `limit(int value), offset(int value)`

QueryBuilder

                Limit result size and offset.

                `get()`

Future<List<Map<String, dynamic>>>

                Execute the query and return all rows.

                `first()`

Future<Map<String, dynamic>?>

                Execute the query and return the first row.

                `paginate(int page, [int perPage = 15])`

Future<Map<String, dynamic>>

                Paginate results with totals.

                `insert(Map data)`

Future<void>

                Insert a new row (auto-generates UUIDs for string IDs).

                `update(Map data)`

Future<void>

                Update rows matching the current WHERE clause.

                `delete()`

Future<void>

                Delete rows matching the current WHERE clause.

                `count()`

Future<int>

                Count rows matching the current query.

                `sum(String column), avg(String column)`

Future<double?>

                Aggregate numeric columns.

                `min(String column), max(String column)`

Future<dynamic>

                Return min/max values for a column.

### Example

```dart
final qb = QueryBuilder(table: 'users');

final page = await qb
  .where('status', '=', 'active')
  .orWhere('email', '=', 'ada@example.com')
  .orWhere('name', '=', 'Ada')
  .orderBy('created_at', 'DESC')
  .paginate(1, 20);

return ctx.res?.json(page);
```

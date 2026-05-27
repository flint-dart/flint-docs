## Database

Flint supports MySQL and PostgreSQL. Configure your connection in `.env`, and Flint will auto‑connect on server start (unless you disable it).

```bash
# .env
DB_CONNECTION=mysql     # or postgres
DB_HOST=localhost
DB_PORT=3306
DB_NAME=flint
DB_USER=root
DB_PASSWORD=secret
DB_SECURE=false
```

You can disable auto‑connect and call `DB.connect()` manually if you need dynamic tenants.

```dart
// Disable auto connect
final app = Flint(autoConnectDb: false);

// Manual connect
await DB.connect(database: 'flint');
```

- `DB_CONNECTION` — `mysql` or `postgres`.

- `DB_SECURE` — set `true` for secure MySQL connections.

- Default ports: MySQL `3306`, Postgres `5432`.

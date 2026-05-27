## Migration

Schema synchronization driven by registered table definitions.

Flint migrations are executed via the CLI. The migrator loads table definitions from `lib/config/table_registry.dart` and generates CREATE/ALTER statements.

flint migrate

Create or update tables based on the registered schema.

flint migrate --force

Drop and recreate tables that already exist.

flint migrate --drop

Drop all tables before migrating (destructive).

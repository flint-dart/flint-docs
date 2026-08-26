## CLI

Flint ships with a CLI to scaffold files, manage the app, and generate docs. Use the commands below directly from your project root.

### Project & Dev

```bash
flint create my_app      # create a new project (clones the starter)
flint run               # run dev server (defaults to 8080)
flint start             # alias for run
flint build --linux     # build production executable
flint build --windows   # build for Windows
flint build --both      # build for Linux + Windows
```

### Scaffolding

```bash
flint --make-model User
flint --make-controller UserController
flint --make-middleware AuthMiddleware
flint --make-route AuthRoutes
flint --make-resource UserResource
flint --make-mail WelcomeMail
flint --make-isolate ReportJob
flint --make-seeder UserSeeder
flint --make-docker
```

### Database

```bash
flint migrate            # run table sync/migrations
flint --db-seed          # run lib/config/seeder_registry.dart
flint --db-export        # export full database
flint --db-table-export users  # export one table
```

### Seeders

```bash
flint --make-seeder BlogPostSeeder
flint --db-seed
```

Flint's seeding entry point is `lib/config/seeder_registry.dart`. Register your seeders there, and the generator will keep that registry updated when you create new seeders.

### Docs & Updates

```bash
flint --docs-generate      # generate Swagger docs from routes
flint update             # update Flint dependencies
flint upgrade            # upgrade CLI + project deps
flint version            # show CLI version
flint --version          # same as above
flint -v                 # same as above
```

### Command Notes

- `flint --make-docker` - generates Docker files for local and production deploys.

- `flint --docs-generate` - parses routes and writes `docs/swagger.json`.

- `flint update` - updates project dependencies only.

- `flint upgrade` - updates the CLI and project dependencies together.

- `flint -v` / `flint --version` - reads the version of the running Flint CLI package instead of the current app version.

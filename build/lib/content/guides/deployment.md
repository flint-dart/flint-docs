## Deployment

Flint supports two production hosting paths: native build output and Dart runtime Docker. Choose based on your team workflow and target platform.

### Option 1: Native build output

Use this when you want a compiled app artifact from the Flint build command.

```bash
flint build
cd build
./start.sh
```

This generates a deployable folder with your executable, docs, and runtime assets. Build mode is typically faster at runtime and works well for production environments.

### Option 2: Docker runtime

Use this when you want a consistent runtime across local, staging, and production.

```bash
flint --make-docker
cd docker
docker compose up -d --build
```

The generated Docker setup installs dependencies with `dart pub get` and runs your app with `dart run lib/main.dart`.

### Best approach

- Both build and Docker are production-ready. This is not a small-app vs large-app decision.

- Choose based on your deployment preference: binary artifact workflow vs container workflow.

- Use Docker when you want strong runtime consistency across environments.

- Use build output when you prefer direct host deployment and minimal runtime dependencies.

- Keep secrets in environment variables, not in repository files.

        Global deploy CLI is planned soon, so one command will handle full deployment flow.

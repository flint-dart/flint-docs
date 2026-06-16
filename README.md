# Flint Docs

Official documentation site for `flint_dart`, built with Flint itself.

## What This Project Is

`flint_docs` is both:
- a real Flint application
- a living documentation + examples site

It is used to showcase Flint features in production-style code.

## Requirements

- Dart SDK 3.x
- MySQL (or your configured database)

## Quick Start

```bash
dart pub get
cp .env-example .env
dart run lib/main.dart
```

Open: `http://localhost:3000`

## Use Latest Flint Packages

For docs deployments that should track the current Flint page-bundle work,
keep these overrides in `pubspec.yaml` until the next pub.dev release is ready:

```yaml
dependency_overrides:
  flint_dart:
    git:
      url: https://github.com/flint-dart/flint_dart
      ref: dev
  flint_ui:
    git:
      url: https://github.com/flint-dart/flint-ui.git
      ref: codex/fix-navigation-rerender
```

## Hosted Install Scripts

The docs app serves the one-command Flint installers from `public/`:

```bash
curl -fsSL https://flintdart.dev/install.sh | sh
```

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -Command "irm https://flintdart.dev/install.ps1 | iex"
```

The installers also try to install missing required system packages where the OS has a standard package manager: `curl`, `unzip`, `git`, and Linux `ca-certificates`. Set `SKIP_PACKAGE_INSTALL=1` on macOS/Linux or pass `-SkipPackageInstall` on Windows to disable that behavior.

Run the same installer again later to update the Flint-managed Dart SDK, Flint UI, and Flint Dart checkout.

## Environment

Do not commit real credentials.

- Use `.env` for local/private values (gitignored)
- Use `.env-example` for safe demo values (committed)

## Production Build

Build a native executable bundle:

```bash
dart run ../flint_dart/bin/flint_dart.dart build
```

Output is written to `build/` and includes:
- `flint_docs` (compiled binary)
- `start.sh`
- `Dockerfile`
- static/docs/view assets

Run built app locally:

```bash
cd build
./start.sh
```

## Docker Deployment

The root Dockerfile runs `flint build --linux` inside the Docker builder stage.
That command builds the Flint UI page bundles first, generates the service
worker, copies public assets, and then compiles the server. The runtime stage
uses the same Dart base image so deployment only has to resolve one Docker Hub
base image.

```bash
docker compose up -d --build
```

Equivalent manual build:

```bash
docker build -t flint-docs .
docker run --rm -p 3030:3000 --env-file .env flint-docs
```

If you do not use `.env`, pass env vars with `-e`.

## Publish Build Artifacts to `build` Branch

This publishes only `build/` contents to the `build` branch:

```bash
cd flint_docs
REMOTE_URL=$(git remote get-url origin)
TMP_DIR=$(mktemp -d)
rsync -a --delete --exclude '.env' build/ "$TMP_DIR/"
cd "$TMP_DIR"
git init -b build
git add .
git commit -m "Publish build artifacts $(date -u +%Y-%m-%dT%H:%M:%SZ)"
git remote add origin "$REMOTE_URL"
git push --force origin build:build
```

## Notes

- Keep secrets out of GitHub.
- Rotate any credential that was previously committed.

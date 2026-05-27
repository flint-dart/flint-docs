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

## Use GitHub Flint Packages

For docs deployments that should track the approved GitHub `main` branches,
keep these overrides in `pubspec.yaml`:

```yaml
dependency_overrides:
  flint_dart:
    git:
      url: https://github.com/flint-dart/flint_dart
      ref: main
  flint_ui:
    git:
      url: https://github.com/flint-dart/flint-ui.git
      ref: main
```

## Hosted Install Scripts

The docs app serves the one-command Flint installers from `public/`:

```bash
curl -fsSL https://flintdart.eulogia.net/install.sh | sh
```

```powershell
iwr https://flintdart.eulogia.net/install.ps1 -UseB | iex
```

The installers also try to install missing required system packages where the OS has a standard package manager: `curl`, `unzip`, `git`, and Linux `ca-certificates`. Set `SKIP_PACKAGE_INSTALL=1` on macOS/Linux or pass `-SkipPackageInstall` on Windows to disable that behavior.

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

## Docker (Binary Runtime)

From `flint_docs/build`:

```bash
docker build -t flint-docs:build .
docker run --rm -p 3030:3000 --env-file .env flint-docs:build
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

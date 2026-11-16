#!/bin/bash
set -e

echo "Starting Flint Application..."

# Activate flavor-specific Web UI manifest if APP_FLAVOR or FLAVOR is set
ACTIVE_FLAVOR="${APP_FLAVOR:-${FLAVOR:-}}"
if [ -n "$ACTIVE_FLAVOR" ] && [ -f "./public/assets/js/flint-ui/manifest-${ACTIVE_FLAVOR}.json" ]; then
  cp "./public/assets/js/flint-ui/manifest-${ACTIVE_FLAVOR}.json" "./public/assets/js/flint-ui/manifest.json"
fi

# Ensure executable bit exists even if artifacts were published from Windows.
if [ ! -x "./flint_docs" ]; then
  chmod +x "./flint_docs"
fi

exec "./flint_docs"

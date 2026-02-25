#!/bin/bash
set -e

echo "Starting Flint Application..."

# Ensure executable bit exists even if artifacts were published from Windows.
if [ ! -x "./flint_docs" ]; then
  chmod +x "./flint_docs"
fi

exec "./flint_docs"

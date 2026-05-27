## Introduction

This guide focuses on how to use Flint Dart in real projects: creating an app, routing requests, rendering views, and defining database tables directly in models.

Flint Dart encourages separating logic from routes. Use controllers (via the CLI `flint --make-controller`) to keep handlers clean. Controllers are just classes, so when they grow you can move business logic into services. This keeps apps scalable and production-ready. Flint Dart is built for real, enterprise applications - not just test projects.

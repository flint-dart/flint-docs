## Logging

Use `Log` for consistent framework logging and levels.

### Basic Usage

```dart
Log.debug('Debug message');
Log.info('Server started');
Log.warning('Something looks off');
Log.error('Request failed', error: e);
```

Levels: `debug`, `info`, `warning`, `error`, `critical`.

## Isolate

Use isolates to run heavy work off the main request thread. Flint provides `IsolateTask` for single jobs and `IsolateTaskQueue` for batching.

### Single Task

```dart
class ReportJob extends IsolateTask {
  @override
  Future performTask() async {
    // heavy work here
    return 'done';
  }
}

await ReportJob().perform(
  onDone: (result) => Log.debug('Result: $result'),
  onError: (err) => Log.debug('Error: $err'),
);
```

### Queue Multiple Tasks

```dart
final tasks = [
  ReportJob(),
  ReportJob(),
];

await IsolateTaskQueue.scheduleTasks(
  tasks,
  onDone: (task, result) => Log.debug('Done: $result'),
  onError: (task, err) => Log.debug('Error: $err'),
);
```

### CLI Scaffold

Generate a new isolate task with the CLI:

```bash
flint --make-isolate ReportJob
```

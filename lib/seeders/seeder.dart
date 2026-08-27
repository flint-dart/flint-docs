import 'package:flint_dart/db.dart';

import 'blog_post_seeder.dart';
import 'example_project_seeder.dart';
import 'question_seeder.dart';

Future<void> main() async {
  try {
    await BlogPostSeeder.run();
    await QuestionSeeder.run();
    await ExampleProjectSeeder.runSync();
  } finally {
    if (DB.isConnected) {
      await DB.close();
    }
  }
}

import 'package:flint_dart/db.dart';

import 'blog_post_seeder.dart';
import 'question_seeder.dart';

Future<void> main() async {
  try {
    await BlogPostSeeder.run();
    await QuestionSeeder.run();
  } finally {
    if (DB.isConnected) {
      await DB.close();
    }
  }
}

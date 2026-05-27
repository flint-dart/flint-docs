import 'dart:isolate';

import 'package:flint_dart/schema.dart';
import 'package:flint_docs/models/answer_model.dart';
import 'package:flint_docs/models/blog_post_model.dart';
import 'package:flint_docs/models/comment_model.dart';
import 'package:flint_docs/models/question_model.dart';
import 'package:flint_docs/models/showcase_project_model.dart';
import 'package:flint_docs/models/user_model.dart';

void main(_, SendPort? sendPort) {
  runTableRegistry([
    User().table,
    BlogPost().table,
    ShowcaseProject().table,
    Question().table,
    Answer().table,
    Comment().table,
  ], _, sendPort);
}

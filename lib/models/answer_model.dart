import 'package:flint_dart/model.dart';
import 'package:flint_dart/schema.dart';

class Answer extends Model<Answer> {
  Answer() : super(() => Answer());

  String? get body => getAttribute('body');
  String? get questionId => getAttribute('question_id');
  String? get userId => getAttribute('user_id');
  String? get author => getAttribute('author');
  String? get publishedAt => getAttribute('published_at');

  @override
  Table get table => Table(
        name: 'answers',
        columns: [
          Column(name: 'body', type: ColumnType.text),
          Column(name: 'question_id', type: ColumnType.string),
          Column(name: 'user_id', type: ColumnType.string, isNullable: true),
          Column(name: 'author', type: ColumnType.string, length: 255),
          Column(name: 'published_at', type: ColumnType.timestamp),
        ],
      );
}

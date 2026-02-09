import 'package:flint_dart/model.dart';
import 'package:flint_dart/schema.dart';

class Question extends Model<Question> {
  Question() : super(() => Question());

  String? get title => getAttribute('title');
  String? get slug => getAttribute('slug');
  String? get body => getAttribute('body');
  String? get author => getAttribute('author');
  String? get tag => getAttribute('tag');
  String? get publishedAt => getAttribute('published_at');

  @override
  Table get table => Table(
        name: 'questions',
        columns: [
          Column(name: 'title', type: ColumnType.string, length: 255),
          Column(name: 'slug', type: ColumnType.string, length: 255),
          Column(name: 'body', type: ColumnType.text),
          Column(name: 'author', type: ColumnType.string, length: 255),
          Column(name: 'tag', type: ColumnType.string, length: 100),
          Column(name: 'published_at', type: ColumnType.timestamp),
        ],
      );
}

import 'package:flint_dart/model.dart';
import 'package:flint_dart/schema.dart';

class Comment extends Model<Comment> {
  Comment() : super(() => Comment());

  String? get body => getAttribute('body');
  String? get postId => getAttribute('post_id');
  String? get userId => getAttribute('user_id');
  String? get author => getAttribute('author');
  String? get publishedAt => getAttribute('published_at');

  @override
  Table get table => Table(
        name: 'comments',
        columns: [
          Column(name: 'body', type: ColumnType.text),
          Column(name: 'post_id', type: ColumnType.string),
          Column(name: 'user_id', type: ColumnType.string, isNullable: true),
          Column(name: 'author', type: ColumnType.string, length: 255),
          Column(name: 'published_at', type: ColumnType.timestamp),
        ],
      );
}

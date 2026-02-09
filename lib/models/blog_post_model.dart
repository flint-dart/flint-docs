import 'package:flint_dart/model.dart';
import 'package:flint_dart/schema.dart';

class BlogPost extends Model<BlogPost> {
  BlogPost() : super(() => BlogPost());

  String? get title => getAttribute('title');
  String? get slug => getAttribute('slug');
  String? get excerpt => getAttribute('excerpt');
  String? get body => getAttribute('body');
  String? get author => getAttribute('author');
  String? get tag => getAttribute('tag');
  String? get publishedAt => getAttribute('published_at');

  @override
  Table get table => Table(
        name: 'blog_posts',
        columns: [
          Column(name: 'title', type: ColumnType.string, length: 255),
          Column(name: 'slug', type: ColumnType.string, length: 255),
          Column(name: 'excerpt', type: ColumnType.text),
          Column(name: 'body', type: ColumnType.text),
          Column(name: 'author', type: ColumnType.string, length: 255),
          Column(name: 'tag', type: ColumnType.string, length: 100),
          Column(name: 'published_at', type: ColumnType.timestamp),
        ],
      );
}

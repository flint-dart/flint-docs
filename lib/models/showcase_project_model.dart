import 'package:flint_dart/model.dart';
import 'package:flint_dart/schema.dart';

class ShowcaseProject extends Model<ShowcaseProject> {
  ShowcaseProject() : super(() => ShowcaseProject());

  String? get title => getAttribute('title');
  String? get slug => getAttribute('slug');
  String? get description => getAttribute('description');
  String? get whatItDoes => getAttribute('what_it_does');
  String? get author => getAttribute('author');
  String? get publishedAt => getAttribute('published_at');

  @override
  Table get table => Table(
        name: 'showcase_projects',
        columns: [
          Column(name: 'title', type: ColumnType.string, length: 255),
          Column(name: 'slug', type: ColumnType.string, length: 255),
          Column(name: 'description', type: ColumnType.text),
          Column(name: 'what_it_does', type: ColumnType.text),
          Column(name: 'built_with', type: ColumnType.string, length: 255),
          Column(name: 'image_1', type: ColumnType.string, length: 500),
          Column(name: 'image_2', type: ColumnType.string, length: 500),
          Column(name: 'image_3', type: ColumnType.string, length: 500),
          Column(name: 'link_1_label', type: ColumnType.string, length: 120),
          Column(name: 'link_1_url', type: ColumnType.string, length: 500),
          Column(name: 'link_2_label', type: ColumnType.string, length: 120),
          Column(name: 'link_2_url', type: ColumnType.string, length: 500),
          Column(name: 'user_id', type: ColumnType.string, length: 255),
          Column(name: 'author', type: ColumnType.string, length: 255),
          Column(name: 'published_at', type: ColumnType.timestamp),
        ],
      );
}

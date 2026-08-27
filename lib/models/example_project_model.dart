import 'package:flint_dart/model.dart';
import 'package:flint_dart/schema.dart';

class ExampleProject extends Model<ExampleProject> {
  ExampleProject() : super(() => ExampleProject());

  String? get title => getAttribute('title');
  String? get slug => getAttribute('slug');
  String? get description => getAttribute('description');
  String? get whatItDoes => getAttribute('what_it_does');
  String? get category => getAttribute('category');
  String? get pillar => getAttribute('pillar');
  String? get badge => getAttribute('badge');
  String? get githubUrl => getAttribute('github_url');
  String? get demoUrl => getAttribute('demo_url');
  String? get cloneCommand => getAttribute('clone_command');
  String? get features => getAttribute('features');
  String? get techStack => getAttribute('tech_stack');
  String? get complexity => getAttribute('complexity');
  String? get author => getAttribute('author');
  String? get iconName => getAttribute('icon_name');
  String? get accentColor => getAttribute('accent_color');
  String? get publishedAt => getAttribute('published_at');

  @override
  Table get table => Table(
        name: 'example_projects',
        columns: [
          Column(name: 'title', type: ColumnType.string, length: 255),
          Column(name: 'slug', type: ColumnType.string, length: 255),
          Column(name: 'description', type: ColumnType.text),
          Column(name: 'what_it_does', type: ColumnType.text),
          Column(name: 'category', type: ColumnType.string, length: 100),
          Column(name: 'pillar', type: ColumnType.string, length: 50),
          Column(name: 'badge', type: ColumnType.string, length: 100),
          Column(name: 'github_url', type: ColumnType.string, length: 500),
          Column(name: 'demo_url', type: ColumnType.string, length: 500),
          Column(name: 'clone_command', type: ColumnType.string, length: 500),
          Column(name: 'features', type: ColumnType.text),
          Column(name: 'tech_stack', type: ColumnType.string, length: 500),
          Column(name: 'complexity', type: ColumnType.string, length: 50),
          Column(name: 'author', type: ColumnType.string, length: 255),
          Column(name: 'icon_name', type: ColumnType.string, length: 100),
          Column(name: 'accent_color', type: ColumnType.string, length: 50),
          Column(name: 'published_at', type: ColumnType.timestamp),
        ],
      );
}

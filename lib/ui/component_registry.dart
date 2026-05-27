import 'package:flint_ui/flint_ui.dart';

import 'pages/home_page.dart';
import 'pages/whats_new_page.dart';
import 'pages/changelog_page.dart';
import 'pages/content_page.dart';
import 'pages/client_page.dart';
import 'pages/ui_docs_page.dart';
import 'pages/examples_page.dart';
import 'pages/guides_page.dart';
import 'pages/api_page.dart';
import 'pages/questions_page.dart';
import 'pages/ask_question_page.dart';
import 'pages/blog_page.dart';
import 'pages/blog_detail_page.dart';
import 'pages/blog_write_page.dart';
import 'pages/question_detail_page.dart';

final componentRegistry = FlintComponentRegistry({
  'Home': (props) => HomePage(props),
  'WhatsNew': (props) => WhatsNewPage(props),
  'Changelog': (props) => ChangelogPage(props),
  'Client': (props) => ClientPage(props),
  'UiDocs': (props) => UiDocsPage(props),
  'Examples': (props) => ExamplesPage(props),
  'Guides': (props) => GuidesPage(props),
  'Api': (props) => ApiPage(props),
  'Questions': (props) => QuestionsPage(props),
  'AskQuestion': (props) => AskQuestionPage(props),
  'Blog': (props) => BlogPage(props),
  'BlogDetail': (props) => BlogDetailPage(props),
  'BlogWrite': (props) => BlogWritePage(props),
  'QuestionDetail': (props) => QuestionDetailPage(props),
  'Content': (props) => ContentPage(props),
});

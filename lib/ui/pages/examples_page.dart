import 'package:flint_ui/flint_ui.dart';

import '../shared/page_shell.dart';

const _htmlContent = r'''
<style>
  #examples-root, #examples-root * { box-sizing: border-box; }
  #examples-root { width: 100%; max-width: 100%; overflow-x: hidden; }
  #examples-root pre { max-width: 100%; overflow-x: auto; }
  #examples-root code { overflow-wrap: normal; }
  @media (max-width: 640px) {
    #examples-root .examples-shell { padding: 34px 16px !important; }
    #examples-root .examples-hero { padding: 24px !important; border-radius: 18px !important; }
    #examples-root .examples-title { font-size: 30px !important; line-height: 1.12 !important; }
    #examples-root .examples-section { padding: 18px !important; border-radius: 14px !important; }
    #examples-root ol { padding-left: 18px !important; }
    #examples-root pre { margin-left: -2px !important; margin-right: -2px !important; padding: 14px !important; }
  }
</style>
<div class="examples-shell" style="width:100%;max-width:1152px;padding:48px 16px;color:#e2e8f0;margin:0 auto;overflow:hidden;">
  <div class="examples-hero" style="padding:40px;border-radius:24px;border:1px solid rgba(30,41,59,0.7);background:rgba(15,23,42,0.7);">
    <div style="display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin-bottom:20px;">
      <span style="padding:4px 12px;border-radius:9999px;border:1px solid rgba(52,211,153,0.3);background:rgba(52,211,153,0.1);font-size:11px;font-weight:600;color:#a7f3d0;">Examples</span>
      <span style="padding:4px 12px;border-radius:9999px;border:1px solid rgba(52,211,153,0.4);background:rgba(52,211,153,0.1);font-size:11px;font-weight:600;color:#d1fae5;">v 1.1.13</span>
      <span style="font-size:12px;color:#64748b;">Hands-on tutorials</span>
    </div>
    <h1 class="examples-title" style="font-size:36px;font-weight:600;color:#fff;margin:0 0 12px;">Examples &amp; Tutorials</h1>
    <p style="font-size:15px;color:#94a3b8;margin:0 0 16px;">Learn by example with practical, end-to-end walkthroughs.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
      <span style="padding:4px 12px;border-radius:9999px;border:1px solid rgba(30,41,59,1);background:rgba(15,23,42,0.6);font-size:12px;color:#94a3b8;">Auth ready</span>
      <span style="padding:4px 12px;border-radius:9999px;border:1px solid rgba(30,41,59,1);background:rgba(15,23,42,0.6);font-size:12px;color:#94a3b8;">ORM included</span>
      <span style="padding:4px 12px;border-radius:9999px;border:1px solid rgba(30,41,59,1);background:rgba(15,23,42,0.6);font-size:12px;color:#94a3b8;">Views + APIs</span>
    </div>
  </div>

  <section class="examples-section" style="margin-top:40px;padding:24px;border-radius:16px;border:1px solid rgba(30,41,59,0.7);background:rgba(15,23,42,0.4);">
    <h2 style="font-size:22px;font-weight:600;color:#fff;margin:0 0 8px;">Blog Platform Tutorial</h2>
    <p style="color:#94a3b8;margin:0 0 8px;">Build a blog with role-based publishing, comments, and moderation.</p>
    <span style="display:inline-block;padding:4px 12px;border-radius:9999px;border:1px solid rgba(52,211,153,0.3);background:rgba(52,211,153,0.1);font-size:11px;font-weight:600;color:#a7f3d0;">Beginner</span>

    <div style="margin-top:24px;">
      <h3 style="font-size:16px;font-weight:600;color:#fff;margin:0 0 8px;">Roles &amp; Permissions</h3>
      <ul style="list-style:disc;padding-left:20px;color:#cbd5e1;line-height:1.7;">
        <li><code style="background:rgba(30,41,59,0.6);padding:1px 4px;border-radius:4px;font-size:13px;">admin</code> and <code style="background:rgba(30,41,59,0.6);padding:1px 4px;border-radius:4px;font-size:13px;">contributor</code> can publish blog posts.</li>
        <li><code style="background:rgba(30,41,59,0.6);padding:1px 4px;border-radius:4px;font-size:13px;">dev</code> can create questions/issues, answer, and comment.</li>
        <li>All authenticated roles can comment on posts.</li>
      </ul>
    </div>

    <ol style="margin-top:24px;padding-left:20px;color:#cbd5e1;line-height:1.7;display:grid;gap:24px;">
      <li>
        <h4 style="font-size:14px;font-weight:600;color:#fff;margin:0 0 4px;">Setup Project</h4>
        <p style="margin:0 0 8px;color:#94a3b8;font-size:14px;">Create a new Flint project and generate models:</p>
        <pre style="border-radius:12px;border:1px solid rgba(30,41,59,0.8);background:rgba(15,23,42,0.7);padding:16px;overflow-x:auto;"><code style="font-size:13px;color:#e2e8f0;">flint create blog_platform
cd blog_platform
flint --make-model User
flint --make-model Post
flint --make-model Comment
flint migrate</code></pre>
      </li>
      <li>
        <h4 style="font-size:14px;font-weight:600;color:#fff;margin:0 0 4px;">Create Models</h4>
        <p style="margin:0 0 8px;color:#94a3b8;font-size:14px;">Define User, Post, and Comment models with relations:</p>
        <pre style="border-radius:12px;border:1px solid rgba(30,41,59,0.8);background:rgba(15,23,42,0.7);padding:16px;overflow-x:auto;"><code style="font-size:13px;color:#e2e8f0;">class User extends Model&lt;User&gt; {
  User() : super(() =&gt; User());

  String? get name =&gt; getAttribute('name');
  String? get email =&gt; getAttribute('email');
  String? get role =&gt; getAttribute('role');

  @override
  Table get table =&gt; Table(
        name: 'users',
        columns: [
          Column(name: 'name', type: ColumnType.string, length: 255),
          Column(name: 'email', type: ColumnType.string, length: 255),
          Column(name: 'password', type: ColumnType.string),
          Column(name: 'role', type: ColumnType.string, length: 50),
        ],
      );
}</code></pre>
      </li>
      <li>
        <h4 style="font-size:14px;font-weight:600;color:#fff;margin:0 0 4px;">Role Guard Middleware</h4>
        <p style="margin:0 0 8px;color:#94a3b8;font-size:14px;">Gate publishing routes to admin and contributor roles:</p>
        <pre style="border-radius:12px;border:1px solid rgba(30,41,59,0.8);background:rgba(15,23,42,0.7);padding:16px;overflow-x:auto;"><code style="font-size:13px;color:#e2e8f0;">class RoleGuard extends Middleware {
  RoleGuard(this.allowedRoles);
  final List&lt;String&gt; allowedRoles;

  @override
  Handler handle(Handler next) {
    return (Context ctx) async {
      final user = await ctx.req.user;
      if (user == null) return ctx.res.status(401).json({'error': 'Unauthorized'});
      final role = user['role'];
      if (!allowedRoles.contains(role)) return ctx.res.status(403).json({'error': 'Forbidden'});
      return next(ctx);
    };
  }
}</code></pre>
      </li>
      <li>
        <h4 style="font-size:14px;font-weight:600;color:#fff;margin:0 0 4px;">Create Controllers</h4>
        <p style="margin:0 0 8px;color:#94a3b8;font-size:14px;">Publish posts with role checks and comment support:</p>
        <pre style="border-radius:12px;border:1px solid rgba(30,41,59,0.8);background:rgba(15,23,42,0.7);padding:16px;overflow-x:auto;"><code style="font-size:13px;color:#e2e8f0;">app.post('/posts', (Context ctx) async {
  final data = await ctx.req.validate({
    'title': 'required|string',
    'content': 'required|string',
  });
  final user = await ctx.req.user;
  final post = await Post().create({
    'title': data['title'],
    'content': data['content'],
    'slug': data['title'].toString().toLowerCase().replaceAll(' ', '-'),
    'user_id': user?['id'],
  });
  return ctx.res.json({'success': true, 'post': post}, status: 201);
}).useMiddleware(RoleGuard(['admin', 'contributor']));</code></pre>
      </li>
    </ol>
  </section>

  <section class="examples-section" style="margin-top:40px;padding:24px;border-radius:16px;border:1px solid rgba(30,41,59,0.7);background:rgba(15,23,42,0.4);">
    <h2 style="font-size:22px;font-weight:600;color:#fff;margin:0 0 8px;">Questions &amp; Answers Tutorial</h2>
    <p style="color:#94a3b8;margin:0 0 8px;">Build a Q&amp;A system with role-based posting for issues and answers.</p>
    <span style="display:inline-block;padding:4px 12px;border-radius:9999px;border:1px solid rgba(56,189,248,0.3);background:rgba(56,189,248,0.1);font-size:11px;font-weight:600;color:#bae6fd;">Intermediate</span>

    <div style="margin-top:24px;">
      <h3 style="font-size:16px;font-weight:600;color:#fff;margin:0 0 8px;">Roles &amp; Permissions</h3>
      <ul style="list-style:disc;padding-left:20px;color:#cbd5e1;line-height:1.7;">
        <li><code style="background:rgba(30,41,59,0.6);padding:1px 4px;border-radius:4px;font-size:13px;">dev</code> can post questions/issues and answers.</li>
        <li><code style="background:rgba(30,41,59,0.6);padding:1px 4px;border-radius:4px;font-size:13px;">admin</code> and <code style="background:rgba(30,41,59,0.6);padding:1px 4px;border-radius:4px;font-size:13px;">contributor</code> can answer and comment as well.</li>
        <li>All authenticated roles can comment on Q&amp;A threads.</li>
      </ul>
    </div>

    <ol style="margin-top:24px;padding-left:20px;color:#cbd5e1;line-height:1.7;display:grid;gap:24px;">
      <li>
        <h4 style="font-size:14px;font-weight:600;color:#fff;margin:0 0 4px;">Models</h4>
        <p style="margin:0 0 8px;color:#94a3b8;font-size:14px;">Define Question and Answer models:</p>
        <pre style="border-radius:12px;border:1px solid rgba(30,41,59,0.8);background:rgba(15,23,42,0.7);padding:16px;overflow-x:auto;"><code style="font-size:13px;color:#e2e8f0;">class Question extends Model&lt;Question&gt; {
  Question() : super(() =&gt; Question());
  @override
  Table get table =&gt; Table(
        name: 'questions',
        columns: [
          Column(name: 'title', type: ColumnType.string, length: 255),
          Column(name: 'body', type: ColumnType.text),
          Column(name: 'user_id', type: ColumnType.string),
          Column(name: 'status', type: ColumnType.string, length: 50),
        ],
      );
}</code></pre>
      </li>
      <li>
        <h4 style="font-size:14px;font-weight:600;color:#fff;margin:0 0 4px;">Routes &amp; Role Guard</h4>
        <p style="margin:0 0 8px;color:#94a3b8;font-size:14px;">Allow devs to post questions and answers:</p>
        <pre style="border-radius:12px;border:1px solid rgba(30,41,59,0.8);background:rgba(15,23,42,0.7);padding:16px;overflow-x:auto;"><code style="font-size:13px;color:#e2e8f0;">app.post('/questions', (Context ctx) async {
  final data = await ctx.req.validate({
    'title': 'required|string',
    'body': 'required|string',
  });
  final user = await ctx.req.user;
  final question = await Question().create({
    'title': data['title'],
    'body': data['body'],
    'status': 'open',
    'user_id': user?['id'],
  });
  return ctx.res.json({'success': true, 'question': question}, status: 201);
}).useMiddleware(RoleGuard(['dev', 'admin', 'contributor']));</code></pre>
      </li>
      <li>
        <h4 style="font-size:14px;font-weight:600;color:#fff;margin:0 0 4px;">Comments</h4>
        <p style="margin:0 0 8px;color:#94a3b8;font-size:14px;">Reuse the comment model to attach comments to questions or answers:</p>
        <pre style="border-radius:12px;border:1px solid rgba(30,41,59,0.8);background:rgba(15,23,42,0.7);padding:16px;overflow-x:auto;"><code style="font-size:13px;color:#e2e8f0;">app.post('/questions/:id/comments', (Context ctx) async {
  final data = await ctx.req.validate({'content': 'required|string'});
  final user = await ctx.req.user;
  final comment = await Comment().create({
    'content': data['content'],
    'question_id': ctx.req.param('id'),
    'user_id': user?['id'],
  });
  return ctx.res.json({'success': true, 'comment': comment});
}).useMiddleware(RoleGuard(['dev', 'admin', 'contributor']));</code></pre>
      </li>
    </ol>
  </section>
</div>
''';

class ExamplesPage extends FlintComponent {
  final Map<String, dynamic> props;
  ExamplesPage(this.props);

  @override
  FlintNode build() {
    return SiteLayout(
      props: props,
      body: HtmlContent(
        id: 'examples-root',
        html: _htmlContent,
        props: const {
          'style': {
            'width': '100%',
            'max-width': '100%',
            'overflow-x': 'hidden',
          },
        },
      ),
    );
  }
}

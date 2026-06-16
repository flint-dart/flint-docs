// ignore: deprecated_member_use
import 'dart:html' as html;

String? detectOperatingSystem() {
  final value = '${html.window.navigator.platform} '
          '${html.window.navigator.userAgent}'
      .toLowerCase();

  if (value.contains('win')) return 'windows';
  if (value.contains('mac')) return 'macos';
  if (value.contains('linux') || value.contains('x11')) return 'linux';
  return null;
}

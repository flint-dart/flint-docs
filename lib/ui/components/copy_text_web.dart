// ignore: deprecated_member_use
import 'dart:html' as html;

void copyText(String value) {
  final textarea = html.TextAreaElement()
    ..value = value
    ..style.position = 'fixed'
    ..style.top = '-1000px'
    ..style.left = '-1000px';

  html.document.body?.append(textarea);
  textarea.select();
  html.document.execCommand('copy');
  textarea.remove();
}

import 'copy_text_stub.dart' if (dart.library.html) 'copy_text_web.dart'
    as impl;

void copyText(String value) {
  impl.copyText(value);
}

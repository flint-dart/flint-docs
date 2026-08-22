import 'package:flint_dart/ui.dart';

View brandLogoMark({double size = 38}) {
  return Image(
    src: '/logo-icon.png',
    alt: 'Flint Dart logo',
    width: size,
    height: size,
    dartStyle: DartStyle(
      width: size,
      height: size,
      objectFit: 'contain',
    ),
  );
}

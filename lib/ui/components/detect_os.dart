import 'detect_os_stub.dart' if (dart.library.html) 'detect_os_web.dart'
    as impl;

String? detectOperatingSystem() => impl.detectOperatingSystem();

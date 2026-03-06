import 'package:flint_dart/auth.dart';
import 'package:flint_dart/exception.dart';
import 'package:flint_dart/flint_dart.dart';
import 'package:flint_docs/models/user_model.dart';

class AuthController {
  static const List<String> _allowedRoles = ['admin', 'contributor', 'dev'];
  static const String _defaultRole = 'dev';

  Future<Response> register(Request req, Response res) async {
    try {
      final body = await req.validate({
        'email': 'required|email',
        'name': 'required|string|min:3|max:30',
        'password': 'required|string|min:8',
      });

      final role = _resolveRole(body['role']);
      final hashPassword = Hashing().hash(body['password']);

      final user = await User().create({
        'email': body['email'],
        'name': body['name'],
        'password': hashPassword,
        'role': role,
      });

      if (user != null) {
        await req.startSession(user.toMap());
      }

      return res
          .json({'status': 'success', 'data': user?.toMap()}, status: 201);
    } on ValidationException catch (e) {
      return res.status(422).json({'status': 'errors', 'errors': e.errors});
    } catch (e) {
      return res.status(422).json({'status': 'error', 'message': e.toString()});
    }
  }

  Future<Response> login(Request req, Response res) async {
    try {
      final body = await req.validate({
        'email': 'required|string',
        'password': 'required|string',
      });

      final identifier = body['email'].toString().trim();
      String email = identifier;
      if (!identifier.contains('@')) {
        final user = await User().firstWhere('name', identifier);
        if (user == null || user.email == null) {
          return res.status(401).json(
              {'status': 'errors', 'errors': 'Invalid email or username'});
        }
        email = user.email!;
      }

      final result = await Auth.login(email, body['password']);
      if (result['user'] != null) {
        await req.startSession(Map<String, dynamic>.from(result['user']));
      }

      return res.json({'status': 'successful', 'data': result});
    } on ValidationException catch (e) {
      return res.status(422).json({'status': 'errors', 'errors': e.errors});
    } catch (e) {
      return res.status(422).json({'status': 'errors', 'errors': e.toString()});
    }
  }

  Future<Response> loginWithGoogle(Request req, Response res) async {
    try {
      final body = await req.json();

      await Validator.validate(body, {
        'idToken': 'string',
        'code': 'string',
        'callbackPath': 'string',
      });

      final authResult = await Auth.loginWithGoogle(
        idToken: body['idToken'],
        code: body['code'],
        callbackPath: body['callbackPath'],
      );

      return res.json({
        'status': 'success',
        'data': authResult,
      });
    } on ArgumentError catch (e) {
      return res.status(400).json({'status': 'error', 'message': e.message});
    } on ValidationException catch (e) {
      return res.status(400).json({'status': 'error', 'message': e.errors});
    } catch (e) {
      return res.status(401).json({'status': 'error', 'message': e.toString()});
    }
  }

  Future<Response> update(Request req, Response res) async {
    return res.send('Updating item ${req.params['id']}');
  }

  Future<Response> delete(Request req, Response res) async {
    return res.send('Deleting item ${req.params['id']}');
  }

  String _resolveRole(dynamic roleValue) {
    if (roleValue is String && _allowedRoles.contains(roleValue)) {
      return roleValue;
    }
    return _defaultRole;
  }
}

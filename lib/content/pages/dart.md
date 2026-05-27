Dart Lessons

# Learn Dart With Simplicity and Clarity

This page is designed to teach Dart in small, practical steps. Each lesson is short, direct, and focused on one concept.

            Learning rule for this page:

understand the concept first, then read the code.

            Code here is illustration, not the lesson itself.

            [Start](#lesson-start)
            [1](#lesson-1)
            [2](#lesson-2)
            [3](#lesson-3)
            [4](#lesson-4)
            [5](#lesson-5)
            [Null](#lesson-null-types)
            [6](#lesson-6)
            [Quiz](#lesson-quiz)

## Lesson Nav

                    [Before You Start](#lesson-start)
                    [Who Should Learn Dart?](#lesson-who)
                    [1. First Program](#lesson-1)
                    [2. Variables and Types](#lesson-2)
                    [3. Working With Data Types](#lesson-3)
                    [4. Operators](#lesson-4)
                    [5. If, Else, and Loops](#lesson-5)
                    [Null with Data Types](#lesson-null-types)
                    [6. Functions](#lesson-6)
                    [7. Lists and Maps](#lesson-7)
                    [8. Classes and Objects](#lesson-8)
                    [9. Null Safety](#lesson-9)
                    [10. Async and Await](#lesson-10)
                    [11. Practice Task](#lesson-11)
                    [12. Next Step](#lesson-12)
                    [Quiz](#lesson-quiz)
                    [Glossary](#lesson-glossary)

## Before You Start: How Programming Works

A program is just a list of instructions. Dart reads your instructions and runs them step by step.

- **Compilation:** Dart checks and prepares your code.

- **Runtime:** your program is actually executing.

- **Data:** values your program uses and changes.

- **Control flow:** decisions and repetition.

## Who Should Learn Dart?

Dart is great for:

- Beginners who want a clean modern language.

- Flutter developers building mobile/web/desktop apps.

- Backend developers using Dart services and APIs.

- Teams that prefer one language across app + server.

## 1. First Program

Your app needs one known starting point. In Dart, that starting point is `main()`. Without it, Dart does not know where execution begins.

Use code below only as a minimal illustration.

```dart
void main() {
  print('Hello, Dart!');
}
```

### Understand The Line

- `print`: built-in function that writes text to console.

- `( )`: function input area (argument list).

- `'Hello, Dart!'`: a string (text value).

- `;`: statement ends here.

### Understand The Entry Point

- `void`: this function returns no value.

- `main`: special name Dart looks for first.

- `()`: parameter list (empty in this example).

- `{ }`: the function body (code that runs).

Beginner checks:

- If you rename `main` to `mains`, Dart will not find the normal entry point.

- If you remove `()`, function syntax is invalid.

- If you remove `{}`, block-style function will not work.

## 2. Variables and Types

A variable is a named box that stores data.

Before code, understand the 4 basic data types:

- `String`: text like names, emails, titles.

- `int`: whole numbers like age, count, quantity.

- `double`: decimal numbers like price, score, rating.

- `bool`: only `true` or `false`.

Why variables are important: if one value appears in 10 to 50 places, changing every place manually is hard and risky. With one variable, you change it once and all usage updates automatically.

### Real-Life Illustration

Imagine a tax rate used in many screens and calculations. Hardcoding `0.15` everywhere means big effort later. Store it once in a variable, then reuse it everywhere.

```dart
double taxRate = 0.15; // used many times in the app

// Later you change business rule:
taxRate = 0.18; // one change, all calculations now use new value
```

Basic type illustration:

```dart
void main() {
  String name = 'Ada';
  int age = 22;
  double score = 95.5;
  bool isActive = true;

  print('$name is $age years old. score=$score active=$isActive');
}
```

### Can Variables Be Updated?

```dart
void main() {
  int count = 10;
  print(count); // 10

  count = 50;   // update value
  print(count); // 50
}
```

### Why Types Help Beginners

- You catch mistakes earlier.

- Your editor can suggest better autocomplete.

- Code becomes easier to explain and review.

### Try Wrong Type (See The Error)

If a variable is `int`, you cannot assign text to it. Dart will stop you at compile time.

```dart
void main() {
  int age = 22;
  age = 'twenty two'; // ❌ wrong type
}
```

You will see an error like:

```text
A value of type 'String' can't be assigned to a variable of type 'int'.
```

## 3. Working With Data Types

After you know types, the next step is using their built-in methods. Methods are helper actions you can call on values.

### String Methods (Text)

```dart
void main() {
  String name = '  ada lovelace  ';

  print(name.trim());                // 'ada lovelace'
  print(name.toUpperCase());         // '  ADA LOVELACE  '
  print(name.contains('love'));      // true
  print(name.replaceAll('a', '@'));  // '  @d@ lovel@ce  '
  print(name.trim().length);         // text length
}
```

### Number Methods (int / double)

```dart
void main() {
  double price = 19.789;
  int count = 7;

  print(price.toStringAsFixed(2)); // 19.79
  print(price.round());            // 20
  print((-10).abs());              // 10
  print(count.isEven);             // false
  print(count.isOdd);              // true
}
```

### Boolean: Only true or false

A boolean value can only be `true` or `false`.

```dart
void main() {
  bool isLoggedIn = true;
  bool isBlocked = false;

  print(isLoggedIn);   // true
  print(isBlocked);    // false
  print(!isLoggedIn);  // false  (! means "not")
}
```

Use booleans for yes/no decisions: access granted, loading done, email verified, etc.

## 4. Operators (Before If Statement)

Operators are symbols Dart uses to compare, calculate, or combine values. You need them before condition flow because `if` checks expressions built with operators.

### Arithmetic Operators

Dart can perform arithmetic and follows normal math order rules: BODMAS / PEDMAS (parentheses first, then multiply/divide, then add/subtract).

```dart
+   // add
-   // subtract
*   // multiply
/   // divide (result is double)
~/  // integer divide (no decimal)
%   // remainder (modulo)
```

```dart
void main() {
  print(10 + 3);  // 13
  print(10 - 3);  // 7
  print(10 * 3);  // 30
  print(10 / 3);  // 3.333...
  print(10 ~/ 3); // 3
  print(10 % 3);  // 1

  print(2 + 3 * 4);    // 14 (multiply first)
  print((2 + 3) * 4);  // 20 (parentheses first)
}
```

### Comparison Operators

```dart
a == b   // equal
a != b   // not equal
a > b    // greater than
a = b   // greater or equal
a = 18 && hasId;
  print(canEnter); // true
}
```

## 5. If, Else, and Loops

**What is an if statement?** It is how your program makes decisions. If a condition is true, run one block. Otherwise run another block.

**Why use it?** Real apps are not one fixed path. User role, score, payment status, and login state all change behavior.

**When to use it?** Anytime your logic has choices.

### Comparison Operators (Conditions)

```dart
a > b   // greater than
a = b  // greater than or equal
a = 60) {
    print('Pass');
  } else {
    print('Fail');
  }
}
```

### else if (Many choices)

```dart
void main() {
  int score = 85;

  if (score >= 90) {
    print('Grade A');
  } else if (score >= 80) {
    print('Grade B');
  } else if (score >= 70) {
    print('Grade C');
  } else {
    print('Need improvement');
  }
}
```

### Nested if (if inside if)

```dart
void main() {
  int age = 20;
  bool hasId = true;

  if (age >= 18) {
    if (hasId) {
      print('Enter');
    } else {
      print('Need ID');
    }
  } else {
    print('Too young');
  }
}
```

Use nested if only when logic is truly inside another condition. If it gets deep, move logic into functions.

### Using && and ||

```dart
void main() {
  int age = 20;
  bool hasTicket = true;
  bool isVip = false;

  if (age >= 18 && hasTicket) {
    print('Allowed');
  }

  if (isVip || hasTicket) {
    print('Can enter special gate');
  }
}
```

### switch case

Use `switch` when one value can match many known options. It keeps code cleaner than long `else if` chains.

```dart
void main() {
  String role = 'admin';

  switch (role) {
    case 'admin':
      print('Full access');
      break;
    case 'editor':
      print('Edit access');
      break;
    case 'viewer':
      print('Read only');
      break;
    default:
      print('Unknown role');
  }
}
```

### Loops (When To Use Each Type)

Use loops when you need repetition. The best loop depends on your goal.

### 1) for loop

Use `for` when you know how many times to repeat. Great for counters, index-based loops, fixed rounds.

```dart
void main() {
  for (int i = 1; i )

Use arrow syntax for one-line functions.

```dart
int square(int x) => x * x;
String greet(String name) => 'Hello $name';
```

### When NOT To Use Arrow Functions

Do not force `=>` for every function. Use block style `{ }` when logic is longer, has multiple steps, conditions, loops, or needs easier debugging.

```dart
// Good arrow usage (simple one expression)
bool isAdult(int age) => age >= 18;

// Better as block (multiple decisions)
String grade(int score) {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  return 'C';
}
```

Rule: if it is not instantly readable in one expression, use normal block style.

### Parameter vs Argument

**Parameter** is the variable in function definition. **Argument** is the real value passed when calling.

```dart
void welcome(String name) { // name = parameter
  print('Welcome $name');
}

void main() {
  welcome('Ada'); // 'Ada' = argument
}
```

### Named Parameters { }

Named parameters improve readability and reduce argument order mistakes.

```dart
void createUser({required String name, int age = 18}) {
  print('name=$name age=$age');
}

void main() {
  createUser(name: 'Ada');
  createUser(name: 'Linus', age: 25);
}
```

### Optional Positional Parameters [ ]

Use `[ ]` when order is okay and some arguments can be omitted.

```dart
void logMessage(String message, [String level = 'INFO']) {
  print('[$level] $message');
}

void main() {
  logMessage('App started');            // uses default level
  logMessage('Disk almost full', 'WARN');
}
```

### Quick Rule

- Use `void` for action-only functions.

- Use return types when you need computed values.

- Use named parameters for clarity in larger APIs.

- Use optional positional `[ ]` for short simple options.

Basic illustration:

```dart
int add(int a, int b) {
  return a + b;
}

void main() {
  final total = add(4, 6);
  print(total); // 10
}
```

Name functions by intent: `calculateTotal`, `fetchUsers`, `isValidEmail`.

Think: function = mini machine. You give input, it gives output.

## 7. Lists and Maps

Use `List` when data is ordered and you access by index (position). Use `Map` when data is key-value and you access by key name.

Why this matters: most real apps manage collections (users, products, messages, settings). Picking the right structure makes code easier and safer.

### List: Full Explanation

A `List` is an ordered collection. Index starts at `0`. Good for things like cart items, leaderboard rows, notifications.

10+ common List methods/properties:

```dart
void main() {
  final nums = [3, 1, 2];

  nums.add(4);                 // 1) add
  nums.addAll([5, 6]);         // 2) addAll
  nums.insert(0, 99);          // 3) insert
  nums.remove(1);              // 4) remove(value)
  nums.removeAt(0);            // 5) removeAt(index)
  print(nums.contains(3));     // 6) contains
  print(nums.indexOf(4));      // 7) indexOf
  nums.sort();                 // 8) sort
  final filtered = nums.where((n) => n > 3).toList(); // 9) where
  final doubled = nums.map((n) => n * 2).toList();    // 10) map
  print(nums.first);           // 11) first
  print(nums.last);            // 12) last
  print(nums.length);          // 13) length

  // Optional:
  // nums.clear();             // clear all items

  print(nums);
  print(filtered);
  print(doubled);
}
```

### Map: Full Explanation

A `Map` stores key-value pairs. Keys should be unique. Good for objects/settings/profile data.

10+ common Map methods/properties:

```dart
void main() {
  final user = {'name': 'Ada', 'role': 'dev'};

  user['age'] = 22;                           // 1) set by key
  user.putIfAbsent('city', () => 'Lagos');   // 2) putIfAbsent
  user.update('role', (v) => 'admin');        // 3) update
  user.addAll({'active': true});              // 4) addAll
  print(user.containsKey('name'));            // 5) containsKey
  print(user.containsValue('admin'));         // 6) containsValue
  print(user.keys);                           // 7) keys
  print(user.values);                         // 8) values
  print(user.entries);                        // 9) entries
  user.forEach((k, v) => print('$k => $v')); // 10) forEach
  final upperKeys = user.map((k, v) =>        // 11) map
      MapEntry(k.toUpperCase(), v));
  user.remove('city');                        // 12) remove
  print(user.length);                         // 13) length

  // Optional:
  // user.clear();                            // clear all pairs

  print(upperKeys);
}
```

### Quick Rule

- Need order and index? Use `List`.

- Need named fields by key? Use `Map`.

- Transform collections often with `where` and `map`.

## 8. Classes and Objects

A class defines a model. An object is a real instance of that model. This is how you represent real concepts like _User_, _Order_, or _Invoice_.

Why this matters: object-oriented design keeps data and behavior together.

Illustration:

```dart
class User {
  final String name;
  final int age;

  User(this.name, this.age);

  String intro() => 'I am $name and I am $age.';
}

void main() {
  final user = User('Ada', 22);
  print(user.intro());
}
```

## 9. Null Safety

Null safety means Dart forces you to be explicit about values that might be missing.

Why this matters: many production bugs are null-related. Null safety catches them early.

Illustration:

```dart
void main() {
  String? nickname;
  print(nickname ?? 'No nickname');

  String name = 'Ada';
  print(name.length);
}
```

`String?` means the value can be null. Use `??` for safe fallback values.

## 10. Async and Await

Some operations are slow (API calls, files, databases). Async programming lets your app wait without freezing everything.

Why this matters: modern apps are network-heavy and must stay responsive.

Illustration:

```dart
Future fetchUser() async {
  await Future.delayed(const Duration(seconds: 1));
  return 'Ada';
}

Future main() async {
  final user = await fetchUser();
  print(user);
}
```

`await` pauses only this async function, not the whole app.

## 11. Practice Task

Learning becomes real when you build. This small task combines the core concepts in one flow.

Build a tiny score app:

- Create a `Player` class with `name` and `score`.

- Store players in a `List`.

- Write a function to print top scorer.

- Add async function that simulates loading players.

## 12. Next Step

After these lessons, move to backend work with Flint: [Flint Guides](/guides) and [FlintClient Guide](/client).

## Lesson 1 Quiz (Self Check)

Try answering first. Then open each answer.

                    1) What is the entry point of a Dart app?

The entry point is `main()`. Dart starts execution there.

                    2) What does `void` mean in `void main()`?

`void` means the function returns no value.

                    3) Why do we use variables?

Variables store values so the program can reuse and update data.

                    4) Why use `if/else`?

Use `if/else` to make decisions based on conditions.

                    5) Why use loops?

Loops repeat actions without writing the same code many times.

## Mini Glossary (Very Simple)

- **Function:** named block of work.

- **Variable:** named box for data.

- **Type:** kind of data (`String`, `int`...).

- **Compile:** prepare/check code before running.

- **Runtime:** code is currently executing.

- **Entry point:** first function Dart runs (`main`).

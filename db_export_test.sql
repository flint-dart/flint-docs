-- MySQL dump 10.13  Distrib 8.0.45, for Linux (x86_64)
--
-- Host: localhost    Database: flint_docs
-- ------------------------------------------------------
-- Server version	8.0.45-0ubuntu0.24.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `answers`
--

DROP TABLE IF EXISTS `answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `answers` (
  `id` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `question_id` varchar(255) NOT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `author` varchar(255) NOT NULL,
  `published_at` timestamp NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answers`
--

LOCK TABLES `answers` WRITE;
/*!40000 ALTER TABLE `answers` DISABLE KEYS */;
INSERT INTO `answers` VALUES ('27fb49fd-03d3-4b55-8d00-b1503998db12','this is nice\r\n','9a776b47-4c0d-4df0-8f14-8d65e1270cf7','420483f9-0683-4a2e-820f-e22b75ba9b70','Ademola Ibukun','2026-02-09 07:48:38','2026-02-09 09:48:38','2026-02-09 09:48:39'),('64f7868b-ffed-4f18-ae65-91aca79bf4fe','👉 **Keep RouteGroups flat. Don’t nest them.**\n\n---\n\n### Best way to structure `RouteGroup`s (Recommended)\n\nFor **large Flint Dart apps**, the best practice is to keep RouteGroups **flat, modular, and feature-based**, not nested.\n\nEach RouteGroup should represent **one clear domain or feature** (auth, users, admin, billing, etc.).\n\n```dart\nclass AuthRoutes extends RouteGroup {\n  @override\n  String get prefix => \'/auth\';\n\n  @override\n  void register(Flint app) {\n    app.post(\'/login\', AuthController().login);\n    app.post(\'/register\', AuthController().register);\n  }\n}\n```\n\nRegister it once at the app level:\n\n```dart\napp.register(AuthRoutes());\n```\n\n---\n\n### ❌ Why nesting RouteGroups is discouraged\n\nNesting RouteGroups:\n\n* Makes routing harder to reason about\n* Causes middleware inheritance confusion\n* Hurts readability and debugging\n* Scales poorly as the app grows\n\nIf you feel the need to nest RouteGroups, it usually means:\n\n> You should create **another RouteGroup**, not a nested one.\n\n---\n\n### ✅ Use prefixes instead of nesting\n\nUse the `prefix` getter to define structure:\n\n```dart\nclass AdminRoutes extends RouteGroup {\n  @override\n  String get prefix => \'/admin\';\n\n  @override\n  List<Middleware> get middlewares => [AdminMiddleware()];\n}\n```\n\nThis keeps:\n\n* Routing flat\n* Middleware explicit\n* Structure clear\n\n---\n\n### When to use `app.mount` instead\n\n`app.mount()` is **not a replacement for RouteGroups**.\n\nUse it only for:\n\n* Pluggable modules\n* Optional features\n* External packages (DB manager, mail, admin panels)\n\n**Core application routes should always use RouteGroups.**\n\n---\n\n### Final recommendation (Community Answer)\n\n✔ Keep RouteGroups **flat**\n✔ One RouteGroup per feature/domain\n✔ Use `prefix` for structure, not nesting\n✔ Apply middleware at the group level\n✔ Use `app.mount()` only for modular extensions\n\n> **Flat RouteGroups scale. Nested RouteGroups don’t.**\n\nThis is the recommended and idiomatic approach in Flint Dart.','1995ef21-2a24-4b29-b876-a7616e56191e','420483f9-0683-4a2e-820f-e22b75ba9b70','Ademola Ibukun','2026-02-09 09:00:03','2026-02-09 11:00:03','2026-02-09 11:00:04'),('92ccfc37-3b66-48d7-a26c-4f21ed7a812d','Good What is fined','902ded12-8bed-4124-a2b4-4d27ac612447','420483f9-0683-4a2e-820f-e22b75ba9b70','Ademola Ibukun','2026-02-09 07:32:37','2026-02-09 09:32:37','2026-02-11 21:05:41'),('ed41c6da-9bfe-406a-bf37-de87944dfb0f','### Protecting a Single Route with Middleware\n\nIf you want to protect **only one endpoint** (not globally), there are **two recommended approaches**, depending on how your route is defined.\n\n---\n\n## 1️⃣ Using a Controller (Controller-level middleware)\n\nIf your route points to a controller method, attach the middleware **directly to that method**.\n\n```dart\nrouter.get(\n  \'/profile\',\n  AuthMiddleware.handle(UserController.index),\n);\n```\n\n### ✅ When to use this\n\n* Your logic lives in a controller\n* You want explicit protection on specific controller actions\n* Clear and readable in larger applications\n\nThis approach keeps the middleware close to the controller action and avoids affecting other routes.\n\n---\n\n## 2️⃣ Using the Route Builder (Inline middleware)\n\nIf your route logic is written inline (without a controller), use `.useMiddleware()` on the route builder.\n\n```dart\nrouter\n  .get(\'/profile\', (req, res) {\n    return res.json({\'message\': \'Protected route\'});\n  })\n  .useMiddleware(AuthMiddleware());\n```\n\n### ✅ When to use this\n\n* Simple or inline route handlers\n* Quick protection without creating a controller\n* Fine-grained control per route\n\n---\n\n## ✅ Recommended Practice\n\n* **Controllers →** wrap the controller method with `AuthMiddleware.handle(...)`\n* **Inline routes →** use `.useMiddleware()` on the route\n\nThis keeps your middleware **scoped, explicit, and predictable**, without introducing unnecessary global behavior.','9a776b47-4c0d-4df0-8f14-8d65e1270cf7','420483f9-0683-4a2e-820f-e22b75ba9b70','Ademola Ibukun','2026-02-09 08:18:09','2026-02-09 10:18:09','2026-02-09 10:18:10'),('f62239ec-7d2b-44de-8192-900a526ec841','This the best of wah tou are sssxs\n``` dart\n\nmain(){\n\n\n}\n```','3d50616a-b517-4c0f-b71a-a2c7360261d7','420483f9-0683-4a2e-820f-e22b75ba9b70','Ademola Ibukun','2026-02-11 17:52:05','2026-02-11 19:52:05','2026-02-11 20:44:25');
/*!40000 ALTER TABLE `answers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog_posts`
--

DROP TABLE IF EXISTS `blog_posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog_posts` (
  `id` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `excerpt` text NOT NULL,
  `body` text NOT NULL,
  `author` varchar(255) NOT NULL,
  `tag` varchar(100) NOT NULL,
  `published_at` timestamp NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_posts`
--

LOCK TABLES `blog_posts` WRITE;
/*!40000 ALTER TABLE `blog_posts` DISABLE KEYS */;
INSERT INTO `blog_posts` VALUES ('20763fc2-e8d9-4553-9738-adfb8cb4fb65','Building a Q&A Workflow with Flint','qa-workflow','Design question, answer, and comment flows with clean routing patterns.','A Q&A workflow benefits from clear route design and consistent validation. Use dedicated endpoints for questions and answers, and attach role guards to protect write access. Pair that with QueryBuilder filters and you have a fast, maintainable API.\n\nThis guide walks through building the main flows and structuring controllers to keep responsibilities clean.','Docs Team','Guide','2026-02-27 22:00:00','2026-02-08 20:13:00','2026-02-08 20:13:00'),('2982ba20-ed9f-4885-b26d-caecd0df09ac','We love FlintDart','weloveflintdart','sdsdsdsdaffb jkfasdgf wegbsdf agbof asdgbobjk ljkb hsdfb hjsdfbhsbjkl adsf ','sdsdsdsdaffb jkfasdgf wegbsdf agbof asdgbobjk ljkb hsdfb hjsdfbhsbjkl adsf ','Ademola Ibukun','aas','2026-02-11 19:43:09','2026-02-11 21:43:09','2026-02-11 21:43:09'),('b1eab4dc-c27a-4236-8960-01458e2f9763','Introducing Role-Based Publishing in Flint','role-based-publishing','Learn how to protect authoring routes with role guards and policy checks.','Role-based publishing lets you define who can create or publish content. In Flint, you can implement this by attaching a middleware that checks the authenticated user role against an allowlist. This pattern keeps your authoring routes safe while keeping read access public.\n\nStart by adding a role column on users, then create a RoleGuard middleware that rejects requests without the required role. Apply it to post creation routes and you have a simple, effective permissions system.','Flint Core Team','Release','2026-03-11 22:00:00','2026-02-08 20:13:00','2026-02-08 20:13:00'),('cbcae394-d6c9-4643-9f15-756f668fd46b','Production-Ready Auth with JWT and Sessions','auth-jwt-sessions','Combine JWT and session workflows for secure deployments.','JWTs are great for stateless APIs, while sessions are convenient for server rendered workflows. You can use both depending on the endpoint. Flint supports JWT auth via Auth helpers and session management via SessionManager.\n\nThis guide explains how to choose the right approach for each use case.','Security','Security','2026-01-21 22:00:00','2026-02-08 20:13:00','2026-02-08 20:13:00'),('fc02279c-eded-42b7-93e0-b2b546a63611','Scaling APIs with QueryBuilder','query-builder-scaling','Pagination, filtering, and eager loading patterns that scale.','QueryBuilder provides a fluent API for common database tasks. To scale, combine pagination, filters, and eager loading where possible. Be careful to keep your WHERE clauses selective and use proper indexes.\n\nThis article covers practical patterns for building fast endpoints.','Flint Core Team','Deep Dive','2026-02-09 22:00:00','2026-02-08 20:13:00','2026-02-08 20:13:00');
/*!40000 ALTER TABLE `blog_posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `post_id` varchar(255) NOT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `author` varchar(255) NOT NULL,
  `published_at` timestamp NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES ('002a8097-6022-4fb6-982f-7ef3427b260a','hellkjsd','b1eab4dc-c27a-4236-8960-01458e2f9763','420483f9-0683-4a2e-820f-e22b75ba9b70','Ademola Ibukun','2026-02-11 18:57:06','2026-02-11 20:57:06','2026-02-11 20:57:06'),('15d64205-325e-48ed-8f6d-6537ee566825','Wow','b1eab4dc-c27a-4236-8960-01458e2f9763','420483f9-0683-4a2e-820f-e22b75ba9b70','Ademola Ibukun','2026-02-09 10:09:36','2026-02-09 12:09:36','2026-02-11 20:57:22'),('50443037-5c49-45aa-936c-1b15beaf09e6','hy i love','fc02279c-eded-42b7-93e0-b2b546a63611','420483f9-0683-4a2e-820f-e22b75ba9b70','Ademola Ibukun','2026-02-09 07:36:38','2026-02-09 09:36:38','2026-02-09 09:36:39'),('70eb4c5f-48a7-49a6-9199-0a72c8d15f02','sdsd','2982ba20-ed9f-4885-b26d-caecd0df09ac','420483f9-0683-4a2e-820f-e22b75ba9b70','Ademola Ibukun','2026-02-11 19:43:14','2026-02-11 21:43:14','2026-02-11 21:43:14');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questions` (
  `id` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `author` varchar(255) NOT NULL,
  `tag` varchar(100) NOT NULL,
  `published_at` timestamp NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES ('1995ef21-2a24-4b29-b876-a7616e56191e','What is the best way to structure RouteGroups?','route-groups-structure','Should I nest RouteGroups or keep them flat for large apps?','Community','Architecture','2026-02-19 22:00:00','2026-02-08 20:23:33','2026-02-08 20:23:33'),('3d50616a-b517-4c0f-b71a-a2c7360261d7','Context or Lagacy Hander','contextorlagacyhander','What is difrent between Context and lagacy Hander which one should i use for production app','Ademola Ibukun','Routing','2026-02-11 17:47:27','2026-02-11 19:47:27','2026-02-11 19:47:27'),('66d037ef-66ed-4a39-bd14-a5bfe1e53daa','How can I paginate QueryBuilder results?','querybuilder-pagination','Looking for a clean pattern to return pagination metadata and rows.','Docs Team','Database','2026-02-01 22:00:00','2026-02-08 20:23:33','2026-02-08 20:23:33'),('71aaf241-3249-4813-a9c3-cc673a156d17','I getting this','igettingthis','bhbbbbbnbbnbnbbfsncvbnxnjsdjsdjdsjsdj','Ademola Ibukun','ghsdhj','2026-02-09 07:59:41','2026-02-09 09:59:41','2026-02-09 09:59:41'),('902ded12-8bed-4124-a2b4-4d27ac612447','I love eulogia tech','iloveeulogiatech','we are creatin amazint things','Ademola Ibukun','Auth','2026-02-08 19:00:30','2026-02-08 21:00:30','2026-02-08 21:00:31'),('9a776b47-4c0d-4df0-8f14-8d65e1270cf7','How do I add middleware to a single route?','route-middleware','I want to protect one endpoint without adding a global middleware. What is the recommended approach?','Dev Advocate','Routing','2026-03-07 22:00:00','2026-02-08 20:23:33','2026-02-08 20:23:33'),('cdd5d2cd-532f-4941-b0c3-ad1aa837a00c','I love flint dart','iloveflintdart','hjsdhjshjsfddfcsdkbjdffdkjksdfjkjknfsdjkjkdfsbjkbjkdfbjk','Ademola Ibukun','Tehhd','2026-02-08 18:51:37','2026-02-08 20:51:37','2026-02-08 20:51:37');
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `profilePicUrl` varchar(255) DEFAULT NULL,
  `role` varchar(50) NOT NULL,
  `provider` varchar(100) DEFAULT NULL,
  `provider_id` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('420483f9-0683-4a2e-820f-e22b75ba9b70','Ademola Ibukun','hybiekay2@gmail.com','$2a$10$jq.j9au3awc9H6cqNM/rVOyCHtV6c5rtn1S.tdA026SZ9rzP44Xxu',NULL,'dev',NULL,NULL,'2026-02-08 20:50:55','2026-02-08 20:50:56');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-02-12 10:57:19

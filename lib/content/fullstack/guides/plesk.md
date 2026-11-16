# Plesk Deployment Guide

The **Flint Dart Toolkit for Plesk** brings first-class, production-grade hosting for full-stack **Flint Dart** and Google Dart web applications to **Plesk Obsidian**.

Run blazing-fast, compiled Dart web applications alongside your existing PHP, Node.js, and Python websites on the same server, with automated systemd process isolation, AOT binary compilation, Nginx reverse proxy routing, and seamless Plesk Git auto-deployment.

---

## Architecture Overview

When a Flint Dart application runs on Plesk, it operates as a native, isolated Linux daemon behind Plesk's Nginx web server:

```
┌─────────────────────────────────────────────────────────────┐
│                       Incoming HTTPS Request                │
│                                │                            │
│                                ▼                            │
│               Plesk Nginx Web Server (Port 80/443)          │
│               - SSL / TLS Termination (Let's Encrypt)       │
│               - Static File Caching & Brotli/Gzip           │
│               - HTTP/2 & HTTP/3 Support                     │
│                                │                            │
│           Automatic Reverse Proxy (localhost:<port>)        │
│                                │                            │
│                                ▼                            │
│     Systemd Isolated Service (flint-app@<domain>.service)   │
│     - Runs as unprivileged user: <domain_user>:psacln       │
│     - Native AOT Compiled Binary (flint build)              │
│     - Sub-millisecond response times                        │
│     - Automatic crash recovery & process monitoring         │
└─────────────────────────────────────────────────────────────┘
```

---

## 1. Prerequisites & System Requirements

- **Control Panel**: Plesk Obsidian 18.0.50 or higher.
- **Operating System**: Linux 64-bit (AlmaLinux 8/9, Rocky Linux 8/9, RHEL 8/9, Debian 11/12, or Ubuntu 20.04/22.04/24.04).
- **Web Server**: Nginx enabled as a reverse proxy (standard in Plesk Obsidian).
- **Permissions**: Administrator / Root access to install the extension.

---

## 2. Installing the Extension

### Via Plesk Web Interface
1. Log in to your Plesk control panel as administrator.
2. Go to **Extensions > My Extensions > Upload Extension**.
3. Upload the `flintdart-1.0.0.zip` package.
4. Plesk will automatically verify permissions, register the extension, and add the **Flint Dart Toolkit** navigation link.

### Via Plesk Command Line (SSH)
```bash
plesk bin extension --install /path/to/flintdart-1.0.0.zip
```

---

## 3. Managing Dart SDKs

The extension provides a centralized, multi-version Dart SDK manager located in `/opt/plesk/dart/`. Different domains on your server can use different Dart SDK versions simultaneously.

### Installing a Dart SDK Version

**From the Plesk UI:**
1. Navigate to **Extensions > Flint Dart Toolkit**.
2. Under **Installed Dart SDKs**, enter the desired version (e.g., `3.11.0` or `latest`).
3. Click **Install SDK**. The extension downloads the official Google Dart SDK archive, extracts it to `/opt/plesk/dart/<version>`, and validates the compiler binary.

**From the Server CLI:**
```bash
# Install a specific version
plesk ext flintdart --install-sdk 3.11.0

# Install the latest stable release
plesk ext flintdart --install-sdk latest
```

---

## 4. Enabling Flint Dart on a Domain

To deploy a Flint Dart application on any hosted domain:

1. Navigate to **Websites & Domains > [Your Domain]**.
2. Click the **Flint Dart** icon.
3. Configure your application settings:
   - **Application Root**: The directory containing your `pubspec.yaml` (default: `/httpdocs`).
   - **Startup File / Binary**: Path to your compiled executable (e.g. `build/server`) or entry script (`lib/main.dart`).
   - **Assigned Internal Port**: An isolated port (e.g. `3157`) allocated automatically to avoid collisions.
   - **Execution Mode**:
     - **Compiled Native Binary (AOT)** *(Recommended)*: Uses `flint build` to create an optimized machine-code Linux binary. Provides the lowest memory footprint and fastest response times.
     - **Dart JIT (`dart run`)**: Runs directly from source using the Dart VM. Ideal for active staging and debugging.
4. Click **Enable Flint App**.

The extension immediately creates the systemd service, configures the Nginx reverse proxy, and boots your application.

---

## 5. Deploying a Starter Sample App

If you are setting up a fresh domain and want to verify the environment:
1. In the domain's Flint Dart dashboard, click **Deploy Sample App**.
2. The extension scaffolds a complete, working Flint Dart starter project including:
   - `lib/main.dart` with routing and Swagger documentation.
   - `pubspec.yaml` configured for your installed Dart SDK.
   - `.env` template with production port and environment values.
3. Click **Build Flint App (flint build)** and then **Start App**.
4. Click **Open Live Site ↗** to view your running application.

---

## 6. Plesk Git Auto-Deployment

The extension seamlessly hooks into the official **Plesk Git** extension for zero-downtime continuous deployment.

### Setting Up Git Push-to-Deploy

1. In Plesk, open **Git** under your domain and connect your GitHub, GitLab, or Bitbucket repository.
2. In the domain's Flint Dart dashboard, click **Git & Webhooks**.
3. Copy the pre-generated deployment script:

```bash
#!/bin/bash
set -e
export PATH="/opt/plesk/dart/3.11.0/bin:$PATH"

# 1. Fetch dependencies
dart pub get --no-precompile

# 2. Compile native AOT binary
if [ -f "bin/flint.dart" ]; then
  dart run bin/flint.dart build
elif command -v flint >/dev/null 2>&1; then
  flint build
else
  dart compile exe lib/main.dart -o build/server
fi

# 3. Reload application daemon
echo "Restarting Flint Dart systemd service..."
```

4. Paste this script into **Plesk Git > Additional Deployment Actions**.
5. Copy your domain's **Webhook URL** and add it to your GitHub/GitLab repository settings. Every `git push` will now automatically pull your code, fetch packages, build the binary, and reload your application.

---

## 7. Interactive Flint CLI in the Browser

The **⚡ Flint CLI** tab lets you run framework tools without SSH:

- **Quick Migration (`flint migrate`)**: Runs database migrations against your production database schema.
- **Inspect Routes (`flint routes`)**: Lists all registered HTTP endpoints, middleware chains, and methods.
- **Custom Commands**: Run seeders, framework diagnostics, or custom CLI scripts in real time.

---

## 8. Managing Environment Variables (`.env`)

Production applications require secure database credentials, JWT secrets, and API keys:

1. Click the **🔐 Environment (.env)** tab in your domain's dashboard.
2. Edit your key-value pairs directly in the full-height editor:
   ```env
   APP_ENV=production
   APP_DEBUG=false
   APP_PORT=3157
   DB_CONNECTION=pgsql
   DB_HOST=127.0.0.1
   DB_PORT=5432
   DB_DATABASE=my_production_db
   DB_USERNAME=my_user
   DB_PASSWORD=secret_password
   JWT_SECRET=super_secure_random_key
   ```
3. Click **Save .env**. The application automatically reloads with the updated environment variables.

---

## 9. Background Jobs Worker (`flint jobs-work`)

If your application uses asynchronous queue jobs (e.g. transactional emails, notifications, data exports):

1. Go to the **⚙️ App Config** tab.
2. Find the **Background Jobs Worker (`flint jobs-work`)** section.
3. Click **Enable Jobs Worker**.
4. The extension starts a separate, dedicated systemd worker daemon (`flint-worker@<domain>.service`) that continuously processes queued jobs in the background.

---

## 10. Live Logs & Diagnostics

The **📋 Server Logs** tab gives you instant visibility into your application's health:

- **Runtime Daemon Logs**: Real-time output from `journalctl -u flint-app@<domain>.service`, showing request traces, controller exceptions, and runtime events.
- **Build Logs**: Compilation output from `flint build` and `dart pub get`.
- **Worker Logs**: Activity from the background jobs queue worker.
- **Clear & Refresh**: One-click actions to truncate logs or stream recent lines.

---

## 11. Plesk Server CLI Cheatsheet

Server administrators can manage all Flint Dart applications directly from the server terminal:

```bash
# Display live status of all Dart applications on the server
plesk ext flintdart --status

# List all hosted domains running Flint Dart
plesk ext flintdart --list

# Start, stop, or restart an application
plesk ext flintdart --restart example.com
plesk ext flintdart --start example.com
plesk ext flintdart --stop example.com

# Deploy, fetch dependencies, and recompile
plesk ext flintdart --deploy example.com

# Show installed Flint framework version and tools
plesk ext flintdart --framework-info

# Update bundled Flint framework
plesk ext flintdart --update-framework

# Install a new Dart SDK version
plesk ext flintdart --install-sdk 3.11.0
```

---

## 12. Security & System Isolation Standards

- **Zero Root Privilege**: Applications run under the domain's dedicated system user (`<domain_user>:psacln`), isolated from the server root.
- **Systemd Sandboxing**: Services feature strict restart limits (`StartLimitIntervalSec=60`, `StartLimitBurst=5`), automatic respawn policies (`Restart=always`), and unprivileged process trees.
- **Secure Nginx Proxies**: Nginx listens on standard ports (80/443) with HTTP/2 and SSL certificates managed by Plesk (e.g. Let's Encrypt), forwarding traffic locally to the application port.
- **Safe Administrative Delegation**: All system changes execute through `src/sbin/flint-ctl.sh` using Plesk's sanctioned `pm_ApiCli` wrapper, strictly validating domain names, paths, and arguments.

---

## 13. Troubleshooting & FAQs

### Port Conflict or "Address already in use"
If an application fails to start due to a port conflict, go to **⚙️ App Config**, assign a new port (e.g. `3158`), and click **Save Configuration**. The extension will automatically update the systemd service and reconfigure the Nginx reverse proxy.

### 502 Bad Gateway
A 502 error from Nginx indicates that the internal Dart process is not responding on its assigned port:
1. Open the **📋 Server Logs** tab.
2. Check the **Runtime Daemon Logs** for startup crashes, missing environment variables, or database connection failures.
3. Verify that your `pubspec.yaml` dependencies are installed by clicking **Run dart pub get**.

### Permission Denied on Application Root
Ensure that all project files are owned by the domain's system user:
```bash
chown -R <domain_user>:psacln /var/www/vhosts/<domain>/httpdocs
```

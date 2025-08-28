# minimal-rgb-slider
Fullstack Application to save and see RGB values.

## Version information:
| Tool | Version | Download Link |
| - | - | - |
| PHP | 8.4.12 | [Direct link](https://downloads.php.net/~windows/releases/php-8.4.12-Win32-vs17-x64.zip) |
| Next.js | 15.5.0 | [Documentation link](https://nextjs.org/blog/next-15-5) |
| MySQL | 8.0.43.0 | [Direct link](https://dev.mysql.com/get/Downloads/MySQLInstaller/mysql-installer-community-8.0.43.0.msi) |
| Cursor | 1.5.5 | [Download page](https://cursor.com/en/downloads) |
| VSCode | 1.99.3 | [Download page](https://code.visualstudio.com/download) |

## Run *react* frontend:
```bash
cd ./src/frontend
npm run dev
```

or alternatively press **STRG + Ö** (*open terminal*), and press **Run Task**, to select **NPM Dev Server (frontend)**.

## Run *php* backend:
```bash
cd ./src/backend
php -S 127.0.0.1:8000
```

or alternatively press **STRG + Ö** (*open terminal*), and press **Run Task**, to select **PHP Dev Server (backend)**.

## Setup *mysql* database:
- Using MySQLWorkbench
    - Press on Local instance MySQL80
    - Log In
    - Copy and run the **create_minimal_rgb_slider.sql** script inside the UI
    - (*Optionally*) Copy and run the **add_values.sql** script inside the UI

## How to the access website
Go into your browser and head to http://localhost:3000/.

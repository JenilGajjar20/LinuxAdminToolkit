# Application Configuration Files

## /etc/nginx/nginx.conf

- This file configures the Nginx web server.

Example:

```nginx
http {
    server {
        listen 80;
        server_name mysite.com;
        location / {
            root /var/www/html;
            index index.html;
        }
    }
}
```

## /etc/mysql/my.cnf

- This file configures the MySQL.

Example:

```ini
[mysqld]
bind-address = 127.0.0.1
max_connections = 100
```

## Dotfiles (.bashrc, .vimrc)

- These are user-specific configuration files located in the home directory.

Example (`~/.bashrc`):

```bash
export PATH=$PATH:/custom/path
alias ll='ls -la'
```

Example (`~/.vimrc`):

```vim
set number
syntax on
```

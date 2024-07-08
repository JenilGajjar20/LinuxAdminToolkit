## Service Configuration Files

### systemd Service Units

- This files are used to manage services.
- They are located in `/etc/systemd/system/`.

Example (`/etc/systemd/system/my-service.service`):
```ini
[Unit]
Description=My Custom Service

[Service]
ExecStart=/usr/bin/my-service

[Install]
WantedBy=multi-user.target
```

### /etc/crontab

- The `/etc/crontab` file is used to schedule periodic tasks using cron.

Example:
```
# m h dom mon dow user command
0 5 * * * root /path/to/script.sh
```

### /etc/ssh/sshd_config

- This file configures the SSH daemon.

Example:
```
Port 22
PermitRootLogin no
PasswordAuthentication yes
```


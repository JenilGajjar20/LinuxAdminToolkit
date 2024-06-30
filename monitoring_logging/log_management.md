## Log Management

### System Log Files

- System log files are stored in the `/var/log` directory.
- Common log files include:

  - General system logs: `/var/log/syslog`
  - Authentication logs: `/var/log/auth.log`
  - Kernel logs: `/var/log.kern.log`
  - Boot and kernel-related message: `/var/log/dmesg`

### Viewing Log Files

#### cat

- It displays the entire contents of the log file.

```bash
cat /var/log/syslog
```

#### less

- It is used to view file contents with pagination.
- It allows scrolling through a log file.

```bash
less /var/log/syslog
```

#### tail

- It is used to view the end of the log file.
- It displays the last few lines of a log file.
- `-f` is used to follow the file as it grows.

```bash
tail /var/log/syslog
tail -f /var/log/syslog
```

### Rotating Log Files

#### logrotate

- It is used to manage the log rotation.
- It is a utility designed to manage the automatic rotation and compression of log files.
- The configuration files are located in `/etc/logrotate.d/`

- Example configuration:

```bash
/var/log/syslog {
  daily
  rotate 7
  compress
  missingok
  notifempty
  create 0640 root utmp
  postrotate
    /usr/lib/rsyslog/rsyslog-rotate
  endscript
}
```

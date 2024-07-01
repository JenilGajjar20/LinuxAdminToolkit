## Log Analysis Tools

### journalctl

- It displays systemd journal logs.
- `-u` is used to filter by unit and `-f` is used to follow the log.

```bash
journalctl
journalctl -u ssh
journalctl -f
```

### goaccess

- It is used to analyze web server logs in real-time.

```bash
sudo apt-get install goaccess
goaccess /var/log/nginx/access.log
```

## Process Management

### ps (report a snapshot of current processes)

- displays information about the active processes

```bash
ps aux
ps -ef
```

### top (display dynamic real-time system information)

- provides a dynamic view of system processes and resource usage.

```bash
top
```

### htop (interactive process viewer)

- an enhanced version of **top** with a more user-friendly interface.

```bash
htop
```

### kill (terminate process by PID)

- sends a signal to terminate the process.
- **'-9'** is used for forceful termination

```bash
kill PID
kill -9 PID
```

### pkill (terminate process by Name)

- kills processes by name.
- **'-9'** is used for forceful termination

```bash
pkill process_name
pkill -9 process_name
```

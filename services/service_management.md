## Service Management

### Starting a Service

- To start a service, we need to use **systemctl start** command followed by the service name.

```bash
sudo systemctl start apache2
```

### Stopping a Service

- To stop a service, we need to use **systemctl stop** command followed by the service name.

```bash
sudo systemctl stop apache2
```

### Restarting a Service

- To restart a service, we need to use **systemctl restart** command.
- This is useful for applying configuration changes without rebooting the system.

```bash
sudo systemctl restart apache2
```

### Enabling a Service

- To enable a service to start automatically at boot, we need to use **systemctl enable** command.

```bash
sudo systemctl enable apache2
```

### Disabling a Service

- To disable a service from starting automatically at boot, we need to use **systemctl disable** command.

```bash
sudo systemctl disable apache2
```

### Checking Service Status

- To check the status of the service, we need to use **systemctl status** command.
- This provides information about the service's current state and any error messages.

```bash
sudo systemctl status apache2
```

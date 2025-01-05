# Service Configuration

- Service configuration are located in the `/etc` directory. Each service has its own dedicated folder or files for managing its settings.

- For example, Apache configuration files will be found in `/etc/apache2/`.

## Editing Service Configuration

- To edit a service configuration, we can use a text editor such as `nano` or `vim`.

```bash
sudo nano /etc/apache2/apache2.conf
```

## Applying Changes

- After making changes to the configuration file, we need to restart the service to apply any changes.

```bash
sudo systemctl restart apache2
```

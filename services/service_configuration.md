## Service Configuration

- Service configuration are located in the `/etc` directory.
- For example, Apache configuration files will be found in `/etc/apache2/`.
- To edit a service configuration, we can edit the relevant configuration file using a text editor like `nano` or `vim`.

```bash
sudo nano /etc/apache2/apache2.conf
```

- After making changes to the configuration file, we need to restart the service to apply any changes.

```bash
sudo systemctl restart apache2
```

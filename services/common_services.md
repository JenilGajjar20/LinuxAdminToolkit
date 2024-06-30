## Common Services

### SSH (Secure Shell)

- SSH is used for securely connecting to the remote systems.

#### Common Commands:

```bash
sudo systemctl start ssh
sudo systemctl stop ssh
sudo systemctl restart ssh
sudo systemctl enable ssh
sudo systemctl disable ssh
```

**Configuration file**: `/etc/ssh/sshd_config`

### Web Servers (Apache/NGINX)

#### Apache

- Apache is widely used web server.

##### Common Commands:

```bash
sudo systemctl start apache2
sudo systemctl stop apache2
sudo systemctl restart apache2
sudo systemctl enable apache2
sudo systemctl disable apache2
```

**Configuration file**: `/etc/apache2/apache2.conf`

#### NGINX

- NGINX is a very popular web server and reverse proxy server.

##### Common Commands:

```bash
sudo systemctl start nginx
sudo systemctl stop nginx
sudo systemctl restart nginx
sudo systemctl enable nginx
sudo systemctl disable nginx
```

**Configuration file**: `/etc/nginx/nginx.conf`

### DNS (Domain Name System)

- DNS services translate domain names to IP addresses.

#### Common Commands:

- BIND is a popular DNS server.

```bash
sudo systemctl start isc-dhcp-server
sudo systemctl stop isc-dhcp-server
sudo systemctl restart isc-dhcp-server
sudo systemctl enable isc-dhcp-server
sudo systemctl disable isc-dhcp-server
```

**Configuration file**: `/etc/dhcp/dhcpd.conf`

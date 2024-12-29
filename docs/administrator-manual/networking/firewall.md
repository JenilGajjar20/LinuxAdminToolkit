# Firewall

## Install and Use UFW (Uncomplicated Firewall)

- Enables UFW and displays its status

```bash
sudo apt-get install ufw
sudo ufw enable
sudo ufw status
```

## Allow/Deny Services

- Allows or denies specific services.

```bash
sudo ufw allow ssh
sudo ufw allow 80/tcp
sudo ufw deny 23/tcp
```

## Install and Use iptables

- Installs and lists iptables rules.

```bash
sudo apt-get install iptables
sudo iptables -L
```

## Basic iptables Rules

- Adds basic rules to allow SSH or HTTP traffic and drop all other traffic.

```bash
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
sudo iptables -A INPUT -j DROP
```

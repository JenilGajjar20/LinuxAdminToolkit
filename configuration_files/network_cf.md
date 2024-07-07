## Network Configuration Files

### /etc/network/interfaces

- This file is used to configure network interfaces.

Example:

```
auto eth0
iface eth0 inet static
    address 192.168.1.100
    netmask 255.255.255.0
    gateway 192.168.1.1
```

### /etc/netplan/

- Netplan configuration files are used on newer versions of Ubuntu to manage network settings.

Example: (`/etc/netplan/01-netcfg.yaml`)

```
network:
    version: 2
    ethernets:
        eth0:
            dhcp4: true
```

### /etc/resolv.conf

- This file contains DNS server configuration.

Example:

```
nameserver: 8.8.8.8
nameserver: 8.8.4.4
```

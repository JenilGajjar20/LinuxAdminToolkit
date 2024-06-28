## IP Addresses

### Display IP Address

- Displays the current IP addresses of all network interfaces

```bash
ip addr show
ifconfig
```

### Configure IP Address

- Assigns an IP address to a network interface

```bash
sudo ip addr add 192.168.1.100/24 dev eth0
sudo ifconfig eth0 192.168.1.100 netmask 255.255.255.0
```

### Remove IP Address

- Removes an IP address from a network interface

```bash
sudo ip addr del 192.168.1.100/24 dev eth0
```

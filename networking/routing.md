## Routing

### Display Routing Table

- shows the current routing table.

```bash
ip route show
route -n
```

### Add a static route

- adds a static route to the routing table

```bash
sudo ip route add 192.168.2.0/24 via 192.168.1.1
sudo route add -net 192.168.2.0 netmask 255.255.255.0 gw 192.168.1.1
```

### Delete a static route

- removes a static route from the routing table.

```bash
sudo ip route del 192.168.2.0/24
```

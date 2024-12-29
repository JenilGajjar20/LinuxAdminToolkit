# Network Tools

## ping (check network connectivity)

- send ICMP echo requests to test connectivity.

```bash
ping google.com
```

## traceroute (trace route to a host)

- traces the route packets take to a destination

```bash
traceroute google.com
```

## netstat (network statistics)

- displays listening ports and other network statistics

```bash
netstat -tuln
```

## nmap (network scanning)

- performs a network scan to discover active hosts.

```bash
nmap -sP 192.168.1..0/24
```

## curl (transfer data from or to a server)

- fetches the contents of a URL

```bash
curl http://example.com
```

## wget

- downloads a file from the web

```bash
wget http://example.com/file.tar.gz
```

## ss (Socket Statistics)

- displays socket statistics similar to **netstat**

```bash
ss -tuln
```

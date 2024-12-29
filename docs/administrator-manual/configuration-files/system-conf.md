# System Configuration Files

## /etc/fstab

- The `/etc/fstab` file contains information about disk drives and partitions.
- It is used by the `mount` command to automatically mount file systems at boot.

Example:

```
# <file system> <mount point> <type> <options> <dump> <pass>
UUID=xxxx-xxxx / ext4 defaults 0 1
```

## /etc/hostname

- The `/etc/hostname` file contains name of the host (the computer)

Example:

```
kali
```

## /etc/hosts

- The `/etc/hosts` file maps hostname to IP addresses.

Example:

```
127.0.0.1 localhost
192.168.1.100 <myhostname>
```

## /etc/passwd

- The `/etc/passwd` file contains user account information.

Example:

```
username:x:1000:1000:User Name,,,:/home/username:/bin/bash
```

## /etc/shadow

- The `/etc/shadow` contains password information.

Example:

```
username:$6$hash$hash$hash:18520:0:99999:7:::
```

## /etc/sudoers

- The `/etc/sudoers` file controls the `sudo` command, which allows users to run commands as the root user.

Example:

```
username ALL=(ALL:ALL) ALL
```

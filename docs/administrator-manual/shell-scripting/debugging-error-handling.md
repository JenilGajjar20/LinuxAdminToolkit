# Debugging and Error Handling

## Enabling Debugging

- Use `-x` to enable debugging.

```bash
#!/bin/bash
set -x
echo "Debugging Enabled"
set +x
echo "Debugging Disabled"
```

## Handling Errors

```bash
#!/bin/bash
if ! mkdir /some/nonexistent/directory; then
    echo "Failed to create directory"
fi
```

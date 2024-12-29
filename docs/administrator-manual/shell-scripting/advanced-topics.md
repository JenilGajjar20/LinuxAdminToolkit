# Advanced Topics

## Command Substitution

```bash
#!/bin/bash
current_date=$(date)
echo "Current date and time: $current_date"
```

## Here Documents

```bash
#!/bin/bash
cat <<EOF
This is a
multi-line
string.
EOF
```

## Arrays

```bash
#!/bin/bash
fruits=("apple" "banana" "cherry")
echo "First fruit: ${fruits[0]}"
for fruit in "${fruits[@]}"; do
    echo "$fruit"
done
```

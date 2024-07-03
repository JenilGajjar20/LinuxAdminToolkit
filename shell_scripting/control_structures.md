## Control Structures

### Conditional Statements

#### `if` Statement

```bash
#!/bin/bash
if [ "$1" -gt 100 ]; then
    echo "The number of greater than 100"
else
    echo "The number is 100 or less"
fi
```

#### `case` Statement

```bash
#!/bin/bash
case $1 in
    start)
        echo "Starting the process"
        ;;
    stop)
        echo "Stopping the process"
        ;;
    *)
        echo "Usage: $0 (start|stop)"
        ;;
esac
```

### Loops

#### `for` loop

```bash
#!/bin/bash
for i in 1 2 3 4 5; do
    echo "iteration: $i"
done
```

#### `while` loop

```bash
#!/bin/bash
counter=1
while [ $counter -le 5 ]; do
    echo "Iteration: $counter"
    ((counter++))
done
```

# Functions

## Defining Functions

```bash
#!/bin/bash
greet(){
    echo "Hello, $1!"
}

greet "Alice"
```

## Returning Values

```bash
#!/bin/bash
add(){
    result=$(( $1 + $2 ))
    return result
}

add 5 10
echo "The sum is $?"
```

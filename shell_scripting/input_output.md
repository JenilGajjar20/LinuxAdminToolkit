## Input and Output

### Reading from files

```bash
#!/bin/bash
while read line; do
    echo $line
done < input.txt
```

### Writing to files

```bash
#!/bin/bash
echo "This is the text file!" > output.txt
```

### Appending to files

```bash
#!/bin/bash
echo "This will be appended" >> output.txt
```

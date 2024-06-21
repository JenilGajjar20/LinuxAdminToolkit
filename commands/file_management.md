## File Management

### cp (copy files and directories)

- Copies files and directories.
- **'-r'** is used for recursive copy.

```bash
cp source_file destination_file
cp -r source_directory destination_directory
```

### mv (move/rename files and directories)

- moves or renames files and directories.

```bash
mv old_name new_name
mv file_name /path/to/destination
```

### rm (remove files and directories)

- removes files and directories.
- **'-r'** is used for recursive removal and **'-f'** is used for force removal.

```bash
rm file_name
rm -r directory_name
rm -f file_name
```

### touch (create empty files or update timestamps)

- creates an empty files or updates the timestamps of an existing files

```bash
touch new_file
```

### cat (concatenate and display file contents)

- displays the contents of the file

```bash
cat file_name
```

### 'more' and 'less' (view file contents)

- views file contents and pagination.
- **less** allows backward movement.

```bash
more file_name
less file_name
```

### 'head' and 'tail' (view beginning and end of the file)

- **head** displays the first 10 lines by default, and **tail** displays the last 10 lines.
- **'-f'** is used to follow a file (useful for logs)

```bash
head file_name
tail file_name
tail -f file_name
```

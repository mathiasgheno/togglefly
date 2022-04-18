# Togglefly CLI API

After the installation you will have access to `tgf` CLI. 

### Who to create a feature?

```shell
tgf create feature --name FEATURE_1 --role ADMIN --system S1 --system S2
```

### How to delete a feature?

```shell
tgf delete feature --name FEATURE_1
```

### How to update a feature?

```shell
tgf search feature --name FEATURE_1
```

### How to list all feature for one system?

```shell
tgf list --system S1
```

### How to list all features for one role?

```shell
tgf list --role USER
```

### How to list all features for one role and one system?

```shell
tgf list --role USER --system S1
```

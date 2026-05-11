
# PySpark DataFrame Operations (Sales Dataset)

## Problem Statement

Given a sales dataset stored in a `.csv` file with headers, perform the following operations using PySpark DataFrame:

- Load the dataset
- Display schema & sample data
- Select specific columns
- Filter records based on condition
- Store filtered data & perform actions

---
## Implementation Steps

### Step 1: Read CSV File

```python
df = spark.read.csv("file:///home/hadoop/sales.csv", header=True, inferSchema=True)
```

### Step 2: Display Schema

```python
df.printSchema()
```

### Step 3: View Sample Data

```python
df.head()
```

---

### Step 4: Select Specific Columns

```python
df.select("product", "quantity")
```

---

### Step 5: Filter Data (Price > 300)

```python
df.filter(df.price > 300)
```

---

### Step 6: Store Filtered Data

```python
row = df.filter(df.price > 300)
```

---

### Step 7: View Limited Rows

```python
row.take(2)
```

---

### Step 8: Collect Data

```python
row.collect()
```

---

### Step 9: Display Filtered Data

```python
row.show()
```

---

### Step 10: Select Columns & Display

```python
col = df.select("product", "price")
col.show()
```

---

## Key Concepts Used

- DataFrame Operations
    
- Column Selection (`select`)
    
- Filtering (`filter`)
    
- Actions (`show`, `collect`, `take`)
    
- Schema Inference
    

---

## Conclusion

The sales dataset was successfully loaded and processed using PySpark DataFrame operations. Filtering, selection, and data inspection techniques were applied to analyze the dataset efficiently. 
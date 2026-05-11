step1:- file=sc.textfile('file://home/hadoop/movie.txt')
step2:- file.collect()
step3:- mv_split=file.map(lambda x:x.split(', '))
Step4:- mv_split.take(2)
Step5:- mv_conv=mv_split.map(lambda x : (x[10],x[1],int(x[2]),float(x[3])))
Step6:- mv_conv.take(2)
Step7:- mv_conv1=mv_conv.map(lambda x:x +("Hit" if x[2]>=1000 else "Flop") )
Step8:- mv_conv1.take(2)
Step9:- mv_kvp=mv.conv1.keyBy(lambda x:x[1])
Step10:- mv_kvp.take(2)
Step11:- mv_grp=mv_kvp.groupByKey()
Step12:- mv_grp=mv_kvp.mapValues(list)
Step13:- mv_grp.take(2)
Step14:- R1=mv_grp.mapValues(len)
Step15:- R1.collect()
==Step16:- mv_grp=mv_kvp.groupByKey()
mv_grp=mv_grp.mapValues(list)
R1.take(5)
Step17:- R2=mv_grp.mapValues(lambda items:sum(x[2] for x in items))
Step18:- mv_grp.collect()
Step19:- R2=mv_grp.mapValues(lambda items:sum(x[2] for x in items))
Step20:- mv_grp.map
Step21:- R3=mv_grp.mapValues(lambda rate :(sum (x[3] for x in rate)/len(rate)))
Step22:- R3.take(5)
Step23:- R2=mv_grp.mapValues(lambda items :sum(x[2] for x in items)
Step 24:- R2.take(5)
Step25:- R3=mv_grp.mapValues(lambda rate:(sum(x[3] for x in rate)/len(rate)))
Step26:- R3.collect()
Step 27:-==  

# Question
# Hadoop + PySpark Assignment

## Problem Statement
Given a dataset containing movie details in a `.txt` file with fields:
- Movie    
- Genre    
- Collection
- Rating

Perform the following operations using PySpark (RDD + lambda):
- R1 → (Genre, Count)
- R2 → (Genre, Total Collection)
- R3 → (Genre, Average Rating)
- R4 → (Movie, Genre, Collection, Rating, Hit/Flop)
    - Hit if collection ≥ 1000, else Flop
        

---

## Implementation Steps

### Step 1: Read Data from HDFS

```python
file = sc.textFile("hdfs://localhost:9000/movies_data/movies.txt")
```

### Step 2: Split Data

```python
mv_split = file.map(lambda x: x.split(","))
```

### Step 3: Convert Data Types

```python
mv_conv = mv_split.map(lambda x: (x[0], x[1], int(x[2]), float(x[3])))
```

### Step 4: Add Hit/Flop Column

```python
mv_conv1 = mv_conv.map(lambda x: x + ("Hit" if x[2] >= 1000 else "Flop",))
```

### Step 5: Key by Genre

```python
mv_kvp = mv_conv.keyBy(lambda x: x[1])
```

### Step 6: Group Data

```python
mv_grp = mv_kvp.mapValues(list)
```

---

## Results

### R1 → Genre-wise Movie Count

```python
R1 = mv_grp.mapValues(len)
R1.collect()
```

### R2 → Genre-wise Total Collection

```python
R2 = mv_grp.mapValues(lambda items: sum(x[2] for x in items))
R2.collect()
```

### R3 → Genre-wise Average Rating

```python
R3 = mv_grp.mapValues(lambda items: sum(x[3] for x in items) / len(items))
R3.collect()
```

### R4 → Movie Details with Hit/Flop

```python
R4 = mv_conv1.collect()
```

---

## Key Concepts Used

- RDD Transformations
    
- Lambda Functions
    
- map(), keyBy(), mapValues()
    
- Aggregations (sum, count, average)
    
- Conditional Logic
    

---

## Conclusion

The dataset was processed using PySpark RDD transformations.  
We successfully performed aggregation and classification operations on movie data stored in HDFS.
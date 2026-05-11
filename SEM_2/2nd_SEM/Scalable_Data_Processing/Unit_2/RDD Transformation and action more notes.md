1# NOTE:- THIS TOPIC IS IMPORTANT FOR ISA AS WELL AS EXAM

# Introduction To RDD
- Resilient Distributed Dataset is the immutable distributed collection of objects.
	- **ANALOGY**
		- - Think of it as a **big list of data** that is spread across many computers in a cluster.
    
		- It’s the **basic building block** in Spark for handling data.
# Features of RDD
- Collections(list,tuple,set,numpy array, range)
- distributed
- Fault tolerance(lineage)
- immutable
- unordered
- non indexed
- allows redundancy
- lazy evaluator

# Operation Of RDD
- Transformation =>Returns new RDD
	- No Job is created
- Action => Applies the function on the existing RDD.
	- A job is created
- There is a special function in RDD that is neither transformation nor Action.:- (Meta Function)

THERE ARE TWO METHODS TO START WITH RDD 
- one is **collection**
- another one is the **file**

## What Lineage Means

- **Definition:** Lineage is the dependency chain of RDDs. Every time you apply a transformation (`map`, `filter`, `reduceByKey`), Spark creates a new RDD that points back to its parent.
- DAG:- Tells us the which all the methods we are gonna create the RDD ord how does the RDD is created

# PYSPARK
- sc:- Spark Context

| sc.parallelize() |     |
| ---------------- | --- |
| \|               |     |
| map(x:x*2)       |     |
| \|               |     |
| filter(x:x%3==0) |     |
|                  |     |
# PYSPARK Commands

STEP_1:- docker run -it -p 4040:4040 niteeshkr1999/big-data-v3:latest bash
STEP_2:-  su - hadoop
STEP_3:- pyspark
STEP_4:-  rdd=sc.parallelize([1,2,3])
STEP_5:- rdd
STEP_6:-  rdd=sc.parallelize(range(1,101))
STEP_7:- rdd
STEP_8:- rdd.collect()
STEP_9:-  rdd2=sc.parallelize([1,1,2,2,3,3])
STEP_10:- rdd2.collect()
STEP_11:-  rd=sc.parallelize(range(1,101))
STEP_12:- rd1=rd.map(lambda x:x*2)
STEP_13:-  rd1.collect()
STEP_14:- RD2=rd1.filter(lambda x:x%3==0)
STEP_15:- RD2.collect()
STEP_16:-RD2.count()
STEP_17:- rd.getNumPartitions()
STEP_18:-  RD2.getNumPartitions()
STEP_19:-  RD2_part=RD2.repartition(20)
STEP_20:-  RD2_part.collect()
STEP_21:-  RD2_part.getNumPartitions()
STEP_22:-  RD2.collect()

# PYSPARK_COMMANDS_PLAYING_WITH_TEXT

STEP_1:- docker run -it -p 4040:4040 niteeshkr1999/big-data-v3:latest bash
STEP_2:-  su - hadoop
STEP_3:- cat > sampletext.txt
STEP_4:- pyspark
STEP_5:-  tf_1_rdd=sc.textFile("file:///home/hadoop/sampletext.txt")
STEP_6:- tf_1_rdd.collect()
STEP_7:- line=tf_1_rdd.filter(lambda line:line!='.')
- >>> line.collect()
STEP_8 :-line=tf_1_rdd.filter(lambda line:line not in '.,-')
- >>> line.collect()
STEP_9:-line=tf_1_rdd.filter(lambda line:line!=' ' and line!='.' and line!='-')
- >>> line.collect()
STEP_10:- char=tf_1_rdd.flatMap(lambda line:list(line))
- >>> char.collect()
STEP_11:- ch=char.filter(lambda ch:ch not in ",.-'")
- >>> ch.collect()
STEP_12:-ch_up=ch.map(lambda char:char.upper())
- >>> ch_up.collect()
STEP_13:-  ch_count=char_count.reduceByKey(lambda a,b:a+b)
- ch_count.collect()
STEP_14:-result=ch_count.sortByKey()
- >>> result.collect()
STEP_15:- 

# Aggregation Functions
- Using groupBy(Genre).compute
- Done with two ways
- first way
>>> ```
>>> grp=df.groupBy(df.genre)
>>> grp
>>> from pyspark.sql.functions import * grp.agg({"collection":"min","collection":"max","rating":"avg","movie":"count"}).show()
>>> ```
>>
# Column Renaming
- 
>>> 


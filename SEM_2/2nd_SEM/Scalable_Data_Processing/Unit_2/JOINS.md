JOINS => Left,right,full,inner
Null Handling => isnull; insotNull(); isFill(), is drop()
string handling => trim, lower,upper,substring 
Date Handling => To time Stamp; Year ;Date; Datediffer.

SQL Query => Select * select+where; select orderBy
- Select+groupBy(aggregation)

# JOIN OPERATIONS
- customer_df.join(order_df, customer_df.id == order_df.customer_id, "left").show()
- customer_df.join(order_df, customer_df.id == order_df.customer_id, "inner").show()
- customer_df.join(order_df, customer_df.id == order_df.customer_id, "right").show()
- customer_df.join(order_df, customer_df.id == order_df.customer_id, "outer").show()
- DO the semi join operation tooo!!

## NULL OPERATIONS
- ### is NULL()
-  emp_df = spark.read.csv("file:///opt/assignments/emp_null.csv", header=True, inferSchema=True)
- from pyspark.sql.functions import *
- emp_df.filter(col("salary").isNull()).show()
-  emp_df.filter(col("age").isNull()).show()
- ## IsNotNull()
- emp_df.filter(col("age").isNotNull() | col("salary").isNotNull()).show()
-  e1=emp_df.withColumn("final_salary",coalesce("salary",lit(100000)))
- emp.show()
- ## naFill()
- e2=emp_df.na.fill({"department":"Unknown","salary":0})
- ## naDrop()
- e3=emp_df.na.drop(how="any",subset=["age","salary"])

## String Handling
- >>> data = [(1,"John","HR",50000,30),(2,"Alice","Finance",60000,28),(3,"Bob","IT",55000,32),(4,"David","None",45000,35),(5,"Emma","HR",52000,29),(6,"Frank","Finance",70000,38),(7,"Grace","IT",62000,None),(8,"Helen","Marketing",None,27),(9,"Ian","HR",51000,33),(10,"Jack","Finance",65000,36)]
- >>> cols = ["emp_id","name","department","salary","age"]
-  df = spark.createDataFrame(data, cols)
- from pyspark.sql.functions import *
-  df.withColumn("trim_name",trim("name")).show()
- df.withColumn("name",trim("name")).show()
- df.withColumn("low_dept",lower("department")).show()
- df.withColumn("upper_dept",upper("department")).show()
- df.withColumn("sub_string",substring("name",1,3)).show()
- df.withColumn("split_string",split("department"," ")).show()
- df.withColumn("split_string",split("department"," ")[0]).show()

## Data handling
- ## totimestamp
	- df = df.withColumn("date_str", lit("2024-04-17 10:30:00"))
	- df = df.withColumn("timestamp", to_timestamp("date_str")
	- 
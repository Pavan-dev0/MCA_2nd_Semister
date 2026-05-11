Step_1:- spark.sql("CREATE DATABASE IF NOT EXISTS retail")
Step_2:- spark.sql("CREATE TABLE sales(product STRING, category STRING, amount INT) USING parquet")
Step_3:- spark.sql("INSERT INTO sales VALUES ('Laptop', 'Electronics',45000)")
Step_4:- (From the Notes) 
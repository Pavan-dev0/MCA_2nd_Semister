Problem Statement: Sales data Analysis using pyspark
1. Data Loading & Selection
* Load the dataset into a PySpark DataFrame.
* Display only Product, Category, and Price
2. Filtering Records
*  Display products with Price > 500.
* Display records where Quantity >= 10.
3. Sorting
* Display products sorted by Price in descending order. 
4. Counting Records
* Find the total number of records.
* Count the number of products in each Category
5. Aggregation Functions
Using groupBy(Category), compute:
* Maximum price (max)
* Average quantity (avg)
* Total number of products (count)
6. Column Renaming
* Rename column Price to UnitPrice
7. Add Constant Column
* Add a new column Tax with value 0.05
8. Derived Column (Arithmetic Operation)
* Create a new column TotalValue = (Quantity * UnitPrice) + (UnitPrice * Tax)
9. Conditional Column
Create a column StockStatus using when and otherwise:
* "High" → if Quantity > 20
* "Medium" → if Quantity between 10 and 20
* "Low" → otherwise
10. Advanced Filtering
* Display only products with "High" stock status.
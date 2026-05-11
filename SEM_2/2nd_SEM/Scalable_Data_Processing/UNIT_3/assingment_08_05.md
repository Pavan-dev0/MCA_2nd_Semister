ls
cd flink
cd bin 
/opt/flink/bin 
jps
from pyflink.datastream import StreamExecutionEnvironment
env=StreamExecutionEnvironment.get_execution_environment() 

l=["abc","def","ghi","jkl","mno","pqr","stu","stu","vwx","yz"] 
ds=env.from_collection()
ds1=ds.map(lambda x:(x:len(x)))
ds2=ds1.filter(lambda x:x[1]==2)
ds3=ds1.filter(lambda x: any(ch for ch in x[0] if ch in 'aeiou'))
k=ds1.key_by(lambda x:x[0])

ds.print('ds')
ds1.print('ds1')
ds2.print('ds2')
ds3.print('ds3')
k.print("k datastream")
env.execute("transformation demo")
x
## Do While Loop

- Do some block of code first, Then repeat again if the condition is True

Here in the below code we cannt assign the while condition saying that it can execute the number less than that of the zero soo here 

``` cpp
#include<iostream>
int main(){
	int number;
	std::cout<<"Enter the number";
	std::cin>>number;
	
	while(number<0){
	std::cout<<"Enter the positive number"
	std::cin>>number;
	
	}
	std::cout<<"This is the number \n"<<number;
	
return 0;
}
```

## For Loops
- In for Loops a loop that execute the block of code in the specified amount of time 

```cpp
#include<iostream>  
  
int main() {  
    int a,b;  
    std::cin>>a>>b;  
  
    for(int i=a;i<=b;i++) {  
        for(int j=i;j<=b;j++) {  
            std::cout<<"*";  
        }  
        std::cout<<'\n';  
    }  
    return 0;  
}
```

## Break And Continue Keywords
- break is nothing but we have to break out of the loop 
- continue is nothing but we skip the current iteration(input)
- 
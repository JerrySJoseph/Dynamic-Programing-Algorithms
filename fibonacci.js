/**
 * fibonnaci.js
 * 
 * This is an example fibonacci function to generate nth element of fibonnacci series
 * It is implemented using recursion and memoization for increased efficiency
 * @param {Number} n 
 * @param {object} mem 
 * 
 * Author:Jerry S Joseph
 */


 //fibonacci with memoization
const fibonacci=(n,mem={})=>{
    if(n in mem)return mem[n];
    if(n==0)return 0;
    if(n==1)return 1;
    return (mem[n]=fibonacci(n-1,mem)+fibonacci(n-2,mem));
}

 //Simple fibonacci 
const fibonacciSimple=(n)=>{
    if(n==0)return 0;
    if(n==1)return 1;
    return fibonacciSimple(n-1)+fibonacciSimple(n-2);
}

//Test Run
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(100));
var a=0;
var b=1;
var sum;
console.log(a);

function fib(){

    for(i=1;i<=100;i++){
    sum= a+b;
    a=b;
    b=sum;
    console.log(sum);
    }     
}

fib();
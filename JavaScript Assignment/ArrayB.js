//How to create arrays in JS.

let a=[]
let size=[32,34,36,38,40,42,44]

//How to access items from arrays in JS.

let x=[1,2,3,4,5,6,7,8,9]
console.log(x[0])
console.log(x[1])
console.log(x[2])
/* Here 'x' in an array,and x stores value 1,2,3,....9 with indexing 0(n),1,2,3,...8(n-1) 
TO call or access array array[index no.]
console.log to show the output..*/

//How to access the last item from an array in JS.
let b=[10,20,30,40,50,60,70];
let lastItem=b[b.length-1];
console.log(lastItem);

// Another way(i.e slice) to access last item of an array in JS
 
let z=[20,40,60,80,100]
let lastDigit=z.slice(-1);
console.log(lastDigit)


//How to access all items for an array using for loop in JS.

let names=['Lakshmi','Gauthami','Seema','Rohini','Sid'];
for(i=0;i<=3;i=i+1)
{
    console.log(names[i]);
}
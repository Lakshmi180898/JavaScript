let dummy = [10, 10, 10, {}, [], true, false, 'rahul']
console.log(typeof dummy);
//Output: object



//wap to read array values 
for (x of dummy) {
    console.log(x)
}

/* Output: 10   
10   
10   
{}   
[]   
true 
false
rahul */
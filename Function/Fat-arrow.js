/* fat arrow function
 () => {

} */

var wish = ()=>{
    console.log("Good Morning.")
}
wish();
//Output: Good Morning.


var lakshmi = ()=>{
    console.log("Hello");
}
lakshmi();

var lakshmi = ()=>{
    console.log("World");
}
lakshmi();
//Output: Hello World..

//Note: Fat-arrow solves the function overriding conflicts.

var show = ()=>{
    console.log(this.show)
}
show();

let user = { id: 101, name: 'Rahul Gandhi', email: "rahul@gmail.com" }
user.email = "Rahul@tcs.com"
user.loc = "New Delhi"
console.log(user)
//Output:  {id:101, name:'Rahul Gandhi', email:'Rahul@tcs.com', loc:'New Delhi'}
//user.email is overrided from "rahul@gmail.com" to "Rahul@tcs.com".
delete user.loc
//Output: {id:101, name:'Rahul Gandhi', email:'Rahul@tcs.com'}
console.log(user)



const Data = [
    {id:101,name:'karthik',email:'karthik55@gmail.com',sal:800},
    {id:101,name:'Naveen',email:'Naveen55@gmail.com',sal:900},
    {id:101,name:'Hari',email:'Hari55@gmail.com',sal:1000},
    {id:101,name:'Veerappan',email:'Veerappan55@gmail.com',sal:1100},
    {id:101,name:'Hello',email:'Hello55@gmail.com',sal:1200}
];

let Res = ()=>{
    let Rows = '';
    for(let i=0;i<Data.length;i++){
        Rows = Rows+ `
            <tr>
                <td>${Data[i].id}</td>
                <td>${Data[i].name}</td>
                <td>${Data[i].email}</td>
                <td>${Data[i].sal}</td>
            </tr>
        `;
    }
    document.getElementById("Method3").innerHTML=Rows;
}
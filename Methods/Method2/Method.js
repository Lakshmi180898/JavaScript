const Data = [
    {id:101,name:'karthik',email:'karthik55@gmail.com',sal:800},
    {id:101,name:'Naveen',email:'Naveen55@gmail.com',sal:900},
    {id:101,name:'Hari',email:'Hari55@gmail.com',sal:1000},
    {id:101,name:'Veerappan',email:'Veerappan55@gmail.com',sal:1100},
    {id:101,name:'Hello',email:'Hello55@gmail.com',sal:1200}
];

let Res = ()=>{
    Rows = '';
    Data.forEach((emp)=>{
        Rows += `
            <tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.email}</td>
                <td>${emp.sal}</td>
            </tr>
        `;
    });
    document.getElementById("Method2").innerHTML=Rows;
}

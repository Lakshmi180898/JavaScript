let Data = [
    {id:101,name:'Karthik',email:'Karthikbaba1313@gmail.com',sal:10000},
    {id:102,name:'Prabhu',email:'Prabhu1313@gmail.com',sal:20000},
    {id:103,name:'Seenu',email:'Seenu1313@gmail.com',sal:30000},
    {id:104,name:'Srikanth',email:'Srikanth@gmail.com',sal:40000},
    {id:105,name:'JaiRam',email:'JaiRam@gmail.com',sal:50000},
];
 let Res = ()=>{
    let Rows = '';
    Data.map((emp)=>{
        Rows += `<tr>
                    <td>${emp.id}</td>
                    <td>${emp.name}</td>
                    <td>${emp.email}</td>
                    <td>${emp.sal}</td>
                </tr>`;
    });
    document.getElementById("Method1").innerHTML=Rows;
 }
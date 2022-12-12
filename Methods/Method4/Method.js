let employee =[{"id":1,"first_name":"lucky","last_name":"shamballi","email":"shamballi","gender":"male"},
        {"id":1,"first_name":"Don","last_name":"shamballi","email":"shamballi","gender":"male"},
        {"id":1,"first_name":"lucky don","last_name":"shamballi","email":"shamballi","gender":"male"}]
       
         
        function display(){
            let i=0
        let dio=document.getElementById("dio");
        let row=""
        
        while(i<=employee.length){
        let row=`<tr>
            <td>${employee[i].id}</td>
            <td>${employee[i].first_name}</td>
            <td>${employee[i].last_name}</td>
            <td>${employee[i].email}</td>
            <td>${employee[i].gender}</td></tr>`
          dio.innerHTML+=row;  
          i++      
        }
    }
       
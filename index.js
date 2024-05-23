let start=document.querySelector(".start")
let userName=document.querySelector(".user_name")
let userPassword=document.querySelector(".user_password")
let tableBody=document.querySelector("tbody")
let edit=document.querySelector(".edit")
start.addEventListener("click",()=>{
  
    let tableRow=document.createElement("tr")
    let tableData=document.createElement("td")
    tableRow.innerHTML=`
    <td>${userName.value}</td>
    <td>${userPassword.value}</td>
    <td><button onclick="del(event)" class="btn btn-warning">edit</button></td>
    <td><button onclick="del(event)" class="btn btn-danger">Delete</button></td>
    ` 
    tableRow.appendChild(tableData)
    tableBody.append(tableRow)
    userName.value=""
    userPassword.value=""
}) 
function del(event) {
    if (event.target.className == "btn btn-warning") {
        edit.style.display = "block";
        let reset_val=document.querySelector(".reset_val")
        
       reset_val.addEventListener("click",()=>{ 
        console.log(event.target.tagName)
        let edit_uname=document.querySelector(".edit_uname");
        let edit_password=document.querySelector(".edit_password")
        let sibling=event.target.parentElement.parentElement.childNodes;                                                                                              
    
    sibling[1].innerHTML=edit_uname.value
    sibling[3].innerHTML=edit_password.value
    edit.style.display="none";
    
       })
    } else if (event.target.parentElement.parentElement.tagName == "TR") {
        event.target.parentElement.parentElement.remove();
    }
}  













/*
create a table 
edit=>user value change
delete=>delete
*/
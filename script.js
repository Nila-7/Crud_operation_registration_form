let users = JSON.parse(localStorage.getItem("users")) || [];
displayUsers();
document.getElementById("userForm").addEventListener("submit", function(e){
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let address = document.getElementById("address").value;
    let pincode = document.getElementById("pincode").value;
    let phone = document.getElementById("phone").value;

    let editIndex = document.getElementById("editIndex").value;

    let user = { 
        name, 
        email,
        password,
        address,
        pincode,
        phone
    }; 

    if(editIndex === ""){
        users.push(user);
    } else{
        users[editIndex] = user;
        document.getElementById("editIndex").value = ""; 
    }
    localStorage.setItem("users", JSON.stringify(users));
    document.getElementById("userForm").reset();
    displayUsers();
}); 

function displayUsers(){
    let table = document.getElementById("userTable");
    table.innerHTML="";

    users.forEach((user,index) =>{

        table.innerHTML +=  `
        <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
             <td>${user.password}</td>
             <td>${user.address}</td>
             <td>${user.pincode}</td>
            <td>${user.phone}</td>
            
            <td>
            <button class="edit" onclick="editUser(${index})">Edit</button>
            <button class="delete" onclick="deleteUser(${index})">Delete</button>
            </td>
        </tr>
        `;
    });
}

function editUser(index){
     let user = users[index];

     document.getElementById("name").value = user.name; 
     document.getElementById("email").value = user.email;
     document.getElementById("password").value = user.password;
     document.getElementById("address").value = user.address;
     document.getElementById("pincode").value = user.pincode;
     document.getElementById("phone").value = user.phone;

     document.getElementById("editIndex").value = index;
} 

function deleteUser(index){

    if(confirm("Are you sure you want to delete?")){

        users.splice(index,1);

        localStorage.setItem("users",JSON.stringify(users));
        displayUsers();
    }
}

var button = document.getElementById("submit")
var notify = document.querySelector(".alert");
var notifySpan = document.querySelector(".alert-span");
var users = [];


button.onclick = myFunction;
 function myFunction(){

var userName=document.getElementById("userName").value;
var userMail=document.getElementById("userMail").value;
var userPhone=document.getElementById("userPhone").value;
var userAge=document.getElementById("userAge").value;

var user = {name: userName , mail: userMail, phone: userPhone, age: userAge}
 users.push(user)
 

//  displaay data function
  addData();

  // delete alert function
  $(".remove").click(function(e){
    e.preventDefault();
    notify.style.display ="none";
  })
  // clear for function
  clearForm();

}

//  displaay data function
function addData() {

  var row = "";

  for( var i = 0 ; i < users.length ; i++ )
    {
      row += "<tr><td>"+users[i].name +"</td> <td>" + users[i].mail +"</td> <td>"+ users[i].phone +"</td> <td>"
       + users[i].age+ "<a class =' delete float-right btn-danger px-2' href='#' > x </a>" + "</td> </tr>"
    }
  var tableBody = document.getElementById("list");
      tableBody.innerHTML=row;

     // delete row function//////////////////////////////

    $(".delete").click(function(r){
      r.preventDefault();
       $(this).parent().parent().remove();
      notify.style.display ="block";
      notifySpan.textContent = ("Your Book Has Been Removed");
      $(".alert").removeClass("btn-info");
      $(".alert").addClass("btn-danger");
      users.splice(r,1)

    })
  
}





 // clear for function
function clearForm() {
 
  userName.value = "";
    userMail.value = "";
    userAge.value = "";
    userPhone.value = "";
    notify.style.display ="none";
    notify.style.display ="block";
    $(".alert").removeClass("btn-danger");
    $(".alert").addClass("btn-info");
    notifySpan.textContent = ("Your Book Has Been Added");

}




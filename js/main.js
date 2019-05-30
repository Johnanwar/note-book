
var button, notify, notifySpan, users;

 button = document.getElementById("submit")
 notify = document.querySelector(".alert");
 notifySpan = document.querySelector(".alert-span");
 users = [];


 button.onclick = myFunction;
 function myFunction(){
var userName, userMail, userPhone, userAge, user ;

 userName=document.getElementById("userName").value;
 userMail=document.getElementById("userMail").value;
 userPhone=document.getElementById("userPhone").value;
 userAge=document.getElementById("userAge").value;

 user = {name: userName , mail: userMail, phone: userPhone, age: userAge}
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

};

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

    });
};

  // key enter function
  document.addEventListener("keypress", function(e){
    if (e.keyCode ===13 ||e.which ===13 ){
        myFunction();
        };
  });

 // clear for function
function clearForm() {
    var inputs = document.querySelectorAll(".form-control");

    inputs.forEach(function(cur){
     cur.value = "";
    inputs[0].focus();
  });
    notify.style.display ="none";
    notify.style.display ="block";
    $(".alert").removeClass("btn-danger");
    $(".alert").addClass("btn-info");
    notifySpan.textContent = ("Your Book Has Been Added");

};




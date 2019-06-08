
  class Book {
    constructor(userName, userMail, userPhone, userAge) {
    this.userName = userName;
    this.userMail = userMail;
    this.userPhone = userPhone;
    this.userAge = userAge; 
    };
  };

  /// ui controller
  class UiController{

    // // local storage 
    // static displayBooks () {
    //   const storeBooks = Store.getBooks();
    //   books.forEach((book) => UI.addBookToList(book));   
    // };
   
    // display ddata 
    static addBookToList(book){
       var list, row, content;
       list = document.getElementById("list");
       row = document.createElement("tr");
       content = `<td>${book.userName} </td>
             <td> ${book.userMail} </td>
             <td>${book.userPhone} </td>
             <td> ${book.userAge} <button class = "btn btn-danger del float-right" > x </button> </td>`
       row.innerHTML = content
       list.appendChild(row)

    };
  // clear values
  static clearInputs(){
    var inputs = document.querySelectorAll(".form-control")
        inputs.forEach((el) => {
        el.value = ''
        inputs[0].focus();
    });
  };

  // delet3 row 
  static deleteRow(el){
    if(el.classList.contains("del")){
     el.parentElement.parentElement.remove();
    }  
  };

  }

//  // local storage 
//  class store{
//    static getBook() {

//    }

//   static addBook (book) {

//   }

//   static removeBook() {

//   }
//  }

   

    // Event: Display Books
    // document.addEventListener('DOMContentLoaded', UiController.displayBooks);

  // get values  & display data 
   var btn = document.getElementById("submit")



   displayData = function() {
     var displayData, name, mail, phone, age, alert;
     /// inputs value
     name = document.getElementById("userName").value;
     mail = document.getElementById("userMail").value;
     phone = document.getElementById("userPhone").value;
     age = document.getElementById("userAge").value;
     book = new Book(name, mail, phone, age);

     // validation

     if (mail == "" || name == "" || age == "" || phone == "") {
       alert = document.querySelector(".alert")
       alert.style.display = "block"
       alert.textContent = "you should fill the fields"
     }else{
       document.querySelector(".alert").style.display = "none";
       UiController.addBookToList(book);
       UiController.clearInputs();
     };

    
  };






  // display data event
   btn.addEventListener("click", displayData);
   document.addEventListener("keypress", function (e) {
    if (e.keyCode === 13 || e.which === 13) {
      displayData()
    }
   });

  // delete event
  document.querySelector("#list").addEventListener("click" , function(e){
  //  UiController.deleteRow(e.target)
    UiController.deleteRow(e.target)
 })


  
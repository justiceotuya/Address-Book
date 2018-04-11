<<<<<<< HEAD
//$(document).ready(function() {
//buttons
var addSignBtn = $("#addSign");
var submitBtn = $("#submit");
var cancelBtn = $("#cancel");
var addFormDiv = $(".addForm");


//form fields
var fullName = $("#fullName");
var phoneNumber = $("#phoneNumber");
var address = $("#address");
var email = $("#email");

//Display for the contact book
var contactBookDiv = $(".contactBook");

//storage of the contacts
var contactBookStorage = [];

//Event Listener
addSignBtn.click(function() {
  addFormDiv.toggle();
});

//check for form Validation
submitBtn.on("click", addToContact);
cancelBtn.click(function(){
addFormDiv.hide();
});
contactBookDiv.click(removeContact);


//create a Json constructor function
function jsonConstructor(fullName, phoneNumber, address, email) {
  this.fullName = fullName;
  this.phoneNumber = phoneNumber;
  this.address = address;
  this.email = email;
}

function addToContact() {
  if (
    fullName.val() != "" &&
    phoneNumber.val() != "" &&
    address.val() != "" &&
    email.val() != ""
  ) {
    //Add contents of the form to the array and storage
    var formObj = new jsonConstructor(
      fullName.val(),
      phoneNumber.val(),
      address.val(),
      email.val()
    );
    //update the array
    contactBookStorage.push(formObj);
    //create a local storage and change convert the array to string since localtorage only saves strings
    localStorage["contactBook"] = JSON.stringify(contactBookStorage);
    //hide the form panel
    addFormDiv.hide();
    //clear the form
    clearForm();
    showContactBook();
    //toggleContactDetails()
  }
}

function removeContact(e) {
  // Remove an entry from the addressbook
  if (e.target.classList.contains("deleteBtn")) {
    var remID = e.target.getAttribute("data-id");
    contactBookStorage.splice(remID, 1);
    localStorage["contactBook"] = JSON.stringify(contactBookStorage);
    showContactBook();
  }
}

function clearForm() {
  var contactForm = $(".contactForm");
  contactForm.val("");
}

function showContactBook() {
  //check if the key 'contactBook' exists in localStorage or else create it
  if (localStorage["contactBook"] === undefined) {
    localStorage["contactBook"] = "";
  } else {
    contactBookStorage = JSON.parse(localStorage["contactBook"]);
    //empty out the contactBook div
    contactBookDiv.html("");

    for (var index in contactBookStorage) {
      var data = '<div id="main'+index+'">';
      data +=
        '<div class="name"><span>' +
        contactBookStorage[index].fullName +
        "</span><ul id='details"+index +"' style='display:block'>";
      data +=
        '<li class="number"><p>' +
        contactBookStorage[index].phoneNumber +
        "</p></li>";
      data +=
        '<li class="address"><p>' +
        contactBookStorage[index].address +
        "</p></li>";
      data +=
        '<li class="email"><p>' + contactBookStorage[index].email + "</p></li>";
        data +=
        '<li class="deleteDiv"><a href="#" class="deleteBtn" data-id="' +
        index +
        '">Delete</a></li>';
        data +=
        '<li class="editDiv"><a href="#" class="editBtn" data-id="' +
        index +
        '">Edit</a></li>';
      data += "</ul></div>";

      contactBookDiv.append(data);

      toggleContactDetails();

    }
  }
}

//function to toggle contact details
 function toggleContactDetails(){
    $('div.name').click(function(){
        $(this).find('ul').toggle();
        });
 }
showContactBook();

$('.editBtn').click(function(e){

   // $('#editContact').toggle();
    contactBookStorage = JSON.parse(localStorage.contactBook);
    for (var i =0; i< contactBookStorage.length;i++){
if (fullName === $('div.name span').text()){
    console.log("matched");
}
    

    }  
var newName = $('#fullName2').val();

    var newEmail = $('#email2').val();
    var newNumber = $('#number2').val();
    var newAddress = $('#address2').val();
//     $(this).closest(".name").html('<div class="name">' + newName + "<ul id='details"+index +"' style='display:block'>");
//     $(this).closest(".email").html( '<li class="number"><p>' + newEmail +"</p></li>" );
//     $(this).closest(".number").html( '<li class="number"><p>' + newNumber +"</p></li>");
//     $(this).closest(".address").html( '<li class="number"><p>' + newAddress +"</p></li>" );
    
    });
=======
var contactArray = [];
var names = contactArray;
var list = $("#contact-names");
var parent = list.parent();

//add name
$("#submit-button").click(function () {
  if ($("#contact").val() != "") {
    names.push($("#contact").val());
    console.log("contact Added");
    $("#contact").val("");
  } else {
    alert("insert a valid name");
  }

  list
    .detach()
    .empty()
    .each(function (i) {
      for (var x = 0; x < names.length; x++) {
        $(this).append(
          //   "<div class='nameList'><li><span class='user-circle'><i class='fas fa-user-circle'></i></span><span class='contact-name'>" +
          //   names[x] +
          //   "</span><div class='manipulate-name'><span class='edit-name'><i class='fas fa-edit'></i></span><span class='delete-name' onclick=delete-name()><i class='fas fa-trash-alt' ></i></span></div></li></div>"

          "<div class='nameList'><li><span class='user-circle'><i class='fas fa-user-circle'></i></span><span class='contact-name'>" +
          names[x] +
          "</span><div class='manipulate-name'><button class='edit-name'>Edit</button></span><button class='deleteName' onclick=deleteName()>Delete</button></span></div></li></div>"
        );
        if (x == names.length - 1) {
          $(this).appendTo(parent);
        }
      }
    });
});

//delete name
function deleteName() {
  $('li').remove();
}


//function delete - name() {

//}
//edit name
>>>>>>> d56c0b12356f26e19e38fe4e7f5459b5d5716acb

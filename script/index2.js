

var list = document.querySelector("#contactNames");
var lastId = 0;
var additionalInfo = document.createElement("ul");


function dothis() {
  //get the input value
  var contact = document.getElementById("contact").value;

   if (contact == "") {
  alert("Please insert a valid Name")
  }
  else{

    
  //dynamically create a list element
  var entry = document.createElement("li");
  //Append typed contact to the list element
  entry.appendChild(document.createTextNode(contact));
  //set the ID of the created contact
  var test =  "item" + lastId;
 entry.setAttribute("id", test);
//Add an Id to contact details
//  setAttributes(contact, {"onClick" : 'expandContact("' + "item" + lastId + '")',"class": "fas" + " fa-edit" });


  // create remove Button
  var removeButton = document.createElement("button");
  //set dynamic ID and font awesome icons
  // removeButton.setAttribute("onClick", 'removeName("' + "item" + lastId + '")');
  // removeButton.setAttribute("class", "fas" + " fa-trash-alt");
  setAttributes(removeButton, {"onClick": 'removeName("' + "item" + lastId + '")', "class": "fas" + " fa-trash-alt"});
  //add button to list element
  entry.appendChild(removeButton);


  //create Edit Button
  var EditButton = document.createElement("i");
  //set dynamic ID and font awesome icons
  // EditButton.setAttribute("onClick", 'EditName("' + "item" + lastId + '")');
  // EditButton.setAttribute("class", "fas" + " fa-edit");
setAttributes(EditButton, {"onClick" : 'EditName("' + "item" + lastId + '")',"class": "fas" + " fa-edit" });
    //add button to list element
  entry.appendChild(EditButton);


 //dynamic Additional info for ul
  var additionalInfo = document.createElement("ul");
  entry.appendChild(additionalInfo);
  additionalInfo.setAttribute("style", "display : none");
  additionalInfo.setAttribute("class", "moreInfo");
 additionalInfo.setAttribute("id", "list" + lastId); 
  


  //dynamically increase the ID
  lastId += 1;
  //append entry to thr list
  list.appendChild(entry);

  
  var additionalInfoNumber = document.createElement("li");
  additionalInfoNumber.appendChild(document.createTextNode("Number"));
  additionalInfo.appendChild(additionalInfoNumber);

  var additionalInfoEmail = document.createElement("li");
  additionalInfoEmail.appendChild(document.createTextNode("email"));
  additionalInfo.appendChild(additionalInfoEmail);
  }
   
 

 
}


// function toggleContact(){
// // $('#item' + (lastId - 1) ).click(function(){
// $( + '#item' + (lastId - 1) + " .moreInfo").toggle();
// }



 function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

function removeName(itemid) {
  var item = document.getElementById(itemid);
  list.removeChild(item);
}
function EditName(itemid) {
  var item = document.getElementById(itemid);
}





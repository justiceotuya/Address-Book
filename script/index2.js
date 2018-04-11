var list = document.querySelector("#contactNames");
var lastId = 0;
var additionalInfo = document.createElement("ul");

function submitButton() {
  //get the input value
  var contact = document.getElementById("contact").value;

  if (contact == "") {
    alert("Please insert a valid Name");
  } else {
    //dynamically create a list element
    var entry = document.createElement("li");
    //Append typed contact to the list element
    entry.appendChild(document.createTextNode(contact));
    //set the ID of the created contact
    var test = "item" + lastId;
    entry.setAttribute("id", test);
    //Add an Id to contact details

    // create remove Button, set dynamic ID and font awesome icons and add button to list element
    var removeButton = document.createElement("button");
    setAttributes(removeButton, {
      onClick: 'removeName("' + "item" + lastId + '")',
      class: "fas" + " fa-trash-alt"
    });
    entry.appendChild(removeButton);

    //create Edit Button set dynamic ID and font awesome icons add button to list element
    var EditButton = document.createElement("i");
    setAttributes(EditButton, {
      onClick: 'EditName("' + "item" + lastId + '")',
      class: "fas" + " fa-edit"
    });
    entry.appendChild(EditButton);

    //dynamic Additional info for ul
    var additionalInfo = document.createElement("ul");
    entry.appendChild(additionalInfo);
    additionalInfo.setAttribute("style", "display : none");
    additionalInfo.setAttribute("class", "moreInfo");
    additionalInfo.setAttribute("id", "list" + lastId);

    document.getElementById("contact").value = "";

    //dynamically increase the ID
    lastId += 1;
    //append entry to thr list
    list.appendChild(entry);

    //Creating Additional Info Items for Number
    var additionalInfoNumber = document.createElement("li");
    additionalInfoNumber.appendChild(document.createTextNode("Number"));
    additionalInfo.appendChild(additionalInfoNumber);

    //Creating Additional Info Items for email
    var additionalInfoEmail = document.createElement("li");
    additionalInfoEmail.appendChild(document.createTextNode("email"));
    additionalInfo.appendChild(additionalInfoEmail);

    //Toggling the Additional list items
    $("#" + test).click(function() {
      $(" #" + test + " .moreInfo").toggle();
    });
  }
}
function setAttributes(el, attrs) {
  for (var key in attrs) {
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

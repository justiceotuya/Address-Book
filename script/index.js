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
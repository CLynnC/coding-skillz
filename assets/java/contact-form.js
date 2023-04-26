//(function(){$('input[type=submit]').click(emailMe());})();


//run() {
  //$('input[type=submit]').click(emailMe());
  //};

var name = "";
var email = "";
var message = "";





function formaction(FormData) {
  var name = document.getElementsByClassName("namee").value;
  var email = document.getElementsByClassName("emailer").value;
  var message = document.getElementById("message1").value;
  var error_message = document.getElementById("error_message");

  error_message.style.padding = "10px";

  var text;
  if (name.length < 5) {
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if (message.length <= 50) {
    text = "Please Enter More Than 50 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}
  
function emailMe(formaction, text=("name", "email", "message" )) {
    
      contentType: 'text', webkitURL( 'mailto:crystal.lynncollins@mail.com'
      )};

$document.getElementById("sendButton").addEventListener("click", emailMe(), FormData+ formaction()
);


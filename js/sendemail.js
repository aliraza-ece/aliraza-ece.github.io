function validateForm(){
  $("#name").removeClass("validation");
  $("#email").removeClass("validation");
  $("#message").removeClass("validation");
  var valid = true;
  if (!$("#name").val()) {  
    $("#name").addClass("validation");
    valid = false;
  }
  if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($("#email").val()))) {
    $("#email").addClass("validation"); 
    valid = false;
  } 
  if (!$("#message").val()) { 
    $("#message").addClass("validation"); 
    valid = false;
  }
  return valid;
}
$(document).ready(function(){
  $("#sendEmail").click(function(e){
    e.preventDefault();
    if (validateForm()){
      $.ajax({
        type: "POST",
        url: "/sendEmail",
        data: $("#contactForm").serialize(),
        success:function(result){
          $("#successmsg").html(`<p class='success'>${result}<\p>`);
          $("#name").val('');
          $("#email").val('');
          $("#message").val('');
        }
      }); 
    }
  });
});

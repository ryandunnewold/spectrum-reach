// This is where it all goes :)
$(document).ready(function() {
  $("#collapse-step-button").click(function(){
    toggleForms();
  });
  
  $('#step-1-next-button').click(function(){
    toggleForms();
  });

  $('#step-1-come-back').click(function(){
    toggleForms();
  });

  $("#submit-button").click(function(e){
    e.preventDefault();
    if ($("#contact-form")[0].checkValidity()) {
      swal({ title: "Success!", text: "Thanks for getting in touch. We'll get back with you within a few hours!", type: "success", confirmButtonText: "Cool!" });
    }
    else {
      swal({ title: "Error!", text: "You haven't filled out all of the required fields.", type: "error", confirmButtonText: "Go back" });
    }
  });

  $("#reason-other-label").click(function(){
    $("#reason-other-label").hide();
    $("#other-text").fadeIn();
    $("#other-text").focus();
  });

  $("#other-text").click(function(){
    $("#reason-other").prop("checked", true);
  });

  $("#other-text").keyup(function(){
    $("#reason-other").prop("value", $(this).val());
  })
});

function toggleForms() {
  if ($("#step-1-form").is(":visible")) {
    $("#step-1-form").slideToggle();
    $("#step-2-form").slideToggle();
    $("#step-1-come-back").text("Edit section")
    $("#step-1-edit-pencil").show();
    $("#step-1-next-button").hide();
  }
  else {
    $("#step-1-form").slideToggle();
    $("#step-2-form").slideToggle();
    $("#step-1-come-back").text("Come back to this question") 
    $("#step-1-edit-pencil").hide();
    $("#step-1-next-button").show();
  }
}

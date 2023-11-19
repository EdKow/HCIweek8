function validateForm() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
  
    if (name == "") {
      document.getElementById("name-error").innerHTML = "Please enter your name.";
      return false;
    }
  
    if (email == "") {
      document.getElementById("email-error").innerHTML = "Please enter your email address.";
      return false;
    }
  
    if (!validateEmail(email)) {
      document.getElementById("email-error").innerHTML = "Please enter a valid email address.";
      return false;
    }
  
    if (subject == "") {
      document.getElementById("subject-error").innerHTML = "Please enter a subject.";
      return false;
    }
  
    if (message == "") {
      document.getElementById("message-error").innerHTML = "Please enter a message.";
      return false;
    }
  

    return true;
  }

  function validateEmail(email) {
    var re = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,})$/;
    return re.test(email);
  }


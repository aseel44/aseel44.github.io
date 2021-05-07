
 function validateForm() {
		
    var x1 = document.getElementById("Firstname");
    if (!x1.checkValidity()) { 
    x1.style.borderColor="red";
      alert("The First Name is empty"); 
    document.getElementById("Firstname").innerHTML;
     } 
    else { 
      x1.style.borderColor="black";

      document.getElementById("Firstname").innerHTML;
   }
     var x2 = document.getElementById("Lastname");
   if (!x2.checkValidity()) { 
    x2.style.borderColor="red";

 alert("The Last Name is empty");
   document.getElementById("Lastname").innerHTML;
    } 
   else {
    x2.style.borderColor="black";

     document.getElementById("Lastname").innerHTML;
  }
  var x3 = document.getElementById("Email");
  if (!x3.checkValidity()) { 
    x3.style.borderColor="red";
    alert("The Email is empty");
  document.getElementById("Email").innerHTML;
   }
  else {
    x3.style.borderColor="black";
    document.getElementById("Email").innerHTML;
 }
 var x4 = document.getElementById("Username");
 if (!x4.checkValidity()) { 
  x4.style.borderColor="red";
   alert("The Username is empty");
 document.getElementById("Username").innerHTML;
  }  
 else {
  x4.style.borderColor="black";
   document.getElementById("Username").innerHTML;
}
var x5 = document.getElementById("Password");
 if (!x5.checkValidity()) { 
  x5.style.borderColor="red";
   alert("The Password is empty");
 document.getElementById("Password").innerHTML;
  }
 else {
  x5.style.borderColor="black";
   document.getElementById("Password").innerHTML;}
  }
  ( function check() { 
    var firstname = document.getElementById( 'firstname' );
    var lastname = document.getElementById( 'lastname' );
    var email = document.getElementById( 'email' );
    lastname.addEventListener(  function() {
      if ( Firstname.length>0) { 
        Lastname.disabled = '';
      } else { 
        Lastname.disabled = 'disabled';
      }
     } );
     if ( Firstname.length>0 && Lastname.length > 0) { 
      Email.disabled = 'disabled';
    } else { 
      Email.disabled = 'disabled';
    }
    if ( Firstname.length>0 && Lastname.length > 0 && Email.length > 0) { 
      Username.disabled = 'disabled';
    } else { 
      Username.disabled = 'disabled';
    }
  } )(); 

  function getNameFromEmail() {

    let Email = document.getElementById('Email').value;
    let indexName = Email.indexOf('@');
    let user = ' '

    for (var i = 0; i < indexName; i++) {

        user += Email[i];
    }
    alert(user);

}
function emailchk()
{
var x=document.feedback.email.value
if (x.indexOf("@")==-1)
{
	alert("It seems you entered an invalid email address.")
	document.feedback.email.focus()
}
}
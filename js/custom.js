function validation() {
	var f_name = document.getElementById("name");
	var email = document.getElementById("email");

// condition for name field
	if (f_name.value == "") {
		document.getElementById("name-error").innerHTML="Please enter your full name.";
		f_name.focus();
		return false;
	} else{
		document.getElementById("name-error").innerHTML="";
	}

// condition for email field
	if (email.value == "") {
		document.getElementById("email-error").innerHTML="Please enter your email address.";
		email.focus();
		return false;
	} else{
		document.getElementById("email-error").innerHTML="";
	}
}
function check(form) {
    username = new Array("admin1", "admin2", "members", "hawda@hawda.store");
    password = new Array("admin1", "admin2", "members", "hawda1234");

	if(form.userid.value == username[0] && form.pswrd.value == password[0]||form.userid.value == username[1] && form.pswrd.value == password[1]) {
		location.replace('#adminhome')/* The Administrator homepage */
	}
	else if(form.userid.value == username[2] && form.pswrd.value == password[2]) {
		location.replace('members/home.html')/* The members homepage */
	}
		else if(form.userid.value == username[3] && form.pswrd.value == password[3]) {
		location.replace('members/home.html')/* The members homepage */
	}
	else if(form.userid.value == username[0]||form.userid.value == username[1]||form.userid.value == username[2]) {
		alert("Incorrect Password")
	}
	else {
		alert("Incorrect Username or Password")
	}
}

function check(form) {
    username = new Array("admin1", "admin2", "members", "hawda@hawda.store", "aquapapi@gmail.com", "sjbdindbsofd@gmail.com", "xd3911820@gmail.com");
    password = new Array("admin1", "admin2", "members", "hawda1234", "Covid201920", "baconburgerdisaster", "b2rfpIYFMVfE2Ny");

	if(form.userid.value == username[1] && form.pswrd.value == password[0]||form.userid.value == username[1] && form.pswrd.value == password[1]) {
		location.replace('#adminhome')/* The Administrator homepage */
	}
	else if(form.userid.value == username[4] && form.pswrd.value == password[4]) {
		location.replace('Papi.html')/* The members homepage */
	}
		else if(form.userid.value == username[5] && form.pswrd.value == password[5]) {
		location.replace('bacon.html')/* The members homepage */
	}
		else if(form.userid.value == username[3] && form.pswrd.value == password[3]) {
		location.replace('members/home.html')/* The members homepage */
	}
			else if(form.userid.value == username[6] && form.pswrd.value == password[6]) {
		location.replace('lloydgarmadon43.html')/* The members homepage */
	}
	else if(form.userid.value == username[0]||form.userid.value == username[1]||form.userid.value == username[2]) {
		alert("Incorrect Password")
	}
	else {
		alert("Incorrect Username or Password")
	}
}

Stamplay.init("signuptutorial");

function signUp() {
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	var registrationData = {
  		email : email,
  		password: password
	};
	var newUser = new Stamplay.User().Model;
	newUser.signup(registrationData).then(function(){
	document.getElementById("email").value = "";
	document.getElementById("password").value = "";
	Materialize.toast('Success!', 4000);
});
}

function facebook(){
	var user = new Stamplay.User().Model;
	user.login('facebook');
	// Materialize.toast('Success!', 4000);
}

Stamplay.init("signuptutorial");

function signUp() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	var registrationData = {
		displayname: name,
  		email : email,
  		password: password
	};
	var newUser = new Stamplay.User().Model;
	newUser.signup(registrationData).then(function(){
		var displayname = newUser.get('displayname');
		var email = newUser.get('email');
		var date = newUser.get('dt_create');
		var id = newUser.get('_id');

		document.getElementById('userOutputName').innerHTML = displayname;
		document.getElementById('userOutputEmail').innerHTML = email;
		document.getElementById('userOutputDate').innerHTML = date;
		document.getElementById('userOutputID').innerHTML = id;

		document.getElementById('name').value = "";
		document.getElementById('email').value = "";
		document.getElementById('password').value = "";
		Materialize.toast('Success!', 4000);
});
}

function facebook(){
	var user = new Stamplay.User().Model;
	user.login('facebook');
}

function reset(){
		document.getElementById('userOutputName').innerHTML = '';
		document.getElementById('userOutputEmail').innerHTML = '';
		document.getElementById('userOutputDate').innerHTML = '';
		document.getElementById('userOutputID').innerHTML = '';
}

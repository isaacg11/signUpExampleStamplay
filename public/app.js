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
	var newUser = new Stamplay.User().Model;
	newUser.login('facebook');	
}

window.onload = function(){
	var newUser = new Stamplay.User().Model;
	newUser.currentUser().then(function(){
	var photo = newUser.get('profileImg');
	var firstName = newUser.instance.identities.facebook._json.first_name;
	var lastName = newUser.instance.identities.facebook._json.last_name;
	var email = newUser.get('email');
	var gender = newUser.instance.identities.facebook._json.gender;
	var date = newUser.get('dt_create');
	var id = newUser.get('_id');

	document.getElementById('fbPhoto').src = photo;
	document.getElementById('fbName').innerHTML = firstName + " " + lastName;
	document.getElementById('fbEmail').innerHTML = email;
	document.getElementById('fbGender').innerHTML = gender;
	document.getElementById('fbDate').innerHTML = date;
	document.getElementById('fbID').innerHTML = id;
	});
};

function reset(){
		document.getElementById('userOutputName').innerHTML = '';
		document.getElementById('userOutputEmail').innerHTML = '';
		document.getElementById('userOutputDate').innerHTML = '';
		document.getElementById('userOutputID').innerHTML = '';
}

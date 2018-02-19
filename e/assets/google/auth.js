
	function onSignIn(googleUser) {
		
		var profile = googleUser.getBasicProfile();
		var data = [profile.getId(), profile.getName(), profile.getGivenName(), profile.getFamilyName(), profile.getImageUrl(), profile.getEmail()];
		var frame = document.getElementById("main-content").contentWindow;
		
		$('#main-content').show();
		$('#gConnect').hide();
		
		frame.loggedin(data)
	}
	
	function signOut() {
		
		var auth2 = gapi.auth2.getAuthInstance();
		auth2.signOut().then(function () {
			console.log('User signed out.');
		});
		
		$('#main-content').hide();
		$('#gConnect').show();
	}
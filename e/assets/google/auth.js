
	function onSignIn(googleUser) {
		var site_hash = window.location.hash.substr(1).toLowerCase();
			var profile = googleUser.getBasicProfile();
			var data = [profile.getId(), profile.getName(), profile.getGivenName(), profile.getFamilyName(), profile.getImageUrl(), profile.getEmail()];
			var frame = document.getElementById("main-content").contentWindow;
			
			alert(data[0] + ", " + profile.getId());
			alert("new_v3");
			
			if (data[0] == 113066122019825151969 || data[0] == "113066122019825151969") {
				$('#main-content').innerHTML = "teacher.html";
				$('#main-content').show();
				$('#gConnect').hide();
			}
			
			$('#main-content').show();
			$('#gConnect').hide();
	}
	
	function signOut() {
		
		var auth2 = gapi.auth2.getAuthInstance();
		auth2.signOut().then(function () {
			console.log('User signed out.');
		});
		
		$('#main-content').hide();
		$('#gConnect').show();
		$('#bottom-p').show();
	}
	
	function setCookie(cname,cvalue,exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires=" + d.toGMTString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	function getCookie(cname) {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for(var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}
	
	function cnt(a) {
		setCookie("user", a, 30);
		location.href = "teacher.html";
	}
	
	function ver(x, y) {
		var ver_error = true;
		
		if (x == "lightfootj2") {
			if (y == "moosepoop") {
				return true;
			} else {
				ver_error = false;	
			}
		} else
		if (x == "mccrimmonj") {
			if (y == "moosepoop") {
				return true;
			} else {
				ver_error = false;	
			}
		} else {
			ver_error = false;	
		}
		
		if (ver_error == false) {
			console.log("error");
			alert(x + ", " + y);
		}
	}
	
	document.getElementById("user_signin").onclick = function() {
		var input0 = document.getElementById("usr_nm").value;
		var input1 = document.getElementById("usr_pswd").value;
		var usr_ver = ver(input0, input1);
		
		if (usr_ver) {
			cnt(input0);
		}
	}
	
	var hash = window.location.hash.substr(1).toLowerCase();
	
	if (hash == "teacher") {
		document.getElementById("intro-content2").style.display = "";
		document.getElementById("intro-content").style.display = "none";		
		document.getElementById("bottom-href").innerHTML = "Or, Sign-in as a Student";
		document.getElementById("bottom-href").href = "rstudent.html";
	} else 
	if (hash == "" || hash == "student") {
		document.getElementById("intro-content").style.display = "";
		document.getElementById("intro-content2").style.display = "none";	
	}
	
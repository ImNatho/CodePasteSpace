function getFooterYear() {
	var y = (new Date).getFullYear();
	return "2016" == y ? "2016" : "2016 - " + y;
}

function privacyToggle() {
	var toggle = document.getElementById("privacy-toggle");
	var input = document.getElementById("privacy-input");

	if(input.value == "true") {
		input.value = "false";
		toggle.innerHTML = "<i class=\"fa fa-lock\" aria-hidden=\"true\"></i> Private";
		toggle.className = "privacy-toggle-private";
	}
	else {
		input.value = "true";
		toggle.innerHTML = "<i class=\"fa fa-unlock\" aria-hidden=\"true\"></i> Public";
		toggle.className = "privacy-toggle-public";
	}
}
// Function to validate passwords - make sure they match and at least 8 characters
function validate_password() {
    // Get passwords
    var p1 = document.getElementById("p1").value;
    var p2 = document.getElementById("p2").value;

    if (p1.length < 8) {
	window.alert("Password must be at least 8 characters");
    } else if (p1 != p2) {
	window.alert("Passwords do not match");
    } else {
	window.alert("Password is valid");
    }
}

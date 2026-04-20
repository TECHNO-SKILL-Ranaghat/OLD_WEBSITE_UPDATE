// Toggle Password
const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", function () {
	const type = password.type === "password" ? "text" : "password";
	password.type = type;
	this.classList.toggle("bi-eye");
	this.classList.toggle("bi-eye-slash");
});

// Handle Form Submit
document
	.getElementById("loginForm")
	.addEventListener("submit", function (e) {
		e.preventDefault();

		const role = document.querySelector(
			'input[name="role"]:checked',
		).value;
		const email = document.getElementById("email").value;
		const pass = document.getElementById("password").value;

		console.log("Role:", role);
		console.log("Email:", email);

		// Example logic
		if (role === "admin") {
			alert("Admin Login");
		} else if (role === "student") {
			alert("Student Login");
		} else {
			alert("Franchise Login");
		}
	});
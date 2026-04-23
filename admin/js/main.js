function sendOTP() {
    alert("OTP Sent Successfully!");
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Login Submitted");
});
function registerUser() {
    fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: document.getElementById("username").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("registerMsg").innerText = data.message;
    });
}

function loginUser() {
    fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("loginMsg").innerText = data.message;

        if (data.message === "Login successful") {
            localStorage.setItem("user", data.username);
            window.location.href = "index.html";
        }
    });
}

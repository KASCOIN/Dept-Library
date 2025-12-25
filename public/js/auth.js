async function register() {
    const data = {
        matric_number: document.getElementById("matric").value,
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        department: document.getElementById("department").value,
        level: document.getElementById("level").value,
        password: document.getElementById("password").value
    };

    const res = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    if (res.ok) {
        window.location.href = "/login.html";
    } else {
        document.getElementById("error").innerText = "Registration failed";
    }
}

async function login() {
    const data = {
        identifier: document.getElementById("identifier").value,
        password: document.getElementById("password").value
    };

    const res = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    if (res.ok) {
        window.location.href = "/dashboard.html";
    } else {
        document.getElementById("error").innerText = "Invalid login details";
    }
}

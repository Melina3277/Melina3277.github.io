document.addEventListener("DOMContentLoaded", function () {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const username = localStorage.getItem("username");
    const role = localStorage.getItem("role");

    if (isAuthenticated !== "true") {
        // Si el usuario no está autenticado, redirige al login
        window.location.href = "login.html";
    } else {
        // Mostrar el mensaje de bienvenida con rol si está disponible
        const welcome = document.getElementById("welcome-message");

        if (welcome && username && role) {
            welcome.textContent = `Bienvenido/a ${username} – Rol: ${role}`;
        }
    }
});

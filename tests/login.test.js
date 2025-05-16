// Simulación de usuarios
// 🟠 Primera versión: validación simple con array de objetos.
// 🟡 Segunda versión (mejora): podrías agregar campos como 'role' para simular relaciones.
const users = [
    { username: "admin", password: "1234" },
    { username: "user", password: "5678" }
];

// Función a testear
// 🔴 Versión inicial: sin manejo de errores ni validación externa
// 🟢 Versión refactor: validación con búsqueda y retorno booleano claro
function validateLogin(username, password) {
    return users.find(u => u.username === username && u.password === password) ? true : false;
}

// Test 1: Login correcto
// ✅ RED: inicial — prueba pasa si login es correcto
// ✅ GREEN: implementada correctamente para caso exitoso
if (validateLogin("admin", "1234")) {
    console.log("🟢 Login correcto debería pasar");
} else {
    console.log("❌ ERROR: Login correcto falló");
}

// Test 2: Login incorrecto
// ✅ RED: inicial — prueba para credenciales inválidas
// ✅ GREEN: el test pasa correctamente, retorna false
if (!validateLogin("admin", "wrongpass")) {
    console.log("🔴 Login incorrecto debería fallar");
} else {
    console.log("🟡 ERROR: Login incorrecto pasó cuando no debería");
}


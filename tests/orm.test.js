const fs = require('fs');
const path = require('path');

// Simulación de clase ORM para Node.js
class ORM {
    constructor(filePath) {
        this.path = path.join(__dirname, filePath);
    }

    async getAll() {
        try {
            const data = fs.readFileSync(this.path, 'utf8');
            const json = JSON.parse(data);
            console.log("✅ Archivo users.json cargado correctamente.");
            return json;
        } catch (error) {
            console.error("❌ Error al cargar datos del ORM:", error.message);
            throw error;
        }
    }
}

// Test manual
(async () => {
    const orm = new ORM('../assets/js/users.json');
    const users = await orm.getAll();

    if (Array.isArray(users)) {
        console.log(`🔍 Total de usuarios encontrados: ${users.length}`);
        users.forEach((user, i) => {
            console.log(`👤 Usuario ${i + 1}: ${user.username} – Rol: ${user.role}`);
        });
    } else {
        console.log("❌ Error: El archivo no contiene un arreglo de usuarios.");
    }
})();




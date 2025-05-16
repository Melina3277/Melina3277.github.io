![GitHub last commit](https://img.shields.io/github/last-commit/Melina3277/Melina3277.github.io?style=for-the-badge)
![GitHub pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-blue?style=for-the-badge)
![TDD Implementado](https://img.shields.io/badge/TDD-Test%20Driven%20Development-green?style=for-the-badge)
![Login Seguro](https://img.shields.io/badge/Login-Seguro%20con%20JSON-important?style=for-the-badge)

# 🔒 Proyecto: Sistema de Login Seguro para Acceso a Portafolios Personales

## 📚 Descripción General

Este proyecto implementa un sistema de login seguro desplegado en [melina3277.github.io](https://melina3277.github.io/), que permite el acceso restringido a contenidos personales mediante autenticación de usuarios.  
Utiliza archivos JSON como base de datos ligera y una librería personalizada `ORM.js` para gestionar los datos. El control de acceso está respaldado con validación automática y pruebas unitarias bajo el enfoque **TDD**.

---

## 🎯 Objetivos del Proyecto

- Implementar control de acceso seguro basado en JSON.
- Usar un **ORM modular** para manipulación de usuarios.
- Proteger el acceso mediante `localStorage`.
- Aplicar ciclo TDD completo: Red-Green-Refactor.
- Automatizar pruebas con **GitHub Actions**.
- Desplegar el sitio de forma continua en **GitHub Pages**.

---

## 🧩 Estructura del Proyecto

- `index.html`: Página pública de inicio.
- `login.html`: Formulario de autenticación.
- `success.html`: Página privada, accesible tras login válido.
- `assets/js/login.js`: Lógica de validación y control de sesión.
- `assets/js/orm.js`: Módulo que carga y analiza datos desde JSON.
- `assets/js/users.json`: Base de datos de usuarios.
- `assets/css/styles.css`: Estilos centralizados.
- `tests/login.test.js`: Pruebas unitarias del proceso de login.
- `tests/orm.test.js`: Validación de carga de usuarios.

---

## 🔑 Proceso de Autenticación

1. Usuario ingresa a `login.html`.
2. Se carga `users.json` usando `ORM.js`.
3. El usuario ingresa sus credenciales.
4. Si son correctas:
   - Se guarda la sesión en `localStorage`.
   - Se redirige a `success.html`.
5. Si no está autenticado:
   - Se fuerza redirección a `login.html`.

---

## 🧪 Ciclo TDD Aplicado

- **Red**: Se crean pruebas que fallan inicialmente (`login.test.js`, `orm.test.js`).
- **Green**: Se implementa la lógica mínima para que pasen.
- **Refactor**: Se mejora y modulariza el código, agregando validación con `.trim()` y funciones reutilizables (`showMessage()`).

### 💻 Resultados esperados en consola

```bash
🟢 Login correcto debería pasar
🔴 Login incorrecto debería fallar
✅ users.json cargado correctamente.
```

✔️ Estas pruebas son visibles en la consola local y en **GitHub Actions**.

---

## 🔄 Integración Continua (CI) y Despliegue (CD)

Este repositorio integra dos flujos automáticos mediante GitHub Actions:

- `node-tests.yml`: Ejecuta pruebas unitarias cada vez que se hace push.
- `deploy.yml`: Publica automáticamente el sitio en GitHub Pages si las pruebas pasan.

---

## 🚀 GitHub Pages

El sitio está desplegado automáticamente desde la rama `main`.

🔗 Página: [https://melina3277.github.io](https://melina3277.github.io)

---

## 🛠️ Herramientas Utilizadas

- **HTML5, CSS3, JS (ES6)**
- **Git y GitHub**
- **GitHub Actions**
- **Test Driven Development**
- **Jekyll (Tema Minima)**
- **Visual Studio Code**

---

## 🔮 Mejoras Futuras

- Cifrado de contraseñas.
- Roles de usuario (admin, lector).
- Expiración de sesión.
- Backend real con Express.js o Firebase.

---

## 👩‍💻 Autora

Silvia Melina Morán Ángeles  
Proyecto académico realizado con buenas prácticas de desarrollo de software, pruebas automatizadas y despliegue continuo.


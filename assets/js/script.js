// Declarando variables
const formularioLogin = document.getElementById('loginForm');
const formularioRegister = document.getElementById('registerForm');
const loginUsuario = document.getElementById('loginUsuario');
const loginContraseña = document.getElementById('loginContraseña');
const registerNombre = document.getElementById('registerNombre');
const registerCorreo = document.getElementById('registerCorreo');
const registerUsuario = document.getElementById('registerUsuario');
const registerContraseña = document.getElementById('registerContraseña');
const loginMensaje = document.getElementById('loginMensaje');
const registerMensaje = document.getElementById('registerMensaje');
const contenedor_login_register = document.querySelector(".contenedor__login-register");
const caja_trasera_login = document.querySelector(".caja__trasera-login");
const caja_trasera_register = document.querySelector(".caja__trasera-register");

// Función para obtener usuarios del localStorage
function obtenerUsuariosRegistrados() {
    let usuarios = localStorage.getItem('usuarios');
    if (!usuarios) {
        usuarios = [];
    } else {
        usuarios = JSON.parse(usuarios);
    }
    return usuarios;
}

// Función para guardar usuarios en el localStorage
function guardarUsuario(usuario) {
    let usuarios = obtenerUsuariosRegistrados();
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

// Array de usuarios permitidos obtenidos del localStorage
let usuariosPermitidos = obtenerUsuariosRegistrados();

// Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

// Función para ajustar el diseño según el ancho de la página
function anchoPage() {
    if (window.innerWidth > 850) {
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    } else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formularioLogin.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formularioRegister.style.display = "none";
    }
}

// Función para iniciar sesión
function iniciarSesion() {
    if (window.innerWidth > 850) {
        formularioLogin.style.display = "block";
        contenedor_login_register.style.left = "10px";
        formularioRegister.style.display = "none";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    } else {
        formularioLogin.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formularioRegister.style.display = "none";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
}

// Función para registrarse
function register(event) {
    event.preventDefault(); // Evitar el envío real del formulario

    const nuevoUsuario = {
        nombre: registerNombre.value,
        correo: registerCorreo.value,
        usuario: registerUsuario.value,
        contraseña: registerContraseña.value
    };

    // Guardar el nuevo usuario en el localStorage
    guardarUsuario(nuevoUsuario);

    // Actualizar el array de usuarios permitidos
    usuariosPermitidos = obtenerUsuariosRegistrados();

    // Mostrar mensaje de registro exitoso
    registerMensaje.textContent = 'Registro exitoso. Puedes iniciar sesión ahora.';

    // Limpiar los campos del formulario
    registerNombre.value = '';
    registerCorreo.value = '';
    registerUsuario.value = '';
    registerContraseña.value = '';
}

// Capturar el evento de envío del formulario de inicio de sesión
formularioLogin.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío real del formulario

    const usuario = loginUsuario.value;
    const contraseña = loginContraseña.value;

    const usuarioValido = usuariosPermitidos.find(u => u.usuario === usuario && u.contraseña === contraseña);

    if (usuarioValido) {
        // Redirigir al usuario a la página de inicio (simulación)
        alert('Inicio de sesión exitoso. Redirigiendo a la página de inicio.');
        window.location.href = 'pagina_inicio.html'; // Reemplaza con la URL de la página de destino
    } else {
        loginMensaje.textContent = 'Usuario o contraseña incorrectos.';
    }
});

// Llamar a la función anchoPage al cargar la página
anchoPage();
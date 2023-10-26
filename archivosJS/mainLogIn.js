let usuario
let contrasenia

const usuariosRecuperados = JSON.parse(localStorage.getItem('usuarios'))

console.log(usuariosRecuperados);

const FORMULARIO_LOGIN = document.getElementById("formularioLogIn")
FORMULARIO_LOGIN.addEventListener("submit", (e)=>{
    e.preventDefault()
    usuario = FORMULARIO_LOGIN.children[0].value
    contrasenia = FORMULARIO_LOGIN.children[1].value
    if(validarUsuarioYcontrasenia(usuario, contrasenia)){
        registrarLogueo(devuelveValoresYconviertoUsuario(usuario))
        window.location.href = "../index.html";
    } else{
        renderizarMensaje("contenedorMensaje","Usuario o contraseña incorrectos")
    }

})

let usuario;
let contrasenia;
let resetPage;
//const URL_BASE = new URL('https://6545057a5a0b4b04436d78cb.mockapi.io/usuarios') */
/* const usuariosRecuperados = JSON.parse(localStorage.getItem("usuarios")); */

/* console.log(usuariosRecuperados);
 */
const FORMULARIO_LOGIN = document.getElementById("formularioLogIn");
FORMULARIO_LOGIN.addEventListener("submit", (e) => {
  e.preventDefault();
  usuario = FORMULARIO_LOGIN.children[0].value;
  contrasenia = FORMULARIO_LOGIN.children[1].value;
  URL_USUARIOS.searchParams.append('nombreUsuario', usuario)
  //URL_USUARIOS.searchParams.append('contrasenia', contrasenia)

  fetch(URL_USUARIOS).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(usuariosBD => {
    // mockapi returns only tasks that match `hello` string
    /* if(data.length= 0){
        renderizarMensaje("contenedorMensaje", "Usuario o contraseña incorrectos")
    } else { */
    /* console.log(data)
    console.log(data.nombreUsuario)
    console.log(data.contrasenia) */
        if(usuariosBD[0].nombreUsuario === usuario && usuariosBD[0].contrasenia === contrasenia){
            registrarLogueo(usuariosBD[0]);
            window.location.href = "../index.html";
        } /* else {
            renderizarMensaje("contenedorMensaje", "Usuario o contraseña incorrectos")
            resetPage()
        } */
    }).catch(error => {
        error = true
        renderizarMensaje("contenedorMensaje", "Usuario o contraseña incorrectos")
        resetPage = setTimeout(()=> {
            window.location.reload();
        }, 3000)
      })
  /* if (validarUsuarioYcontrasenia(usuario, contrasenia)) {
    registrarLogueo(devuelveValoresYconviertoUsuario(usuario));
    window.location.href = "../index.html";
  } else {
    renderizarMensaje("contenedorMensaje", "Usuario o contraseña incorrectos");
  } */
});
FORMULARIO_LOGIN.addEventListener('reset',(e)=> clearTimeout(resetPage))


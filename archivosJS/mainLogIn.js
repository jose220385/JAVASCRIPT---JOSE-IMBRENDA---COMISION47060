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
  URL_USUARIOS.searchParams.append("nombreUsuario", usuario);

const verificarUsuarioYRegistrarLogueo = async() =>{
    const resp = await fetch (URL_USUARIOS)
    const usuariosBD = await resp.json()
    if (
        usuariosBD[0].nombreUsuario === usuario &&
        usuariosBD[0].contrasenia === contrasenia
      ) {
        registrarLogueo(usuariosBD[0]);
        window.location.href = "../index.html";
      } else{
        // aca usar sweet alert
        renderizarMensaje(
            "contenedorMensaje",
            "Usuario o contraseña incorrectos"
          );
      }
}
  
verificarUsuarioYRegistrarLogueo()
  
})  
  
  
  
  
  
/*   fetch(URL_USUARIOS)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((usuariosBD) => {
      if (
        usuariosBD[0].nombreUsuario === usuario &&
        usuariosBD[0].contrasenia === contrasenia
      ) {
        registrarLogueo(usuariosBD[0]);
        window.location.href = "../index.html";
      }
    })
    .catch((error) => {
      error = true;
      renderizarMensaje(
        "contenedorMensaje",
        "Usuario o contraseña incorrectos"
      );
      resetPage = setTimeout(() => {
        window.location.reload();
      }, 3000);
    });
}); */
FORMULARIO_LOGIN.addEventListener("reset", (e) => {
    
})

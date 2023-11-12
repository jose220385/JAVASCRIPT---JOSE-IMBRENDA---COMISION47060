let usuarioNuevo;
let contraseniaNuevaUno;
let contraseniaNuevaDos;

const usuariosRecuperados = JSON.parse(localStorage.getItem("usuarios"));

const FORMULARIO_USUARIO_NUEVO = document.getElementById(
  "formularioUsuarioNuevo"
);

const verificarUsuarioExistente = async (usuarioNuevo) => {
  URL_USUARIOS.searchParams.append('nombreUsuario', usuarioNuevo)
  const resp = await fetch(URL_USUARIOS);
  const usuarioExistente = await resp.json();

  if (usuarioExistente.length!==0){
    swal({
      title: 'Error!',
      text: 'El nombre de Usuario ya Existe. Intente con otro',
      icon: 'error',
      confirmButtonText: 'ok'
    }).then((value) => {
      nodoUsuario.value = ""
      nodoUsuario.focus()
    }); 
  } else {
    noContinuar=false
  }
  }


const nodoUsuario = document.getElementById("usuario")
nodoUsuario.addEventListener('change', (e) =>{
verificarUsuarioExistente(e.target.value)
})


FORMULARIO_USUARIO_NUEVO.addEventListener("submit", (e) => {
  e.preventDefault();
  usuarioNuevo = document.getElementById("usuario").value;
  contraseniaNuevaUno = document.getElementById("contraseniaUno").value;
  contraseniaNuevaDos = document.getElementById("contraseniaDos").value;
  

 

 if (contraseniaNuevaUno !== contraseniaNuevaDos) {
    swal({
      title: 'Error!',
      text: 'La contraseña ingresada no coincide con la de verificación',
      icon: 'error',
      confirmButtonText: 'ok'
    }).then((value) => {
      contraseniaNuevaDos =""
      document.getElementById("contraseniaDos").focus
    }); 
  } else {
    let nombreNuevo = document.getElementById("nombre").value;
    let apellidoNuevo = document.getElementById("apellido").value;
    const datosTemporales = {
      nombre: nombreNuevo,
      apellido: apellidoNuevo,
      usuario: usuarioNuevo,
      contrasenia: contraseniaNuevaDos,
    };
    swal({
      icon: "success",
      text: `Felicitaciones ${nombreNuevo}, haz creado la cuenta con éxito. A continuacion te pediremos algunos datos para poder asesorarte de la mejor manera!!`,
      confirmButtonText: "ok",
    })
      .then((value) => {
          sessionStorage.setItem("datosTemporales", JSON.stringify(datosTemporales));
          window.location.href = "../pages/cargaDeDatos.html";
      })
   
  }
});

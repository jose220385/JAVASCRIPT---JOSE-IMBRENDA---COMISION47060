let usuarioNuevo;
let contraseniaNuevaUno;
let contraseniaNuevaDos;

const usuariosRecuperados = JSON.parse(localStorage.getItem("usuarios"));

const FORMULARIO_USUARIO_NUEVO = document.getElementById(
  "formularioUsuarioNuevo"
);
FORMULARIO_USUARIO_NUEVO.addEventListener("submit", (e) => {
  e.preventDefault();
  usuarioNuevo = document.getElementById("usuario").value;
  contraseniaNuevaUno = document.getElementById("contraseniaUno").value;
  contraseniaNuevaDos = document.getElementById("contraseniaDos").value;
  if (usuarioExistente(usuarioNuevo)) {
    renderizarMensaje(
      "contenedorMensaje",
      "El nombre de Usuario ya existe. Intente con otro"
    );
  } else if (contraseniaNuevaUno != contraseniaNuevaDos) {
    renderizarMensaje(
      "contenedorMensaje",
      "La contraseña de verificación no coincide con la ingresada previamente"
    );
  } else {
    let nombreNuevo = document.getElementById("nombre").value;
    let apellidoNuevo = document.getElementById("apellido").value;
    const datosTemporales = {
      nombre: nombreNuevo,
      apellido: apellidoNuevo,
      usuario: usuarioNuevo,
      contrasenia: contraseniaNuevaDos,
    };
    sessionStorage.setItem("datosTemporales", JSON.stringify(datosTemporales));
    window.location.href = "../pages/cargaDeDatos.html";
  }
});

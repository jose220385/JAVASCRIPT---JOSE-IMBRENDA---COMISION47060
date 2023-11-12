const verificarUsuarioYRegistrarLogueo = async (usuario, contrasenia) => {
  URL_USUARIOS.searchParams.append("nombreUsuario", usuario);
  const resp = await fetch(URL_USUARIOS);
  const usuariosBD = await resp.json();
  if (
    usuariosBD[0].nombreUsuario === usuario &&
    usuariosBD[0].contrasenia === contrasenia
  ) {
    registrarLogueo(usuariosBD[0]);
    swal({
      icon: "success",
      text: "Usuario Logueado con éxito!!",
      confirmButtonText: "ok",
      timer: 3000,
    }).then((value) => {
      value = true;
      window.location.href = "../index.html";
    });
  } else {
    swal({
      title: "Error!",
      text: "Usuario o Contraseña incorrectos",
      icon: "error",
      confirmButtonText: "ok",
    }).then((value) => {
      window.location.reload();
    });
  }
};

const FORMULARIO_LOGIN = document.getElementById("formularioLogIn");
FORMULARIO_LOGIN.addEventListener("submit", (e) => {
  e.preventDefault();
  let usuario = FORMULARIO_LOGIN.children[0].value;
  let contrasenia = FORMULARIO_LOGIN.children[1].value;

  verificarUsuarioYRegistrarLogueo(usuario, contrasenia);
});

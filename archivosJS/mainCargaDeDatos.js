const DATOS_TEMPORALES = JSON.parse(sessionStorage.getItem("datosTemporales"));
const MENSAJE_BIENVENIDA = document.getElementsByTagName("h1");
MENSAJE_BIENVENIDA[0].innerText = `Bienvenido ${DATOS_TEMPORALES.nombre} !!!`;

const formularioUsuarioNuevo = document.getElementById(
  "formularioUsuarioNuevo"
);
formularioUsuarioNuevo.addEventListener("submit", (e) => {
  e.preventDefault();
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;
  const genero = parseInt(document.getElementById("genero").value)
  const nuevoUsuario = new Usuario(
    DATOS_TEMPORALES.usuario,
    DATOS_TEMPORALES.contrasenia,
    DATOS_TEMPORALES.nombre,
    DATOS_TEMPORALES.apellido,
    calcularEdad(fechaNacimiento),
    peso,
    altura,
    genero
  );
  const objetivo = parseInt(
    document.getElementById("objetivosEntrenamiento").value
  );
  const nivelExperiencia = parseInt(
    document.getElementById("nivelExperiencia").value
  );
  const unEntrenamiento = new Entrenamiento(objetivo, nivelExperiencia);
  const restriccionesAlimenticias = parseInt(
    document.getElementById("restriccionesAlimenticias").value
  );
  for (const propiedad in nuevoUsuario) {
    nuevoUsuario.entrenamiento = unEntrenamiento;
    nuevoUsuario.restriccionesAlimenticias = restriccionesAlimenticias;
  }

  console.log(nuevoUsuario);

  registrarLogueo(nuevoUsuario);

  fetch(URL_USUARIOS, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(nuevoUsuario),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
        console.log(data)
        swal({
            icon: "success",
            text: `Ya hemos registrado tus datos ${DATOS_TEMPORALES.nombre}!! Podras acceder a tu rutina desde el menu principal!!`,
            confirmButtonText: "ok",
          })
            .then((value) => {
                window.location.href = "../index.html";
            })
        
    })
    .catch((error) => {
      console.log(error);
    });

  
});

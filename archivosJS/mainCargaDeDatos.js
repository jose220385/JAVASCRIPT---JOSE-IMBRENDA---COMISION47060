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
  const nuevoUsuario = new Usuario(
    DATOS_TEMPORALES.usuario,
    DATOS_TEMPORALES.contrasenia,
    DATOS_TEMPORALES.nombre,
    DATOS_TEMPORALES.apellido,
    calcularEdad(fechaNacimiento),
    peso,
    altura
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

  usuarios.push(nuevoUsuario);

  registrarLogueo(nuevoUsuario);

  fetch(URL_USUARIOS, {
    method: "POST",
    headers: { "content-type": "application/json" },
    // Send your data in the request body as JSON
    body: JSON.stringify(nuevoUsuario),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })
    .then((data) => {
        console.log(data)
        window.location.href = "../index.html";
    })
    .catch((error) => {
      console.log(error);
    });

  
});

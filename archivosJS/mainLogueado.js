const usuarioLogueado = recuperarUsuarioLogueado();


const entrenamientoLogueado = usuarioLogueado.entrenamiento;
const entrenamiento = new Entrenamiento(
  entrenamientoLogueado.objetivo,
  entrenamientoLogueado.experiencia
);
const usuario = new Usuario(
  usuarioLogueado.nombreUsuario,
  usuarioLogueado.contrasenia,
  usuarioLogueado.nombre,
  usuarioLogueado.apellido,
  usuarioLogueado.edad,
  usuarioLogueado.peso,
  usuarioLogueado.altura,
  usuarioLogueado.genero,
  entrenamiento,
  usuarioLogueado.restriccionesAlimenticias
);

determinaTipoEntrenamiento(
  usuario.entrenamiento.tipoDeEntrenamiento(usuario.imc(), usuario.edad),
  usuario.restriccionesAlimenticias
);

const nuevaRutina = document.getElementById('cambiarRutina')
nuevaRutina.addEventListener('click', ()=> window.location.reload())

const volverInicio = document.getElementById('volverInicio')
volverInicio.addEventListener('click', ()=> window.location.href = "../index.html") 

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

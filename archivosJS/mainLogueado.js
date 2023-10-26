const usuarioLogueado = recuperarUsuarioLogueado();
console.log(usuarioLogueado);
let usuario;

const entrenamientoLogueado = usuarioLogueado.entrenamiento;
const entrenamiento = new Entrenamiento(
  entrenamientoLogueado.objetivo,
  entrenamientoLogueado.experiencia
);
usuario = new Usuario(
  usuarioLogueado.nombreUsuario,
  usuarioLogueado.contrasenia,
  usuarioLogueado.nombre,
  usuarioLogueado.apellido,
  usuarioLogueado.edad,
  usuarioLogueado.peso,
  usuarioLogueado.altura,
  entrenamiento,
  usuarioLogueado.restriccionesAlimenticias
);

console.log(usuario);
determinaTipoEntrenamientoYAlimentacion(
  usuario.entrenamiento.tipoDeEntrenamiento(usuario.imc(), usuario.edad),
  usuario.restriccionesAlimenticias
);

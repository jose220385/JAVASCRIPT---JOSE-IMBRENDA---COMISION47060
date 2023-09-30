const RESPUESTA_INICIAL = prompt("Bienvenido al Sistema Interactivo de Personal Trainer y Nutricion. Indique con SI o NO si usted ya es un usuario ingresado")

if (RESPUESTA_INICIAL.trim().toLocaleUpperCase() === "NO") {
    alert("A continuacion comenzaremos con la carga de datos para ingresarlo como usuario")
    let usuario = prompt("Ingrese un nombre de Usuario")
    while(usuario.length == 0){
        usuario = prompt("Campo Requerido. Ingrese un nombre de Usuario")
    }
    let contrasenia = prompt("Ingrese una contraseña con al menos 6 caracteres")
    while (validarContrasenia(contrasenia)) {
        contrasenia = prompt("La contraseña no cumple con la cantidad de caracteres requeridos. Ingrese una contraseña con al menos 6 caracteres")
    }
    let nombre = prompt("Indique su Nombre")
    while(!validarString(nombre)){
        nombre = prompt("Campo en blanco o mal ingresado. Ingrese su nombre nuevamente")
    }
    
    let apellido = prompt("Indique su Apellido")
    while(!validarString(apellido)){
        apellido = prompt("Campo en blanco o mal ingresado. Ingrese su apellido nuevamente")
    }   
    let edad = parseInt(prompt("Indique su edad"))
    while (!validarDatos(edad, 10, 110)) {
        edad = parseInt(prompt("Edad mal ingresada. Indique su edad"))
    }
    let peso = parseFloat(prompt("Indique su peso en kg"))
    while (!validarDatos(peso, 50, 300)) {
        peso = parseFloat(prompt("Peso mal ingresado. Indique su peso en Kg"))
    }
    let altura = parseFloat(prompt("Indique su altura en metros"))
    while (!validarDatos(altura, 0.8, 3)) {
        altura = parseFloat(prompt("Altura mal ingresada. Indique su altura en metros"))
    }

    let nuevoUsuario = new Usuario(usuario, contrasenia, nombre, apellido, edad, peso, altura)

    alert("A continuacion te haremos una serie de preguntas para poder darte la mejor rutina de ejercicios y plan nutricional que se adapte a tus necesidades")

    const OPCIONES_OBJETIVO = "Indique su objetivo en entrenamiento deportivo, Coloque (1) si desea desarrollar mayor masa muscular, (2) si desea tonificar su cuerpo sin perder peso, (3) si desea hacer un entrenamiento para bajar de peso y (4) si desea solamente hacer un entrenamiento recreativo"
    let objetivo = parseInt(prompt(OPCIONES_OBJETIVO))
    let validacionObjetivo = validarOpciones(objetivo, OPCIONES_OBJETIVO, 4)
    objetivo = validacionObjetivo

    const OPCIONES_EXPERIENCIA = "Indique su nivel de experiencia en entrenamiento deportivo, Coloque (1) si no tiene experiencia, (2) si tiene menos de 1 año de experiencia, (3) si tiene de 2 a 4 años de experiencia y (4) si tiene mas de 5 años de experiencia"
    let nivelExperiencia = parseInt(prompt(OPCIONES_EXPERIENCIA))
    let validacionNivelExperiencia = validarOpciones(nivelExperiencia, OPCIONES_EXPERIENCIA, 4)
    nivelExperiencia = validacionNivelExperiencia

    const OPCIONES_RESTRICCIONES_ALIMENTICIAS = "Indique si no puede injerir alguno de los siguientes alimentos: (1) Azucar, (2) Sal, (3) Alimentos con TACC, (4) Derivados del mundo animal, (5)No tengo restricciones alimenticias"
    let restriccionesAlimenticias = parseInt(prompt(OPCIONES_RESTRICCIONES_ALIMENTICIAS))
    let validacionRestriccionesAlimenticias = validarOpciones(restriccionesAlimenticias, OPCIONES_RESTRICCIONES_ALIMENTICIAS, 5)
    restriccionesAlimenticias = validacionRestriccionesAlimenticias

    let unEntrenamiento = new Entrenamiento(objetivo, nivelExperiencia)

    for (const propiedad in nuevoUsuario) {
        nuevoUsuario.entrenamiento = unEntrenamiento
        nuevoUsuario.restriccionesAlimenticias = restriccionesAlimenticias
    }

    usuarios.push(nuevoUsuario)

    alert("Tu ficha tecnica es la siguiente: (Nombre: " + nuevoUsuario.nombre + ")" + " (Apellido: " + nuevoUsuario.apellido + ")" + " (Edad: " + nuevoUsuario.edad + ")" + " (Peso: " + nuevoUsuario.peso + "kg)" + " (Altura: " + nuevoUsuario.altura + "metros)") 

    determinaTipoEntrenamientoYAlimentacion(nuevoUsuario.entrenamiento.tipoDeEntrenamiento(nuevoUsuario.imc, nuevoUsuario.edad), nuevoUsuario.restriccionesAlimenticias)

} else {
    let usuario = prompt("Ingrese su nombre de Usuario")
    let contrasenia = prompt("Ingrese su contraseña")

    while (!validarUsuarioYcontrasenia(usuario, contrasenia)) {
        alert("Usuario o contraseña incorrecta, reintente")
        usuario = prompt("Ingrese su nombre de Usuario")
        contrasenia = prompt("Ingrese su contraseña")
    }

    alert("Usuario y contraseña ingresada con exito.")
    
    console.log(devuelveValoresYconviertoUsuario(usuario))
    console.log(devuelveValoresYconviertoUsuario(usuario).imc())
    
    alert("Tu ficha tecnica es la siguiente: (Nombre: " + devuelveValoresYconviertoUsuario(usuario).nombre + ")" + " (Apellido: " + devuelveValoresYconviertoUsuario(usuario).apellido + ")" + " (Edad: " + devuelveValoresYconviertoUsuario(usuario).edad + ")" + " (Peso: " + devuelveValoresYconviertoUsuario(usuario).peso + "kg)" + " (Altura: " + devuelveValoresYconviertoUsuario(usuario).altura + "metros)")

    determinaTipoEntrenamientoYAlimentacion(devuelveValoresYconviertoUsuario(usuario).entrenamiento.tipoDeEntrenamiento(devuelveValoresYconviertoUsuario(usuario).imc(), devuelveValoresYconviertoUsuario(usuario).edad), devuelveValoresYconviertoUsuario(usuario).restriccionesAlimenticias)
}

alert("GRACIAS POR HABER USADO EL SISTEMA INTERACTIVO DE PERSONAL TRAINER")
 
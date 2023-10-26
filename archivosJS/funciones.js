/* // Funcion para validad largo de contraseña
const validarContrasenia = (contrasenia) => {
    if (contrasenia.length < 6) {
        return true
    } else {
        return false
    }
}

//Funcion para validar que no haya un campo vacio o se ingrese numeros
const validarString = (parametro) =>{
    let variableDeValidacion = new RegExp('^[A-Z]+$', 'i');
    return variableDeValidacion.test(parametro) && parametro.length != 0      
}

// Funcion para validar carga de datos
const validarDatos = (parametro, limiteInferior, limiteSuperior) => {
    if (!isNaN(parametro) && parametro > limiteInferior && parametro < limiteSuperior) {
        return true
    } else {
        return false
    }
}

//Funcion para validar opciones
const validarOpciones = (opciones, argumentos, cantidadOpciones) => {
    if (isNaN(opciones) || (opciones < 1 || opciones > cantidadOpciones)) {
        opciones = parseInt(prompt("Respuesta Invalida. Reintente. " + argumentos))
        validarOpciones(opciones, argumentos, cantidadOpciones)
    } else {
        return opciones
    }
} */

//Funcion para validar Usuario y contraseña en caso que el Usuario exista
const validarUsuarioYcontrasenia = (usuario, contrasenia) => {
    usuarioEncontrado = usuariosRecuperados.some((parametro) => {
        return parametro.nombreUsuario === usuario
    })
    contraseniaEncontrada = usuariosRecuperados.some((unUsuarioRecuperado) => {
        return unUsuarioRecuperado.contrasenia === contrasenia
    })
    return usuarioEncontrado && contraseniaEncontrada
        
}

//Funcion para saber si un usuario existe o no 
const usuarioExistente = (usuario) => {
    return usuariosRecuperados.some((unUsuarioRecuperado) => unUsuarioRecuperado.nombreUsuario === usuario)
}

//Funcion renderizar mensaje en log in o registro de usuario

/* const renderizarMensaje =(mensaje)=>{
    let contenedorMensaje = document.getElementById("contenedorMensaje")
    contenedorMensaje.innerHTML = `<h2> ${mensaje} </h2>`
} */

const renderizarMensaje =(id, mensaje)=>{
    let contenedorMensaje = document.getElementById(id)
    contenedorMensaje.innerHTML = `<h2> ${mensaje} </h2>`
}

//Funcion para registrar inicio de sesion
const USER_LOGGED_KEY = "usuarioLogueado"
const registrarLogueo = (usuario) =>{
    localStorage.setItem(USER_LOGGED_KEY, usuario)
}

//Funcion para recuperar usuario logueado

const recuperarUsuarioLogueado = () => {
    return localStorage.getItem(USER_LOGGED_KEY) || false
}

// Funcion para crear Nodo

const crearNodo = (nodoPadre, tipoDeNodo, innerHTML ='') =>{
    const NODO_CREADO = document.createElement(tipoDeNodo)
    NODO_CREADO.innerHTML = innerHTML
    nodoPadre.append(NODO_CREADO)
    return NODO_CREADO
}

//Funcion para recuperar un usuario si ya existe
const devuelveValoresYconviertoUsuario = (usuario) => {
    for (const obj of usuarios) {
        if (obj.nombreUsuario === usuario) {
            let contraseniaRecuperada = obj.contrasenia
            let nombreRecuperado = obj.nombre
            let apellidoRecuperado = obj.apellido
            let edadRecuperada = obj.edad
            let pesoRecuperado = obj.peso
            let alturaRecuperada = obj.altura
            let entrenamientoRecuperado = obj.entrenamiento
            let restriccionesAlimenticiasRecuperada = obj.restriccionesAlimenticias
            const unEntrenamiento = new Entrenamiento(entrenamientoRecuperado.objetivo, entrenamientoRecuperado.experiencia)
            const usuarioRecuperado = new Usuario(obj.nombreUsuario, contraseniaRecuperada, nombreRecuperado, apellidoRecuperado, edadRecuperada, pesoRecuperado, alturaRecuperada, unEntrenamiento, restriccionesAlimenticiasRecuperada)

            return usuarioRecuperado
        }
    }
}

// Formula para calcular la edad
const calcularEdad=(fecha)=>{
    hoy=new Date()
    const array_fecha = fecha.split("-")
    if (array_fecha.length!=3)
       return false
    const ano = parseInt(array_fecha[0]);
    const mes = parseInt(array_fecha[1]);
    const dia = parseInt(array_fecha[2]);
    const edad=hoy.getFullYear()- ano - 1; 
    if (hoy.getMonth() + 1 - mes < 0)
       return edad
    if (hoy.getMonth() + 1 - mes > 0)
       return edad+1
    if (hoy.getUTCDate() - dia >= 0)
       return edad + 1

    return edad
}

//Funcion que determina el tipo de entrenamiento y la dieta con restricciones
const determinaTipoEntrenamientoYAlimentacion = (tipoEntrenamiento,restriccionesAlimenticias )=>{
switch (tipoEntrenamiento) {
    case "hipertrofiaavanzada":
        switch (restriccionesAlimenticias) {
            case 1:
                alert(HIPERTROFIA_INTENSIVA + SIN_AZUCAR + CONTINUACION)
                break
            case 2:
                alert(HIPERTROFIA_INTENSIVA + SIN_SAL + CONTINUACION)
                break
            case 3:
                alert(HIPERTROFIA_INTENSIVA + SIN_TACC + CONTINUACION)
                break
            case 4:
                alert(HIPERTROFIA_INTENSIVA + VEGANO + CONTINUACION)
                break
            case 5:
                alert(HIPERTROFIA_INTENSIVA + CONTINUACION)
                break
        }
        break
    case "hipertrofiaalta":
        switch (restriccionesAlimenticias) {
            case 1:
                alert(HIPERTROFIA_ALTA + SIN_AZUCAR + CONTINUACION)
                break
            case 2:
                alert(HIPERTROFIA_ALTA + SIN_SAL + CONTINUACION)
                break
            case 3:
                alert(HIPERTROFIA_ALTA + SIN_TACC + CONTINUACION)
                break
            case 4:
                alert(HIPERTROFIA_ALTA + VEGANO + CONTINUACION)
                break
            case 5:
                alert(HIPERTROFIA_ALTA + CONTINUACION)
                break
        }
        break
    case "hipertrofiamoderada":
        switch (restriccionesAlimenticias) {
            case 1:
                alert(HIPERTROFIA_MODERADA + SIN_AZUCAR + CONTINUACION)
                break
            case 2:
                alert(HIPERTROFIA_MODERADA + SIN_SAL + CONTINUACION)
                break
            case 3:
                alert(HIPERTROFIA_MODERADA + SIN_TACC + CONTINUACION)
                break
            case 4:
                alert(HIPERTROFIA_MODERADA + VEGANO + CONTINUACION)
                break
            case 5:
                alert(HIPERTROFIA_MODERADA + CONTINUACION)
                break
        }
        break
    case "hipertrofiabaja":
        switch (restriccionesAlimenticias) {
            case 1:
                alert(HIPERTROFIA_BAJA + SIN_AZUCAR + CONTINUACION)
                break
            case 2:
                alert(HIPERTROFIA_BAJA + SIN_SAL + CONTINUACION)
                break
            case 3:
                alert(HIPERTROFIA_BAJA + SIN_TACC + CONTINUACION)
                break
            case 4:
                alert(HIPERTROFIA_BAJA + VEGANO + CONTINUACION)
                break
            case 5:
                alert(HIPERTROFIA_BAJA + CONTINUACION)
                break
        }
        break
    case "tonificacionavanzada":
        switch (restriccionesAlimenticias) {
            case 1:
                alert(TONIFICACION_INTENSIVA + SIN_AZUCAR + CONTINUACION)
                break
            case 2:
                alert(TONIFICACION_INTENSIVA + SIN_SAL + CONTINUACION)
                break
            case 3:
                alert(TONIFICACION_INTENSIVA + SIN_TACC + CONTINUACION)
                break
            case 4:
                alert(TONIFICACION_INTENSIVA + VEGANO + CONTINUACION)
                break
            case 5:
                alert(TONIFICACION_INTENSIVA + CONTINUACION)
                break
        }
        break
    case "tonificacionalta":
        switch (restriccionesAlimenticias) {
            case 1:
                alert(TONIFICACION_ALTA + SIN_AZUCAR + CONTINUACION)
                break
            case 2:
                alert(TONIFICACION_ALTA + SIN_SAL + CONTINUACION)
                break
            case 3:
                alert(TONIFICACION_ALTA + SIN_TACC + CONTINUACION)
                break
            case 4:
                alert(TONIFICACION_ALTA + VEGANO + CONTINUACION)
                break
            case 5:
                alert(TONIFICACION_ALTA + CONTINUACION)
                break
        }
        break
    case "tonificacionmoderada":
        switch (restriccionesAlimenticias) {
            case 1:
                alert(TONIFICACION_MODERADA + SIN_AZUCAR + CONTINUACION)
                break
            case 2:
                alert(TONIFICACION_MODERADA + SIN_SAL + CONTINUACION)
                break
            case 3:
                alert(TONIFICACION_MODERADA + SIN_TACC + CONTINUACION)
                break
            case 4:
                alert(TONIFICACION_MODERADA + VEGANO + CONTINUACION)
                break
            case 5:
                alert(TONIFICACION_MODERADA + CONTINUACION)
                break
        }
        break
    case "tonificacionbaja":
        switch (restriccionesAlimenticias) {
            case 1:
                alert(TONIFICACION_BAJA + SIN_AZUCAR + CONTINUACION)
                break
            case 2:
                alert(TONIFICACION_BAJA + SIN_SAL + CONTINUACION)
                break
            case 3:
                alert(TONIFICACION_BAJA + SIN_TACC + CONTINUACION)
                break
            case 4:
                alert(TONIFICACION_BAJA + VEGANO + CONTINUACION)
                break
            case 5:
                alert(TONIFICACION_BAJA + CONTINUACION)
                break
        }
        break
    case "cardioavanzada":
        switch (restriccionesAlimenticias) {
            case 1:
                alert(CARDIO_INTENSIVO + SIN_AZUCAR + CONTINUACION)
                break
            case 2:
                alert(CARDIO_INTENSIVO + SIN_SAL + CONTINUACION)
                break
            case 3:
                alert(CARDIO_INTENSIVO + SIN_TACC + CONTINUACION)
                break
            case 4:
                alert(CARDIO_INTENSIVO + VEGANO + CONTINUACION)
                break
            case 5:
                alert(CARDIO_INTENSIVO + CONTINUACION)
                break
        }
        break
    case "cardioalto":
        switch (restriccionesAlimenticias) {
            case 1:
                alert(CARDIO_ALTO + SIN_AZUCAR + CONTINUACION)
                break
            case 2:
                alert(CARDIO_ALTO + SIN_SAL + CONTINUACION)
                break
            case 3:
                alert(CARDIO_ALTO + SIN_TACC + CONTINUACION)
                break
            case 4:
                alert(CARDIO_ALTO + VEGANO + CONTINUACION)
                break
            case 5:
                alert(CARDIO_ALTO + CONTINUACION)
                break
        }
        break
    case "cardiomoderado":
        switch (restriccionesAlimenticias) {
            case 1:
                alert(CARDIO_MODERADO + SIN_AZUCAR + CONTINUACION)
                break
            case 2:
                alert(CARDIO_MODERADO + SIN_SAL + CONTINUACION)
                break
            case 3:
                alert(CARDIO_MODERADO + SIN_TACC + CONTINUACION)
                break
            case 4:
                alert(CARDIO_MODERADO + VEGANO + CONTINUACION)
                break
            case 5:
                alert(CARDIO_MODERADO + CONTINUACION)
                break
        }
        break
    case "cardiobajo":
        switch (restriccionesAlimenticias) {
            case 1:
                alert(CARDIO_BAJO + SIN_AZUCAR + CONTINUACION)
                break
            case 2:
                alert(CARDIO_BAJO + SIN_SAL + CONTINUACION)
                break
            case 3:
                alert(CARDIO_BAJO + SIN_TACC + CONTINUACION)
                break
            case 4:
                alert(CARDIO_BAJO + VEGANO + CONTINUACION)
                break
            case 5:
                alert(CARDIO_BAJO + CONTINUACION)
                break
        }
        break
    case "recreativoavanzada":
        switch (restriccionesAlimenticias) {
            case 1:
                alert(RECREATIVO_INTENSIVO + SIN_AZUCAR + CONTINUACION)
                break
            case 2:
                alert(RECREATIVO_INTENSIVO + SIN_SAL + CONTINUACION)
                break
            case 3:
                alert(RECREATIVO_INTENSIVO + SIN_TACC + CONTINUACION)
                break
            case 4:
                alert(RECREATIVO_INTENSIVO + VEGANO + CONTINUACION)
                break
            case 5:
                alert(RECREATIVO_INTENSIVO + CONTINUACION)
                break
        }
        break
    case "recreativoalto":
        switch (restriccionesAlimenticias) {
            case 1:
                alert(RECREATIVO_ALTO + SIN_AZUCAR + CONTINUACION)
                break
            case 2:
                alert(RECREATIVO_ALTO + SIN_SAL + CONTINUACION)
                break
            case 3:
                alert(RECREATIVO_ALTO + SIN_TACC + CONTINUACION)
                break
            case 4:
                alert(RECREATIVO_ALTO + VEGANO + CONTINUACION)
                break
            case 5:
                alert(RECREATIVO_ALTO + CONTINUACION)
                break
        }
        break
    case "recreativomoderado":
        switch (restriccionesAlimenticias) {
            case 1:
                alert(RECREATIVO_MODERADO + SIN_AZUCAR + CONTINUACION)
                break
            case 2:
                alert(RECREATIVO_MODERADO + SIN_SAL + CONTINUACION)
                break
            case 3:
                alert(RECREATIVO_MODERADO + SIN_TACC + CONTINUACION)
                break
            case 4:
                alert(RECREATIVO_MODERADO + VEGANO + CONTINUACION)
                break
            case 5:
                alert(RECREATIVO_MODERADO + CONTINUACION)
                break
        }
        break
    case "recreativobajo":
        switch (restriccionesAlimenticias) {
            case 1:
                alert(RECREATIVO_BAJO + SIN_AZUCAR + CONTINUACION)
                break
            case 2:
                alert(RECREATIVO_BAJO + SIN_SAL + CONTINUACION)
                break
            case 3:
                alert(RECREATIVO_BAJO + SIN_TACC + CONTINUACION)
                break
            case 4:
                alert(RECREATIVO_BAJO + VEGANO + CONTINUACION)
                break
            case 5:
                alert(RECREATIVO_BAJO + CONTINUACION)
                break
        }
        break
}
}
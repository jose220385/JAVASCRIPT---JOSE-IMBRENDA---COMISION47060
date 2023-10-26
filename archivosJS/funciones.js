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
    localStorage.setItem(USER_LOGGED_KEY, JSON.stringify(usuario))
}

//Funcion para recuperar usuario logueado

const recuperarUsuarioLogueado = () => {
    return JSON.parse(localStorage.getItem(USER_LOGGED_KEY)) || false
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
//Funcion para renderizar las rutinas

const renderizarRutina=(nodoPadre, cuerpo, titulo)=>{
    const NODO_CREADO = document.createElement('div')
    NODO_CREADO.innerHTML = `<h1>${titulo}</h1>
                              <p>${cuerpo}</p>
                              <h3>A continuacion se detalla la rutina dia por dia</h3>`
    NODO_CREADO.className= 'rutina'
    nodoPadre.append(NODO_CREADO)
}

//Funcion que determina el tipo de entrenamiento y la dieta con restricciones
const determinaTipoEntrenamientoYAlimentacion = (tipoEntrenamiento,restriccionesAlimenticias )=>{
const nodoPadre = document.getElementsByTagName('body')
    switch (tipoEntrenamiento) {
    case "hipertrofiaavanzada":
        switch (restriccionesAlimenticias) {
            case 1:
                renderizarRutina(nodoPadre[0], HIPERTROFIA_INTENSIVA + SIN_AZUCAR, 'Entrenamiento de Hipertrofia Avanzado')
                break
            case 2:
                renderizarRutina(nodoPadre[0], HIPERTROFIA_INTENSIVA + SIN_SAL, 'Entrenamiento de Hipertrofia Avanzado')
                break
            case 3:
                renderizarRutina(nodoPadre[0], HIPERTROFIA_INTENSIVA + SIN_TACC, 'Entrenamiento de Hipertrofia Avanzado')
                break
            case 4:
                renderizarRutina(nodoPadre[0], HIPERTROFIA_INTENSIVA + VEGANO, 'Entrenamiento de Hipertrofia Avanzado')
                break
            case 5:
                renderizarRutina(nodoPadre[0], HIPERTROFIA_INTENSIVA, 'Entrenamiento de Hipertrofia Avanzado')
                break
        }
        break
    case "hipertrofiaalta":
        switch (restriccionesAlimenticias) {
            case 1:
                renderizarRutina(nodoPadre[0], HIPERTROFIA_ALTA + SIN_AZUCAR, 'Entrenamiento de Hipertrofia de alta exigencia')
                break
            case 2:
                renderizarRutina(nodoPadre[0], HIPERTROFIA_ALTA + SIN_SAL, 'Entrenamiento de Hipertrofia de alta exigencia')
                break
            case 3:
                renderizarRutina(nodoPadre[0], HIPERTROFIA_ALTA + SIN_TACC, 'Entrenamiento de Hipertrofia de alta exigencia')
                break
            case 4:
                renderizarRutina(nodoPadre[0], HIPERTROFIA_ALTA + VEGANO, 'Entrenamiento de Hipertrofia de alta exigencia')
                break
            case 5:
                renderizarRutina(nodoPadre[0], HIPERTROFIA_ALTA, 'Entrenamiento de Hipertrofia de alta exigencia')
                break
        }
        break
    case "hipertrofiamoderada":
        switch (restriccionesAlimenticias) {
        case 1:
            renderizarRutina(nodoPadre[0], HIPERTROFIA_MODERADA + SIN_AZUCAR, 'Entrenamiento de Hipertrofia Moderado')
            break
        case 2:
            renderizarRutina(nodoPadre[0], HIPERTROFIA_MODERADA + SIN_SAL, 'Entrenamiento de Hipertrofia Moderado')
            break
        case 3:
            renderizarRutina(nodoPadre[0], HIPERTROFIA_MODERADA + SIN_TACC, 'Entrenamiento de Hipertrofia Moderado')
            break
        case 4:
            renderizarRutina(nodoPadre[0], HIPERTROFIA_MODERADA + VEGANO, 'Entrenamiento de Hipertrofia Moderado')
            break
        case 5:
            renderizarRutina(nodoPadre[0], HIPERTROFIA_MODERADA, 'Entrenamiento de Hipertrofia Moderado')
            break
        }
        break
    case "hipertrofiabaja":
        switch (restriccionesAlimenticias) {
            case 1:
            renderizarRutina(nodoPadre[0], HIPERTROFIA_BAJA+ SIN_AZUCAR, 'Entrenamiento de Hipertrofia de baja exigencia')
            break
        case 2:
            renderizarRutina(nodoPadre[0], HIPERTROFIA_BAJA + SIN_SAL, 'Entrenamiento de Hipertrofia de baja exigencia')
            break
        case 3:
            renderizarRutina(nodoPadre[0], HIPERTROFIA_BAJA + SIN_TACC, 'Entrenamiento de Hipertrofia de baja exigencia')
            break
        case 4:
            renderizarRutina(nodoPadre[0], HIPERTROFIA_BAJA + VEGANO, 'Entrenamiento de Hipertrofia de baja exigencia')
            break
        case 5:
            renderizarRutina(nodoPadre[0], HIPERTROFIA_BAJA, 'Entrenamiento de Hipertrofia de baja exigencia')
            break
        }
        break
    case "tonificacionavanzada": 
        switch (restriccionesAlimenticias) {
            case 1:
            renderizarRutina(nodoPadre[0], TONIFICACION_INTENSIVA+ SIN_AZUCAR, 'Entrenamiento de Tonificacion Intensivo')
            break
        case 2:
            renderizarRutina(nodoPadre[0], TONIFICACION_INTENSIVA + SIN_SAL, 'Entrenamiento de Tonificacion Intensivo')
            break
        case 3:
            renderizarRutina(nodoPadre[0], TONIFICACION_INTENSIVA + SIN_TACC, 'Entrenamiento de Tonificacion Intensivo')
            break
        case 4:
            renderizarRutina(nodoPadre[0], TONIFICACION_INTENSIVA + VEGANO, 'Entrenamiento de Tonificacion Intensivo')
            break
        case 5:
            renderizarRutina(nodoPadre[0], TONIFICACION_INTENSIVA, 'Entrenamiento de Tonificacion Intensivo')
            break
        }
        break
    case "tonificacionalta":
        switch (restriccionesAlimenticias) {
            case 1:
                renderizarRutina(nodoPadre[0], TONIFICACION_ALTA+ SIN_AZUCAR, 'Entrenamiento de Tonificacion de alta exigencia')
                break
            case 2:
                renderizarRutina(nodoPadre[0], TONIFICACION_ALTA+ SIN_SAL, 'Entrenamiento de Tonificacion de alta exigencia')
                break
            case 3:
                renderizarRutina(nodoPadre[0], TONIFICACION_ALTA+ SIN_TACC, 'Entrenamiento de Tonificacion de alta exigencia')
                break
            case 4:
                renderizarRutina(nodoPadre[0], TONIFICACION_ALTA+ VEGANO, 'Entrenamiento de Tonificacion de alta exigencia')
                break
            case 5:
                renderizarRutina(nodoPadre[0], TONIFICACION_ALTA, 'Entrenamiento de Tonificacion de alta exigencia')
                break
        }
        break
    case "tonificacionmoderada":
        switch (restriccionesAlimenticias) {
            case 1:
                renderizarRutina(nodoPadre[0], TONIFICACION_MODERADA + SIN_AZUCAR, 'Entrenamiento de Tonificacion de exigencia moderada')
                break
            case 2:
                renderizarRutina(nodoPadre[0], TONIFICACION_MODERADA + SIN_SAL, 'Entrenamiento de Tonificacion de exigencia moderada')
                break
            case 3:
                renderizarRutina(nodoPadre[0], TONIFICACION_MODERADA + SIN_TACC, 'Entrenamiento de Tonificacion de exigencia moderada')
                break
            case 4:
                renderizarRutina(nodoPadre[0], TONIFICACION_MODERADA + VEGANO, 'Entrenamiento de Tonificacion de exigencia moderada')
                break
            case 5:
                renderizarRutina(nodoPadre[0], TONIFICACION_MODERADA, 'Entrenamiento de Tonificacion de exigencia moderada')
                break
        }
        break
    case "tonificacionbaja":
        switch (restriccionesAlimenticias) {
            case 1:
                renderizarRutina(nodoPadre[0], TONIFICACION_BAJA + SIN_AZUCAR, 'Entrenamiento de Tonificacion de baja exigencia')
                break
            case 2:
                renderizarRutina(nodoPadre[0], TONIFICACION_BAJA + SIN_SAL, 'Entrenamiento de Tonificacion de baja exigencia')
                break
            case 3:
                renderizarRutina(nodoPadre[0], TONIFICACION_BAJA + SIN_TACC, 'Entrenamiento de Tonificacion de baja exigencia')
                break
            case 4:
                renderizarRutina(nodoPadre[0], TONIFICACION_BAJA + VEGANO, 'Entrenamiento de Tonificacion de baja exigencia')
                break
            case 5:
                renderizarRutina(nodoPadre[0], TONIFICACION_BAJA, 'Entrenamiento de Tonificacion de baja exigencia')
                break
        }
        break
    case "cardioavanzada":
        switch (restriccionesAlimenticias) {
            case 1:
                renderizarRutina(nodoPadre[0], CARDIO_INTENSIVO + SIN_AZUCAR, 'Entrenamiento de Actividad Cardiovascular Intensiva')
                break
            case 2:
                renderizarRutina(nodoPadre[0], CARDIO_INTENSIVO + SIN_SAL, 'Entrenamiento de Actividad Cardiovascular Intensiva')
                break
            case 3:
                renderizarRutina(nodoPadre[0], CARDIO_INTENSIVO + SIN_TACC, 'Entrenamiento de Actividad Cardiovascular Intensiva')
                break
            case 4:
                renderizarRutina(nodoPadre[0], CARDIO_INTENSIVO + VEGANO, 'Entrenamiento de Actividad Cardiovascular Intensiva')
                break
            case 5:
                renderizarRutina(nodoPadre[0], CARDIO_INTENSIVO, 'Entrenamiento de Actividad Cardiovascular Intensiva')
                break
        }
        break
    case "cardioalto":
        switch (restriccionesAlimenticias) {
            case 1:
                renderizarRutina(nodoPadre[0], CARDIO_ALTO + SIN_AZUCAR, 'Entrenamiento de Actividad Cardiovascular de alta exigencia')
                break
            case 2:
                renderizarRutina(nodoPadre[0], CARDIO_ALTO + SIN_SAL, 'Entrenamiento de Actividad Cardiovascular de alta exigencia')
                break
            case 3:
                renderizarRutina(nodoPadre[0], CARDIO_ALTO + SIN_TACC, 'Entrenamiento de Actividad Cardiovascular de alta exigencia')
                break
            case 4:
                renderizarRutina(nodoPadre[0], CARDIO_ALTO + VEGANO, 'Entrenamiento de Actividad Cardiovascular de alta exigencia')
                break
            case 5:
                renderizarRutina(nodoPadre[0], CARDIO_ALTO, 'Entrenamiento de Actividad Cardiovascular de alta exigencia')
                break
        }
        break
    case "cardiomoderado":
        switch (restriccionesAlimenticias) {
            case 1:
                renderizarRutina(nodoPadre[0], CARDIO_MODERADO + SIN_AZUCAR, 'Entrenamiento de Actividad Cardiovascular de exigencia moderada')
                break
            case 2:
                renderizarRutina(nodoPadre[0], CARDIO_MODERADO + SIN_SAL, 'Entrenamiento de Actividad Cardiovascular de exigencia moderada')
                break
            case 3:
                renderizarRutina(nodoPadre[0], CARDIO_MODERADO + SIN_TACC, 'Entrenamiento de Actividad Cardiovascular de exigencia moderada')
                break
            case 4:
                renderizarRutina(nodoPadre[0], CARDIO_MODERADO + VEGANO, 'Entrenamiento de Actividad Cardiovascular de exigencia moderada')
                break
            case 5:
                renderizarRutina(nodoPadre[0], CARDIO_MODERADO, 'Entrenamiento de Actividad Cardiovascular de exigencia moderada')
                break
        }
        break
    case "cardiobajo":
        switch (restriccionesAlimenticias) {
            case 1:
                renderizarRutina(nodoPadre[0], CARDIO_BAJO + SIN_AZUCAR, 'Entrenamiento de Actividad Cardiovascular de baja exigencia')
                break
            case 2:
                renderizarRutina(nodoPadre[0], CARDIO_BAJO + SIN_SAL, 'Entrenamiento de Actividad Cardiovascular de baja exigencia')
                break
            case 3:
                renderizarRutina(nodoPadre[0], CARDIO_BAJO + SIN_TACC, 'Entrenamiento de Actividad Cardiovascular de baja exigencia')
                break
            case 4:
                renderizarRutina(nodoPadre[0], CARDIO_BAJO + VEGANO, 'Entrenamiento de Actividad Cardiovascular de baja exigencia')
                break
            case 5:
                renderizarRutina(nodoPadre[0], CARDIO_BAJO, 'Entrenamiento de Actividad Cardiovascular de baja exigencia')
                break
        }
        break
    case "recreativoavanzada":
        switch (restriccionesAlimenticias) {
            case 1:
                renderizarRutina(nodoPadre[0], RECREATIVO_INTENSO + SIN_AZUCAR, 'Entrenamiento de Actividad Recreativa Intensiva')
                break
            case 2:
                renderizarRutina(nodoPadre[0], RECREATIVO_INTENSO + SIN_SAL, 'Entrenamiento de Actividad Recreativa Intensiva')
                break
            case 3:
                renderizarRutina(nodoPadre[0], RECREATIVO_INTENSO + SIN_TACC, 'Entrenamiento de Actividad Recreativa Intensiva')
                break
            case 4:
                renderizarRutina(nodoPadre[0], RECREATIVO_INTENSO + VEGANO, 'Entrenamiento de Actividad Recreativa Intensiva')
                break
            case 5:
                renderizarRutina(nodoPadre[0], RECREATIVO_INTENSO, 'Entrenamiento de Actividad Recreativa Intensiva')
                break
        }
        break
    case "recreativoalto":
        switch (restriccionesAlimenticias) {
            case 1:
                renderizarRutina(nodoPadre[0], RECREATIVO_ALTO + SIN_AZUCAR, 'Entrenamiento de Actividad Recreativa de alta intensidad')
                break
            case 2:
                renderizarRutina(nodoPadre[0], RECREATIVO_ALTO + SIN_SAL, 'Entrenamiento de Actividad Recreativa de alta intensidad')
                break
            case 3:
                renderizarRutina(nodoPadre[0], RECREATIVO_ALTO + SIN_TACC, 'Entrenamiento de Actividad Recreativa de alta intensidad')
                break
            case 4:
                renderizarRutina(nodoPadre[0], RECREATIVO_ALTO + VEGANO, 'Entrenamiento de Actividad Recreativa de alta intensidad')
                break
            case 5:
                renderizarRutina(nodoPadre[0], RECREATIVO_ALTO, 'Entrenamiento de Actividad Recreativa de alta intensidad')
                break
        }
        break
    case "recreativomoderado":
        switch (restriccionesAlimenticias) {
            case 1:
                renderizarRutina(nodoPadre[0], RECREATIVO_MODERADO + SIN_AZUCAR, 'Entrenamiento de Actividad Recreativa de intensidad moderada')
                break
            case 2:
                renderizarRutina(nodoPadre[0], RECREATIVO_MODERADO + SIN_SAL, 'Entrenamiento de Actividad Recreativa de intensidad moderada')
                break
            case 3:
                renderizarRutina(nodoPadre[0], RECREATIVO_MODERADO + SIN_TACC, 'Entrenamiento de Actividad Recreativa de intensidad moderada')
                break
            case 4:
                renderizarRutina(nodoPadre[0], RECREATIVO_MODERADO + VEGANO, 'Entrenamiento de Actividad Recreativa de intensidad moderada')
                break
            case 5:
                renderizarRutina(nodoPadre[0], RECREATIVO_MODERADO, 'Entrenamiento de Actividad Recreativa de intensidad moderada')
                break
        }
        break
    case "recreativobajo":
        switch (restriccionesAlimenticias) {
            case 1:
                renderizarRutina(nodoPadre[0], RECREATIVO_BAJO + SIN_AZUCAR, 'Entrenamiento de Actividad Recreativa de baja intensidad')
                break
            case 2:
                renderizarRutina(nodoPadre[0], RECREATIVO_BAJO + SIN_SAL, 'Entrenamiento de Actividad Recreativa de baja intensidad')
                break
            case 3:
                renderizarRutina(nodoPadre[0], RECREATIVO_BAJO + SIN_TACC, 'Entrenamiento de Actividad Recreativa de baja intensidad')
                break
            case 4:
                renderizarRutina(nodoPadre[0], RECREATIVO_BAJO + VEGANO, 'Entrenamiento de Actividad Recreativa de baja intensidad')
                break
            case 5:
                renderizarRutina(nodoPadre[0], RECREATIVO_BAJO, 'Entrenamiento de Actividad Recreativa de baja intensidad')
                break
        }
        break
}
}
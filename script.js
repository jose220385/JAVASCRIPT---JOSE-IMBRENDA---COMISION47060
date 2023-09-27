//log-in

const validarContrasenia = (contrasenia) => {
    if (contrasenia.length < 6) {
        return true
    } else {
        return false
    }
}
const validarDatos = (parametro, limiteInferior, limiteSuperior) => {
    if (!isNaN(parametro) || parametro >= limiteInferior || parametro <= limiteSuperior) {
        return true
    } else {
        return false
    }
}

const validarOpciones = (opciones, argumentos, cantidadOpciones) => {
    if (isNaN(opciones) || (opciones < 1 || opciones > cantidadOpciones)) {
        opciones = parseInt(prompt("Respuesta Invalida. Reintente. " + argumentos))
        validarOpciones(opciones, argumentos, cantidadOpciones)
    } else {
        return opciones
    }
}

const validarUsuarioYcontrasenia = (usuario, contrasenia) => {
    usuarioEncontrado = usuarios.some((parametro) => {
        return parametro.nombreUsuario === usuario
    })
    contraseniaEncontrada = usuarios.some((parametro) => {
        return parametro.contrasenia === contrasenia
    })
    return usuarioEncontrado && contraseniaEncontrada
}



const RESPUESTA_INICIAL = prompt("Bienvenido al Sistema Interactivo de Personal Trainer y Nutricion. Indique con SI o NO si usted ya es un usuario ingresado")

let usuarios = [
    {
        nombreUsuario: "pepeim",
        contrasenia: "123456",
        nombre: "Pedro",
        apellido: "Perez",
        edad: 34,
        peso: 87,
        altura: 1.78,
    },
]

if (RESPUESTA_INICIAL.trim().toLocaleUpperCase() === "NO") {
    alert("A continuacion comenzaremos con la carga de datos para ingresarlo como usuario")
    let usuario = prompt("Ingrese un nombre de Usuario")
    let contrasenia = prompt("Ingrese una contraseña con al menos 6 caracteres")
    while (validarContrasenia(contrasenia)) {
        contrasenia = prompt("La contraseña no cumple con la cantidad de caracteres requeridos. Ingrese una contraseña con al menos 6 caracteres")
    }
    let nombre = prompt("Indique su Nombre")
    let apellido = prompt("Indique su Apellido")
    let edad = parseInt(prompt("Indique su edad"))
    let peso = parseFloat(prompt("Indique su peso en kg"))
    while (!validarDatos(peso, 30, 300)) {
        peso = parseFloat(prompt("Peso mal ingresado. Indique su peso en Kg"))
        let altura = parseFloat(prompt("Indique su altura en metros"))
    }
    let altura = parseFloat(prompt("Indique su altura en metros"))
    while (!validarDatos(altura, 0.30, 3)) {
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
    }

    for (const nuevoUsuario of usuarios) {
        console.log(nuevoUsuario)
    }

    usuarios.push(nuevoUsuario)

    /*  alert("Tu ficha tecnica es la siguiente: (Nombre: " + NOMBRE + ")" + " (Apellido: " + APELLIDO + ")" + " (Edad: " + edad + ")" + " (Peso: " + peso + "kg)" + " (Altura: " + altura + "metros)") */
} else {
    let usuario = prompt("Ingrese su nombre de Usuario")
    let contrasenia = prompt("Ingrese su contraseña")

    while (!validarUsuarioYcontrasenia(usuario, contrasenia)) {
        alert("Usuario o contraseña incorrecta, reintente")
        usuario = prompt("Ingrese su nombre de Usuario")
        contrasenia = prompt("Ingrese su contraseña")
    }
    alert("Usuario y contraseña ingresada con exito")

}



/* let contrasenia = prompt("Ingrese una contraseña con al menos 6 caracteres") */

/* while (validarContrasenia(contrasenia)) {
    contrasenia = prompt("La contraseña no cumple con la cantidad de caracteres requeridos. Ingrese una contraseña con al menos 6 caracteres")
}
 */


// carga de datos PERSONALES


/*
alert("Bienvenido " + USUARIO + " a continuacion te pediremos algunos datos para completar tu ficha tecnica")
const ANIO_ACTUAL = 2023
const NOMBRE = prompt("Indique su Nombre")
const APELLIDO = prompt("Indique su Apellido")
let anioNacimiento = parseInt(prompt("Indique su año de nacimiento"))
while (!validarDatos(anioNacimiento, 1920, 2023)) {
    anioNacimiento = parseInt(prompt("Año mal ingresado. Indique su año de nacimiento"))
}
let edad = ANIO_ACTUAL - anioNacimiento
let peso = parseFloat(prompt("Indique su peso en kg"))
while (!validarDatos(peso, 30, 300)) {
    peso = parseFloat(prompt("Peso mal ingresado. Indique su peso en Kg"))
}
let altura = parseFloat(prompt("Indique su altura en metros"))
while (!validarDatos(altura, 0.30, 3)) {
    altura = parseFloat(prompt("Altura mal ingresada. Indique su altura en metros"))
}
alert("Tu ficha tecnica es la siguiente: (Nombre: " + NOMBRE + ")" + " (Apellido: " + APELLIDO + ")" + " (Edad: " + edad + ")" + " (Peso: " + peso + "kg)" + " (Altura: " + altura + "metros)")
*/



// carga de datos COMPLEMENTARIOS
/* const validarOpciones = (opciones, argumentos, cantidadOpciones) => {
    if (isNaN(opciones) || (opciones < 1 || opciones > cantidadOpciones)) {
        opciones = parseInt(prompt("Respuesta Invalida. Reintente. " + argumentos))
        validarOpciones(opciones, argumentos, cantidadOpciones)
    } else {
        return opciones
    }
} */



/*
//Calculos para rutina y dieta

// Calculo de indice de masa corporal
const imc = (peso, altura) => {
    let imc = peso / (altura * altura)
    return imc
}

//Se Define un tipo de entrenamiento segun los datos cargados
const tipoDeEntrenamiento = (imc, edad, objetivo, experiencia) => {
    let tipo = ""
    let intensidad = ""
    switch (objetivo) {
        case 1:
            tipo = "hipertrofia"
            break
        case 2:
            tipo = "tonificacion"
            break
        case 3:
            tipo = "cardio"
            break
        case 4:
            tipo = "recreativo"
            break
    }

    if (imc >= 25 && edad >= 20 && edad <= 60 && experiencia >= 2) {
        intensidad = "avanzada"
    } else if (imc < 25 && imc >= 23 && edad >= 20 && edad <= 60 && experiencia >= 1 && experiencia >= 1) {
        intensidad = "alta"
    } else if (edad >= 20 && edad <= 60) {
        intensidad = "moderada"
    } else {
        intensidad = "baja"
    }
    return tipo + intensidad
}
const HIPERTROFIA_INTENSIVA = "Se propone un plan de entrenamiento intensivo, con altas cargas, repeticiones decrecientes, abrodando un musculo por dia, 5 o 6 dias a la semana según la disponibilidad. Acorde a lo anterior un plan nutricional alto en carbohidratos y proteinas. "
const HIPERTROFIA_ALTA = "Se propone un plan de entrenamiento exigente, inciando con cargas que no hagan llegar al fallo muscular, se proponen 2 tipos de rutina segun disponibilidad horaria, un plan nutricional que contemple un contenido de hidratos de carbono de moderado a alto y gran contenido de Protenias. "
const HIPERTROFIA_MODERADA = "Se propone un plan de entrenamiento que empiece con una intensidad que vaya increscendo cada 3 meses con un control por sistema hasta pasar a un plan de entrenamiento mas intenso a medida que el cuerpo vaya evolucionando. Cargas moderadas al principio, con el objetivo de ir aumentandolas. Se proponen 2 rutinas segun disponibilidad horaria. Se propone un plan nutricional que vaya incrementandose en calorias y cantidades a medida que se va incrementando la intensidad del entrenamiento"
const HIPERTROFIA_BAJA = "Se propone un plan de entrenamiento para empezar a desarrollar fuerza y tension muscular, e ir acostumbrando al musculo de manera paulatina a empezar a engrosar las fibras musculares. Se propone un plan de entrenamiento con series escalonadas pero con cargas bajas a moderadas para no porvocar ningun tipo de lesiones. El plan nutricional se compone de una cantidad moderada de alimentos que contengan de hidratos y un porcentaje mayor de proteinas para favorecer el desarrollo de la composicion muscular. "

const TONIFICACION_INTENSIVA = "Se propone una rutina de potencia intensiva, de sesiones de mas de 1 hora, con una variante para cada dia de la semana. Cargas altas con movimientos explosivos y series repetitivas con poco descanso. Para este fin se propone un plan nutricional con la cantidad necesaria de Hidratos de carbono y grandes cantidades de proteina para favorecer la recomposicion muscular. "
const TONIFICACION_ALTA = "Se propone una rutina con ejercicios explosivos y una intensidad alta, sesiones de 1 hora de entrenamiento con intervalos entre serie y serie de no mas de 2 minutos, preferentemente todos los dias de la semana. cargas moderadas a altas. Para ese fin se recomienda un plan nutricional alto en proteinas y con hidratos de carbono que complementen para dar la energia que requiere el musculo"
const TONIFICACION_MODERADA = "Se propone una rutina que abarque 3 dias a la semana y vaya incrementando su dificultad paulatinamente, ejercicios de explosion y resistencia y aumento de cargas cada 3 meses. Un plan nutricional moderado, con alimentos bajos en hidratos de carbono y altos en proteinas."
const TONIFICACION_BAJA = "Se propone una rutina que abarque 3 dias a la semana con cargas bajas a moderadas para obtener una mayor tenacidad muscular e ir logrande una estructura muscular estable y saludable. Un plan nutricional saludable con un balance entre hidratos y proteinas. "

const CARDIO_INTENSIVO = "Se propone un plan de entrenamiento donde primen los ejercicios que hagan subir las pulsasiones por minuto por encima de 120, en sesiones de 1 hora y media combinando diferentes tipos. Se complementa con rutinas de potencia y musculacion en menor medida. Como el objetivo es bajar de peso drasticamente, se propone un plan nutricional que abarque alimentos con poco hidrato de carbono, mas proteina y vegetales de hoja verde. "
const CARDIO_ALTO = "Se propone un plan de entrenamiento exigente, con sesiones de 1 hora preferentemente todos los dias. Objetivos a corto plazo de bajar de peso. Ejercicios con alta elevacion de pulsasiones por minuto. Para lograr estos objetivos se propone un plan nutricional acorde con bajo contenido de Carbohidratos y alto contenido en Protenias y vagetales crudos. "
const CARDIO_MODERADO = "Se propone un plan de entrenamiento que se vaya adaptando al cuerpo a medida que va ganando resisteencia a los ejercicios dados, sesiones de entrenamiento de ejercicios de altas pulsasiones por minuto de no mas de 1 hora, 3 dias a la semana con controles trimestrales. Para ir logrando esta adaptacion del cuerpo, se recomienda un plan nutricional con poca cantidad de hidratos de carbono, alto en proteinas y vegetales. "
const CARDIO_BAJO = "Se propone un plan de entrenamiento con ejercicios que eleven la frecuencia cardiaca pero controlando que no pasen las 90 pulsasiones por minutos en intervalos moderados de no mas de 20 minutos. El objetivo es mantener el cuerpo saludable, sin exigirlo demasiado. El plan nutricional que se propone es un plan magro, bajo en hidratos y de alto valor proteico, cuidando que las mismas contengan poca grasa. "

const RECREATIVO_INTENSO = "Se propone un plan de entrenamiento que abarque todos los dias de la semana con clases especiales como Zumba, entrenamientos Funcionales o Nuevas tecnicas ludicas de entrenamiento. Doble turno por dia segun la disponibilidad horaria. Se propone un plan nutricional equilibrado en hidratos, proteinas y vegetales. "
const RECREATIVO_ALTO = "Se propone un plan de entrenamiento que abarque por lo menos 4 dias de la semana con clases especiales como Zumba, entrenamientos Funcionales o Nuevas tecnicas ludicas de entrenamiento. Se propone un plan nutricional equilibrado en hidratos, proteinas y vegetales. "
const RECREATIVO_MODERADO = "Se propone un plan de entrenamiento que abarque 3 dias de la semana con clases especiales como Zumba, entrenamientos Funcionales o Nuevas tecnicas ludicas de entrenamiento. Se propone un plan nutricional equilibrado en hidratos, proteinas y vegetales. "
const RECREATIVO_BAJO = "Se propone un plan de entrenamiento que abarque 2 dias de la semana con clases especiales como Zumba, entrenamientos Funcionales o Nuevas tecnicas ludicas de entrenamiento. Se propone un plan nutricional equilibrado en hidratos, proteinas y vegetales. "

const SIN_AZUCAR = "Libre de AZUCARES SIMPLES. "
const SIN_SAL = "Sin SAL y cuidando que los alimentos tengan en su composicion la menor cantidad de CLNA. "
const SIN_TACC = "Sin TACC. "
const VEGANO = "Que no provengan del reino animal ni contengan derivados del mismo. "
const CONTINUACION = "A continuacion se detalla lo anteriormente mencionado (Aca iria la rutina por dia y el plan nutricional por dia)"


switch (tipoDeEntrenamiento(imc(peso, altura), edad, objetivo, nivelExperiencia)) {
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

alert("GRACIAS POR HABER USADO EL SISTEMA INTERACTIVO DE PERSONAL TRAINER")
 */
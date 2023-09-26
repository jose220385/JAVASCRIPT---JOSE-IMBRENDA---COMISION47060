class Entrenamiento{
    constructor(
       objetivo,
       experiencia 
    ){
    this.objetivo = objetivo;
    this.experiencia = experiencia;
}
tipoDeEntrenamiento = (imc,edad) =>{
    let tipo = ""
    let intensidad = ""
    switch (this.objetivo) {
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

    if (imc >= 25 && edad >= 20 && edad <= 60 && this.experiencia >= 2) {
        intensidad = "avanzada"
    } else if (imc < 25 && imc >= 23 && edad >= 20 && edad <= 60 && this.experiencia >= 1) {
        intensidad = "alta"
    } else if (edad >= 20 && edad <= 60) {
        intensidad = "moderada"
    } else {
        intensidad = "baja"
    }
    return tipo + intensidad
}

}
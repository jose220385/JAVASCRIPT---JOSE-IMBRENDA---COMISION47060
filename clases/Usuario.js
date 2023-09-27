class Usuario {
    constructor(
        nombreUsuario,
        contrasenia,
        //dni,
        nombre,
        apellido,
        edad,
        peso,
        altura,
        entrenamiento,
        restriccionesAlimenticias
    ) {
        this.nombreUsuario = nombreUsuario;
        this.contrasenia = contrasenia;
        //this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.peso = peso;
        this.altura = altura;
        this.entrenamiento = entrenamiento;
        this.restriccionesAlimenticias = restriccionesAlimenticias;
    }

    toString = () => {
        return this.apellido + ", " + this.nombre
    }

    imc = () => {
        return this.peso / (this.altura * this.altura)
    }
}
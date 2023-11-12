class Usuario {
    constructor(
        nombreUsuario,
        contrasenia,
        nombre,
        apellido,
        edad,
        peso,
        altura,
        genero,
        entrenamiento,
        restriccionesAlimenticias
    ) {
        this.nombreUsuario = nombreUsuario;
        this.contrasenia = contrasenia;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.peso = peso;
        this.altura = altura;
        this.genero = genero;
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
const usuarios = [
    {
        nombreUsuario: "pepeim",
        contrasenia: "123456",
        nombre: "Pedro",
        apellido: "Perez",
        edad: 34,
        peso: 87,
        altura: 1.78,
        genero: 1,
        entrenamiento: {
            objetivo: 2,
            experiencia: 3,
        },
        restriccionesAlimenticias: 2,
    },
    {
        nombreUsuario: "lola123",
        contrasenia: "321654",
        nombre: "Lorena",
        apellido: "Saenz",
        edad: 25,
        peso: 62,
        altura: 1.56,
        genero:2,
        entrenamiento: {
            objetivo: 2,
            experiencia: 2,
        },
        restriccionesAlimenticias: 5,
    },
    {
        nombreUsuario: "fefepr",
        contrasenia: "456789",
        nombre: "Federico",
        apellido: "Panzotti",
        edad: 42,
        peso: 96,
        altura: 1.70,
        genero: 3,
        entrenamiento: {
            objetivo: 1,
            experiencia: 2,
        },
        restriccionesAlimenticias: 3,
    },

]

localStorage.setItem('usuarios', JSON.stringify(usuarios))
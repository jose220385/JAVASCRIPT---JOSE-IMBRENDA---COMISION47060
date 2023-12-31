//Peticion de Datos a API
const URL_USUARIOS = new URL(
  "https://6545057a5a0b4b04436d78cb.mockapi.io/usuarios"
);

//Funcion para validar Usuario y contraseña en caso que el Usuario exista
const validarUsuarioYcontrasenia = (usuario, contrasenia) => {
  usuarioEncontrado = usuariosBD.some((parametro) => {
    return parametro.nombreUsuario === usuario;
  });
  contraseniaEncontrada = usuariosBD.some((unUsuarioRecuperado) => {
    return unUsuarioRecuperado.contrasenia === contrasenia;
  });
  return usuarioEncontrado && contraseniaEncontrada;
};

//Funcion para saber si un usuario existe o no
const usuarioExistente = (usuario) => {
  return usuariosBD.some(
    (unUsuarioRecuperado) => unUsuarioRecuperado.nombreUsuario === usuario
  );
};

const renderizarMensaje = (id, mensaje) => {
  let contenedorMensaje = document.getElementById(id);
  contenedorMensaje.innerHTML = `<h2> ${mensaje} </h2>`;
};

//Funcion para registrar inicio de sesion
const USER_LOGGED_KEY = "usuarioLogueado";
const registrarLogueo = (usuario) => {
  localStorage.setItem(USER_LOGGED_KEY, JSON.stringify(usuario));
};

//Funcion para recuperar usuario logueado

const recuperarUsuarioLogueado = () => {
  return JSON.parse(localStorage.getItem(USER_LOGGED_KEY)) || false;
};

// Funcion para crear Nodo

const crearNodo = (nodoPadre, tipoDeNodo, innerHTML = "") => {
  const NODO_CREADO = document.createElement(tipoDeNodo);
  NODO_CREADO.innerHTML = innerHTML;
  nodoPadre.append(NODO_CREADO);
  return NODO_CREADO;
};

//Funcion para recuperar un usuario si ya existe
const devuelveValoresYconviertoUsuario = (usuario) => {
  for (const obj of usuarios) {
    if (obj.nombreUsuario === usuario) {
      let contraseniaRecuperada = obj.contrasenia;
      let nombreRecuperado = obj.nombre;
      let apellidoRecuperado = obj.apellido;
      let edadRecuperada = obj.edad;
      let pesoRecuperado = obj.peso;
      let alturaRecuperada = obj.altura;
      let entrenamientoRecuperado = obj.entrenamiento;
      let restriccionesAlimenticiasRecuperada = obj.restriccionesAlimenticias;
      const unEntrenamiento = new Entrenamiento(
        entrenamientoRecuperado.objetivo,
        entrenamientoRecuperado.experiencia
      );
      const usuarioRecuperado = new Usuario(
        obj.nombreUsuario,
        contraseniaRecuperada,
        nombreRecuperado,
        apellidoRecuperado,
        edadRecuperada,
        pesoRecuperado,
        alturaRecuperada,
        unEntrenamiento,
        restriccionesAlimenticiasRecuperada
      );

      return usuarioRecuperado;
    }
  }
};

// Funcion para calcular la edad
const calcularEdad = (fecha) => {
  hoy = new Date();
  const array_fecha = fecha.split("-");
  if (array_fecha.length != 3) return false;
  const ano = parseInt(array_fecha[0]);
  const mes = parseInt(array_fecha[1]);
  const dia = parseInt(array_fecha[2]);
  const edad = hoy.getFullYear() - ano - 1;
  if (hoy.getMonth() + 1 - mes < 0) return edad;
  if (hoy.getMonth() + 1 - mes > 0) return edad + 1;
  if (hoy.getUTCDate() - dia >= 0) return edad + 1;

  return edad;
};
//Funcion para renderizar las rutinas

const renderizarEncabezadoRutina = (nodoPadre, cuerpo, titulo) => {
  const NODO_CREADO = document.createElement("div");
  NODO_CREADO.innerHTML = `<h1>${titulo}</h1>
                              <p>${cuerpo}</p>
                              <h3>A continuacion se detalla la rutina dia por dia</h3>
                              <div class="contenedorBotones ">
                                <button id="cambiarRutina" class="btn btn-primary btn-large botones-rutina">Cambiar Rutina</button>
                                <button id="volverInicio" class="btn btn-primary btn-large botones-rutina"> Volver a Inicio</button>
                             </div>                             
                              `;
  NODO_CREADO.className = "rutina";
  NODO_CREADO.setAttribute("id", "nodoRutina");
  nodoPadre.append(NODO_CREADO);
};

//Funcion Numeros aleatorios para variar los ejercicios en las rutinas

function numerosAleatoriosUnicos(cantidad, rangoMin, rangoMax) {
  const numerosSet = new Set();
  while (numerosSet.size < cantidad) {
    const numeroAleatorio =
      Math.floor(Math.random() * (rangoMax - rangoMin + 1)) + rangoMin;
    numerosSet.add(numeroAleatorio);
  }

  return Array.from(numerosSet);
}

// Funcion para renderizar tabla

const renderizarTabla = (dataArenderizar, encabezados) => {
  const tabla = document.createElement("table");
  const encabezado = document.createElement("tr");

  encabezados.forEach((encabezadoTexto) => {
    const th = document.createElement("th");
    th.textContent = encabezadoTexto;
    encabezado.appendChild(th);
  });
  tabla.appendChild(encabezado);

  clavesValor = [
    "nombre",
    "tiempo",
    "carga",
    "repeticiones",
    "observaciones",
    "comoSeHace",
  ];

  dataArenderizar.forEach((objeto) => {
    const fila = document.createElement("tr");
    clavesValor.forEach((claveValor, index) => {
      const td = document.createElement("td");
      td.innerHTML = objeto[claveValor];
      if (index === encabezados.length - 1) {
        const boton = document.createElement("button");
        boton.className = "btn btn-primary btn-custom btn-large";
        td.innerHTML = ""
        td.className = "ultimaColumna"
        boton.innerText = "Ver Video";
        boton.addEventListener("click", () => {
          window.location.href = objeto[claveValor];
        });
        td.appendChild(boton);
      }
      fila.appendChild(td);
    });
    tabla.appendChild(fila);
  });
  return tabla
};

//Funcion para renderizar la rutina por dia

const rutinaPorDia = async (
  urlBase,
  endpoint,
  cantidad,
  rangoMin,
  rangoMax,
  tiempoDelEjercicio,
  carga,
  repeticiones,
  dia
) => {
  const resp = await fetch(urlBase + endpoint);
  const data = await resp.json();
  numerosAleatorios = numerosAleatoriosUnicos(cantidad, rangoMin, rangoMax);
  const pasarAString = numerosAleatorios.map((numero) => numero.toString());
  let dataFiltrada = [];
  for (let i = 0; i < pasarAString.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (data[j].id == pasarAString[i]) {
        dataFiltrada.push(data[j]);
      }
    }
  }

  dataArenderizar = dataFiltrada.map((dato) => {
    return {
      nombre: dato.nombre,
      tiempo: dato.tiempo[tiempoDelEjercicio],
      carga: dato.cargas[carga],
      repeticiones: dato.repeticiones[repeticiones],
      observaciones: dato.observaciones,
      comoSeHace: dato.comoSeHace,
    };
  });

  const contenedorPadre = document.getElementById("nodoRutina");
  const contenedorTabla = document.createElement("div");
  contenedorTabla.setAttribute("id", "contenedorTabla");
  const titulo = document.createElement("h4");
  titulo.className = "tituloRutina";
  titulo.innerHTML = `Día ${dia}`;
  contenedorPadre.appendChild(titulo);
  contenedorPadre.appendChild(contenedorTabla);
  const encabezados = [
    "Nombre del Ejercicio",
    "Tiempo",
    "Carga recomendada",
    "Repeticiones",
    "Observaciones",
    "Como se hace",
  ];
  contenedorTabla.appendChild (renderizarTabla(dataArenderizar, encabezados));

};

// Funcion rutina segun genero

const determinoGeneroYRutina = (genero,diasDeLaSemana,urlLocal,tiempoDelEjercicio,carga,repeticiones,cantidadDeEjerciciosPorDia) =>{
    let endPoints = [
        "/pectorales.json",
        "/hombros.json",
        "/piernas.json",
        "/espalda.json",
        "/brazos.json",
      ];
    if(genero == 1){
    diasDeLaSemana.forEach((dia, index) => {
      rutinaPorDia(urlLocal,endPoints[index],cantidadDeEjerciciosPorDia,1,10,tiempoDelEjercicio,carga,repeticiones,dia);
    });
  } else {
      endPoints = [
          "/piernas.json",
          "/hombros.json",
          "/espalda.json",
          "/piernas.json",
          "/brazos.json",
        ];
        diasDeLaSemana.forEach((dia, index) => {   
        rutinaPorDia(urlLocal,endPoints[index],cantidadDeEjerciciosPorDia,1,10,tiempoDelEjercicio,carga,repeticiones,dia);
  })
}
}
//Funcion para renderizar aerobico
const renderizarEjerciciosAerobico = (nodoPadre,tiempo) => {
    const NODO_CREADO = document.createElement("div");
    NODO_CREADO.innerHTML = `<h3 id="tituloAerobico">Al finalizar cada dia de ejercicios realizar:</h3>                           
                                <ul>
                                <li>${tiempo} minutos de Cinta</li>
                                <li>${tiempo} minutos de Bicicleta rigida</li>
                                <li>${tiempo/2} minutos de salto de soga</li>
                                </ul>`;
    NODO_CREADO.className = "rutina";
    NODO_CREADO.setAttribute("id", "nodoRutina");
    nodoPadre.append(NODO_CREADO);
  };

//Funcion que determina el tipo de entrenamiento
const determinaTipoEntrenamiento = (tipoEntrenamiento) => {
  const nodoPadre = document.getElementsByTagName("body");
  const urlLocal = "../ejerciciosJSON";
  const diasDeLaSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
      let tiempoDelEjercicio 
      let carga 
      let repeticiones 
      let cantidadDeEjerciciosPorDia
      let tiempoCardio
  switch (tipoEntrenamiento) {
    case "hipertrofiaavanzada":
      renderizarEncabezadoRutina(
        nodoPadre[0],
        HIPERTROFIA_INTENSIVA,
        "Entrenamiento de Hipertrofia Avanzado"
      );
      tiempoDelEjercicio = "hipertrofia";
      carga = "pesado";
      repeticiones = "decrecientePesada";
      cantidadDeEjerciciosPorDia = 6
      determinoGeneroYRutina(usuario.genero,diasDeLaSemana,urlLocal,tiempoDelEjercicio,carga,repeticiones,cantidadDeEjerciciosPorDia)
      break;
    case "hipertrofiaalta":
      renderizarEncabezadoRutina(
        nodoPadre[0],
        HIPERTROFIA_ALTA,
        "Entrenamiento de Hipertrofia de alta exigencia"
      );
      tiempoDelEjercicio = "hipertrofia";
      carga = "pesado";
      repeticiones = "decrecienteIntermedia";
      cantidadDeEjerciciosPorDia = 5
      determinoGeneroYRutina(usuario.genero,diasDeLaSemana,urlLocal,tiempoDelEjercicio,carga,repeticiones,cantidadDeEjerciciosPorDia)
      break;
    case "hipertrofiamoderada":
      renderizarEncabezadoRutina(
        nodoPadre[0],
        HIPERTROFIA_MODERADA,
        "Entrenamiento de Hipertrofia Moderado"
      );
      tiempoDelEjercicio = "hipertrofia";
      carga = "moderado";
      repeticiones = "decrecienteIntermedia";
      cantidadDeEjerciciosPorDia = 4
      determinoGeneroYRutina(usuario.genero,diasDeLaSemana,urlLocal,tiempoDelEjercicio,carga,repeticiones,cantidadDeEjerciciosPorDia)
      break;
    case "hipertrofiabaja":
      renderizarEncabezadoRutina(
        nodoPadre[0],
        HIPERTROFIA_BAJA,
        "Entrenamiento de Hipertrofia de baja exigencia"
      )
      tiempoDelEjercicio = "hipertrofiaInicial";
      carga = "liviano";
      repeticiones = "decrecienteLiviana";
      cantidadDeEjerciciosPorDia = 4
      determinoGeneroYRutina(usuario.genero,diasDeLaSemana,urlLocal,tiempoDelEjercicio,carga,repeticiones,cantidadDeEjerciciosPorDia)
      break;
    case "tonificacionavanzada":
      renderizarEncabezadoRutina(
        nodoPadre[0],
        TONIFICACION_INTENSIVA,
        "Entrenamiento de Tonificacion Intensivo"
      );
      tiempoDelEjercicio = "potencia";
      carga = "pesado";
      repeticiones = "linealIntermedia";
      cantidadDeEjerciciosPorDia = 6
      determinoGeneroYRutina(usuario.genero,diasDeLaSemana,urlLocal,tiempoDelEjercicio,carga,repeticiones,cantidadDeEjerciciosPorDia)
      break;
    case "tonificacionalta":
      renderizarEncabezadoRutina(
        nodoPadre[0],
        TONIFICACION_ALTA,
        "Entrenamiento de Tonificacion de alta exigencia"
      );
      tiempoDelEjercicio = "potencia";
      carga = "pesado";
      repeticiones = "linealLiviana";
      cantidadDeEjerciciosPorDia = 5
      determinoGeneroYRutina(usuario.genero,diasDeLaSemana,urlLocal,tiempoDelEjercicio,carga,repeticiones,cantidadDeEjerciciosPorDia)
      break;
    case "tonificacionmoderada":
      renderizarEncabezadoRutina(
        nodoPadre[0],
        TONIFICACION_MODERADA,
        "Entrenamiento de Tonificacion de exigencia moderada"
      );
      tiempoDelEjercicio = "potencia";
      carga = "moderado";
      repeticiones = "linealLiviana";
      cantidadDeEjerciciosPorDia = 4
      determinoGeneroYRutina(usuario.genero,diasDeLaSemana,urlLocal,tiempoDelEjercicio,carga,repeticiones,cantidadDeEjerciciosPorDia)
      break;
    case "tonificacionbaja":
      renderizarEncabezadoRutina(
        nodoPadre[0],
        TONIFICACION_BAJA,
        "Entrenamiento de Tonificacion de baja exigencia"
      );
      tiempoDelEjercicio = "potencia";
      carga = "moderado";
      repeticiones = "linealLiviana";
      cantidadDeEjerciciosPorDia = 4
      determinoGeneroYRutina(usuario.genero,diasDeLaSemana,urlLocal,tiempoDelEjercicio,carga,repeticiones,cantidadDeEjerciciosPorDia)
      break;
    case "cardioavanzada":
      renderizarEncabezadoRutina(
        nodoPadre[0],
        CARDIO_INTENSIVO,
        "Entrenamiento de Actividad Cardiovascular Intensiva"
      );
      tiempoDelEjercicio = "potencia";
      carga = "liviano";
      repeticiones = "linealLiviana";
      cantidadDeEjerciciosPorDia = 4
      tiempoCardio = 40
      determinoGeneroYRutina(usuario.genero,diasDeLaSemana,urlLocal,tiempoDelEjercicio,carga,repeticiones,cantidadDeEjerciciosPorDia)
      renderizarEjerciciosAerobico(nodoPadre[0],tiempoCardio)
      break;
    case "cardioalto":
      renderizarEncabezadoRutina(
        nodoPadre[0],
        CARDIO_ALTO,
        "Entrenamiento de Actividad Cardiovascular de alta exigencia"
      );
      tiempoDelEjercicio = "potencia";
      carga = "moderado";
      repeticiones = "linealLiviana";
      cantidadDeEjerciciosPorDia = 4
      tiempoCardio = 30
      determinoGeneroYRutina(usuario.genero,diasDeLaSemana,urlLocal,tiempoDelEjercicio,carga,repeticiones,cantidadDeEjerciciosPorDia)
      renderizarEjerciciosAerobico(nodoPadre[0],tiempoCardio)
      break;
    case "cardiomoderado":
      renderizarEncabezadoRutina(
        nodoPadre[0],
        CARDIO_MODERADO,
        "Entrenamiento de Actividad Cardiovascular de exigencia moderada"
      );
      tiempoDelEjercicio = "potencia";
      carga = "moderado";
      repeticiones = "linealLiviana";
      cantidadDeEjerciciosPorDia = 3
      tiempoCardio = 24
      determinoGeneroYRutina(usuario.genero,diasDeLaSemana,urlLocal,tiempoDelEjercicio,carga,repeticiones,cantidadDeEjerciciosPorDia)
      renderizarEjerciciosAerobico(nodoPadre[0],tiempoCardio)
      break;
    case "cardiobajo":
      renderizarEncabezadoRutina(
        nodoPadre[0],
        CARDIO_BAJO,
        "Entrenamiento de Actividad Cardiovascular de baja exigencia"
      );
      tiempoDelEjercicio = "potencia";
      carga = "liviano";
      repeticiones = "linealLiviana";
      cantidadDeEjerciciosPorDia = 3
      tiempoCardio=20
      determinoGeneroYRutina(usuario.genero,diasDeLaSemana,urlLocal,tiempoDelEjercicio,carga,repeticiones,cantidadDeEjerciciosPorDia)
      renderizarEjerciciosAerobico(nodoPadre[0],tiempoCardio)
      break;
    case "recreativoavanzada":
      renderizarEncabezadoRutina(
        nodoPadre[0],
        RECREATIVO_INTENSO,
        "Entrenamiento de Actividad Recreativa Intensiva"
      );
      tiempoDelEjercicio = "hipertrofiaInicial";
      carga = "moderado";
      repeticiones = "linealIntermedia";
      cantidadDeEjerciciosPorDia = 5
      tiempoCardio = 30
      determinoGeneroYRutina(usuario.genero,diasDeLaSemana,urlLocal,tiempoDelEjercicio,carga,repeticiones,cantidadDeEjerciciosPorDia)
      renderizarEjerciciosAerobico(nodoPadre[0],tiempoCardio)
      break;
    case "recreativoalto":
      renderizarEncabezadoRutina(
        nodoPadre[0],
        RECREATIVO_ALTO,
        "Entrenamiento de Actividad Recreativa de alta intensidad"
      );
      tiempoDelEjercicio = "hipertrofiaInicial";
      carga = "moderado";
      repeticiones = "linealIntermedia";
      cantidadDeEjerciciosPorDia = 4
      tiempoCardio = 24
      determinoGeneroYRutina(usuario.genero,diasDeLaSemana,urlLocal,tiempoDelEjercicio,carga,repeticiones,cantidadDeEjerciciosPorDia)
      renderizarEjerciciosAerobico(nodoPadre[0],tiempoCardio)
      break;
    case "recreativomoderado":
      renderizarEncabezadoRutina(
        nodoPadre[0],
        RECREATIVO_MODERADO,
        "Entrenamiento de Actividad Recreativa de intensidad moderada"
      );
      tiempoDelEjercicio = "hipertrofiaInicial";
      carga = "liviano";
      repeticiones = "linealIntermedia";
      cantidadDeEjerciciosPorDia = 3
      tiempoCardio = 20
      determinoGeneroYRutina(usuario.genero,diasDeLaSemana,urlLocal,tiempoDelEjercicio,carga,repeticiones,cantidadDeEjerciciosPorDia)
      renderizarEjerciciosAerobico(nodoPadre[0],tiempoCardio)
      break;
    case "recreativobajo":
      renderizarEncabezadoRutina(
        nodoPadre[0],
        RECREATIVO_BAJO,
        "Entrenamiento de Actividad Recreativa de baja intensidad"
      );
      tiempoDelEjercicio = "hipertrofiaInicial";
      carga = "liviano";
      repeticiones = "linealIntermedia";
      cantidadDeEjerciciosPorDia = 3
      tiempoCardio = 16
      determinoGeneroYRutina(usuario.genero,diasDeLaSemana,urlLocal,tiempoDelEjercicio,carga,repeticiones,cantidadDeEjerciciosPorDia)
      renderizarEjerciciosAerobico(nodoPadre[0],tiempoCardio)
      break;
  }
}

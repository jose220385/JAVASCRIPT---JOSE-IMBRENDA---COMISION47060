if (recuperarUsuarioLogueado()) {
  const NODO_NAV = document.getElementById("ul");
  
  crearNodo(NODO_NAV, "li", "<a>Rutina</a>").children[0].setAttribute(
    "href",
    "./pages/miRutina.html"
  );
  crearNodo(
    NODO_NAV,
    "li",
    "<a>Alimentacion</a>"
  ).children[0].setAttribute("href", "./pages/miPlanDeAlimentacion.html");
  crearNodo(NODO_NAV, "button", "Cerrar Sesion").setAttribute(
    "id",
    "cerrarSesion"
  );
  const aCreados =document.querySelectorAll('nav ul li a')
  aCreados.forEach((a) => a.className= 'btn btn-primary btn-block btn-large')

  const REMOVER = document.getElementsByClassName('remover')
  for (let i = 0; i < 2; i++) {NODO_NAV.removeChild(REMOVER[0])}

  const BOTON_CERRAR_SESION = document.getElementById("cerrarSesion");
  BOTON_CERRAR_SESION.className= "btn btn-primary btn-block btn-large";
  BOTON_CERRAR_SESION.addEventListener("click", () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  });
}

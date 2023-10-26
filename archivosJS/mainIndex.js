if (recuperarUsuarioLogueado()) {
  const NODO_NAV = document.getElementById("ul");
  crearNodo(NODO_NAV, "li", "<a>Mi Rutina</a>").children[0].setAttribute(
    "href",
    "./pages/miRutina.html"
  );
  crearNodo(
    NODO_NAV,
    "li",
    "<a>Mi Plan de Alimentacion</a>"
  ).children[0].setAttribute("href", "./pages/miPlanDeAlimentacion.html");
  crearNodo(NODO_NAV, "button", "Cerrar Sesion").setAttribute(
    "id",
    "cerrarSesion"
  );
  const BOTON_CERRAR_SESION = document.getElementById("cerrarSesion");
  BOTON_CERRAR_SESION.className= "btn btn-primary btn-block btn-large";
  BOTON_CERRAR_SESION.addEventListener("click", () => {
    localStorage.clear();
    window.location.reload();
  });
}

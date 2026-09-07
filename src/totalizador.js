function calcularPrecioNeto(cantidad, precioUnitario){
  return cantidad * precioUnitario;
}

function impuestoAplicado(codigo, precioNeto) {
    if(codigo === "TX") return precioNeto * 0.0625;
    if(codigo === "UT") return precioNeto * 0.0665;
}

export { calcularPrecioNeto, impuestoAplicado };
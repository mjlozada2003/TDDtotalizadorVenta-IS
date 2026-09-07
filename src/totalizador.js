function calcularPrecioNeto(cantidad, precioUnitario){
  return cantidad * precioUnitario;
}

function impuestoAplicado(codigo, precioNeto) {
    if(codigo === "TX") return precioNeto * 0.0625;
}

export { calcularPrecioNeto, impuestoAplicado };
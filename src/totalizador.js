function calcularPrecioNeto(cantidad, precioUnitario){
  return cantidad * precioUnitario;
}
function obtenerImpuesto(codigo){
    if(codigo === "TX") return "TX(6.25%)";
    if(codigo === "UT") return "UT(6.65%)";
    if(codigo === "NV") return "NV(8%)";
    if(codigo === "AL") return "AL(4%)";
    if(codigo === "CA") return "CA(8.25%)";
}

function impuestoAplicado(codigo, precioNeto) {
    if(codigo === "TX") return precioNeto * 0.0625;
    if(codigo === "UT") return precioNeto * 0.0665;
    if(codigo === "NV") return precioNeto * 0.08;
    if(codigo === "AL") return precioNeto * 0.04;
    if(codigo === "CA") return precioNeto * 0.0825;
}

function descuentoAplicado(precioNeto) {
    if(precioNeto >= 1000 && precioNeto < 3000)return precioNeto * 0.03;
    else return 0;
}

export { calcularPrecioNeto, impuestoAplicado, descuentoAplicado };
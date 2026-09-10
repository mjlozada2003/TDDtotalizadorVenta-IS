function calcularPrecioNeto(cantidad, precioUnitario){
    if(cantidad < 0 || !Number.isInteger(cantidad)) return "Ingrese una cantidad de items válida";
    if(precioUnitario < 0) return "Ingrese un precio válido";
    else return cantidad * precioUnitario;
}
function verificarCodigo(codigo) {
    if(codigo === "") return "Seleccione un código de estado válido";
}

function impuestoAplicado(codigo, precioNeto) {
    if(codigo === "TX") return "TX(6.25%): " + precioNeto * 0.0625;
    if(codigo === "UT") return "UT(6.65%): " + precioNeto * 0.0665;
    if(codigo === "NV") return "NV(8%): " + precioNeto * 0.08;
    if(codigo === "AL") return "AL(4%): " + precioNeto * 0.04;
    if(codigo === "CA") return "CA(8.25%): " + precioNeto * 0.0825;
}

function descuentoAplicado(precioNeto) {
    if(precioNeto >= 1000 && precioNeto < 3000) return "(3%): " + precioNeto * 0.03;
    if(precioNeto >= 3000 && precioNeto < 7000) return "(5%): " + precioNeto * 0.05;
    if(precioNeto >= 7000 && precioNeto < 10000) return "(7%): " + precioNeto * 0.07;
    if(precioNeto >= 10000 && precioNeto < 30000) return "(10%): " + precioNeto * 0.10;
    if(precioNeto >= 30000) return "(15%): " + precioNeto * 0.15;
    else return "(0%): 0";
}

function calcularPrecioTotal(cantidad, precioUnitario, codigo) {
  if(cantidad === 0 && precioUnitario != 0) return "Ingrese una cantidad de items válida";
  if(precioUnitario === 0 && cantidad != 0) return "Ingrese un precio válido";
  const precioNeto = calcularPrecioNeto(cantidad, precioUnitario);
  const impuesto = impuestoAplicado(codigo, precioNeto);
  const descuento = descuentoAplicado(precioNeto);
  return precioNeto + parseFloat(impuesto.split(": ")[1]) - parseFloat(descuento.split(": ")[1]);
}

function aplicarDescuentoFijo(tipoCliente, precioNeto, categoria){
  if(tipoCliente == "Recurrente" && precioNeto > 3000 && categoria == "Alimentos"){
    return precioNeto - 100;
  }
  if(tipoCliente == "Especial" && precioNeto > 7000 && categoria == "Electrónicos"){
    return precioNeto - 200;
  }
  return precioNeto;
}

function beneficioCostoEnvio(tipoCliente, costoEnvio){
  if(tipoCliente == "Recurrente"){
    return "(%0.5): " + (costoEnvio * 0.005) + "$";
  }
  if(tipoCliente == "Antiguo Recurrente"){
    return "(%1): " + (costoEnvio * 0.01) + "$";
  }
  if(tipoCliente == "Especial"){
    return "(%1.5): " + (costoEnvio * 0.015) + "$";
  }
   return "(0%): " + 0 + "$";
}

function impuestoAdicionalCategoria(categoria, precioNeto) { 
  if(categoria == "Bebidas alcoholicas") return "(7%): " + precioNeto * 0.07;
  if(categoria == "Muebles") return "(3%): " + precioNeto * 0.03;
  if(categoria == "Electronicos") return "(4%): " + precioNeto * 0.04;
  if(categoria == "Vestimenta") return "(2%): " + precioNeto * 0.02;
  return "(0%): " + precioNeto * 0;
}


export { calcularPrecioNeto, impuestoAplicado, descuentoAplicado, calcularPrecioTotal, verificarCodigo, aplicarDescuentoFijo, beneficioCostoEnvio, impuestoAdicionalCategoria };
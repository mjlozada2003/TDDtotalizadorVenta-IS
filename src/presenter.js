import { calcularPrecioNeto, impuestoAplicado, descuentoAplicado, calcularPrecioTotal, verificarVacios, impuestoAdicionalCategoria, descuentoAdicionalCategoria, costoEnvio, beneficioCostoEnvio, beneficioDescuentoFijo } from "./totalizador.js";

const cantidad = document.querySelector("#cantidad");
const precioUnitario = document.querySelector("#precio-item");
const totalizarForm = document.querySelector("#totalizar-form");
const codigoEstado = document.querySelector("#codigo-estado");
const categoriaProducto = document.querySelector("#categoria-producto");
const pesoVolumetrico = document.querySelector("#peso-volumetrico");
const tipoCliente = document.querySelector("#tipo-cliente");
const div = document.querySelector("#resultado-div");

totalizarForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadValue = Number.parseInt(cantidad.value);
  const precioUnitarioValue = Number.parseFloat(precioUnitario.value);
  const precioNeto = calcularPrecioNeto(cantidadValue, precioUnitarioValue);
  const pesoValue = Number.parseFloat(pesoVolumetrico.value);
  const costoEnvioBase = costoEnvio(pesoValue, cantidadValue);
  if(verificarVacios(cantidadValue, precioUnitarioValue, pesoValue))
    div.innerHTML = "<p> Ingresa todos los datos faltantes </p>";
  else{
    div.innerHTML = "<p> Precio neto (" + cantidadValue + "*" + precioUnitarioValue + "): " + precioNeto + "</p>";
    div.innerHTML += "<p> Descuento " + descuentoAplicado(precioNeto) + "</p>";
    div.innerHTML += "<p> Impuesto para " + impuestoAplicado(codigoEstado.value, precioNeto) + "</p>";
    div.innerHTML += "<p> Impuesto adicional por categoria " + impuestoAdicionalCategoria(categoriaProducto.value, precioNeto) + "</p>";
    div.innerHTML += "<p> Descuento adicional por categoria " + descuentoAdicionalCategoria(categoriaProducto.value, precioNeto) + "</p>";
    div.innerHTML += "<p> Costo de envio: " + costoEnvioBase + "</p>";
    div.innerHTML += "<p> Beneficio de descuento en costo de envio: " + beneficioCostoEnvio(tipoCliente.value, costoEnvio) + "</p>";
    div.innerHTML += "<p> Beneficio de descuento fijo: -" + beneficioDescuentoFijo(tipoCliente.value, precioNeto, categoriaProducto.value) + "</p>";
    div.innerHTML += "<p> Precio total (descuentos e impuestos): " + calcularPrecioTotal(cantidadValue, precioUnitarioValue, codigoEstado.value, categoriaProducto.value, tipoCliente.value, pesoValue) + "</p>";
  }
});

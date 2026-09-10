import { calcularPrecioNeto, impuestoAplicado, descuentoAplicado, calcularPrecioTotal, verificarCodigo, impuestoAdicionalCategoria, descuentoAdicionalCategoria, costoEnvio } from "./totalizador.js";

const cantidad = document.querySelector("#cantidad");
const precioUnitario = document.querySelector("#precio-item");
const totalizarForm = document.querySelector("#totalizar-form");
const codigoEstado = document.querySelector("#codigo-estado");
const categoriaProducto = document.querySelector("#categoria-producto");
const pesoVolumetrico = document.querySelector("#peso-volumetrico");
const div = document.querySelector("#resultado-div");

totalizarForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadValue = Number.parseInt(cantidad.value);
  const precioUnitarioValue = Number.parseFloat(precioUnitario.value);
  const precioNeto = calcularPrecioNeto(cantidadValue, precioUnitarioValue);
  const pesoValue = Number.parseFloat(pesoVolumetrico.value);

  verificarCodigo(codigoEstado.value);

  div.innerHTML = "<p> Precio neto (" + cantidadValue + "*" + precioUnitarioValue + "): " + precioNeto + "</p>";
  div.innerHTML += "<p> Descuento " + descuentoAplicado(precioNeto) + "</p>";
  div.innerHTML += "<p> Impuesto para " + impuestoAplicado(codigoEstado.value, precioNeto) + "</p>";
  div.innerHTML += "<p> Impuesto adicional por categoria " + impuestoAdicionalCategoria(categoriaProducto.value, precioNeto) + "</p>";
  div.innerHTML += "<p> Descuento adicional por categoria " + descuentoAdicionalCategoria(categoriaProducto.value, precioNeto) + "</p>";
  div.innerHTML += "<p> Costo de envio " + costoEnvio(pesoValue, cantidadValue);
  div.innerHTML += "<p> Precio total (descuento e impuesto): " + calcularPrecioTotal(cantidadValue, precioUnitarioValue, codigoEstado.value) + "</p>";
});

import {calcularPrecioNeto, impuestoAplicado, descuentoAplicado, calcularPrecioTotal, verificarCodigo, aplicarDescuentoFijo, beneficioCostoEnvio, impuestoAdicionalCategoria, descuentoAdicionalCategoria, costoEnvio} from "./totalizador.js";

describe("Totalizador", () => {
  it("deberia calcular el precio neto sin descuentos ni impuestos", () => {
    expect(calcularPrecioNeto(3, 2)).toEqual(6);
  });
  it("el precio deberia ser 0 si la cantidad es 0", () => {
    expect(calcularPrecioNeto(0, 2)).toEqual(0);
  });
  it("el precio deberia ser 0 si el precio unitario es 0", () => {
    expect(calcularPrecioNeto(3, 0)).toEqual(0);
  });
  it("debería calcular el precio neto con decimales", () => {
    expect(calcularPrecioNeto(2, 3.2)).toEqual(6.4);
  });

  it("deberia mostrar el impuesto aplicado al precio neto", () => {
    expect(impuestoAplicado("TX", 60)).toEqual("TX(6.25%): 3.75");
  });
  it("deberia mostrar el impuesto aplicado al precio neto", () =>{
    expect(impuestoAplicado("UT", 60)).toEqual("UT(6.65%): 3.99");
  });
  it("deberia mostrar el impuesto aplicado al precio neto", () =>{
    expect(impuestoAplicado("NV", 60)).toEqual("NV(8%): 4.8");
  });
  it("deberia mostrar el impuesto aplicado al precio neto", () =>{
    expect(impuestoAplicado("AL", 60)).toEqual("AL(4%): 2.4");
  });
  it("deberia mostrar el impuesto aplicado al precio neto", () =>{
    expect(impuestoAplicado("CA", 60)).toEqual("CA(8.25%): 4.95");
  });

  it("deberia ver el descuento aplicado al precio neto", () =>{
    expect(descuentoAplicado(60)).toEqual("(0%): 0");
  });
  it("deberia ver el descuento aplicado al precio neto", () =>{
    expect(descuentoAplicado(1000)).toEqual("(3%): 30");
  });
  it("deberia ver el descuento aplicado al precio neto", () =>{
    expect(descuentoAplicado(3000)).toEqual("(5%): 150");
  });
  it("deberia ver el descuento aplicado al precio neto", () =>{
    expect(descuentoAplicado(8000)).toEqual("(7%): 560");
  });
  it("deberia ver el descuento aplicado al precio neto", () =>{
    expect(descuentoAplicado(10000)).toEqual("(10%): 1000");
  });
  it("deberia ver el descuento aplicado al precio neto", () =>{
    expect(descuentoAplicado(30000)).toEqual("(15%): 4500");
  });

  it("deberia ver el precio total con impuestos y descuentos aplicados", () =>{
    expect(calcularPrecioTotal(20,3,"TX")).toEqual(63.75);
  });
  it("deberia ver el precio total con impuestos y descuentos aplicados", () =>{
    expect(calcularPrecioTotal(0,0,"UT")).toEqual(0);
  });

  it("deberia mostrar un mensaje de error si el codigo de estado no es seleccionado", () =>{
    expect(verificarCodigo("")).toEqual("Seleccione un código de estado válido");
  });

  it("deberia mostrar un mensaje de error si la cantidad de items es invalida", () =>{
    expect(calcularPrecioNeto(-1, 3)).toEqual("Ingrese una cantidad de items válida");
  });
  it("deberia mostrar un mensaje de error si la cantidad de items es invalida", () =>{
    expect(calcularPrecioTotal(0, 3, "TX")).toEqual("Ingrese una cantidad de items válida");
  });
  it("deberia mostrar un mensaje de error si la cantidad de items es invalida", () =>{
    expect(calcularPrecioNeto(1.5, 3)).toEqual("Ingrese una cantidad de items válida");
  });

  it("deberia mostrar un mensaje de error si el precio unitario es negativo", () =>{
    expect(calcularPrecioNeto(20, -3)).toEqual("Ingrese un precio válido");
  });
  it("deberia mostrar un mensaje de error si el precio unitario es invalido", () =>{
    expect(calcularPrecioTotal(20, 0, "TX")).toEqual("Ingrese un precio válido");
  });

  //TESTS PARTE 2
  it("debería mostrar el precio total con descuento de monto fijo por cliente recurrente, precio neto y categoría", ()=>{
    expect(aplicarDescuentoFijo("Recurrente", 3001, "Alimentos")).toEqual(2901);
  });
  it("debería mostrar el precio total con descuento de monto fijo por cliente especial, precio neto y categoria", () =>{
    expect(aplicarDescuentoFijo("Especial", 7001, "Electrónicos")).toEqual(6801);
  });
  it("debería mostrar el beneficio de cliente normal en el costo de envío", ()=>{
    expect(beneficioCostoEnvio("Normal", 1000)).toEqual("(0%): 0$");
  });
  it("debería mostrar el beneficio de cliente recurrente en el costo de envío", ()=>{
    expect(beneficioCostoEnvio("Recurrente", 1000)).toEqual("(%0.5): 5$");
  });
  it("deberia mostrar el beneficio de cliente antiguo recurrente en el costo de envío", ()=>{
    expect(beneficioCostoEnvio("Antiguo Recurrente", 1000)).toEqual("(%1): 10$");
  });
  it("debería mostrar el beneficio de cliente especial en el costo de envío", ()=>{
    expect(beneficioCostoEnvio("Especial", 1000)).toEqual("(%1.5): 15$");
  });
  it("debería mostrar el impuesto adicional al producto por categoria alimentos", ()=>{
    expect(impuestoAdicionalCategoria("Alimentos", 1000)).toEqual("(0%): 0");
  });
  it("deberia mostrar el impuesto adicional por categoria Bebidas alcoholicas", () => {
    expect(impuestoAdicionalCategoria("Bebidas alcoholicas", 1000)).toEqual("(7%): 70");
  });
  it("deberia mostrar el impuesto adicional por categoria material de escritorio", ()=>{
    expect(impuestoAdicionalCategoria("Material de escritorio", 1000)).toEqual("(0%): 0");
  });
  it("deberia mostrar el impuesto adicional por categoria muebles", ()=> {
    expect(impuestoAdicionalCategoria("Muebles", 1000)).toEqual("(3%): 30");
  });
  it("deberia mostrar el impuesto adicional por categoria electronicos", () => {
    expect(impuestoAdicionalCategoria("Electronicos", 1000)).toEqual("(4%): 40");
  });
  it("deberia mostrar el impuesto adicional por categoria vestimenta", () =>{
    expect(impuestoAdicionalCategoria("Vestimenta", 1000)).toEqual("(2%): 20");
  });
  it("deberia mostrar el impuesto adicional por categoria varios", () => {
    expect(impuestoAdicionalCategoria("Varios", 1000)).toEqual("(0%): 0");
  });
  it("deberia mostrar el descuento adicional por categoria alimentos", () => {
    expect(descuentoAdicionalCategoria("Alimentos", 1000)).toEqual("(2%): 20")
  });
  it("deberia mostrar el descuento adicional por categoria bebidas alcoholicas", () => {
    expect(descuentoAdicionalCategoria("Bebidas alcoholicas", 1000)).toEqual("(0%): 0")
  });
  it("deberia mostrar el descuento adicional por categoria material de escritorio", () => {
    expect(descuentoAdicionalCategoria("Material de escritorio", 1000)).toEqual("(1.5%): 15")
  });
   it("deberia mostrar el descuento adicional por categoria muebles", () => {
    expect(descuentoAdicionalCategoria("Muebles", 1000)).toEqual("(0%): 0");
  });
   it("deberia mostrar el descuento adicional por categoria electronicos", () => {
    expect(descuentoAdicionalCategoria("Electronicos", 1000)).toEqual("(1%): 10")
  });
   it("deberia mostrar el descuento adicional por categoria vestimenta", () => {
    expect(descuentoAdicionalCategoria("Vestimenta", 1000)).toEqual("(0%): 0")
  });
   it("deberia mostrar el descuento adicional por categoria varios", () => {
    expect(descuentoAdicionalCategoria("Varios", 1000)).toEqual("(0%): 0")
  });
  it("deberia mostrar el costo de envio en base a un peso volumetrico 0-10", () => {
    expect(costoEnvio(5, 20)).toEqual(0);
  })
});


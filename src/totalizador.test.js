import {calcularPrecioNeto, impuestoAplicado, descuentoAplicado, calcularPrecioTotal, verificarCodigo, aplicarDescuentoFijo} from "./totalizador.js";

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
  })
});



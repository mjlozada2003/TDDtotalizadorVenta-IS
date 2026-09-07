import {calcularPrecioNeto, impuestoAplicado, descuentoAplicado} from "./totalizador.js";

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
    expect(impuestoAplicado("TX", 60)).toEqual(3.75);
  });
  it("deberia mostrar el impuesto aplicado al precio neto", () =>{
    expect(impuestoAplicado("UT", 60)).toEqual(3.99);
  });
  it("deberia mostrar el impuesto aplicado al precio neto", () =>{
    expect(impuestoAplicado("NV", 60)).toEqual(4.8);
  });
  it("deberia mostrar el impuesto aplicado al precio neto", () =>{
    expect(impuestoAplicado("AL", 60)).toEqual(2.4);
  });
  it("deberia mostrar el impuesto aplicado al precio neto", () =>{
    expect(impuestoAplicado("CA", 60)).toEqual(4.95);
  });

  it("deberia ver el descuento aplicado al precio neto", () =>{
    expect(descuentoAplicado(60)).toEqual(0);
  });
  it("deberia ver el descuento aplicado al precio neto", () =>{
    expect(descuentoAplicado(1000)).toEqual(30);
  });
});




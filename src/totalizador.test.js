import calcularPrecioNeto from "./totalizador.js";

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
  })
});



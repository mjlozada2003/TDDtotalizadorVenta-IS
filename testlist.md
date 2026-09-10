# casos de prueba para cada funcionalidad ordenado por dificultad
1. Debe poder ver el precio total neto (sin descuento ni impuesto)
- cantidad de item * precio por item -> precio neto
- ingresa 0 items y pone precio -> 0 
- ingresa items y no pone precio -> 0 
- ingresa precios decimales

2. Debe poder ver sus impuestos aplicados
- UT -> (6.65%) 
- NV -> (8%)
- TX -> (6.25%)
- AL -> (4%)
- CA -> (8.25%)

3. Debe poder ver su descuento aplicado
- menor a 1000 -> 0%
- 1000 y menor a 3000 -> 3%
- 3000 y menor a 7000 -> 5%
- 7000 y menor a 10000 -> 7%
- 10000 y menor a 30000 -> 10%
- 30000 o mayor -> 15%

4. Debe poder ver el precio total con descuentos e impuestos
- si no hay descuento

5. Debe poder elegir el código de estado de una lista desplegable para evitar errores
- si no selecciona ninguna -> "selecciona un codigo de estado"

6. Debe poder error un mensaje de error cuando la cantidad de items sea invalida o cero 
- cantidad de items negativa -> "ingresa una cantidad correcta"
- cantidad de items 0 -> "ingresa una cantidad correcta"
- cantidad de items decimal ->"ingresa una cantidad correcta"

7. Cancelar compra

8. Quiero poder ver un mensaje de error cuando se ingresa informacion erronea en precios 
- precio negativo -> "ingresa una precio correcto"
- precio 0 -> "ingresa un precio correcto"

9. Como usuario quiero poder confirmar mi compra


# Testlist SEGUNDA PARTE

1. Como cliente quiero usar mi beneficio de descuento de monto fijo de acuerdo al precio neto y categoria de mis productos
- Cliente Recurrente, precio neto > 3000, categoría alimentos -> -100$
- Cliente Especial, precio neto > 7000, categoría electrónicos -> -200$
- Si no cumple -> -0$

2. Como cliente quiero usar mi beneficio en el costo de envío
- Cliente Normal -> 0%
- Cliente Recurrente -> 0.5%
- Cliente Antiguo Recurrente -> 1%
- Cliente Especial -> 1.5 %

3. Como usuario quiero ver el impuesto adicional a mi producto segun su categoría
- Alimentos -> 0%
- Bebidas alcohólicas -> 7%
- Material de escritorio -> 0%
- Muebles -> 3%
- Electrónicos -> 4%
- Vestimenta -> 2%
- Varios -> 0%

4. Como usuario quiero ver el descuento adicional a mi producto segun su categoria 
- Alimentos -> 2%
- Bebidas alcohólicas -> 0%
- Material de escritorio -> 1.5%
- Muebles -> 0%
- Electrónicos -> 1%
- Vestimenta -> 0%
- Varios -> 0%

5. Como usuario quiero ver el costo de envío de mis productos de acuerdo a su peso volumétrico
- Entre 0 y 100 -> 0$
- Entre 11 y 20 -> 3.5$
- Entre 21 y 40 -> 5$
- Entre 41 y 80 -> 6$
- Entre 80 y 100 -> 6.5$
- Entre 101 y 200 -> 8$
- Mayor a 200 -> 9$
- Pesos decimales

6. Como usuario quiero ver el detalle de mis beneficios de cliente

7. Como usuario quiero ver un mensaje de error cuando ingrese un peso volumétrico erróneo
- Peso negativo -> "Ingrese un peso válido"

8. Como usuario quiero ver el precio total con todos los descuentos e impuestos aplicados
- Precio neto + (impuesto + impuesto adicional) - (descuento + descuento adicional) + (costo de envio - descuento costo envio) - descuento fijo 

9. Como usuario quiero ver por defecto la categoría de varios.

10. Como usuario quiero ver que el código por defecto sea California

<!-- Se puede diseñar como POO -->
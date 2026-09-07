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

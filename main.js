/* Resumen
Para crear un bucle tenemos varias opciones:
    a. WHILE
    b. DO WHILE
    c. FOR

1. Al utilizar la palabra recerbada “while” podemos crear un ciclo de repeticion el cual
necesita una condicion para poder ejecutar repetidamente una serie de acciones.
Luego de la palabra reservada se coloca parentesis (sentencia a evaluar), donde
estara la expresion que sera evaluada y que estara encargada de permitir o no
continuar ejecutando su bloque de codigo. Luego de los parentesis se abriran y
cerraran las llaves {...bloque de codigo…} en donde estaran la o las acciones a ser
ejecutadas en cada iteracion. Al ser un bucle condicional se necesitara tener dentro
del bloque de codigo a iterar algo que altere en algun momento la el valor resultante
de la condicion dentro de los parentesis del ciclo while para que en algun momento
finalice, ya que de no hacerlo estaremos cayendo en un bucle infinito el cual podria
colgar el navegador en donde se este ejecutando el codigo.

2. “do while” funciona de la misma manera que el while con la diferencia de que se
comienza con la palabra reservada “do” seguido de las llaves {...bloque de codigo…}
donde estaran la o las acciones a iterar, y luego de la llave de cierre colocar la
palabra reservada “while” seguido de los parentesis con la expresion a evaluar
(exprecion o condicion). Asi como el while debe haber algo que cambie el valor de
verdad de la exprecion dentro de los parentesis para que en algun momento finalice.
Y Como ultima diferencia respecto de su contra parte while, el bucle do while permite
por lo menos ejecutar 1 vez el bloque de codigo.

3. Por ultimo tenemos la palabra reservada “for” con la cual podemos realizar un ciclo
de repeticion una cantidad determinada de veces. La estructura comun es la
siguiente: for(A;B;C){...bloque de codigo…}. A: Declaracion e inicializacion de la
variable de control, por lo general “let i = 0”, esta sera la variable que se utilizara
como indice de la iteracion. B: Condicion a ser evaluada para continuar iterando, por
lo general se utiliza la variable de control, como por ejemplo “i menor a 10” en donde
el bucle for seguira iterando mientras que esta condicion sea verdadera. C: En este
apartado se coloca el paso, al realizar un incremento en la variable de control nos
estamos asegurando que en cada iteracion su valor cambia, por lo cual la condicion
en el apartado B en algun momento sera falsa y finalizara la iteracion.
Ejercicios*/

/* 1. Realizar un programa que permita el ingreso de un numero y muestre su tabla de
multiplicar (Los primeros 10 multiplos).*/

let numero1 = parseInt((prompt("ingrese un número")))

for (let x = 1; x < 11; x = x + 1){
    console.log(numero1 * x)
}


/* 2. Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.*/5



let numero2
let suma2 = 0

do {
    numero2 = parseInt(prompt('Ingrese un número para acumular el resultado, ingrese "0" para  finalizar el programa'))
    
    while (isNaN(numero2)){
        numero2 = parseInt(prompt("Por favor ingrese un valor numérico valido"))
    }
    suma2 += numero2
}while (numero2 !== 0)

console.log("El acumulado de los números ingresados es: " + suma2);



/* 3. Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
variable guardar un numero que este en el rango 1 - 100. La persona debera poder
ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
felicitaciones y decirle en cuantos intentos lo ha realizado. */


/* 4. Realizar un programa que permita decir si un numero es primo. Un numero es primo
si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
numero ya no es primo. */


/* 5. Realizar un programa que permita dado un numero, mostrar todos sus divisores. */


/* 6. Dado un array de 10 elementos, realizar un programa que recorra ese array y
muestre un mensaje por consola con cada uno de los elementos del array.*/


/* 7. Dado un array de 10 numeros, realizar un programa que muestre por consola el
doble de cada uno de los elementos. */


/* 8. Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
que muestre un mensaje de presentacion por cada elemento del array. */


/* 9. Dado un array de 10 numeros, realizar un programa que recorra el array y solo
muestre los numeros impares. */


/* 10. Realizar un programa que permita la entrada de numeros y calcule la suma de los
numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
el usuario ingresa un 0. */


/* 11. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
numero mas grande. */


/* 12. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
numero mas chico. */


/* 13. Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
un empate. Caso contrario mostrar un mensaje con el nombre de la persona
ganadora. */


/* 14. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado.*/


/* 15. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
pero invertido. */


/* 16. Dado un array de 10 numeros desordenados, realizar un programa que imprima por
pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR) */






// let i = 0
// while (i < 20) {
//     console.log(i++);
// }

// for( let i = 0; i < 20; i += 2){
//     console.log( i );
// }


// var miArreglo = [4, 6, 8, 2]
// var total = 0

// for (let i = 0; i <= miArreglo.length; i++) {
//     total += miArreglo[i]  
// }

// console.log(total);
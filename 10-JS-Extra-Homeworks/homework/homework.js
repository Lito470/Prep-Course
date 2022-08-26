// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = []
    for (const propiedad in objeto) {
      matriz.push([propiedad, objeto[propiedad]])
  } 
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí:

  var objeto = {};

  for (let i = 0; i < string.length; i++) {
    if (!objeto.hasOwnProperty(string[i])) {
      objeto[string[i]] = 0
    }
    objeto[string[i]] += 1;
  }
return objeto;

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aqui

   var mayúsculas = '';
   var minusculas = '';
   
   for (let i = 0; i < s.length; i++) {
   
      if (s[i] === s[i].toUpperCase()) {
        minusculas = minusculas + s[i];
      }else {
        mayúsculas = mayúsculas + s[i];
      }
    
   }
   return minusculas + mayúsculas;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí:

  var strToArray = str.split(' ')
  var reverse = strToArray.map(function(elemento){
return elemento.split('').reverse().join('');
  })

return reverse.join(' ');

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

// numero = 99

var string = numero.toString(); // numero = '99'
var numInv = '';

for (let i = string.length-1; i >= 0; i--){
 numInv = numInv + string[i];
}
if (string === numInv) {
  return 'Es capicua'
} else {
  return 'No es capicua'
}
  
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
 
  let resultado = cadena.replace(/[aAbBcC]/g, '');
    return resultado;

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  arr.sort(  function (a, b) {
    if (a.length < b.length /*a es mayor que b según criterio de ordenamiento*/) {
      return -1;
    }
    if (a.length > b.length /*a es mayor que b según criterio de ordenamiento*/) {
      return 1;
    }
    // (a.length = b.length) a debe ser igual b
    return 0;
  });
  return arr;



}


function buscoInterseccion(arreglo1, arreglo2){
  /*Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  Si no tienen elementos en común, retornar un arreglo vacío.
  Aclaración: los arreglos no necesariamente tienen la misma longitud
  Escribe tu código aquí:*/
    //arreglo1  [ 1, 2, 3 ]
    //arreglo2  [ 1, 5, 8, 3 ]
  
var nuevoArray = []
for (let i = 0; i < arreglo1.length; i++) {
  for (let x = 0; x < arreglo2.length; x++) {
 
    if (arreglo1[i] === arreglo2[x]) {
      nuevoArray.push(arreglo1[i])
    }

  }
  
}
 return nuevoArray;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};


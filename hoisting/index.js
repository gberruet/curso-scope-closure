console.log(nombre); // undefined
var nombre = "Andres";

// Hoisting
var nombre = undefined
console.log(nombre)
nombre = "Andres"


// Hoisting en scope de bloque
if (true){
    var saludo = "hola"
    let despedida = "chao"
  }
  
console.log(saludo)
console.log(despedida)



// Hoisting en funciones
console.log( saludar() )

function saludar() {
  return "Hola"
}


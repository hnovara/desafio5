// ** EJERCICIO 1: **
console.log("EJERCICIO 1:");

var cantidadDeGatos = 10;

for (let index = 1; index <= cantidadDeGatos; index++) {
    const cat = "Gato #";
    if (index % 2 === 0) {
        console.log(cat +`${index}: 😸`);
    } else if (index % 3 === 0) {
        console.log(cat +`${index}: 😹`);
    } else {
        console.log(cat +`${index}: 😺`);
    }
}

// ** EJERCICIO 2: **
console.log("");
console.log("EJERCICIO 2:");

var cantidadDeGatos = 10;
var cantidadDePasos = 4;

for (let i = 1; i <= cantidadDeGatos; i++) {
    const gato = "Gato #";
    const gatoConNum = gato+`${i}: 🐈`;
    let gatoConPasos = gatoConNum; 
    for (let y = 0; y < cantidadDePasos; y++) {
        gatoConPasos = gatoConPasos.concat("🐾");
    }
    console.log(gatoConPasos);
}

// ** EJERCICIO 3 **
console.log("");
console.log("EJERCICIO 3:");

var cantidadDeGatos = 8;
var cantidadDePasos = 6;

for (let i = 1; i <= cantidadDeGatos; i++) {
    if (cantidadDeGatos % 2 === 0) {
        gatoColor = ("🐎"); // ** En mi PC funciona el emoji del gato negro, lo cambie por otro**
    } else {
        gatoColor = ("🐈");
    }
    const gato = "Gato #";
    const gatoConNum = gato+`${i}: ${gatoColor}`;
    let gatoConPasos = gatoConNum; 
    for (let y = 0; y < cantidadDePasos; y++) {
        gatoConPasos = gatoConPasos.concat("🐾");
    }
    console.log(gatoConPasos);
}
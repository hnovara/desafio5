// ** EJERCICIO 1: **
console.log("EJERCICIO 1:");

var cantidadDeGatos = 10;

for (let index = 1; index <= cantidadDeGatos; index++) {
    const cat = "Gato #";
    if (index % 2 === 0) {
        console.log(cat +`${index}: 😸`)
    } else if (index % 3 === 0) {
        console.log(cat +`${index}: 😹`)
    } else {
        console.log(cat +`${index}: 😺`)
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

var cantidadDeGatos = 10;
var cantidadDePasos = 4;

for (let i = 1; i <= cantidadDeGatos; i++) {
    const gato = "Gato #";
    if (index % 2 === 0) {
        gatoColor = ("🐈‍⬛")
    } else {
        gatoColor = ("🐈")
    }
    const gatoConNum = gato+`${i}: ${gatoColor}`;
    let gatoConPasos = gatoConNum; 
    for (let y = 0; y < cantidadDePasos; y++) {
        gatoConPasos = gatoConPasos.concat("🐾");
    }
    console.log(gatoConPasos);
}






// Adaptar el ejercicio anterior para que se muestren 2 gatos alternadamente:
// var cantidadDeGatos = 10;
// var cantidadDePasos = 4;
// ```
// Gato #1: 🐈 🐾🐾🐾🐾
// Gato #2: 🐈‍⬛ 🐾🐾🐾🐾
// Gato #3: 🐈 🐾🐾🐾🐾
// Gato #4: 🐈‍⬛ 🐾🐾🐾🐾
// Gato #5: 🐈 🐾🐾🐾🐾
// Gato #6: 🐈‍⬛ 🐾🐾🐾🐾
// Gato #7: 🐈 🐾🐾🐾🐾
// Gato #8: 🐈‍⬛ 🐾🐾🐾🐾
// Gato #9: 🐈 🐾🐾🐾🐾
// Gato #10: 🐈‍⬛ 🐾🐾🐾🐾
// ```





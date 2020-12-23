const PIEDRA = 0
const PAPEL = 1
const TIJERA = 2
var eleccion
function obtenerValor(n) {
    eleccion = n

}
var maquina
function maquinaGenerador() {
    maquina = Math.floor(Math.random() * 3)
    // return maquina
}
var ganar = 0
var empatar = 0
var perder = 0
function empezar() {
    // cases:
    // 1.- eleccion = 0    -   maquina 1    Gana maquina
    // 6.- eleccion = 2    -   maquina 0    Gana maquina
    // 4.- eleccion = 1    -   maquina 2    Gana maquina
    // 2.- eleccion = 0    -   maquina 2    Gana usuario
    // 3.- eleccion = 1    -   maquina 0    Gana usuario
    // 5.- eleccion = 2    -   maquina 1    Gana usuario
    
    console.log('Eleccion maquina' + maquina);

    if (eleccion == maquina) {
        empatar += 1
        resultados(empatar, "empates")
    }
    if (eleccion == 0 && maquina == 1 || eleccion == 2 && maquina == 0 || eleccion == 1 && maquina == 2) {
        perder += 1
        resultados(perder, "ia_puntos")
    }
    if (eleccion == 0 && maquina == 2 || eleccion == 1 && maquina == 0 || eleccion == 2 && maquina == 1) {
        ganar += 1
        resultados(ganar, "tus_puntos")
    }
}



// maquinaGenerador()



function resultados(puntos, id) {
    document.getElementById(id).innerHTML = puntos
}

// const PIEDRA = 0
// const PAPEL = 1
// const TIJERA = 2

var eleccion
function obtenerValor(n) {
    eleccion = n

}
var maquina = 0
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

    // console.log('Eleccion maquina' + maquina);

    if (eleccion == maquina) {
        empatar += 1
        resultados(empatar, "empates")
        Swal.fire({
            title: 'Has empatado!',
            text: 'Inténtalo de nuevo',
            width: 600,
            padding: '3em',
            background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(240,173,78,0.5)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          })
    }
    if (eleccion == 0 && maquina == 1 || eleccion == 2 && maquina == 0 || eleccion == 1 && maquina == 2) {
        perder += 1
        resultados(perder, "ia_puntos")
        Swal.fire({
            title: 'Has perdido :(',
            text: 'Esfuérzate más',
            width: 600,
            padding: '3em',
            background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(213,130,138, 0.5)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          })
    }
    if (eleccion == 0 && maquina == 2 || eleccion == 1 && maquina == 0 || eleccion == 2 && maquina == 1) {
        ganar += 1
        resultados(ganar, "tus_puntos")
        Swal.fire({
            title: 'Has ganado :)',
            text: 'Sigue así',
            width: 600,
            padding: '3em',
            background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          })
    }
}

function resultados(puntos, id) {
    document.getElementById(id).innerHTML = puntos
}

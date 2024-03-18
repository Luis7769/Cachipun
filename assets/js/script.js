// Desafío - Cachipún contra la máquina

// Definición de variables y constantes
const PIEDRA = 0;
const PAPEL = 1;
const TIJERAS = 2;

const GANA_HUMANO = "¡¡¡ Genial !!!\nEres el Campeón del mundial del cachipún.";
const GANA_MAQUINA = "¡¡¡ Buuu !!!\nLa máquina te ha vencido al cachipún.\nEliminacion garantizada.";
const EMPATE = "¡¡¡ EMPATE !!! Seguro para la próxima hay un ganador.\n\n¯\\_(ツ)_/¯";

var juegos = 0; // Cantidad de juegos de cachipún contra la máquina
var jugada_humano = 0; // Jugada realizada por el humano
var jugada_maquina = 0; // Jugada realizada por la máquina

// Here we go!
// Pedimos la cantidad de juegos mayor que 0 para enfrentar a la máquina.
while (true) {
    juegos = parseInt(prompt('Ingresa cantidad de cachipún a jugar:'));
    if ((juegos != NaN) && (juegos > 0)) {
        break;
    }
    else {
        alert('Por favor ingresa una cantidad de juegos válida');
    }
}

// ¡¡¡ A jugar !!!
while (juegos > 0) {
    jugada_humano = juega_humano();
    jugada_maquina = juega_maquina();

    if (jugada_humano != jugada_maquina) {
        switch (jugada_humano) {
            case PIEDRA:
                if (jugada_maquina == PAPEL) {
                    alert(GANA_MAQUINA);
                } else {
                    alert(GANA_HUMANO);
                }
                break;
            case PAPEL:
                if (jugada_maquina == TIJERAS) {
                    alert(GANA_MAQUINA);
                } else {
                    alert(GANA_HUMANO);
                }
                break;
            case TIJERAS:
                if (jugada_maquina == PIEDRA) {
                    alert(GANA_MAQUINA);
                } else {
                    alert(GANA_HUMANO);
                }
                break;
        }
    }
    else {
        alert(EMPATE);
    }

    juegos--; // Una jugada más o fin
}

// Juega el humano
function juega_humano() {
    var jugada = 666; // Jugada ingresada por el humano
    while (true) {
        jugada = parseInt(prompt('Ingresa tu jugada cachipún (0, 1 ó 2):\n0 para PIEDRA\n1 para PAPEL\n2 para TIJERAS'));
        if ((jugada != NaN) && (jugada > -1) && (jugada < 3)) {
            break;
        }
        else {
            alert('Por favor ingresa una jugada de cachipún válida');
        }
    }
    return jugada;
}

// Juega la máquina
function juega_maquina() {
    return Math.floor(Math.random() * 3);
}
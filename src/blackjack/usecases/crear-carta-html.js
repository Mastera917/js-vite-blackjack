

/**
 * 
 * @param {Sring} carta 
 * @returns { HTMLimagen} imagen de retorno
 */
export const crearCartaHTML = (carta) => {

        if ( !carta ) throw new error('La carta es un argumento obligatori')
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');

        return imgCarta;
}
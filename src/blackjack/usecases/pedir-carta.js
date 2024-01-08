
/**
 *  función me permite tomar una carta
 * @param {Array<String>} deck se recive el mazo de cartas revuelto.
 * @returns {String} retrtona una carta ej: 5C
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}

export default pedirCarta;
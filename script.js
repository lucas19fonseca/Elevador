function moverElevador(andar) {
    const cabine = document.querySelector('.cabine');
    
    if (andar === 1) {
        cabine.style.bottom = '0';
    } else if (andar === 2) {
        cabine.style.bottom = '150px';
    } else if (andar === 3) {
        cabine.style.bottom = '300px';
    }
}

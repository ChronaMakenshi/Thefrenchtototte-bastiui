let isDragging = false;

function onMouseMove(e) {
    if (!isDragging) return;

    const image = document.getElementById('follow-image');
    const container = document.querySelector('.block5');

    // Calcul de la position relative de la souris ou du toucher dans le conteneur
    const rect = container.getBoundingClientRect();
    const mouseX = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;

    // Définit les limites pour la position left
    const minLeft = -146;
    const maxLeft = 23;

    // Calcule la nouvelle position de l'image sur l'axe X (de droite à gauche)
    const containerWidth = rect.width;
    const imageWidth = image.offsetWidth;

    // Calcule la nouvelle position en pourcentage pour rendre le mouvement fluide
    let newPosX = (1 - (mouseX / containerWidth)) * (containerWidth - imageWidth);

    // Applique les limites
    if (newPosX < minLeft) {
        newPosX = minLeft;
    } else if (newPosX > maxLeft) {
        newPosX = maxLeft;
    }

    // Met à jour la position de l'image
    image.style.left = `${newPosX}%`;
}

document.addEventListener('mousedown', function(e) {
    const image = document.getElementById('follow-image');

    if (e.target === image) {
        isDragging = true;
        document.addEventListener('mousemove', onMouseMove);
    }
});

document.addEventListener('mouseup', function() {
    isDragging = false;
    document.removeEventListener('mousemove', onMouseMove);
});

document.addEventListener('touchstart', function(e) {
    const image = document.getElementById('follow-image');

    if (e.target === image) {
        isDragging = true;
        document.addEventListener('touchmove', onMouseMove);
    }
});

document.addEventListener('touchend', function() {
    isDragging = false;
    document.removeEventListener('touchmove', onMouseMove);
});


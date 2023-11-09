function openImages() {
    // Zuerst den HTML-Inhalt der Galerie-Seite laden und anzeigen
    fetch('assets/templates/images.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .then(() => {
            // Nachdem der HTML-Inhalt geladen wurde, die Fotos anzeigen
            renderFoto();
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
  
        closeMenu();
  }

/* Fotogalerie */

let image = ['/assets/img/baum-sonne.jpg', '/assets/img/baumpilz.jpg', '/assets/img/fliegenpilz.jpg', '/assets/img/wald-mit-sonne.jpg', '/assets/img/wasserhaus.jpg' ]

function renderFoto() {

    for (let i=0; i <image.length; i++) {
    document.getElementById('uploadImage').innerHTML += `
        <div class="img-container">
            <img onclick="openImg(${i})" class="imgBox"  src="${image[i]}"> 
        </div>`;
    }
}

function openImg(i) {
    document.getElementById('showImage').innerHTML = `
    <div class="showImage">
        <button id="backImg" onclick="backImage(${i})" class="backImg"><</button>
        <div><img src="${image[i]}"></div>
        <button id="nextImgBtn" onclick="nextImage(${i})" class="nextImg">></button>
        <button id="closeButton" onclick="closeImage(${i})" class="closeImg">X</button>
    </div>`;

    // Event-Handler für Wischgesten in der Bildanzeige
    const showImage = document.querySelector('.showImage');
    let touchStartX;

    showImage.addEventListener('touchstart', function (e) {
        touchStartX = e.touches[0].clientX;
    });

    showImage.addEventListener('touchmove', function (e) {
        const touchEndX = e.touches[0].clientX;
        const deltaX = touchEndX - touchStartX;

        if (deltaX > 50) {
            // Wischen nach rechts (vorheriges Bild)
            backImage(i);
        } else if (deltaX < -50) {
            // Wischen nach links (nächstes Bild)
            nextImage(i);
        }
    });
}
function backImage(i){
    if (i > 0) {
        i--;
    } else {
        i = 85;
    }
    openImg(i);
}
function nextImage(i){
    if (i < image.length -1){
        i++;
    } else {
        i = 0;
    }
    openImg(i);
}
function closeImage(i){
    let closeImage = document.getElementById('showImage');
    closeImage.innerHTML = ``;
}

function openContact() {
    // Zuerst den HTML-Inhalt der Galerie-Seite laden und anzeigen
    fetch('assets/templates/contact.html')
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
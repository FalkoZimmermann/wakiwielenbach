function openDownloads() {
    // Zuerst den HTML-Inhalt der Galerie-Seite laden und anzeigen
    fetch('assets/templates/downloads.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
    
        closeMenu();
  }
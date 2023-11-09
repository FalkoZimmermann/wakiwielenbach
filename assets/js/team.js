function openTeam() {
    fetch('assets/templates/overUs.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
  
        closeMenu();
  
  }

showMembers('showMembers1');
showMembers('showMembers2');
showMembers('showMembers3');
showMembers('showMembers4');

function showMembers(menuId) {

    if (window.location.pathname.includes('/assets/templates/overUs.html')) {
    const menu = document.getElementById(menuId);
    menu.classList.toggle('show-members');
    } else {
        console.log("You are not on the teamsite. Have fun...");
    }
}



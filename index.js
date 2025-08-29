homeEl = document.getElementById("home-score");
guestEl = document.getElementById("guest-score");

function homeAdd1 () {
    let homeCurrentScore = parseInt(homeEl.textContent);
    homeEl.textContent = homeCurrentScore + 1;
}

function homeAdd2 () {
    let homeCurrentScore = parseInt(homeEl.textContent);
    homeEl.textContent = homeCurrentScore + 2;
}

function homeAdd3 () {
    let homeCurrentScore = parseInt(homeEl.textContent);
    homeEl.textContent = homeCurrentScore + 3;
}



function guestAdd1 () {
    let guestCurrentScore = parseInt(guestEl.textContent);
    guestEl.textContent = guestCurrentScore + 1;
}

function guestAdd2 () {
    let guestCurrentScore = parseInt(guestEl.textContent);
    guestEl.textContent = guestCurrentScore + 2;
}

function guestAdd3 () {
    let guestCurrentScore = parseInt(guestEl.textContent);
    guestEl.textContent = guestCurrentScore + 3;
}
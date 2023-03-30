var modalShown = localStorage.getItem('identityWarnModalShown');
var modal = document.getElementById("identity-warn-modal-main");
var closespan = document.getElementsByClassName("identity-warn-modal-close")[0];

if (modalShown != 'true') {
    modal.style.display = "block";
}

closespan.onclick = function() {
     modal.style.display = "none";
     localStorage.setItem('identityWarnModalShown', true);
}
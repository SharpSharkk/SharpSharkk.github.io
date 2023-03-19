const bigcircle = document.querySelector(".launchanimate");

function opentab() {
    setTimeout(function() {bigcircle.classList.add("smallen")}, 250);
}
opentab()

function openwindow(site) {window.open(site,"_self");}
function changingtab(site) {
    bigcircle.classList.remove("smallen");
    setTimeout(function() {openwindow(site)},1500);
}
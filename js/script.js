var navEl = document.getElementById('navContainer');
var overlayEl = document.getElementById('overlay');
window.addEventListener('scroll', function(){
    if (navEl.offsetTop >= window.pageYOffset) {
        navEl.classList.remove('top-fix');
    } else if (navEl.offsetTop < window.pageYOffset) {
        navEl.classList.add('top-fix');
    }
})

function expand() {
    var expandEl = document.getElementById('expandBtn');
    expandEl.classList.toggle('expanded');
    navEl.classList.toggle('show');
}

function openOverlay() {
    overlayEl.classList.add('show-overlay');
}

window.onclick = function(ev) {
    if(ev.target === this.overlayEl) {
        overlayEl.classList.remove('show-overlay')
    }
}

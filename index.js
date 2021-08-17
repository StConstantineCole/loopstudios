const closeBtn = document.getElementById('closeBtn');
const navlink = document.querySelectorAll('#nav-link');
const navbar = document.getElementById('nav-bar');
const menuBtn = document.getElementById('second-menu-btn');


function openmenu() {
        if (navbar.style.display != 'block') {
            navbar.style.display = 'block';
    }
}

function closemenu() {
    if (navbar.style.display != 'none') {
        navbar.style.display = 'none'
    }
}



menuBtn.addEventListener('click', openmenu);
closeBtn.addEventListener('click', closemenu);

console.log('hello');
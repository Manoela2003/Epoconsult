
let dropdownBig = document.querySelector('.larger-dropdown');
let dropdownSmall = document.querySelector('.smaller-dropdown .dropdown');
let liBig = document.querySelector('.arrow-dropdown');
let liSmall = document.querySelector('.smaller-dropdown');
let mobileSize = window.matchMedia("(max-width: 768px)");
if (mobileSize.matches) {
        let arrowDownBig = document.querySelector('.fa-angle-down').addEventListener('click', clickedBig);
        let arrowDownSmall = document.querySelector('.smaller-dropdown .fa-angle-down').addEventListener('click', clickedSmall);
}

function clickedBig() {
        if (!dropdownBig.classList.contains('clicked')) {
                dropdownBig.classList.add('clicked');
                liBig.style.paddingBottom = '0';
                dropdownBig.style.visibility = 'visible';
                dropdownBig.style.opacity = '1';
        }
        else {
                dropdownBig.classList.remove('clicked');
                dropdownBig.style.visibility = 'hidden';
                dropdownBig.style.opacity = '0';
                liBig.style.paddingBottom = '0.75rem';
        }
}

function clickedSmall() {
        if (!dropdownSmall.classList.contains('clicked')) {
                dropdownSmall.classList.add('clicked');
                liSmall.style.paddingBottom = '0';
                dropdownSmall.style.visibility = 'visible';
                dropdownSmall.style.opacity = '1';
        }
        else {
                dropdownSmall.classList.remove('clicked');
                dropdownSmall.style.visibility = 'hidden';
                dropdownSmall.style.opacity = '0';
                liSmall.style.paddingBottom = '0.75rem';
        }
}
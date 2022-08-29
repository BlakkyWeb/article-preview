const shareBtn = document.querySelector('[data-share]');
const position = document.querySelector('[data-position]');
const svg = document.querySelector('[data-svg]');
const profile = document.querySelector('[data-profile]');


shareBtn.addEventListener('click', () => {
    position.classList.toggle('view');
    shareBtn.classList.toggle('bkg');
    svg.classList.toggle('color');
    profile.classList.toggle('hide');
})
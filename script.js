document.querySelector('.fa-bars').addEventListener('click', () => {
    document.querySelector('.main').classList.add('rotating');
    document.querySelector('.fa-bars').classList.add('translating');
    document.querySelector('.fa-times').classList.add('close-translating');
    document.querySelector('.btn-sidenav-open').classList.add('sidenav-slide');
    document.querySelector('.home').classList.add('home-moving');
    document.querySelector('.about').classList.add('about-moving');
    document.querySelector('.contact').classList.add('contact-moving');
})

document.querySelector('.fa-times').addEventListener('click', () => {
    document.querySelector('.main').classList.remove('rotating');
    document.querySelector('.fa-bars').classList.remove('translating');
    document.querySelector('.fa-times').classList.remove('close-translating');
    document.querySelector('.btn-sidenav-open').classList.remove('sidenav-slide');
    document.querySelector('.home').classList.remove('home-moving');
    document.querySelector('.about').classList.remove('about-moving');
    document.querySelector('.contact').classList.remove('contact-moving');
})
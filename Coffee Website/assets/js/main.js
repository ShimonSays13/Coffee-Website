// Show menu
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

// Menu show
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// Menu hidden
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// Remove menu mobile
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //When we click on each nav__link, we remove the show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Add shadow header
const shadowHeader = () =>{
    const header = document.getElementById('header')
    //Add a class if the bottom offset is greater than 50
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       :header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

//Swiper popular
const swiperPopular = new Swiper('.popular__swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 32,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    breakpoints:{
        1150:{
            spaceBetween: 80,
        }
    }

})

// Show scroll up
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher tha 350 viewport height
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

// Scroll sections active link
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }
        else{
            sectionsClass.classList.remove('active-link')
        }

    })
}

// Scroll Reveal Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 300,
    //reset: true, // Animations repeat
})

sr.reveal('.popular__swiper, .footer__container, .footer__copy')
sr.reveal('.home__shape', {origin: 'bottom'})
sr.reveal('.home__coffee', {delay: 1000, distance: '200px', duration: 1500})
sr.reveal('.home__splash', {delay: 1600, scale: 0, duration: 1500})
sr.reveal('.home__bean-1, .home__bean-2', {delay: 2200, scale: 0, duration: 1500, rotate: {z: 180}})
sr.reveal('.home__ice-1, .home__ice-2', {delay: 2200, scale: 0, duration: 1500, rotate: {z: 180}})
sr.reveal('.home__leaf', {delay: 2800, scale: 0, duration: 1500, rotate: {z: 90}})
sr.reveal('.home__title', {delay: 3500})
sr.reveal('.home__data, .home__sticker', {delay: 4000})
sr.reveal('.about__data', {origin: 'left'})
sr.reveal('.about__images', {origin: 'right'})
sr.reveal('.about__coffee', {delay: 1000})
sr.reveal('.about__leaf-1, .about__leaf-2', {delay: 1400, rotate: {z: 90}})
sr.reveal('.products__card, contact__info', {interval: 100})
sr.reveal('.contact__shape', {delay: 600, scale: 0})
sr.reveal('.contact__delivery', {delay: 1200})
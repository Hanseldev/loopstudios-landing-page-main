import '../styles/style.css'
// import gsap from 'gsap'

const year = document.querySelector(".js-year");
const hamburger = document.getElementById('hamburger');
const logo = document.getElementById("logo")
const menu = document.getElementById('mobile-menu');

let isOpen = false

hamburger.addEventListener('click', () => {
    if (!isOpen) {
        // Snapshot position before going fixed to prevent the jump
        const rect = hamburger.getBoundingClientRect()
        hamburger.style.top = `${rect.top}px`
        hamburger.style.left = `${rect.left}px`

        hamburger.classList.add('fixed', 'top-8', 'right-8')
        logo.classList.add('fixed', 'top-8', 'left-8')

        // Swap to close icon
        
        hamburger.classList.add('is-close')

        // Slide in
        menu.classList.remove('hidden')
        menu.classList.add('flex', '-translate-x-full', 'transition-transform', 'duration-300')
        requestAnimationFrame(() => requestAnimationFrame(() => {
            menu.classList.remove('-translate-x-full')
        }))
    } else {
        // Slide out, then hide after transition
        menu.classList.add('-translate-x-full')
        menu.addEventListener('transitionend', () => {
            menu.classList.add('hidden')
            menu.classList.remove('flex', 'transition-transform', 'duration-300')
        }, { once: true })

        hamburger.classList.remove('fixed', 'top-8', 'right-8')
        hamburger.style.top = ''
        hamburger.style.left = ''
        logo.classList.remove('fixed', 'top-8', 'left-8')

        // Swap back to hamburger icon
        hamburger.classList.remove('is-close')
        
    }
    isOpen = !isOpen
});

year.textContent = `${new Date().getFullYear()}`
//Header Toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})


// Typing Effect

let typed = new Typed('.auto-input',{
    strings: ['Photographer!', 'Graphic Designer!', 'Painter!', 'Youtuber!'],
    typeSpeed: 80,
    backSpeed: 65,
    backDelay: 1800,
    loop: true, 
})

// Active Link Sate On Scroll

// Get All Links
let navLinks = document.querySelectorAll('nav ul li a')
// Get All Selections
let sections = document.querySelectorAll('section')
console.log(Selection)

window.addEventListener('scroll', function(){
    const scrollPos = window.scrollY + 20
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active')
                }
            });
        }
    });
});
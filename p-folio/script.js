// Slowly appearing content

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
       
    });
});

const hiddenElements = document.querySelectorAll('.hiddenn');
hiddenElements.forEach((el) => observer.observe(el));

// Apperaing background color on click

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-opt");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
           
        });
    });
});

// Smooth behavior on button clicked

    document.getElementById("about").addEventListener('click',()=>{
        const element = document.getElementById('about-page');
        element.scrollIntoView({ behavior: 'smooth' });
    })

// Responsive navbar for mobile devices

document.getElementById("menu").addEventListener('click', () => {

    document.getElementById("res-nav").style.display = "flex";
    document.getElementById("res-nav").style.opacity = "1";
    document.getElementById("res-nav").style.top = "15px";


})

document.getElementById("close").addEventListener('click', () => {

    document.getElementById("res-nav").style.top = "15px";

})
document.getElementById("about").addEventListener('click',()=>{
    const element = document.getElementById('about-page');
    element.scrollIntoView({ behavior: 'smooth' });
})

// Making border when click on any button

document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');

    circles.forEach(circle => {
        circle.addEventListener('click', () => {
            // Remove the neon class from all circles
            circles.forEach(c => c.classList.remove('neon'));
            
            // Add the neon class to the clicked circle
            circle.classList.add('neon');
        });
    });
});

   const form = document.getElementById("feedbackForm");
const message = document.getElementById("feedbackMessage");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const feedback = document.getElementById("feedbackText").value.trim();

    if(name === ""){
        message.style.color = "red";
        message.textContent = "Please enter your name.";
        return;
    }

    if(feedback === ""){
        message.style.color = "red";
        message.textContent = "Please enter your feedback.";
        return;
    }

    message.style.color = "green";
    message.textContent = "🎉 Thank You! Your feedback has been submitted successfully.";

    form.reset();
});



const hero = document.querySelector(".hero");
const heroContent = document.getElementById("heroContent");

const images = [
    "./images/hero2.png",   
    "./images/slide.png",
    "./images/slide1.png"    
];

let current = 0;

// Hero update function
function updateHero() {

    hero.style.backgroundImage =
        `linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.65)), url('${images[current]}')`;

    if (current === 0) {
        heroContent.style.display = "block";
    } else {
        heroContent.style.display = "none";
    }
}



function nextSlide() {
    current = (current + 1) % images.length;
    updateHero();
}



function prevSlide() {
    current = (current - 1 + images.length) % images.length;
    updateHero();
}
updateHero();
setInterval(nextSlide, 5000);
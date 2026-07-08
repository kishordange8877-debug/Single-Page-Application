
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

const heroWelcome = document.getElementById("heroWelcome");
const heroTitle = document.getElementById("heroTitle");
const heroTagline = document.getElementById("heroTagline");
const heroDescription = document.getElementById("heroDescription");
const heroBtn1 = document.getElementById("heroBtn1");
const heroBtn2 = document.getElementById("heroBtn2");

const slides = [

    {
        image: "./images/hero2.png",

        welcome: "Welcome To",

        title: `DANGE <br><span>CHAT HOUSE</span>`,

        tagline: "The Authentic Taste of Pune, Now in Hyderabad!",

        description: "Taste the Best Panipuri, Bhel, Dabeli, Shevpuri & More with Fresh Ingredients and Amazing Flavours.",

        btn1: "Explore Menu",
        btn2: "Contact Us"
    },

    {
        image: "./images/shanichar.jfif",

        welcome: " ",

        title: `PUNERI <br><span>SPECIAL TASTE</span>`,

    tagline: "",

        description: "We bring fresh and high-quality ingredients directly from Pune for our special dishes",

        btn1: "View Menu",
        btn2: "Order Now"
    },

   
    

];

let current = 0;

function updateHero() {

    hero.style.backgroundImage =
        `linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.65)),
        url('${slides[current].image}')`;

    // Change Text
    heroWelcome.innerHTML = slides[current].welcome;
    heroTitle.innerHTML = slides[current].title;
    heroTagline.innerHTML = slides[current].tagline;
    heroDescription.innerHTML = slides[current].description;
    heroBtn1.innerHTML = slides[current].btn1;
    heroBtn2.innerHTML = slides[current].btn2;


    // Change Colors
    if (current === 0) {

        heroTitle.style.color = "#ffffff";
        heroTagline.style.color = "#FFD700";
        heroDescription.style.color = "#ffffff";

    }

    else if (current === 1) {

        heroTitle.style.color = "#FFD700";
        heroTagline.style.color = "#ffffff";
        heroDescription.style.color = "#f5f5f5";
    //         heroWelcome.style.marginTop = "130px";
    // heroTitle.style.marginTop = "120px";
    // heroBtn1.style.marginTop = "0";

    }

    else {

        heroTitle.style.color = "#ff5722";
        heroTagline.style.color = "#ffffff";
        heroDescription.style.color = "#ffffff";
         heroWelcome.style.marginTop = "180px";
    heroTitle.style.marginTop = "180px";
    heroBtn1.style.marginTop = "180px";

    }

}
if (current === 1) {
    heroContent.classList.add("second-slide");
} else {
    heroContent.classList.remove("second-slide");
}

function nextSlide() {

    current = (current + 1) % slides.length;
    updateHero();

}

function prevSlide() {

    current = (current - 1 + slides.length) % slides.length;
    updateHero();

}

updateHero();

// Auto Slider
// setInterval(nextSlide, 5000);


function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}
function toggleMenu() {
    alert("Working");
}



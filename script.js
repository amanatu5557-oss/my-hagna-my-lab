// ===========================
// Wait until page loads
// ===========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.display = "none";

    }, 2500);

});

// ===========================
// Enter Button
// ===========================

const enterButton = document.getElementById("enterButton");

enterButton.addEventListener("click", () => {

    document.getElementById("letter").scrollIntoView({

        behavior: "smooth"

    });

});

// ===========================
// Continue Button
// ===========================

const nextButton = document.getElementById("nextSection");

nextButton.addEventListener("click", () => {

    alert("More pages coming soon ❤️");

});

// ===========================
// Floating Hearts
// ===========================

const heartContainer = document.querySelector(".floating-hearts");

function createFloatingHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";

    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    heart.style.color = "#ff5c9a";

    heart.style.opacity = Math.random();

    heart.style.pointerEvents = "none";

    heart.style.transition = "transform 8s linear, opacity 8s linear";

    heartContainer.appendChild(heart);

    setTimeout(() => {

        heart.style.transform =
            `translateY(-${window.innerHeight + 200}px)`;

        heart.style.opacity = "0";

    }, 50);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createFloatingHeart, 500);

// ===========================
// Hearts On Click
// ===========================

document.addEventListener("click", function(e) {

    for(let i = 0; i < 8; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤";

        heart.style.position = "fixed";

        heart.style.left = e.clientX + "px";

        heart.style.top = e.clientY + "px";

        heart.style.fontSize = (10 + Math.random()*20) + "px";

        heart.style.pointerEvents = "none";

        heart.style.color = "#ff5c9a";

        heart.style.transition = "all 1.5s ease";

        document.body.appendChild(heart);

        const x = (Math.random() - 0.5) * 200;
        const y = (Math.random() - 0.5) * 200;

        setTimeout(() => {

            heart.style.transform =
                `translate(${x}px, ${y}px) scale(0)`;

            heart.style.opacity = "0";

        }, 10);

        setTimeout(() => {

            heart.remove();

        }, 1500);

    }

});

// ===========================
// Fade In Letter
// ===========================

const letter = document.querySelector(".letter-card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            letter.style.opacity = "1";
            letter.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.3

});

letter.style.opacity = "0";
letter.style.transform = "translateY(80px)";
letter.style.transition = "1.2s";

observer.observe(letter);
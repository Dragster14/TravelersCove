// Menu burger
function myFunction(x) {
    x.classList.toggle("change");
}

// 25ans Marie
function mdp() {

    if (document.getElementById('mdp').value === "Nidalee7") {
        document.getElementById('article-mdp').classList.add('article_mdp');
        document.getElementById('article-intro').classList.remove('article_mdp');
        document.getElementById('article-video').classList.remove('article_mdp');
        document.getElementById('article-photos').classList.remove('article_mdp');
        document.getElementById('footer-mdp').classList.remove('bottom-fixe');
    } else {
        document.getElementById('mdp').value = "";
        document.getElementById('mdp').style.border = "solid 2px red";
        document.getElementById('mdp').placeholder = ":(";
    }
}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
    function closeModal() {
document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
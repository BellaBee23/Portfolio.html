let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("Containers");
    let dots = document.getElementsByClassName("dots");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" enable", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " enable";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}
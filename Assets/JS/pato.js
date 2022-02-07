//Open Menu
function openNav() {
  document.getElementById("mySidenav").style.width = "390px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//Slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//Scroll Menu
 window.onscroll = function() {
    if (scrollY>1) {
        document.querySelector(".navigation-bar").style.display=""; 
        document.querySelector(".header").classList.add("scroll");
            }
     else{
            document.querySelector(".navigation-bar").style.display="";
            document.querySelector(".header").classList.remove("scroll"); 
        }
        if(scrollY>530 ){
          document.querySelector(".navigation-bar").style.display=""; 
      }

  }

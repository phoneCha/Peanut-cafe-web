//function ให้  header เลื่อนตามลงมา

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 0) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
});

//function ให้ภาพปก slide auto 
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
 


// function ให้ ้h1 เลื่อนขึ้นเมื่อเปิดหน้าเว็บ
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var threshold = 200; // จุดที่ต้องการให้ h1 เปลี่ยนเป็น absolute

    var h1 = document.querySelector('h1');

    if (scrollPosition >= threshold) {
        h1.classList.add('absolute-h1');
    } else {
        h1.classList.remove('absolute-h1');
    }
});






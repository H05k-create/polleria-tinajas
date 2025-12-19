const inputs = document.querySelectorAll(".input");


function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
    
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == ""){
        parent.classList.remove("focus");
    }

}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});



/* JAVASCRIPT PARA FLECHA ARRIBA */

// Botón Volver Arriba
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.remove('hidden');
  } else {
    scrollToTopBtn.classList.add('hidden');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
/**
* Template Name: Maundy
* Template URL: https://bootstrapmade.com/maundy-free-coming-soon-bootstrap-theme/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";



  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Countdown timer
   */
  function updateCountDown(countDownItem) {
    const timeleft = new Date(countDownItem.getAttribute('data-count')).getTime() - new Date().getTime();

    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    countDownItem.querySelector('.count-days').innerHTML = days;
    countDownItem.querySelector('.count-hours').innerHTML = hours;
    countDownItem.querySelector('.count-minutes').innerHTML = minutes;
    countDownItem.querySelector('.count-seconds').innerHTML = seconds;

  }

  document.querySelectorAll('.countdown').forEach(function(countDownItem) {
    updateCountDown(countDownItem);
    setInterval(function() {
      updateCountDown(countDownItem);
    }, 1000);
  });

  // Nuevo, sacado de html - quedo comentado 
  document.addEventListener("scroll", function () {
    const header = document.querySelector("#header");
    const scrollY = window.scrollY;

    if (scrollY > 50) {
      // Añade la clase cuando se baja el scroll
      header.classList.add("scrolled");
    } else {
      // Elimina la clase cuando se regresa al tope
      header.classList.remove("scrolled");
    }
  });

// JavaScript para desplazar el header 30px cuando se hace scroll
window.onscroll = function() {
  moveHeader();
};

function moveHeader() {
  const header = document.getElementById("header");
  if (window.scrollY > 100) {  // Cambia 100 por el valor que desees para iniciar el scroll
    header.style.top = "-20px";  // Mueve el header hacia arriba 30px
  } else {
    header.style.top = "0";  // Devuelve el header a la posición original
  }
}

 

  

})();

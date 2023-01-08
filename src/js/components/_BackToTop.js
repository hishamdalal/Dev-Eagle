
export function BackToTop_Run(){
  // Get the element
  let topBtn = document.getElementById("back-to-top");

  // On Click, Scroll to the page's top, replace 'smooth' with 'instant' if you don't want smooth scrolling
  //topBtn.onclick = () => window.scrollTo({ top: 0, left:0, behavior: "smooth" });
  //topBtn.onclick = () => {smoothscroll();}

  // On scroll, Show/Hide the btn with animation
  window.onscroll = () => {
      if ( window.scrollY > 300 ) {
          topBtn.classList.add('back-to-top-is-visible');
      }
      else {
          topBtn.classList.remove('back-to-top-is-visible');
      } 
  }



  function smoothScroll(target, duration) {
    let position = target.getBoundingClientRect().top;
    let offset = window.pageYOffset;
    let distance = position - offset;
    let start = null;
    
    const animate = (time) => {
      if(start === null) start = time;
      let elapsed = time - start;
      let y = ease(elapsed, offset, distance, duration);
      window.scrollTo(0, y);
      if(elapsed < duration) requestAnimationFrame(animate)
    }
    
    const ease = (t,b,c,d) => {
      t /= d / 2;
      if(t < 1) return c/2 * t * t + b;
      t--;
      return -c / 2 * (t *(t-2) - 1) + b;
    }
    
    requestAnimationFrame(animate)
  }


  let back_to_top = document.querySelector('.back-to-top');
  let header = document.querySelector('.main-header');

  back_to_top.addEventListener('click', function() {
    smoothScroll(header, 1000);
  });
}
export function NavToggle_Run (){
  let navList = document.querySelector('.nav-list');
  let navToggle = document.querySelector('.nav-toggle');
  let body_overflow = document.querySelector("body, html");

  navToggle.addEventListener("click", () => {
      const visibility = navList.getAttribute('data-visible');
          
      if( visibility === "false" ) {
          navList.setAttribute('data-visible', true);
          navToggle.setAttribute('aria-expanded', true);
          navToggle.classList.add('show');
          body_overflow.style.overflowY = "hidden";
      }
      else if ( visibility === "true" ) {
          navList.setAttribute('data-visible', false);
          navToggle.setAttribute('aria-expanded', false);
          navToggle.classList.remove('show');
          body_overflow.style.overflowY = "auto";
      }
  });

  // close list if click outside
  document.addEventListener("click", (e) => {
    if( !e.target.classList.contains('nav-toggle') && !e.target.classList.contains('nav-list') ){
      navList.setAttribute('data-visible', false);
      navToggle.setAttribute('aria-expanded', false);
      navToggle.classList.remove('show');
      body_overflow.style.overflowY = "auto";
    }
  });

  // hide .nav-list when press escape
  document.addEventListener("keyup", (e) => {
    // if nav-list is visible hide it using navToggle click trigger
    if(e.key == 'Escape' && navList.getAttribute('data-visible') == 'true') {
      
      // https://stackoverflow.com/a/6367376/2269902  
      if (navToggle.onclick) {
          navToggle.onclick();
        } else if (navToggle.click) {
          navToggle.click();
        }
    }
  })

  // https://stackoverflow.com/a/1147768/2269902
  // Make .nav-list height = body height

  // * I don't need the following because i set html overflow none 
  // * so no one can scroll to the end of page

  // var body = document.body,
  // html = document.documentElement;

  // var height = Math.max( body.scrollHeight, body.offsetHeight, 
  //                     html.clientHeight, html.scrollHeight, html.offsetHeight );

  // document.querySelector('.nav-list').style.height = height + "px";  
}

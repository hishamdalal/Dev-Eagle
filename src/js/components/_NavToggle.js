export function NavToggle_Run (){
  let navList = document.querySelector('.nav-list');
  let navToggle = document.querySelector('.nav-toggle');

  navToggle.addEventListener("click", () => {
      const visibility = navList.getAttribute('data-visible');
          
      if( visibility === "false" ) {
          navList.setAttribute('data-visible', true);
          navToggle.setAttribute('aria-expanded', true);
          navToggle.classList.add('show');
      }
      else if ( visibility === "true" ) {
          navList.setAttribute('data-visible', false);
          navToggle.setAttribute('aria-expanded', false);
          navToggle.classList.remove('show');
      }
  });


  document.addEventListener("click", (e) => {
    if( !e.target.classList.contains('nav-toggle') && !e.target.classList.contains('nav-list') ){
      navList.setAttribute('data-visible', false);
      navToggle.setAttribute('aria-expanded', false);
      navToggle.classList.remove('show');
    }
  });


  // Make .nav-list height = body height

  var body = document.body,
  html = document.documentElement;

  var height = Math.max( body.scrollHeight, body.offsetHeight, 
                      html.clientHeight, html.scrollHeight, html.offsetHeight );

  document.querySelector('.nav-list').style.height = height + "px";  
}

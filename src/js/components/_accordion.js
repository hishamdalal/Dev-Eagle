export function Accordion_Run(){
    
    let accordionTitles = document.querySelectorAll('.accordion .title');

    accordionTitles.forEach((e, i) =>  {
        e.addEventListener('click', function(n) {
            if (this.parentNode.classList.contains('active')) {
                this.parentNode.classList.remove('active');
            }
            else {
                this.parentNode.classList.add('active');
            }

        /*  if (this.parentNode.childNodes[3].style.display == 'block') {
                this.parentNode.childNodes[3].style.display = 'none';
            }
            else {
                this.parentNode.childNodes[3].style.display = 'block'
            } */
        })
    });

    // accordionTitle.addEventListener("click", (e) => {
    //     console.log(this)
    //     e.path[1].querySelector('.body').style.display = 'block';
    // });
}

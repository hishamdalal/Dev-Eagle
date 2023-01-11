export function Tabs_Run(){
    
    let tabsTitles = document.querySelectorAll('.tabs [data-id]');

    tabsTitles.forEach((e, i) =>  {
        
        e.addEventListener('click', function() {

            const id = e.dataset.id;
            
            e.parentNode.parentNode.querySelectorAll('[data-id]').forEach((e)=>{
                e.classList.remove('active');
            });
            
            e.parentNode.parentNode.querySelectorAll('[data-parent-id').forEach((e)=>{
                e.classList.remove('active');
            });

            e.classList.add('active');
            e.parentNode.parentNode.querySelector('.contents > [data-parent-id="'+id+'"]').classList.add('active');

        })
    });

}

import swal from 'sweetalert';
//let state = false;
//let body_overflow = document.querySelector("body, html");


// function overflow(swal){
//     let state = swal.getState();
//     let body_overflow = document.querySelector("body, html");
//     console.log(state);
    
//     if ( state ) {
//         body_overflow.style.overflow = "hidden";
//     }
//     else{
//         body_overflow.style.overflow = "auto";
//     }
// }

// function reset_buttons_state(elements){
//     elements.forEach((e, i)=> {
//         e.setAttribute('data-state', false);
//     })
// }

export function SweetAlert_run() {

    const sweetAlert_btn = document.querySelectorAll('.sweat-alert-btn');

    // reset buttons state if user clicked on overlay (out of swal box)
    // (if user close the alert box)
    // document.addEventListener("click", (e) => {
    //     let body_overflow = document.querySelector("body, html");
    //     body_overflow.style.overflow = "hidden";

    //     if( e.target.classList.contains('swal-overlay') ){
    //         state = false;
    //         reset_buttons_state(sweetAlert_btn);
    //         body_overflow.style.overflow = "hidden";
    //     }
    //     else {
    //         state = true;
    //         //body_overflow.style.overflow = "auto";
    //     }
    //     console.log(state, swal.getState().isOpen)
    // });

    sweetAlert_btn.forEach((e, i)=>{
        // active button state when clicked
        e.addEventListener('click', (x)=>{
            e.setAttribute('data-state', true);
        })
    })


    const danger = document.querySelector('#danger');
    danger.addEventListener('click', function(){
        swal({
            title: "Congratulation",
            text: "Hello world!",
            icon: "error",
        });
    });

    const warning = document.querySelector('#warning');
    warning.addEventListener('click', function(){
        swal({
            title: "Congratulation",
            text: "Hello world!",
            icon: "warning",
        });
    });

    const success = document.querySelector('#success');
    success.addEventListener('click', function(){
        swal({
            title: "Congratulation",
            text: "Hello world!",
            icon: "success",
        });
    });

    const info = document.querySelector('#info');
    info.addEventListener('click', function(){
        swal({
            text: "Hello world!",
            icon: "info",
            buttons: {
                cancel: true,
                confirm: true,
                roll: {
                    text: "Test!",
                    value: "roll",
                },
            },
        });
    });
}
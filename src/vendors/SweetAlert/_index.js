import {sweetalert} from 'sweetalert';

export function SweetAlert_run() {
    //return sweetalert;
    const alert = document.querySelector('#alert');
    alert.addEventListener('click', function(){
        swal({
            text: "Hello world!",
            icon: "success",
        });
    });
}
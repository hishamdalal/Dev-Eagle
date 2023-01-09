import { Eggy } from '@s-r0/eggy-js';

// https://www.cssscript.com/modern-toast-popup-eggyjs/

export function EggyJS_run() {
    //return sweetalert;
    const toast = document.querySelector('#toast');
    toast.addEventListener('click', function(){
        Eggy({
            title:  'Toast Title',
            message:  'Toast Message',
        });
        // or asynchronously
        //await Eggy({
        //  title: 'Toast Title',
        //  message: 'Toast Message',
        //});
    });
}
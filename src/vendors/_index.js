// Vendors:
// alert
import {SweetAlert_run} from './SweetAlert/_index';
// toast
import { Toast_run } from './toast/_index';
// slider
import {Swiper_run} from './Swiper/_index';

// Options:
import Options from '../../Options.json';


// Vendors:
if (Options.vendors.SweetAlert.js) {
    SweetAlert_run();
}
if (Options.vendors.Toast.js) {
    Toast_run();
}
if (Options.vendors.Swiper.js) {
    Swiper_run();
}
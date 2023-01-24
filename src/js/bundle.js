// Our Compnents:
import {Accordion_Run} from './components/_Accordion';
import {BackToTop_Run} from './components/_BackToTop';
import {DarkMode_Run}  from './components/_DarkMode';
import {NavToggle_Run} from './components/_NavToggle';
import {Tabs_Run} from './components/_Tabs';
//import {Slider_Run} from './components/_Slider';

// Vendors:
import {SweetAlert_run} from './Vendors/_SweetAlert';
import {EggyJS_run} from './Vendors/_EggyJS';
import {Swiper_run} from './Vendors/_Swiper';

// Options:
import Options from '../../Options.json';

//console.log(Options);

// Our Compnents:
if (Options.components.Accordion.js) {
    Accordion_Run();
}
if (Options.components.BackToTop.js) {
    BackToTop_Run();
}
if (Options.components.DarkMode.js) {
    DarkMode_Run();
}
if (Options.components.NavToggle.js) {
    NavToggle_Run();
}
if (Options.components.Tabs.js) {
    Tabs_Run();
}

// Vendors:
if (Options.vendors.SweetAlert.js) {
    SweetAlert_run();
}
if (Options.vendors.EggyJs.js) {
    EggyJS_run();
}
if (Options.vendors.Swiper.js) {
    Swiper_run();
}


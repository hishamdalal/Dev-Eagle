
import {Accordion_Run} from './components/_Accordion';
import {BackToTop_Run} from './components/_BackToTop';
import {DarkMode_Run}  from './components/_DarkMode';
import {NavToggle_Run} from './components/_NavToggle';

import Options from '../../Options.json';

//console.log(Options);

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
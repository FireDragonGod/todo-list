/**
 *  *--------------------------------------- Dom Stuff -------------------------------------------------------* 
 *  *---------------------------------------- Aside Toggling --------------------------------------------------*
 * */

import { Switcher } from './Switcher';
import menuImage from './menu_FILL0_wght400_GRAD0_opsz24.svg';
import closeImage from './close_FILL0_wght400_GRAD0_opsz24.svg';
import './style.css';

const imageSwitch = new Switcher();


const hiddenAside = document.querySelector('header > img:first-child');
const aside = document.querySelector('main > aside');

hiddenAside.addEventListener(
  'click',
  () => {
    const AsideClasstValue = hiddenAside.classList.value;
    hiddenAside.classList.toggle('close_image');
    aside.classList.toggle('hide');
    imageSwitch.switchImage(
      AsideClasstValue,
      hiddenAside,
      'close_image',
      '',
      closeImage,
      menuImage
    );
  }
);

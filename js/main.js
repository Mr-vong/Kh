import {fullpageNav, hideFullPageNav, showFullPageNav} from './navbar.js';
import {filter, filterBtnActive} from './filter.js';
import {numberPicker, resetNumberPicker} from './numberPicker.js';

const hamBars = document.querySelector(".hamburger-bars");
const xMark = document.querySelector(".nav-x-mark");

hamBars.addEventListener("click", showFullPageNav);
xMark.addEventListener("click", hideFullPageNav);
window.addEventListener("resize", () => {if(window.innerWidth >= 1024) hideFullPageNav()});


const menuCards = document.querySelectorAll(".menu-card");
const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach(filterBtn => {
    filterBtn.addEventListener("click", () => {
        filter(event.target.dataset.catagory, menuCards);
        filterBtnActive(event.target.dataset.catagory, filterBtns);
    })
});

window.addEventListener("DOMContentLoaded", () => {
    const url = window.location.href;
    const regExp = new RegExp("[?]*=([^#$]*)");
    const urlCatagory = regExp.exec(url);
    if(!urlCatagory) return;
    filter(urlCatagory[1], menuCards);
    filterBtnActive(urlCatagory[1], filterBtns);
})

const decreaseBtns = document.querySelectorAll(".decrease-btn");
const increaseBtns = document.querySelectorAll(".increase-btn");
const purchaseBtns = document.querySelectorAll(".purchase-btn");

decreaseBtns.forEach(decreaseBtn => {
    decreaseBtn.addEventListener("click", () => numberPicker(-1));
})
increaseBtns.forEach(increaseBtn => {
    increaseBtn.addEventListener("click", () => numberPicker(1));
})
purchaseBtns.forEach(purchaseBtn => {
    purchaseBtn.addEventListener("click", () => resetNumberPicker());
})
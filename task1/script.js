'use strict'
const topbtn = document.querySelector('.top')
function trackScroll(){
    let clientScroll = document.documentElement.scrollTop;
    let coord = document.documentElement.clientHeight;

    if (clientScroll>coord){
        topbtn.classList.add('top-show')
    }
    if (clientScroll<coord){
        topbtn.classList.remove('top-show')
    }
}
function pageUp(){
    if (document.documentElement.scrollTop>0){
        window.scrollTo(0,0)
        setTimeout(pageUp, 0)
    }
}
topbtn.addEventListener('click',pageUp);
window.addEventListener('scroll', trackScroll)
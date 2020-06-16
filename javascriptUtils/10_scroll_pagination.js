var lastScrollTop=0;

var currentViewPortHeight = document.body.getBoundingClientRect().height;
var currentScrollTop = window.scrollY;
var pageNo = 1;
if(currentScrollTop>lastScrollTop){
  lastScrollTop = currentScrollTop;
  if(currentScrollTop/pageNo > currentViewPortHeight){
    // call Api
  }
}

var m = document.querySelector("main"),
    h = document.querySelector("header"),
    hHeight;
 
function setTopPadding() {
  hHeight = h.offsetHeight;
  m.style.paddingTop = hHeight + "px";
}
window.onload = function() {
    setTopPadding();
    onScroll();
  };
   
  window.onresize = function() {
    setTopPadding();
  };
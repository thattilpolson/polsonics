// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "5px 10px";
    document.getElementById("navbar").style.background = "rgba(0, 0, 0, 0.9)";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "25px 10px";
    document.getElementById("navbar").style.background = "#FF4700";
    document.getElementById("logo").style.fontSize = "35px";
  }
}

// function myFunction() {
//   var x = document.getElementById("navbar-right");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }

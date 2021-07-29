function myFunction() { 
    var e = document.querySelector('.contact');
    var c = window.getComputedStyle(e).backgroundColor;
    if (c === "rgb(207, 196, 255)") {
    document.querySelector('.contact').style.background = "#ff826f";
} else{
    document.querySelector('.contact').style.background = "#cfc4ff";
}
}
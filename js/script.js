function myFunction() { 
    var e = document.querySelector('.connect');
    var c = window.getComputedStyle(e).backgroundColor;
    if (c === "rgb(207, 196, 255)") {
    document.querySelector('.connect').style.background = "#ff826f";
} else{
    document.querySelector('.connect').style.background = "#cfc4ff";
}
}
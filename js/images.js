window.onload = preloadFun;

let arrayIndexCount = 0;
let imageBanner = new Array ("images/banner1.jpg", "images/banner2.jpg", "images/banner3.jpg");

function preloadFun () {
    console.log(Array);
    arrayIndexCount++;
    if (imageBanner == imageBanner.length) {
        arrayIndexCount = 0;
    };
    document.getElementById("ban").src = imageBanner[arrayIndexCount];
    setTimeout(preloadFun, 3 * 1000);
}
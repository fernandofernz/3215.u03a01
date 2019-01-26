//onload event handler
window.onload = preloaderImages;

//declare  variable 
let arrayIndex = 0;
let bannerImages = [
    "images/banner1.jpg", 
    "images/banner2.jpg", 
    "images/banner3.jpg"
];
//preloader function
function preloaderImages() {

    arrayIndex++;
    if (arrayIndex == bannerImages.length) {
        arrayIndex = 0;
    }
    document.getElementById("ban").src = bannerImages[arrayIndex];

    setTimeout(preloaderImages, 3 * 1000);
}

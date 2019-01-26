//The JavaScript onload event handler 
window.onload = preloaderImages;

//declare  variable 
var arrayIndex = 0;
var bannerImages = new Array("images/banner1.jpg", "images/banner2.jpg", "images/banner3.jpg");

//The function to rotate the images.
function preloaderImages() {
    
//Hello - What do you think happened here?
    arrayIndex++;
    if (arrayIndex == bannerImages.length) {
        arrayIndex = 0;
    }
    document.getElementById("ban").src = bannerImages[arrayIndex];

    setTimeout(preloaderImages, 3 * 1000);
}

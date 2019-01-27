window.onload = preloaderImages;

let arrayIndex = 0;
let bannerImages = [
"images/event.jpg", 
"images/firefighter.jpg", 
"images/silhouette.jpg",
"images/work. jpg"
];       
let lastIndex = 0;

function preloaderImages () {
  console.log(bannerImages);
}

function mouseRollOver(MyImage) {
    //loging the initial Image
    console.log(MyImage);
    //finding index of initial Image in bannerImage Array
  var indexImage = bannerImages.indexOf(MyImage.src);
  console.log(indexImage);
  //
  lastIndex=indexImage;
  arrayIndex = indexImage;
  arrayIndex++;

  MyImage.src = bannerImages[arrayIndex];

   //console.log(bannerImages);
   
   console.log(arrayIndex);


}

function mouseUnRoll(MyImage) {
      console.log(MyImage);
      console.log(lastIndex);
      MyImage.src = bannerImages[lastIndex];
     

}
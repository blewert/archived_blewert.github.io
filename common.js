
/**
 * Called when the window loads fully
 */
window.addEventListener("load", () =>
{
    //Get all images on the page
    let imgs =  document.querySelectorAll("img");

    //Run through each image, add a click event to 
    //this image
    for(var img of imgs)
        img.addEventListener("click", onImageClick.bind(img));
});

/**
 * Called when an image is clicked
 */
function onImageClick()
{
    //Get the image source
    let src = this.src;

    //Just set the location to this src
    window.location.href = src;    
}
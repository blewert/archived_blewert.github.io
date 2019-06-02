
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


    //When the close button is clicked
    document.querySelector("#close-image-button").addEventListener("click", () =>
    {
        document.querySelector("image-viewer").style.display = "none";
    });
});

/**
 * Called when an image is clicked
 */
function onImageClick()
{
    //Get the image source
    let src = this.src;

    //Get the caption and title
    let caption = this.getAttribute("data-caption");
    let title   = this.getAttribute("data-title");

    //First get the image viewer elements
    let titleElement    = document.querySelector("image-viewer h1");
    let captionElement  = document.querySelector("image-viewer p");
    let figure          = document.querySelector("image-viewer figure");

    //Set the title and caption
    titleElement.textContent = title;
    captionElement.textContent = caption;
    
    //Set background image
    figure.style.backgroundImage = "url(" + src + ")";

    //Show the image viewer
    document.querySelector("image-viewer").style.display = "block";
}
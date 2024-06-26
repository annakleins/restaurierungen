const galleryItems = document.getElementsByClassName("gallery-item");

// create Lightbox-Elemente
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("img");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");

lightBoxContainer.classList.add('lightbox');
lightBoxContent.classList.add('lightbox-content');
lightBoxPrev.classList.add("lightbox-prev");
lightBoxNext.classList.add("lightbox-next");

// Icons
lightBoxPrev.innerHTML = '<i class="fa fa-angle-left" style="color: #ffffff;"></i>';
lightBoxNext.innerHTML = '<i class="fa fa-angle-right" style="color: #ffffff;"></i>';

// Elemente in Lightbox
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);
lightBoxContainer.appendChild(lightBoxContent);
document.body.appendChild(lightBoxContainer);

let index = 1;

// zeigt Bild mit Index n an
function showLightBox(n) {
    if (n > galleryItems.length) {
        index = 1;
    } else if (n < 1) {
        index = galleryItems.length;
    }

    let imageLocation = galleryItems[index-1].children[0].getAttribute("src");
    lightBoxImg.setAttribute("src", imageLocation);
}

// aktuelles Bild anzeigen
function currentImage() {
    lightBoxContainer.style.display = "block";
    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBox(index = imageIndex);
}

for (let i = 0; i < galleryItems.length; i++) {
    galleryItems[i].setAttribute("data-index", i + 1);
    galleryItems[i].addEventListener("click", currentImage);
}

// Function to navigate images
function sliderImage(n) {
    showLightBox(index += n);
}

function prevImage() {
    sliderImage(-1);
}

function nextImage() {
    sliderImage(1);
}

lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

// lightbox schließen
function closeLightBox(event) {
    if (this === event.target) {
        lightBoxContainer.style.display = "none";
    }
}

lightBoxContainer.addEventListener("click", closeLightBox);
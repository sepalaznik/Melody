// slider for project photogallery:
let buttonPrev = document.querySelector("#button-prev");
let buttonNext = document.querySelector("#button-next");
let slideImage = document.querySelector("#slide-img");

// array of images
const imagesSrc = []
imagesSrc.push('assets/uploads/melody__map.jpg');
imagesSrc.push('assets/uploads/melody__project_01.jpg');
imagesSrc.push('assets/uploads/melody__project_02.jpg');
imagesSrc.push('assets/uploads/melody__project_03.jpg');
imagesSrc.push('assets/uploads/melody__project_04.jpg');
imagesSrc.push('assets/uploads/melody__project_05.jpg');
imagesSrc.push('assets/uploads/melody__project_06.jpg');
imagesSrc.push('assets/uploads/melody__project_07.jpg');
imagesSrc.push('assets/uploads/melody__project_08.jpg');
imagesSrc.push('assets/uploads/melody__project_09.jpg');
imagesSrc.push('assets/uploads/melody__project_10.jpg');

let currentImageIndex = 1;
slideImage.src = imagesSrc[currentImageIndex];

buttonPrev.addEventListener('click', onButtonPrevClick);
buttonNext.addEventListener('click', onButtonNextClick);

function onButtonPrevClick(event) {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = imagesSrc.length - 1;
    }
    slideImage.src = imagesSrc[currentImageIndex];
}

function onButtonNextClick(event) {
    currentImageIndex++;
    if (currentImageIndex === imagesSrc.length) {
        currentImageIndex = 0;
    }
    slideImage.src = imagesSrc[currentImageIndex];
}

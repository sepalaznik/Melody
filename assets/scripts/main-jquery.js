$(document).ready(function () {
    
// counter and select floors:
    let currentFloor = 2;
    const floorPath = $(".building-with-floors path");
    const counterUp = $(".counter-up");
    const counterDown = $(".counter-down");
    
    floorPath.on("mouseover", function() {
        currentFloor = $(this).attr("data-floor");
        floorPath.removeClass("current-floor");
        $(".floor-counter").text(currentFloor);
    });
    
    function selectFloor() {
        usCurrentFloor = currentFloor.toLocaleString("en-US", { 
            minimumIntegerDigits: 2,
            useGrouping: false 
        });
        $(".floor-counter").text(usCurrentFloor);
        floorPath.removeClass("current-floor");
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }

    counterUp.on("click", function () {
        if (currentFloor < 18) {
            currentFloor++;
            selectFloor();
        }
    });

    counterDown.on("click", function () {
        if (currentFloor > 2) {
            currentFloor--;
            selectFloor();
        }
    });

// to modal window with numering flats by floor:
    const viewFlatButton = $(".select-floor-button");
    const modal = $(".modal");
    const closeModalButton = $(".close-modal-button");

    floorPath.on("click", toggleModal);
    viewFlatButton.on("click", toggleModal);
    closeModalButton.on("click", toggleModal);

    function toggleModal() {
        modal.toggleClass("is-open");
        $(".floor-counter-in-modal").text(currentFloor);
        $(".flat-number-first-digit").text(currentFloor - 2);
        $(".flat-number-first-digit-next10").text(currentFloor - 1);
    };

// to select flat on floor:
    const flatPath = $(".floor-with-flats path");
    const flatLink = $(".flat-link");
    let currentFlat = 0;
    
    function selectedFlat () {
        currentFlat = $(this).attr("data-flat");
        flatLink.removeClass("selected-flat");
        flatPath.removeClass("selected-flat");
        $(`[data-flat = ${currentFlat}]`).toggleClass("selected-flat");
    };

    flatPath.on("mouseover", selectedFlat);
    flatLink.on("mouseover", selectedFlat);


// slider for project photogallery:
    let buttonPrev = $("#button-prev");
    let buttonNext = $("#button-next");
    let slideImage = $("#slide-img");

    let imagesSrc = [
        "assets/uploads/melody__map.jpg",
        "assets/uploads/melody__project_01.jpg",
        "assets/uploads/melody__project_02.jpg",
        "assets/uploads/melody__project_03.jpg",
        "assets/uploads/melody__project_04.jpg",
        "assets/uploads/melody__project_05.jpg",
        "assets/uploads/melody__project_06.jpg",
        "assets/uploads/melody__project_07.jpg",
        "assets/uploads/melody__project_08.jpg",
        "assets/uploads/melody__project_09.jpg",
        "assets/uploads/melody__project_10.jpg"
    ];

    let currentImageIndex = 1;
    slideImage.attr("src", imagesSrc[currentImageIndex]);

    buttonPrev.on("click", function () {
        currentImageIndex--;
        if (currentImageIndex < 0) {
            currentImageIndex = imagesSrc.length - 1;
        }
        slideImage.attr("src", imagesSrc[currentImageIndex]);
    })

    buttonNext.on("click", function () {
        currentImageIndex++;
        if (currentImageIndex === imagesSrc.length) {
            currentImageIndex = 0;
        }
        slideImage.attr("src", imagesSrc[currentImageIndex]);
    });
    
});

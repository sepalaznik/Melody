// counter for select floor:
const floorPath = document.querySelectorAll('.building-with-floors path');
const floorCounter = document.querySelector('.floor-counter');
const counterUp = document.querySelector(".counter-up");
const counterDown = document.querySelector(".counter-down");

let currentFloor = floorCounter.textContent;
let usCurrentFloor;

const selectCurrentFloor = () => {
    floorPath.forEach((floor) => {
        if (currentFloor == floor.getAttribute('data-floor')) {
            floorPath.forEach((floor) => {
                floor.classList.remove('current-floor');
            })
            floor.classList.add('current-floor')
        }
        floor.addEventListener('click', openModal)
    })
};

floorPath.forEach((floor) => {
    floor.addEventListener('mouseover', () => {
        currentFloor = floor.getAttribute('data-floor');
        floorCounter.textContent = currentFloor;
        selectCurrentFloor();
    })
});

function showCurrentFloorNumber() {
    usCurrentFloor = currentFloor.toLocaleString("en-US", { 
        minimumIntegerDigits: 2,
        useGrouping: false 
    });
    floorCounter.textContent = usCurrentFloor;
    selectCurrentFloor();
}

counterUp.addEventListener('click', () => {
    if (currentFloor < 18) {
        currentFloor++;
        showCurrentFloorNumber();
    }
});

counterDown.addEventListener('click', () => {
    if (currentFloor > 2) {
        currentFloor--;
        showCurrentFloorNumber();
    }
});

// to open the modal window with function for numbering apartments by floor:
const modal = document.querySelector('.modal');
const viewFlatButton = document.querySelector('.select-floor-button');
const closeModalButton = document.querySelector('.close-modal-button');

function openModal() {
    modal.classList.toggle('is-open');
    showCurrentFloorNumber();

    const modalFloor = document.querySelector('.floor-counter-in-modal');
    modalFloor.innerHTML = usCurrentFloor;

    let firstDigit = document.querySelectorAll('.flat-number-first-digit');
    firstDigit.forEach((flatNumber) => {
        flatNumber.innerHTML = usCurrentFloor - 2;
    });

    let firstDigitNext10 = document.querySelector('.flat-number-first-digit-next10');
    firstDigitNext10.innerHTML = usCurrentFloor - 1;
};

viewFlatButton.addEventListener('click', openModal);

closeModalButton.addEventListener('click', openModal);

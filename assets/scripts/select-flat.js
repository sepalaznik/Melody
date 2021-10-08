// to select flat on floor:
const flatPaths = document.querySelectorAll(".floor-with-flats path");
const flatLinks = document.querySelectorAll(".flat-link");

flatPaths.forEach((flat) => {
    flat.addEventListener('mouseover', () => {
        flatPaths.forEach((flat) => {
            flat.classList.remove('selected-flat');
        })
        flat.classList.add('selected-flat');
        flatLinks.forEach((link) => {
            if (flat.getAttribute('data-flat') == link.getAttribute('data-flat')) {
                flatLinks.forEach((link) => {
                    link.classList.remove('selected-flat')
                })
                link.classList.add('selected-flat')
            }
        });
    })
});

flatLinks.forEach((link) => {
    link.addEventListener('mouseover', () => {
        flatLinks.forEach((link) => {
            link.classList.remove('selected-flat');
        });
        link.classList.add('selected-flat');
        flatPaths.forEach((flat) => {
            if (flat.getAttribute('data-flat') == link.getAttribute('data-flat')) {
                flatPaths.forEach((flat) => {
                    flat.classList.remove('selected-flat')
                })
                flat.classList.add('selected-flat')
            }
        });
    })
});

const swiper = document.querySelector('.swiper');

const next = () => {
    let width = screen.width - 50;

    console.log(width);

    let rightPosition = 1 * getComputedStyle(swiper).right.replace('p', '').replace('x', '');

    console.log(rightPosition);

    let forward;

    if (rightPosition === 0) {
        forward = rightPosition + width;
    }
    if (rightPosition < 0) {
        forward = -1 * rightPosition + width;
    }
    if (forward > 2000) {
        forward = 2000;
    }


    console.log(forward);
    // if (rightPosition = -1990) {
    //     return;
    // }
    swiper.style.right = `${-forward}px`;

    console.log(rightPosition);
};

const previous = () => { };
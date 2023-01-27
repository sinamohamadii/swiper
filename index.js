const swiper = document.querySelector('.swiper');
const width = window. innerWidth - 170;

const next = () => {
    let rightPosition = 1 * getComputedStyle(swiper).right.replace('p', '').replace('x', '');

    let remainPlusScreen = 3054 + rightPosition;

    let remain = remainPlusScreen - width;

    let forward;

    if (rightPosition === 0) {
        forward = rightPosition + width;
    }
    if (rightPosition < 0) {
        forward = -1 * rightPosition + width;
    }
    if (remain < width) {
        forward = -1 * rightPosition + remain;
        console.log(forward);
    }

    swiper.style.right = `${-forward}px`;
};

const previous = () => {
    let rightPosition = 1 * getComputedStyle(swiper).right.replace('p', '').replace('x', '');

    let backward;

    if (rightPosition === 0) {
        return;
    }
    if (rightPosition < 0) {
        backward = -1 * rightPosition - width;
    }
    if (-1 * rightPosition < width) {
        backward = 0;
    }

    swiper.style.right = `${-backward}px`;
};
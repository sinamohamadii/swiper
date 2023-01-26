const swiper = document.querySelector('.swiper');
let width = screen.width - 50;

const next = () => {

    // console.log(width);

    let rightPosition = 1 * getComputedStyle(swiper).right.replace('p', '').replace('x', '');

    let remainPlusScreen = 3054 + rightPosition;

    let remain = remainPlusScreen - width;

    // console.log(remain);

    //  console.log(rightPosition);

    let forward;

    if (rightPosition === 0) {
        forward = rightPosition + width;
    }
    if (rightPosition < 0) {
        forward = -1 * rightPosition + width;
    }
    if (remain < width) {
        forward = -1 * rightPosition + remain;
    }


    // console.log(forward);
    // if (rightPosition = -1990) {
    //     return;
    // }
    swiper.style.right = `${-forward}px`;

    // console.log(rightPosition);
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
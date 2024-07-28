// anime({
//     targets: '.animejs',
//     loop: true,
//     duration: 1000,
//     width: 400,
//     height: 100,
//     borderRadius: ['0%', '50%'],
//     left: '200px',
// });

let div = document.querySelector('div');
let position = (div.style.left = '0px');

function walk() {
    let currentPosition = parseInt(position);
    div.style.left = +currentPosition + 100 + 'px';
}

walk();

const button = document.querySelector('button');
button.addEventListener('click', function (event) {
    event.preventDefault();

    anime({
        targets: '.js-button',
        scaleX: 0.15,
        borderRadius: '100%',
        background: ['#0000FF', '#00FF00'],
        translateY: {
            value: '-100px',
            delay: 500,
            easing: 'easeInOutElastic',
        },
    });
});

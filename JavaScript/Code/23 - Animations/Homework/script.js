var img = document.getElementsByTagName('img')[0];
img.style.left = '0px';
var walkForwards = true;

function catWalk() {
    var currentLeft = parseInt(img.style.left);

    if (walkForwards && currentLeft > window.innerWidth - img.width) {
        walkForwards = false;
    }

    if (!walkForwards && currentLeft <= 0) {
        walkForwards = true;
    }

    if (walkForwards) {
        img.style.left = currentLeft + 10 + 'px';
        img.style.transform = 'scaleX(1)';
    } else {
        img.style.left = currentLeft - 10 + 'px';
        img.style.transform = 'scaleX(-1)';
    }
}

window.setInterval(catWalk, 100);

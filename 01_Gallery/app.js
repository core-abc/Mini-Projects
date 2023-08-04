
//Image list 

const imageList = [
    {
        id:1,
        desc: 'image desction 1',
        img: './images/img1.jpg'
    },
    {
        id:2,
        desc: 'image desction 2',
        img: './images/img2.jpg'
    },
    {
        id:3,
        desc: 'image desction 3',
        img: './images/img3.jpg'
    },
    {
        id:4,
        desc: 'image desction 4',
        img: './images/img4.jpg'
    },
    {
        id:5,
        desc: 'image desction 5',
        img: './images/img5.jpg'
    },
    {
        id:6,
        desc: 'image desction 6',
        img: './images/img6.jpg'
    },
];

// HTML Elements

const imageContainer = document.getElementById('image-container');
const arrLeft = document.querySelector('.arrLeft');
const arrRight = document.querySelector('.arrRight');
const imageDescription = document.querySelector('.image-description');

// Load Image 
window.addEventListener('DOMContentLoaded', ()=> {
    showImage(currentImage);
});

//Image Index

let currentImage = 0;

//Show Image Function

function showImage(image){
    const imageOnDisplay = imageList[image];
    imageContainer.src = imageOnDisplay.img;
    imageDescription.textContent = imageOnDisplay.desc;
};

// Button Controls 

arrRight.addEventListener('click', ()=> {
    currentImage++;
    if ( currentImage > imageList.length -1){
        currentImage = 0
    };
    showImage(currentImage);
});
arrLeft.addEventListener('click', ()=> {
    currentImage--;
    if(currentImage < 0){
        currentImage = imageList.length -1;
    };
    showImage(currentImage);
});

// Touch Event and Touch Controls

let touchstartX = 0
let touchendX = 0

function Right () {
    currentImage++;
    if ( currentImage > imageList.length -1){
        currentImage = 0;
    };
    showImage(currentImage);
}
function Left () {
    currentImage--;
    if ( currentImage < 0){
        currentImage = imageList.length -1;
    };
    showImage(currentImage);
};

imageContainer.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

imageContainer.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  checkDirection()
})


function checkDirection() {
    if(touchendX < touchstartX){
        Right();
    }
    else {
        Left();
    }
};



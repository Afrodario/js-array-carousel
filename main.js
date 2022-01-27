const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

let slides = "";
let thumbs = "";
let titles = "";

for (let i = 0; i < items.length; i++) {

    slides += `<img src=${items[i]}>`;

    thumbs += `<div class="thumb-photo">
                <img src=${items[i]}>
                </div>`;
    // '<div class="thumb-photo"><img src="' + items[i] + '"></div>';

    titles += `<div class="photo-text">
                <h3>${title[i]}</h3>
                <p>${text[i]}</p>
                </div>`;

}

let slidesContainer = document.getElementById("current-photo");
slidesContainer.innerHTML = slides;

let thumbContainer = document.getElementById("thumb-container");
thumbContainer.innerHTML = thumbs;

let titlesContainer = document.getElementById("photo-box");
titlesContainer.innerHTML = titles;

let prevSlide = document.getElementById("prev");
let nextSlide = document.getElementById("next");

let counter = 0;
console.log(counter);

let titleShow = document.getElementsByClassName("photo-text");
let slideShow = document.getElementsByTagName("IMG");

if (counter == 0) {
    titleShow[counter].classList.add("show");
    slideShow[counter].classList.add("show");
    console.log(titleShow);
}

nextSlide.addEventListener("click",
    function() {
        counter += 1;
        console.log(counter);

        if (counter < 5) {
            titleShow[counter].classList.add("show");
            titleShow[counter -1].classList.remove("show");
            slideShow[counter].classList.add("show");
            slideShow[counter -1].classList.remove("show");
        } else if (counter == 5) {
            titleShow[counter -1].classList.remove("show");
            slideShow[counter -1].classList.remove("show");
            counter = 0;
            titleShow[counter].classList.add("show");
            slideShow[counter].classList.add("show");
        }

    }

)

prevSlide.addEventListener("click",
    function() {
        if (counter > 0) {
            counter -= 1;
            console.log(counter);
        } else {
            counter = 4;
            titleShow[0].classList.remove("show");
            slideShow[0].classList.remove("show")
            slideShow[4].classList.add("show");
        }

        if (counter < 5) {
            titleShow[counter].classList.add("show");
            titleShow[counter +1].classList.remove("show");
            slideShow[counter].classList.add("show");
            slideShow[counter +1].classList.remove("show");
        } 

    }

)
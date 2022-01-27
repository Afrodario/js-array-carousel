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
let titles = "";

for (let i = 0; i < items.length; i++) {

    slides += `<div class="thumb-photo">
                <img src="${items[i]}">
                </div>`;
    // '<div class="thumb-photo"><img src="' + items[i] + '"></div>';

    titles += `<h3>${title[i]}</h3>`;

}

let thumbContainer = document.getElementById("thumb-container");
thumbContainer.innerHTML = slides;

let titlesContainer = document.getElementById("photo-box");
titlesContainer.innerHTML = titles;

let prevSlide = document.getElementById("prev");
let nextSlide = document.getElementById("next");

let counter = 0;
console.log(counter);

let titleShow = document.getElementsByTagName("H3");

if (counter == 0) {
    titleShow[counter].classList.add("show");
    console.log(titleShow);
}

nextSlide.addEventListener("click",
    function() {
        counter += 1;
        console.log(counter);

        if (counter < 5) {
            titleShow[counter].classList.add("show");
            titleShow[counter -1].classList.remove("show");
        } else if (counter == 5) {
            titleShow[counter -1].classList.remove("show");
            counter = 0;
            titleShow[counter].classList.add("show");
        }

    }

)

prevSlide.addEventListener("click",
    function() {
        counter -= 1;
        console.log(counter);

        titleShow[counter].classList.add("show");
        titleShow[counter +1].classList.remove("show");

    }

)
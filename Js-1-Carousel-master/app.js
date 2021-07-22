// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];


// Targeting Ids and Classes
const imgTarget = document.getElementById("person-img");
const authorTarget = document.getElementById("author");
const jobTarget = document.getElementById("job");
const infoTarget = document.getElementById("info");
const prevBtnTarget = document.querySelector(".prev-btn");
const nextBtnTarget = document.querySelector(".next-btn");
const randomBtnTarget = document.querySelector(".random-btn");

let num = 0;

const item = reviews[num];
imgTarget.src = item.img;
authorTarget.innerText = item.name;
jobTarget.innerText = item.job;
infoTarget.innerText = item.text;

function Slide(s) {
  const item = reviews[s];
  imgTarget.src = item.img;
  authorTarget.innerText = item.name;
  jobTarget.innerText = item.job;
  infoTarget.innerText = item.text;
}
nextBtnTarget.addEventListener("click", function () {
  num++;
  if (num > reviews.length - 1) num = 0;
  Slide(num);
});
prevBtnTarget.addEventListener("click", function () {
  num--;
  if (num < 0) num = reviews.length - 1;
  Slide(num);
});
randomBtnTarget.addEventListener("click", function () {
  num = Math.floor(Math.random() * reviews.length);
  Slide(num);
});


const container = document.querySelector('.container');
const count = document.getElementById('count');
const price = document.getElementById('price');
const movie = document.getElementById('movie');
let cost = movie.value;
const fun = () => {
    const SeatsCount = document.querySelectorAll('.selected').length;
    count.innerText = SeatsCount;
    price.innerText = SeatsCount * cost;
};
container.addEventListener('click', sath => {
    if (sath.target.classList.contains('seat') && !sath.target.classList.contains('occupied')) {
        sath.target.classList.toggle('selected');
        fun();
    }
});
movie.addEventListener('change', sat => {
    cost = +sat.target.value;
    fun();
});


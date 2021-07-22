let num = 0;
let counter = document.getElementById("value");


dec = () => {

    num -= 1;
    counter.innerHTML = num;
    // counter.style.color = "red";
}

inc = () => {
    num += 1;
    counter.innerHTML = num;
    // counter.style.color = "green";       
}

res = () => {
    num = 0;
    counter.innerHTML = num;

}
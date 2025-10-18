// document.getElementById("count-el").innerText = 5

let count = 0;
let countEl = document.getElementById("count-el");
let totalCountEl = document.getElementById("totalCount-el");

function increment() {
    count +=1;
    countEl.innerText = count;
    return countEl.innerText;
}


function decrement() {
    count -=1;
    countEl.innerText = count;
    return countEl.innerText;
}

console.log(count);


function randomNumber() {
    let random = Math.floor(Math.random() * 5) + 1;
    console.log(random);
}

let total = 0;

function save() {
    total+= count + " - ";
    totalCountEl.innerText = total;
    count = 0;
    countEl.innerText = count;
        return total;
}

function reset() {
    count = 0;
    countEl.innerText = count;
    totalCountEl.innerText = count;
}


// add functionality that anitame the person entering when the increment button is clicked
// and animate the person leaving when the decrement button is clicked
//then add a random function that base on the random number show as many person entering or exiting and update the corrisponding number to the counter
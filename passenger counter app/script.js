// document.getElementById("count-el").innerText = 5

let count = 0;
let countEl = document.getElementById("count-el");
let totalCountEl = document.getElementById("totalCount-el");

function increment() {
  count += 1;
  countEl.innerText = count;
  movingPersonEntering();
  return countEl.innerText;
}

function decrement() {
  count -= 1;
  countEl.innerText = count;
  movingPersonExiting();
  return countEl.innerText;
}

console.log(count);

function randomNumber() {
  let random = Math.floor(Math.random() * 5) + 1;
  console.log(random);
}

let total = 0;

function save() {
  total += count + " - ";
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

// Update the footer year dynamically
function updateYear() {
  const year = new Date().getFullYear(); // Get the current year
  document.getElementById("currentYear").textContent = year;
}
// Call the function to set the year on page load
updateYear();

function movingPersonEntering() {
  const person = document.getElementById("person-entering");

  // Step 1: Animate to the right
  person.style.left = "2000px";

  // Step 2: Wait for the animation to finish
  setTimeout(() => {
    // Step 3: Remove transition temporarily
    person.style.transition = "none";

    // Step 4: Snap back to the start
    person.style.left = "-400px";

    // Step 5: Re-enable transition for next time
    setTimeout(() => {
      person.style.transition = "left 2.5s linear";
    }, 50); // Small delay to avoid animation
  }, 2500); // Wait for the move-out animation to finish
}

function movingPersonExiting() {
  const personExiting = document.getElementById("person-exiting");

  // Step 1: Animate to the right
  personExiting.style.right = "2000px";

  // Step 2: Wait for the animation to finish
  setTimeout(() => {
    // Step 3: Remove transition temporarily
    personExiting.style.transition = "none";

    // Step 4: Snap back to the start
    personExiting.style.right = "-400px";

    // Step 5: Re-enable transition for next time
    setTimeout(() => {
      personExiting.style.transition = "right 2.5s linear";
    }, 50); // Small delay to avoid animation
  }, 2500); // Wait for the move-out animation to finish
}

console.log(
  (document.getElementsByTagName("button")[2].innerHTML = "Hello world")
);

// 1.Create a nav bar and change the color of its first element to red.

//document.getElementsByTagName("ul")[0].firstElementChild.style.color = "red";

// 2.Create a table without tbody Now use "View page Source" button to check whether it has a tbody or not
// answer: - tbody is not present in the page source because the view page source is for code which you have written
//in inpect tab we can get that tbody code even when we have not written in our source code

// 5.which of the following is used to look to farthest anchestor which matches a given css selector
// a)matches b)closest c)contains d)none of this

// 3.Create an element with 3 children Now change the color of first and last element to green.
// document.getElementsByTagName("ul")[0].firstElementChild.style.color = "red";
// document.getElementsByTagName("ul")[0].lastElementChild.style.color = "green";

// 4.Write js code to change background of all <li> to cyan
// document.getElementsByClassName("container").style.background = "red";
// const listItems = document.querySelectorAll("ul.container li");

// listItems.forEach((item) => {
//   item.style.backgroundColor = "cyan";
// });

// const jokeDisplay = document.getElementById('jokeDisplay');

// Sample jokes array (replace with fetched jokes)
// const jokes = [
//   "Why don't skeletons fight each other? They don't have the guts.",
//   "What do you call a bear with no teeth? A gummy bear.",
//   // Add more jokes here...
//   "Why couldn't the bicycle stand up by itself? It was two tired.",
// ];

// Generate a random index within the length of the jokes array
//const randomIndex = Math.floor(Math.random() * jokes.length);

// Display a random joke
//jokeDisplay.innerHTML = `<p>${jokes[randomIndex]}</p>`;
// const button1 = document.getElementById("button1");
// const button2 = document.getElementById("button2");
// const button3 = document.getElementById("button3");

// // Function to display different alerts when buttons are clicked
// function showAlert1() {
//   alert("You clicked Alert 1!");
// }

// function showAlert2() {
//   alert("You clicked Alert 2!");
// }

// function showAlert3() {
//   alert("You clicked Alert 3!");
// }

// // Event listeners for each button to trigger respective alerts
// button1.addEventListener("click", showAlert1);
// button2.addEventListener("click", showAlert2);
// button3.addEventListener("click", showAlert3);

// const toggleGlow = () => {
//   let bulb = document.getElementById("bulb");
//   bulb.classList.toggle("glow");
// };

// const toggleGlow = () => {
//   let bulb = document.getElementById("bulb");
//   bulb.classList.toggle("glow");
// };

//

// function updateTime() {
//   const now = new Date();
//   const hours = String(now.getHours()).padStart(2, "0");
//   const minutes = String(now.getMinutes()).padStart(2, "0");
//   const seconds = String(now.getSeconds()).padStart(2, "0");

//   document.getElementById(
//     "timeDisplay"
//   ).textContent = `${hours}:${minutes}:${seconds}`;
// }

// //Update time initially and then every second
// updateTime(); // Display current time immediately
// setInterval(updateTime, 1000); // Update time every second

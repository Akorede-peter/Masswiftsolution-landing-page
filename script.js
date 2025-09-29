// const menuButton = document.getElementById("menuButton");
//  const menu = document.getElementById("menu");
//  menuButton.addEventListener("click", () => { 
//   menu.classList.toggle("show"); });
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const menu = document.getElementById("menu");
  const links = menu.querySelectorAll("a");

  // Toggle open/close
  menuButton.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  // Close when clicking a link
  links.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("show");
    });
  });
});
function scrollToSection(register) {
  const section = document.getElementById(register);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
 const images = [
  "images/bills payment animation.jpg",
  "images/happy-couple.webp",
  "images/MASSSWIFT AD.webp",
 ]
 let index = 0;
 const imgElement = document.getElementById("slideshow")
 function changeImage() {
    index = (index + 1) % images.length;
    imgElement.src = images[index];
 }
  setInterval(changeImage, 20000);
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


console.log("Script loaded!");
/*
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const triggerHeight = window.innerHeight / 2; // halfway down the screen

  if (window.scrollY > triggerHeight) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

const firstName ='Akorede';
const age = 24;
const job = 'Developer';
console.log(typeof age);
const age = 9;
const isOldEnough = age >= 18;
if(isOldEnough){
    console.log(" Peter can start driving 🚗🚗");
}else{
    const yearsLeft = 18 - age;
    console.log(`Peter is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 2025;
let century;

if (birthYear <= 2000){
     century = 20;
}else{
     century = 21;
}
console.log(century);
console.log(Boolean(1));

const favorite = Number(prompt("What is your favourite number"));

if ( favorite === 23) {
  console.log(" Cool! 23 is an amazing number");
} else if ( favorite === 7){
  console.log(" 7 is also a cool Number")
}else {
  console.log(" Number is not 23 or 7")
}

if ( favorite !== 23) console.log("Cool number, why not 23");
*/
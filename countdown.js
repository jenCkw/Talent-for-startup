// const MINUTES = 60;
// const HOURS = 60 * MINUTES;
// const DAYS = 24 * HOURS;

// const elements = {
//   days: document.getElementById("days"),
//   hours: document.getElementById("hours"),
//   munites: document.getElementById("munites"),
//   seconds: document.getElementById("seconds"),
// };

// let previousDiff = {};

//   const countdown = document.querySelector("#countdown");
//   const launchDate = Date.parse(countdown.dataset.time) / 1000;
// //Calculer la difference en seconde entre les deux dates
// function refreshCountdown() {
//   const difference = launchDate - Date.now() / 1000;

//   const diff = {
//     days: Math.floor(difference / DAYS),
//     hours: Math.floor((difference % DAYS) / HOURS),
//     munites: Math.floor((difference % HOURS) / MINUTES),
//     seconds: Math.floor(difference % MINUTES),
//   };

//   updateDom(diff);
//   window.setTimeout(() => {
//     window.requestAnimationFrame(refreshCountdown);
//   }, 1000);
// }

// function updateDom(diff) {
//   Object.keys(diff).forEach((key) => {
//     if (previousDiff[diff] != diff[key]) {
//       elements[key].innerText = diff[key];
//       console.log(`updating ${key}`);
//     }
//   });
//   previousDiff = diff;
//   //  if(previousDiff != diff.days) {
//   //   $days.innerText = diff.days
//   //  }
//   //  $days.innerText = diff.days;
//   //  $hours.innerText = diff.hours;
//   //  $munites.innerText = diff.munites;
//   //  $seconds.innerText = diff.seconds;
// }

// refreshCountdown();

// //on crée un objtet qui contient les heures, minutes et seconde
// //Envoyer atel'object à une fonction qui mettrea à jour le html

let deadLine = new Date("oct 23, 2022 23:59:59").getTime();

const countDown = setInterval(function () {
  let now = new Date().getTime();
  let time = deadLine - now;
  let days = Math.floor(time / (1000 * 60 * 60 * 24));
  let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((time % (1000 * 60)) / 1000);

  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;

  if (now < 0) {
    clearInterval(x);
    document.getElementById("timer-content").innerHTML = "EXPIRED";
    document.getElementById("day").innerHTML = "0";
    document.getElementById("hours").innerHTML = "0";
    document.getElementById("minute").innerHTML = "0";
    document.getElementById("second").innerHTML = "0";
  }
}, 1000);
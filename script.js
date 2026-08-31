const purgeDate = new Date("Oct 31, 2026 20:00:00").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = purgeDate - now;

  if (distance < 0) {
    clearInterval(timer);
    document.querySelector(".countdown").innerHTML = "<h3>LA PURGA HA COMENZADO</h3>";
    return;
  }

  document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
  document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
  document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
  document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');
}, 1000);
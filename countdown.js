const countdown = document.getElementById('countdown');
const eventDate = new Date('2025-07-05T09:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    countdown.innerHTML = "🎉 It's Nikkah Day! Alhamdulillah!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdown.innerHTML = `
  <p class="shimmer">
    ❤️ <strong>${days}</strong> days 
    <strong>${hours}</strong> hours 
    <strong>${minutes}</strong> minutes 
    <strong>${seconds}</strong> seconds
  </p>
`;

}

updateCountdown(); // Add this to show immediately
setInterval(updateCountdown, 1000);

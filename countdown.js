// ===== Countdown Timer =====
const countdown = document.getElementById("countdown");
const eventDate = new Date("2026-02-07T09:00:00+01:00").getTime();

function updateCountdown() {
const now = new Date().getTime();
const distance = eventDate - now;

if (distance <= 0) {
countdown.innerHTML = "🎉 It's Nikah Day! Alhamdulillah!";
return;
}

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
const minutes = Math.floor((distance / (1000 * 60)) % 60);
const seconds = Math.floor((distance / 1000) % 60);

countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s 💙`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// ===== RSVP Form Submission =====
const form = document.getElementById("rsvpForm");

form.addEventListener("submit", async (e) => {
e.preventDefault();

const formData = new FormData(form);
const endpoint = "[https://formspree.io/f/mvgawqva](https://formspree.io/f/mvgawqva)"; // Replace with your own Formspree ID

try {
const response = await fetch(endpoint, {
method: "POST",
body: formData,
headers: { Accept: "application/json" },
});

```
if (response.ok) {
  alert("🎉 RSVP received! Thank you for your kind words.");
  form.reset();
} else {
  alert("Oops! Something went wrong. Please try again later.");
}
```

} catch (error) {
alert("Error submitting form: " + error.message);
}
});

const birthday = new Date('2024-08-27');
    
function updateCountdown() {
  const now = new Date();
  const diff = birthday.getTime() - now.getTime();

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const countdownElement = document.getElementById('countdown');
  countdownElement.innerHTML = `${days}d, ${hours}h, ${minutes}m, ${seconds}s`;
}

setInterval(updateCountdown, 1000);
function updateCountdown() {
    const targetDate = new Date("2023-12-31T23:59:59").getTime(); // Defina sua data-alvo aqui
  
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;
  
    const seconds = Math.floor((timeRemaining / 1000) % 60);
    const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  
    document.getElementById("days").textContent = formatTime(days);
    document.getElementById("hours").textContent = formatTime(hours);
    document.getElementById("minutes").textContent = formatTime(minutes);
    document.getElementById("seconds").textContent = formatTime(seconds);
  }
  
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
  
  updateCountdown();
  setInterval(updateCountdown, 1000);


  function generateWhatsAppLink() {
    const recipientNumber = document.getElementById("recipient").value;
    const messageText = document.getElementById("message").value;
    
    const whatsappURL = `https://api.whatsapp.com/send?phone=${recipientNumber}&text=${encodeURIComponent(messageText)}`;
    
    const whatsappLink = document.getElementById("whatsappLink");
    whatsappLink.innerHTML = `<a href="${whatsappURL}" target="_blank">Clique aqui para abrir no WhatsApp</a>`;
  }
  
  
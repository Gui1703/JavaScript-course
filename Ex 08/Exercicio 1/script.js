function load() {
  const msg = document.getElementById("msg");
  const img = document.getElementById("image");
  const timeOfDay = document.getElementById("hour");
  const day = new Date();
  const hour = day.getHours();

  msg.innerHTML = `Agora são ${hour} hora(s).`;

  if (hour >= 6 && hour < 12) {
    timeOfDay.innerHTML = "Bom dia !";
    img.src = "./assets/morning.jpg";
    document.body.style.background = "#e2cd9f";
  } else if (hour >= 12 && hour < 18) {
    timeOfDay.innerHTML = "Boa tarde !";
    img.src = "./assets/afternoon.jpg";
    document.body.style.background = "#b9846f";
  } else {
    timeOfDay.innerHTML = "Boa noite !";
    img.src = "./assets/night.jpg";
    document.body.style.background = "#515154";
  }
}

load();

const now = new Date();
const hour = now.getHours();

console.log(`Agora são exatamente ${hour} horas.`);

if ((hour >= 6) & (hour <= 12)) {
  console.log("Bom Dia!");
} else if ((hour >= 12) & (hour <= 18)) {
  console.log("Boa Tarde!");
} else if ((hour >= 19) & (hour <= 24)) {
  console.log("Boa Noite!");
} else {
  console.log("Boa Madrugada!");
}

const friend = {
  name: "Guilherme",
  sex: "M",
  weight: 85.4,
  fatten(w = 0) {
    console.log("Engordou");
    this.weight += w;
  },
};
console.log(friend);
friend.fatten(2);
console.log(`${friend.name} pesa ${friend.weight}Kg.`);

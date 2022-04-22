function calc() {
  let inputNumber = document.getElementById("number");
  let multiplicationTable = document.getElementById("multiplication-table");

  if (inputNumber.value.length == 0) {
    alert("Por favor, digite um número !");
  } else {
    let number = Number(inputNumber.value);
    let count = 1;
    multiplicationTable.innerHTML = "";

    while (count <= 10) {
      let item = document.createElement("option");

      item.text = `${number} X ${count} = ${number * count}`;
      multiplicationTable.appendChild(item);

      count++;
    }
  }
}

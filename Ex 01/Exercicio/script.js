const inputNumber = document.querySelector("#input-number");
const list = document.querySelector("#list");
const result = document.querySelector("#result");
const values = [];

function isNumber(number) {
  if (Number(number) >= 1 && Number(number) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inList(number, list) {
  if (list.indexOf(Number(number)) != -1) {
    return true;
  } else {
    return false;
  }
}

function addNumber() {
  if (isNumber(inputNumber.value) && !inList(inputNumber.value, values)) {
    values.push(Number(inputNumber.value));
    const item = document.createElement("option");
    item.text = `Valor ${inputNumber.value} adicionado.`;
    list.appendChild(item);
    result.innerHTML = "";
  } else {
    alert("Valor inválido ou já encontrado na lista");
  }

  inputNumber.value = "";
  inputNumber.focus();
}

function finish() {
  if (values.length == 0) {
    alert("Adicione valores antes de finalizar !");
  } else {
    let total = values.length;
    let bigger = values[0];
    let smaller = values[0];
    let sum = 0;
    let average = 0;

    for (let index in values) {
      sum += values[index];

      if (values[index] > bigger) bigger = values[index];

      if (values[index] < smaller) smaller = values[index];
    }

    average = sum / total;

    result.innerHTML = "";
    result.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
    result.innerHTML += `<p>O maior valor informado foi ${bigger}.</p>`;
    result.innerHTML += `<p>O menor valor informado foi ${smaller}.</p>`;
    result.innerHTML += `<p>Somando todos os valores temos ${sum}.</p>`;
    result.innerHTML += `<p>A média dos valores digitados é ${average}.</p>`;
  }
}

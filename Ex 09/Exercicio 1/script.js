function calc() {
  let inputStart = document.getElementById("input-start");
  let inputEnd = document.getElementById("input-end");
  let inputStep = document.getElementById("input-step");
  const result = document.getElementById("result");
  const msg = document.getElementById("msg");

  if (
    inputStart.value.length == 0 ||
    inputEnd.value.length == 0 ||
    inputStep.value.length == 0
  ) {
    result.innerHTML = "Impossível contar";
  } else {
    msg.innerHTML = "Contando ...";

    let start = Number(inputStart.value);
    let end = Number(inputEnd.value);
    let step = Number(inputStep.value);

    if (step <= 0) {
      step = 1;
    }

    if (start < end) {
      // Count up
      for (let count = start; count <= end; count += step) {
        result.innerHTML += `${count} \u{1F449}`;
      }
    } else {
      // Countdown
      for (let count = start; count >= end; count -= step) {
        result.innerHTML += `${count} \u{1F449}`;
      }
    }
    result.innerHTML += `\u{1F3C1}`;
  }
}

function check() {
  const date = new Date();
  const year = date.getFullYear();
  const inputYear = document.getElementById("year-of-birth");
  const result = document.getElementById("result");

  if (inputYear.value.length == 0 || inputYear.value > year) {
    alert("[ERRO] Verifique os dados e tente novamente !");
  } else {
    const inputRadio = document.getElementsByName("radsex");
    const age = year - Number(inputYear.value);
    const img = document.createElement("img");
    img.setAttribute("id", "photo");
    let gender = "";

    if (inputRadio[0].checked) {
      gender = "Homem";

      if (age >= 0 && age < 10) {
        img.setAttribute("src", "./assets/child-man.jpg");
      } else if (age < 21) {
        img.setAttribute("src", "./assets/young-man.jpg");
      } else if (age < 50) {
        img.setAttribute("src", "./assets/adult-man.jpg");
      } else {
        img.setAttribute("src", "./assets/elderly-man.jpg");
      }
    } else if (inputRadio[1].checked) {
      gender = "Mulher";

      if (age >= 0 && age < 10) {
        img.setAttribute("src", "./assets/child-woman.jpg");
      } else if (age < 21) {
        img.setAttribute("src", "./assets/young-woman.jpg");
      } else if (age < 50) {
        img.setAttribute("src", "./assets/adult-woman.jpg");
      } else {
        img.setAttribute("src", "./assets/elderly-woman.jpg");
      }
    }

    result.innerHTML = `Detectamos ${gender} com ${age} anos.`;
    result.appendChild(img);
  }
}

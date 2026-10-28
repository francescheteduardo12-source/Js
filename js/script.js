const inputNome = document.querySelector("#nome");
const inputIdade = document.querySelector("#idade");
const botao = document.querySelector("#botao");
const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = inputNome.value.trim();
  const idadeTexto = inputIdade.value.trim();
  const idade = Number(idadeTexto);

  resultado.classList.remove(
    "d-none",
    "alert-info",
    "alert-danger",
    "alert-success",
    "alert-warning",
  );

  if (nome === "" || idadeTexto === "") {
    resultado.textContent = "Preencha todos os campos!";
    resultado.classList.add("alert-warning");
    return;
  }

  if (idade >= 18) {
    resultado.textContent = `Olá, ${nome}! Você é maior de idade.`;
    resultado.classList.add("alert-success");
  } else {
    resultado.textContent = `Olá ${nome}! Você é menor de idade. Não volte aqui nunca mais, CRIANÇA!`;
    resultado.classList.add("alert-danger");
  }
});

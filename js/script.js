const imputNome = document.querySelector("#nome");
const imputIdade = document.querySelector("#idade");
const botao = document.querySelector("#botao");
const resultado = document.querySelector("#resultado");

botao.addEventListener("click", function () {
  const nome = imputNome.value;
  const idade = Number(imputIdade.value);

  console.log(nome);
  console.log(idade);

  if (idade >= 18) {
    resultado.textContent = `Olá,  ${nome}! Você é maior de idade.`;
  } else {
    resultado.textContent = `Olá ${nome}! Você é menor de idade. Não volte aqui nunca mais, CRIANÇA!`;
  }
});

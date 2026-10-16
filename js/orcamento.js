const formulario = document.querySelector("#formulario");
const inputNome = document.querySelector("#nome");
const inputServico = document.querySelector("#servico");
const inputQuantidade = document.querySelector("#quantidade");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = inputNome.value.trim();
  const preco = inputServico.value;
  const quantdadeString = inputQuantidade.value.trim();
  const quantidade = Number(quantdadeString);

  resultado.classList.remove("d-none", "alert-success", "alert-warning");

  if (
    nome === "" ||
    quantdadeString === "" ||
    !Number.isInteger(quantidade) ||
    quantidade <= 0
  ) {
    resultado.textContent = "Preencha todos os campos corretamente!";
    resultado.classList.add("alert-warning");
    return;
  }

  const total = calcularTotal(preco, quantidade);

  resultado.textContent = `Olá ${nome}! O orçamento é de R$ ${total.toFixed(2)}`;
  resultado.classList.add("alert-success");
});
function calcularTotal(preco, quantidade) {
  let = total = quantidade * preco;
  if (quantidade >= 3) {
    total = total * 0.9;
  }
  return total;
}

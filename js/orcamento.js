const formulario = document.querySelector("#formulario");
const inputNome = document.querySelector("#nome");
const inputServico = document.querySelector("#servico");
const inputQuantidade = document.querySelector("#quantidade");
const resultado = document.querySelector("#resultado");

const servicos = [
  { nome: "Fomatação", preco: 120 },
  { nome: "Limpeza", preco: 180 },
  { nome: "Instalação", preco: 50 },
];

function atualizaServicos() {
  (inputServico,
    (innerHTML = '<option value="">Selecione um Serviço</option>'));

  for (let i = 0; i < servicos.length; i++) {
    const opcao = document.createElement("option");
    opcao.value = servocps[i].preco;

    opcao.textContent = `${servicos[i].nome} - R$ ${servicos[i].preco}`;

    inputServico = appendChild(opcao);
  }
}
console.log(servicos[1].nome);

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
const formCadastro = document.querySelector("#formCadastro");
const novoNome = document.querySelector("#novoNome");
const novoPreco = document.querySelector("#novoPreco");
const avisoCadastro = document.querySelector("#avisoCadastro");

formCadastro.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = novoNome.value.trim();
  const precoTexto = novoPreco.value.trim();
  const preco = Number(precoTexto);

  avisoCadastro.classList.remove("d-none", "alert-success", "alert-warning");

  if (
    nome === "" ||
    precoTexto === "" ||
    !Number.isFinite(preco) ||
    preco <= 0
  ) {
    avisoCadastro.textContent = "Informe nome e preço válidos.";
    avisoCadastro.classList.add("alert-warning");
    return;
  }

  servicos.push({
    nome: nome,
    preco: preco,
  });

  atualizarServicos();
  formCadastro.reset();

  avisoCadastro.textContent = "Serviço cadastrado!";
  avisoCadastro.classList.add("alert-success");
});

atualizaServicos;

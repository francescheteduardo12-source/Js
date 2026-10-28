const formulario = document.querySelector("#formulario");
const inputNome = document.querySelector("#nome");
const inputServico = document.querySelector("#servico");
const inputQuantidade = document.querySelector("#quantidade");
const resultado = document.querySelector("#resultado");

const formCadastro = document.querySelector("#formCadastro");
const novoNome = document.querySelector("#novoNome");
const novoPreco = document.querySelector("#novoPreco");
const avisoCadastro = document.querySelector("#avisoCadastro");

const servicos = [
  { nome: "Formatação", preco: 120 },
  { nome: "Limpeza", preco: 180 },
  { nome: "Instalação", preco: 50 },
];

function atualizaServicos() {
  inputServico.innerHTML = '<option value="">Selecione um Serviço</option>';

  for (let i = 0; i < servicos.length; i++) {
    const opcao = document.createElement("option");
    opcao.value = servicos[i].preco;
    opcao.textContent = `${servicos[i].nome} - R$ ${servicos[i].preco.toFixed(2)}`;
    inputServico.appendChild(opcao);
  }
}

function calcularTotal(preco, quantidade) {
  let total = quantidade * preco;
  if (quantidade >= 3) {
    total = total * 0.9;
  }
  return total;
}

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = inputNome.value.trim();
  const preco = Number(inputServico.value);
  const quantidadeString = inputQuantidade.value.trim();
  const quantidade = Number(quantidadeString);

  resultado.classList.remove("d-none", "alert-success", "alert-warning");

  if (
    nome === "" ||
    inputServico.value === "" ||
    quantidadeString === "" ||
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

  atualizaServicos();
  formCadastro.reset();

  avisoCadastro.textContent = "Serviço cadastrado!";
  avisoCadastro.classList.add("alert-success");
});

atualizaServicos();

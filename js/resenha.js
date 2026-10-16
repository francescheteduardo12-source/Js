const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const servico = document.getElementById("servico");
  const quantidade = Number(document.getElementById("quantidade").value);

  const preco = Number(servico.value);
  const nomeServico = servico.options[servico.selectedIndex].text;

  // Validação
  if (nome === "") {
    resultado.className = "alert alert-danger mt-3";
    resultado.textContent = "Por favor, informe o nome do cliente.";
    return;
  }

  if (quantidade < 1 || !Number.isInteger(quantidade)) {
    resultado.className = "alert alert-danger mt-3";
    resultado.textContent = "Informe uma quantidade válida.";
    return;
  }

  // Cálculo
  const total = preco * quantidade;

  // Exibição
  resultado.className = "alert alert-success mt-3";

  resultado.innerHTML = `
    <strong>Orçamento realizado!</strong><br>
    Cliente: ${nome}<br>
    Serviço: ${nomeServico}<br>
    Quantidade: ${quantidade}<br>
    <strong>Total: R$ ${total.toFixed(2).replace(".", ",")}</strong>
  `;
});

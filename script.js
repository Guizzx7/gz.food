/*  AGENDAMENTO */
function confirmarAgendamento() {
  const data = document.getElementById('data').value;
  const horario = document.getElementById('horario').value;
  const resultado = document.getElementById('resultado');

  if (!data || !horario) {
    resultado.innerHTML = "⚠️ Por favor, selecione data e horário.";
    return;
  }

  const codigo = Math.random().toString(36).substring(2, 6).toUpperCase();
  resultado.innerHTML = `✅ Reserva confirmada! Seu código de reserva é : <strong>${codigo}</strong> <br>apresente esse código na hora da reserva<br>Data: ${data} às ${horario}`;
}

/* Preencher horários*/
document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("horario");
  if (select) {
    for (let h = 11; h <= 22; h++) {
      select.innerHTML += `<option>${h}:00</option>`;
      select.innerHTML += `<option>${h}:30</option>`;
    }
  }

  // Bloqueia dias anteriores
  const dataInput = document.getElementById("data");
  if (dataInput) {
    const hoje = new Date().toISOString().split("T")[0];
    dataInput.min = hoje;
  }
});

/* DELIVERY*/
let total = 0;
const itens = [];

function adicionar(nome, preco) {
  itens.push({ nome, preco });
  total += preco;
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById("itens");
  const totalTxt = document.getElementById("total");
  lista.innerHTML = "";
  itens.forEach(i => {
    const li = document.createElement("li");
    li.textContent = `${i.nome} - R$ ${i.preco.toFixed(2)}`;
    lista.appendChild(li);
  });
  totalTxt.textContent = `Total: R$ ${total.toFixed(2)}`;
}

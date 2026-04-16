// Pegando os elementos do HTML
const input = document.getElementById("taskInput");
const button = document.getElementById("addTask");
const list = document.getElementById("taskList");
const priority = document.getElementById("priority");

// Quando clicar no botão
button.addEventListener("click", function () {

  // Pega o texto digitado
  const texto = input.value.trim();

  // Validação
  if (texto === "") {
    alert("Digite uma tarefa!");
    return;
  }

  // Criando a tarefa
  const li = document.createElement("li");

  // Texto da tarefa
  const spanTexto = document.createElement("span");
  spanTexto.textContent = texto;
  spanTexto.classList.add("task-text");

  // Prioridade
  const spanPrioridade = document.createElement("span");
  spanPrioridade.textContent = priority.value;
  spanPrioridade.classList.add("prioridade");

  // Cor da prioridade
  if (priority.value === "Alta") {
    spanPrioridade.classList.add("alta");
  } else if (priority.value === "Média") {
    spanPrioridade.classList.add("media");
  } else {
    spanPrioridade.classList.add("baixa");
  }

  // Checkbox (concluir tarefa)
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      spanTexto.style.textDecoration = "line-through";
      li.style.opacity = "0.5";
    } else {
      spanTexto.style.textDecoration = "none";
      li.style.opacity = "1";
    }
  });

  // Botão deletar
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  // Montando a tarefa
  li.appendChild(checkbox);
  li.appendChild(spanTexto);
  li.appendChild(spanPrioridade);
  li.appendChild(deleteBtn);

  // Adicionando na lista
  list.appendChild(li);

  // Limpar input
  input.value = "";
});
function adicionarTarefa() {

    // Recebe o valor do input do usuário
    let inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value;

    // Cria um novo item (li) e adiciona na (lista ul)
    let listaTarefas = document.getElementById("listaTarefas");
    let novaTarefa = document.createElement("li");
    novaTarefa.textContent = tarefa;
    listaTarefas.appendChild(novaTarefa);

    // Mensagem de tarefa adicionada com sucesso
    let mensagem = "Tarefa adicionada com sucesso!";
    document.getElementById("mensagem").textContent = mensagem;

    // Limpa o input do usuário
    inputTarefa.value = "";
};


function adicionarTarefa() {

    // Recebe o valor do input do usuário
    const inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim();

    const mensagem = document.getElementById("mensagem")

    if (tarefa != "") {
        // Cria um novo item (li) e adiciona na (lista ul)
        const listaTarefas = document.getElementById("listaTarefas");
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefa;
        listaTarefas.appendChild(novaTarefa);

        // Mensagem de tarefa adicionada com sucesso
        let mensagemSucesso = "Tarefa adicionada com sucesso!";
        mensagem.textContent = mensagemSucesso;
        mensagem.style.color = '#28A745';
    } else {
        // Mensagem de erro
        let mensagemErro = "Digite uma tarefa válida!";
        mensagem.textContent = mensagemErro;
        mensagem.style.color = '#A34743';
    };

    // Limpa o input do usuário
    inputTarefa.value = "";
};


/*
    mensagem.textContent.style.color
    VERMELHO #A34743
    VERDE #28A745
*/
function adicionarTarefa() {

    const inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim();

    const mensagem = document.getElementById("mensagem")

    if (tarefa != "") {
        const listaTarefas = document.getElementById("listaTarefas");
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefa;
        listaTarefas.appendChild(novaTarefa);

        let mensagemSucesso = "Tarefa adicionada com sucesso!";
        mensagem.textContent = mensagemSucesso;
        mensagem.style.color = '#28A745';
    } else {
        let mensagemErro = "Digite uma tarefa válida!";
        mensagem.textContent = mensagemErro;
        mensagem.style.color = '#A34743';
    };

    inputTarefa.value = "";
};


/*
    mensagem.textContent.style.color
    VERMELHO #A34743
    VERDE #28A745
*/
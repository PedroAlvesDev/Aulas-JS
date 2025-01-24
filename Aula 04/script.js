let tarefas = [];

function adicionarTarefa() {
    const inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim();

    const mensagem = document.getElementById("mensagem")

    if (tarefa == "") {
        let mensagemErro = "Digite uma tarefa válida!";
        mensagem.textContent = mensagemErro;
        mensagem.style.color = '#A34743';

    } else {
        let mensagemSucesso = "Tarefa adicionada com sucesso!";
        mensagem.textContent = mensagemSucesso;
        mensagem.style.color = '#28A745';
        tarefas.push(tarefa);
        renderizarTarefas();
    };
    
    inputTarefa.value = "";
    inputTarefa.focus();
};

function renderizarTarefas() {
    const listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = "";

    let i = 0;
    for (i; i < tarefas.length; i++) {
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefas[i];
        listaTarefas.appendChild(novaTarefa);
    };
};


/*
    mensagem.textContent.style.color
    VERMELHO #A34743
    VERDE #28A745
*/
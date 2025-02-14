let tarefas = [];
let btn = document.getElementById("btn");

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

function botaoLimpar() {
    let btnLimpar = document.getElementById("btnLimpar");

    if (tarefas.length === 0) {
        if(btnLimpar) btnLimpar.remove();
        return;
    };

    if (!btnLimpar) {
        btnLimpar = document.createElement("button");
        btnLimpar.id = "btnLimpar"
        btnLimpar.className = "botao_lista"
        btnLimpar.textContent = "Limpar Tudo"
        btnLimpar.onclick = () => limparLista();

        btn.appendChild(btnLimpar);
    };

};


function renderizarTarefas() {
    const listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = "";

    for (let i = 0; i < tarefas.length; i++) {
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefas[i];

        let botaoRemover = document.createElement("button");
        botaoRemover.className = "remover";
        botaoRemover.textContent = "Remover";
        botaoRemover.onclick = () => removerTarefa(i);

        let botaoEditar = document.createElement("button");
        botaoEditar.className = "editar";
        botaoEditar.textContent = "Editar";
        botaoEditar.onclick = () => editarTarefa(i);


        novaTarefa.appendChild(botaoRemover);
        novaTarefa.appendChild(botaoEditar);
        listaTarefas.appendChild(novaTarefa);

        botaoLimpar();
    };


};

function removerTarefa(i) {
    tarefas.splice(i, 1);
    renderizarTarefas();
};

function editarTarefa(i) {
    let tarefaEditada = prompt("Edite a tarefa:");
    if (tarefaEditada.trim() !== "") {
        tarefas[i] = tarefaEditada;
        renderizarTarefas();
    };
};

function limparLista() {
    tarefas.length = 0;
    renderizarTarefas();
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "Lista de tarefas limpa com sucesso!"
};


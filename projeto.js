//Criando o Script do Projeto

// Capturando os Dados da Pagina Html

const inputEntrada = document.getElementById("input-tarefa");
const botaoAdicionar = document.getElementById("btn-adicionar");
const listaTarefas = document.getElementById("lista-tarefas");

// Criando o vetor de Tarefas
let tarefas = (JSON.parse(localStorage.getItem('tarefas')) || []);

// Criando Evento de Click do Botao Adicionar
botaoAdicionar.addEventListener('click', function(){
    adicionarTarefas();
});

// Criando as Funcoes

// Funcao para Adicionar as Tarefas
function adicionarTarefas (){
    const tarefaDigitada = inputEntrada.value.trim();
    
    if (tarefaDigitada === "") {
        return;
    }

    // Criando o objeto para guardar as tarefas adicionadas
    const novaTarefa = {
        texto: tarefaDigitada,
        concluido: false
    };
    
    tarefas.push(novaTarefa);
    
    salvar_e_Atualizar();
    inputEntrada.value = "";
    console.log("Lista de tarefas: ", tarefas);
}

// Funcao para salvar e atualizar as tarefas no localStorage
function salvar_e_Atualizar() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));

    mostrarTarefas();
}
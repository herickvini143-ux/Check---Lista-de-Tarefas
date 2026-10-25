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
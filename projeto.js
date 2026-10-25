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

// Funcao para Mostrar as tarefas em tela

function mostrarTarefas() {
    listaTarefas.innerHTML = "";

    tarefas.forEach(function(tarefas, index) {
        const li = document.createElement('li');
        
        // Desenvolvendo o checkbox de "Concluido"
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarefas.concluido;

        checkbox.addEventListener('change', function() {
            concluirTarefa(index);
        });

        const spanTexto = document.createElement('span');
        spanTexto.textContent = tarefas.texto;

        if(tarefas.concluido) {
            li.classList.add("feito");
        }

        // Criando o botao de Deletar
        const botaoDeletar = document.createElement('button');
        botaoDeletar.textContent = "X";

        botaoDeletar.addEventListener('click', function() {
            removerTarefa(index);
        });
        
        li.appendChild(spanTexto);
        li.appendChild(checkbox);
        li.appendChild(botaoDeletar);
        listaTarefas.appendChild(li);
    });
}

// Funcao para Remover as Tarefas
function removerTarefa(index) {
    tarefas.splice(index, 1);
    salvar_e_Atualizar();
}

// Funcao para marcar a Tarefa como concluida
function concluirTarefa(index) {
    tarefas[index].concluido = !tarefas[index].concluido;
    salvar_e_Atualizar();
}

//Inicializar o APP
mostrarTarefas();
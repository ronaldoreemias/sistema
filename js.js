let valorTotal = 0;

// Função para salvar os dados no localStorage
function salvarDados() {
    const historicoDiv = document.getElementById('historico');
    localStorage.setItem('historico', historicoDiv.innerHTML);
    localStorage.setItem('valorTotal', valorTotal);
}

// Função para carregar os dados do localStorage
function carregarDados() {
    const historicoDiv = document.getElementById('historico');
    const historicoSalvo = localStorage.getItem('historico');
    const valorTotalSalvo = localStorage.getItem('valorTotal');

    if (historicoSalvo) {
        historicoDiv.innerHTML = historicoSalvo;
        valorTotal = parseFloat(valorTotalSalvo);
        document.getElementById('valor_total').textContent = `Valor Total: R$ ${valorTotal.toFixed(2)}`;
    }
}

// Carregar os dados ao carregar a página
window.addEventListener('load', carregarDados);

document.getElementById('adicionar').addEventListener('click', function() {
    const servico = document.getElementById('servico').value;
    const dataServico = document.getElementById('data_servico').value;
    const valor = parseFloat(document.getElementById('valor').value);

    if (servico && dataServico && valor) {
        const historicoDiv = document.getElementById('historico');
        const novoItem = document.createElement('div');
        novoItem.classList.add('historico-item');

        const servicoP = document.createElement('p');
        servicoP.textContent = ` ${servico}`;
        const dataP = document.createElement('p');
        dataP.textContent = ` ${dataServico}`;
        const valorP = document.createElement('p');
        valorP.textContent = ` R$ ${valor.toFixed(2)}`;
        const deletarBtn = document.createElement('button');
        deletarBtn.textContent = 'Deletar';
        deletarBtn.classList.add('deletar-btn');

        novoItem.appendChild(servicoP);
        novoItem.appendChild(dataP);
        novoItem.appendChild(valorP);
        novoItem.appendChild(deletarBtn);
        historicoDiv.appendChild(novoItem);

        // Atualizar o valor total
        valorTotal += valor;
        document.getElementById('valor_total').textContent = `Valor Total: R$ ${valorTotal.toFixed(2)}`;

        // Salvar os dados no localStorage
        salvarDados();

        // Limpar os campos após adicionar
        document.getElementById('servico').value = '';
        document.getElementById('data_servico').value = '';
        document.getElementById('valor').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

document.getElementById('historico').addEventListener('click', function(e) {
    if (e.target.classList.contains('deletar-btn')) {
        const valorItem = parseFloat(e.target.previousSibling.textContent.replace('R$ ', ''));
        valorTotal -= valorItem;
        document.getElementById('valor_total').textContent = `Valor Total: R$ ${valorTotal.toFixed(2)}`;
        e.target.parentElement.remove();

        // Salvar os dados no localStorage
        salvarDados();
    }
});

// Adicionar função de imprimir
document.getElementById('imprimir').addEventListener('click', function() {
    window.print();
});


document.addEventListener('DOMContentLoaded', function() {
    const loginModal = document.getElementById('login-modal');
    const loginButton = document.getElementById('login-button');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    // Função para validar o login
  

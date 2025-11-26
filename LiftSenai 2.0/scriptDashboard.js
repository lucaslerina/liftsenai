
document.addEventListener('DOMContentLoaded', carregarDadosUsuario);

function carregarDadosUsuario() {
    const cadastroJSON = localStorage.getItem("cadastro");
    
    if (!cadastroJSON) {
        // Se não houver dados salvos, redireciona para a tela de login/cadastro
        console.warn("Nenhum usuário cadastrado encontrado. Redirecionando para login.");
        window.location.href = "1index.html"; // Altere para sua página de login
        return;
    }
    
    const cadastro = JSON.parse(cadastroJSON);
    
    // Assumimos que o último item no array é o usuário logado/cadastrado recentemente
    const usuarioLogado = cadastro[cadastro.length - 1]; 

    if (usuarioLogado) {
        // Preenche os elementos do HTML
        document.getElementById('perfilNome').textContent = usuarioLogado.nome;
        document.getElementById('perfilMatricula').textContent = usuarioLogado.matricula;
        document.getElementById('perfilEndereco').textContent = usuarioLogado.endereco;
        document.getElementById('perfilCnh').textContent = usuarioLogado.cnh;
        document.getElementById('perfilUsuario').textContent = usuarioLogado.usuarioNome;
    } else {
       
        window.location.href = "1index.html";
    }
}
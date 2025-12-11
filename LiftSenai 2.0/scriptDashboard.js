
document.addEventListener('DOMContentLoaded', carregarDadosUsuario);

function carregarDadosUsuario() {
    const cadastroJSON = localStorage.getItem("cadastro");
    
    if (!cadastroJSON) {
        
        console.warn("Nenhum usuário cadastrado encontrado. Redirecionando para login.");
        window.location.href = "1index.html"; 
        return;
    }
    
    const cadastro = JSON.parse(cadastroJSON);
    
       const usuarioLogado = JSON.parse(localStorage.getItem("usuarioAtual"))  

    if (usuarioLogado) {
       
        document.getElementById('perfilNome').textContent = usuarioLogado.nome;
        document.getElementById('perfilMatricula').textContent = usuarioLogado.matricula;
        document.getElementById('perfilEndereco').textContent = usuarioLogado.endereco;
        document.getElementById('perfilCnh').textContent = usuarioLogado.cnh;
        document.getElementById('perfilUsuario').textContent = usuarioLogado.usuarioNome;
   
    } else {
       
        window.location.href = "1index.html";
    }
}

document.addEventListener('DOMContentLoaded', editarDadosUsuario);

function editarDadosUsuario() {
    const cadastroJSON = localStorage.getItem("editar");
    
    if (!cadastroJSON){
        console.warn()
    } 
}
{
    
}
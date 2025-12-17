document.addEventListener('DOMContentLoaded', carregarDadosUsuario);


function carregarDadosUsuario() {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioAtual"));

    if (!usuarioLogado) {
        window.location.href = "1index.html";
        return;
    }

    document.getElementById('perfilNome').textContent = usuarioLogado.nome;
    document.getElementById('perfilMatricula').textContent = usuarioLogado.matricula;
    document.getElementById('perfilEndereco').textContent = usuarioLogado.endereco;
    document.getElementById('perfilCnh').textContent = usuarioLogado.cnh;
    document.getElementById('perfilUsuario').textContent = usuarioLogado.usuarioNome;
}


function editarPerfil() {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioAtual"));
    if (!usuarioLogado) return;

    const novoNome = prompt("Novo nome:", usuarioLogado.nome);
    const novoUsuario = prompt("Novo usuário:", usuarioLogado.usuarioNome);
    const novoEndereco = prompt("Novo endereço:", usuarioLogado.endereco);
    const novaMatricula = prompt("Nova matrícula:", usuarioLogado.matricula);
    const novaCnh = prompt("Nova CNH:", usuarioLogado.cnh);

    if (novoNome !== null) usuarioLogado.nome = novoNome;
    if (novoUsuario !== null) usuarioLogado.usuarioNome = novoUsuario;
    if (novoEndereco !== null) usuarioLogado.endereco = novoEndereco;
    if (novaMatricula !== null) usuarioLogado.matricula = novaMatricula;
    if (novaCnh !== null) usuarioLogado.cnh = novaCnh;

    let listaCadastros = JSON.parse(localStorage.getItem("cadastro")) || [];
    const index = listaCadastros.findIndex(u => u.usuarioNome === usuarioLogado.usuarioNome);

    if (index !== -1) {
        listaCadastros[index] = usuarioLogado;
        localStorage.setItem("cadastro", JSON.stringify(listaCadastros));
    }

    localStorage.setItem("usuarioAtual", JSON.stringify(usuarioLogado));

    alert("Perfil atualizado com sucesso!");
    carregarDadosUsuario();
}

function excluirPerfil() {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioAtual"));
    if (!usuarioLogado) return;

    const confirmar = confirm(
        "Excuir Perfil."
    );

    if (!confirmar) return;

    let listaCadastros = JSON.parse(localStorage.getItem("cadastro")) || [];

    listaCadastros = listaCadastros.filter(u => u.id !== usuarioLogado.id);

    localStorage.setItem("cadastro", JSON.stringify(listaCadastros));
    localStorage.removeItem("usuarioAtual");

    alert("Conta excluída com sucesso.");
    window.location.href = "1index.html";
}

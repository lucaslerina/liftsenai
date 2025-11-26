const cadastro = JSON.parse(localStorage.getItem("cadastro")) || [];

function salvarCadastros() {
    localStorage.setItem("cadastro", JSON.stringify(cadastro));
}

function cadastrarUsuario() {
    let nomeLido = document.getElementById('inputNome').value
    let matriculaLida = document.getElementById('inputMatricula').value
    let enderecoLido = document.getElementById('inputEndereco').value
    let cnhLida = document.getElementById('inputCnh').value
    let usuarioLido = document.getElementById('inputUsuario').value
    let senhaLida = document.getElementById('inputSenha').value 

    const usuario = {
        nome: nomeLido,
        matricula: matriculaLida,
        endereco: enderecoLido,
        cnh: cnhLida,
        usuarioNome: usuarioLido, 
        senha: senhaLida
    }


    cadastro.push(usuario);
    console.log(cadastro);

    salvarCadastros();

    limpaForm();
    alert("Usuário cadastrado com sucesso!");
    window.location.href = "2dashboard.html"
}

function limpaForm() {
    document.getElementById('inputNome').value = '';
    document.getElementById('inputMatricula').value = '';
    document.getElementById('inputEndereco').value = '';
    document.getElementById('inputCnh').value = '';
    document.getElementById('inputUsuario').value = '';
    document.getElementById('inputSenha').value = '';
}
function mostrarTodosCadastros() {
    document.getElementById('listaUsuario').innerHTML = '';

    for (let i = 0; i < cadastro.length; i++) {
        document.getElementById('listaUsuario').innerHTML += `
            <div class='card'>
                <h3>${cadastro[i].nome}</h3>
                <p>Matrícula:${cadastro[i].matricula}</p>
                <p>Endereço: ${cadastro[i].endereco}</p>
                <p>CNH: ${cadastro[i].cnh}</p>
            </div>
        `
    }
}



                

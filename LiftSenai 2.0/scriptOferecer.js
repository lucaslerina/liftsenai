
// 
function carregarCaronas() {
    return JSON.parse(localStorage.getItem("caronas_oferecidas")) || [];
}

// Salvar lista
function salvarCaronas(lista) {
    localStorage.setItem("caronas_oferecidas", JSON.stringify(lista));
}

// Cadastrar nova carona
function cadastrarCarona() {
    const origem = document.getElementById("origem").value.trim();
    const destino = document.getElementById("destino").value.trim();
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;
    const vagas = document.getElementById("vagas").value.trim();
    const valor = document.getElementById("valor").value.trim();
    const obs = document.getElementById("obs").value.trim();

    // validação simples
    if (!origem || !destino || !data || !hora || !vagas) {
        alert("Preencha todos os campos obrigatórios!");
        return;
    }

    const novaCarona = {
        id: Date.now(),
        origem,
        destino,
        data,
        hora,
        vagas,
        valor,
        obs
    };

    const lista = carregarCaronas();
    lista.push(novaCarona);

    salvarCaronas(lista);

    alert("Carona publicada com sucesso!");

    // limpar campos
    document.getElementById("origem").value = "";
    document.getElementById("destino").value = "";
    document.getElementById("data").value = "";
    document.getElementById("hora").value = "";
    document.getElementById("vagas").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("obs").value = "";

    listarCaronasPublicadas();
}

// Listar caronas dentro da página
function listarCaronasPublicadas() {
    const lista = carregarCaronas();

    const container = document.getElementById("listaOfertas");

    if (!container) return; 

    container.innerHTML = "";

    if (lista.length === 0) {
        container.innerHTML = "<p>Nenhuma carona oferecida ainda.</p>";
        return;
    }

    lista.forEach((carona) => {
        const div = document.createElement("div");
        div.classList.add("item-carona");
        div.innerHTML = `
            <strong>${carona.origem} → ${carona.destino}</strong><br>
            Data: ${carona.data} • Hora: ${carona.hora}<br>
            Vagas: ${carona.vagas} • Valor: R$ ${carona.valor ? carona.valor : "0"}<br>
            <small>${carona.obs}</small><br>

            <button class="editar-btn" onclick="editarCarona(${carona.id})">Editar</button>

            <button class="excluir-btn" ondblclick="excluirCarona(${carona.id})">Excluir</button>
        `;
document.addEventListener("DOMContentLoaded", listarCaronasPublicadas);
        container.appendChild(div);
    });
}



// Excluir carona
function excluirCarona(id) {
    let lista = carregarCaronas();
    lista = lista.filter(c => c.id !== id);
    salvarCaronas(lista);
    listarCaronasPublicadas();
    
}
function editarCarona(id) {
    const lista = carregarCaronas();
    // Encontra o objeto carona na lista que corresponde ao ID
    const caronaParaEditar = lista.find(c => c.id === id);

    if (!caronaParaEditar) {
        alert("Carona não encontrada!");
        return;
    }

    // 1. Preenche o formulário com os dados da carona
    document.getElementById("origem").value = caronaParaEditar.origem;
    document.getElementById("destino").value = caronaParaEditar.destino;
    document.getElementById("data").value = caronaParaEditar.data;
    document.getElementById("hora").value = caronaParaEditar.hora;
    document.getElementById("vagas").value = caronaParaEditar.vagas;
    document.getElementById("valor").value = caronaParaEditar.valor;
    document.getElementById("obs").value = caronaParaEditar.obs;

    
    document.getElementById("caronaIdEdicao").value = caronaParaEditar.id;
    document.getElementById("btnAcao").textContent = "Salvar Edição";
}
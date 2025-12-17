function carregarCaronas() {
    return JSON.parse(localStorage.getItem("caronas_oferecidas")) || [];
}

function salvarCaronas(lista) {
    localStorage.setItem("caronas_oferecidas", JSON.stringify(lista));
}


function cadastrarCarona() {
    const inputId = document.getElementById("caronaIdEdicao");
    const campoId = inputId.value;
    
  
    const dados = {
        origem: document.getElementById("origem").value.trim(),
        destino: document.getElementById("destino").value.trim(),
        data: document.getElementById("data").value,
        hora: document.getElementById("hora").value,
        vagas: document.getElementById("vagas").value.trim(),
        valor: document.getElementById("valor").value.trim(),
        obs: document.getElementById("obs").value.trim()
    };

  
    if (!dados.origem || !dados.destino || !dados.data || !dados.hora || !dados.vagas) {
        alert("⚠️ Por favor, preencha todos os campos obrigatórios!");
        return;
    }

    let lista = carregarCaronas();

    if (campoId !== "") {
       
        const idParaEditar = Number(campoId);
        const index = lista.findIndex(c => c.id === idParaEditar);
        
        if (index !== -1) {
            lista[index] = { id: idParaEditar, ...dados };
        }
    } else {
       
        lista.push({ id: Date.now(), ...dados });
    }

    salvarCaronas(lista);
    alert(campoId ? "✅ Alterações salvas com sucesso!" : "🚀 Carona publicada com sucesso!");
    
    limparFormulario();
    listarCaronasPublicadas();
}


function listarCaronasPublicadas() {
    const lista = carregarCaronas();
    const container = document.getElementById("listaOfertas");
    
    if (!container) return;

    
    container.innerHTML = "";

    if (lista.length === 0) {
        container.innerHTML = "<p style='color: rgba(255,255,255,0.5);'>Nenhuma carona publicada ainda.</p>";
        return;
    }

    [...lista].reverse().forEach((carona) => {
        const div = document.createElement("div");
        div.className = "item-carona";
        div.innerHTML = `
            <div style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; margin-bottom: 10px;">
                <strong style="color: #008cff; font-size: 1.1em;">📍 ${carona.origem} → ${carona.destino}</strong>
            </div>
            <div style="font-size: 0.9em; line-height: 1.6;">
                📅 <b>Data:</b> ${carona.data} | ⏰ <b>Hora:</b> ${carona.hora}<br>
                💺 <b>Vagas:</b> ${carona.vagas} | 💰 <b>Valor:</b> R$ ${carona.valor || "0"}<br>
                ${carona.obs ? `📝 <small><i>${carona.obs}</i></small><br>` : ""}
            </div>
            <div style="margin-top: 15px; display: flex; gap: 10px;">
                <button onclick="editarCarona(${carona.id})" style="background: #ffc107; color: black; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-weight: bold;">Editar</button>
                <button onclick="excluirCarona(${carona.id})" style="background: #ff4d4d; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-weight: bold;">Excluir</button>
            </div>
        `;
        container.appendChild(div);
    });
}


function editarCarona(id) {
    const lista = carregarCaronas();
    const carona = lista.find(c => c.id === id);
    
    if (!carona) return;

   
    document.getElementById("origem").value = carona.origem;
    document.getElementById("destino").value = carona.destino;
    document.getElementById("data").value = carona.data;
    document.getElementById("hora").value = carona.hora;
    document.getElementById("vagas").value = carona.vagas;
    document.getElementById("valor").value = carona.valor;
    document.getElementById("obs").value = carona.obs;
    
  
    document.getElementById("caronaIdEdicao").value = carona.id;
    
    
    const btn = document.getElementById("btnAcao");
    btn.textContent = "Salvar Alterações";
    btn.style.background = "#28a745"; 

 
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function excluirCarona(id) {
    if(!confirm("Tem certeza que deseja remover esta carona?")) return;
    
    const lista = carregarCaronas();
    const novaLista = lista.filter(c => c.id !== id);
    
    salvarCaronas(novaLista);
    listarCaronasPublicadas();
}

function limparFormulario() {
    document.getElementById("origem").value = "";
    document.getElementById("destino").value = "";
    document.getElementById("data").value = "";
    document.getElementById("hora").value = "";
    document.getElementById("vagas").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("obs").value = "";
    
   
    document.getElementById("caronaIdEdicao").value = "";
    const btn = document.getElementById("btnAcao");
    btn.textContent = "Publicar Carona";
    btn.style.background = "rgba(0,140,255,0.7)";
}


document.addEventListener("DOMContentLoaded", listarCaronasPublicadas);

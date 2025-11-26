const corridas = JSON.parse(localStorage.getItem("corridas")) || []

function CadastrarCorrida(){
    let partidaLido = document.getElementById('inputPartida').value
    let horaLida = document.getElementById('inputHora').value
    let chegadaLido = document.getElementById('inputChegada').value
    let motoristaLido = document.getElementById('inputMotorista').value


    const corrida = {
        Partida: partidaLido,
        HoraSaida: horaLida,
        Chegada: chegadaLido,
        Motorista: motoristaLido
    };

    corridas.push(corrida)

    console.log(corridas);

    localStorage.setItem("corridas", JSON.stringify(corridas));


    limparForm()
    alert("Corrida cadastrada com sucesso!")

    mostrartodascorridas();

}    


function limparForm(){
   document.getElementById('inputPartida').value = '';
    document.getElementById('inputHora').value = '';
    document.getElementById('inputChegada').value = '';
    document.getElementById('inputMotorista').value = '';
    
    document.getElementById('inputPartida').focus()
}

function mostrartodascorridas(){
    const listaCorridasDiv = document.getElementById('listaCorridas');
    listaCorridasDiv.innerHTML = '';

    if (corridas.length === 0) {
        listaCorridasDiv.innerHTML = '<p>Nenhuma carona disponível. Cadastre uma!</p>';
        return;
    }
            for(let i = 0; i < corridas.length; i++){
        
        listaCorridasDiv.innerHTML += `
            <div class='card corrida-disponivel'>
                <h3>Partida: ${corridas[i].Partida} </h3>
                <p>Chegada: ${corridas[i].Chegada}</p>
                <p>Hora de Saída: ${corridas[i].HoraSaida}</p>
                <p>Motorista: ${corridas[i].Motorista}</p>
                <button onclick="alert('Só temos Celta disponivel no momento')">Entrar na Carona</button>
            </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', mostrartodascorridas);
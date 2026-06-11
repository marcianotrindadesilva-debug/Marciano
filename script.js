// Variáveis de estado do simulador
let saudeSolo = 50; // Começa em 50% (Equilibrado)
let ano = 1;

function simularCultura(cultura) {
    ano++;
    
    // Altera os nutrientes baseado na escolha
    if (cultura === 'milho') {
        saudeSolo -= 25; // Milho exige muito do solo
        document.getElementById('cultura-atual').innerText = "Milho 🌽 (Esgotando solo)";
    } else if (cultura === 'soja') {
        saudeSolo += 20; // Soja repõe nitrogênio
        document.getElementById('cultura-atual').innerText = "Soja 🌱 (Fixando Nitrogênio)";
    } else if (cultura === 'pousio') {
        saudeSolo += 10; // Descanso ajuda o solo
        document.getElementById('cultura-atual').innerText = "Pousio 🌾 (Descanso)";
    }

    // Limita a saúde do solo entre 0% e 100%
    if (saudeSolo > 100) saudeSolo = 100;
    if (saudeSolo < 0) saudeSolo = 0;

    // Atualiza a interface gráfica
    atualizarInterface();
}

function atualizarInterface() {
    document.getElementById('ano-atual').innerText = ano;
    
    const barra = document.getElementById('status-solo');
    const textoBarra = document.getElementById('texto-solo');
    
    barra.style.width = saudeSolo + "%";
    
    // Muda a cor da barra e a mensagem conforme o nível
    if (saudeSolo >= 70) {
        barra.style.backgroundColor = "#2e6f40"; // Verde escuro (Excelente)
        textoBarra.innerText = saudeSolo + "% (Solo Rico e Saudável!)";
    } else if (saudeSolo >= 40) {
        barra.style.backgroundColor = "#4a935b"; // Verde claro (Moderado)
        textoBarra.innerText = saudeSolo + "% (Solo Equilibrado)";
    } else {
        barra.style.backgroundColor = "#b23b3b"; // Vermelho (Esgotado)
        textoBarra.innerText = saudeSolo + "% (Solo Esgotado! Precisa de rotação com Leguminosas)";
    }
}

function resetarSimulador() {
    saudeSolo = 50;
    ano = 1;
    document.getElementById('cultura-atual').innerText = "Nenhuma";
    atualizarInterface();
}
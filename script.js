document.addEventListener('DOMContentLoaded', () => {
    
    // --- NAVEGAÇÃO ENTRE ABAS ---
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.content-section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active de todos os botões
            navButtons.forEach(btn => btn.classList.remove('active'));
            // Esconde todas as seções
            sections.forEach(sec => sec.classList.remove('active'));

            // Adiciona active ao botão clicado
            button.classList.add('active');
            // Mostra a seção correspondente
            const targetId = button.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // --- CONTROLE DE ACESSIBILIDADE ---
    
    // Alterar tamanho da fonte
    let currentFontSize = 16;
    const rootElement = document.documentElement;

    document.getElementById('btn-increase-font').addEventListener('click', () => {
        if (currentFontSize < 24) { // Limite máximo seguro
            currentFontSize += 2;
            rootElement.style.setProperty('--base-font-size', `${currentFontSize}px`);
        }
    });

    document.getElementById('btn-decrease-font').addEventListener('click', () => {
        if (currentFontSize > 12) { // Limite mínimo seguro
            currentFontSize -= 2;
            rootElement.style.setProperty('--base-font-size', `${currentFontSize}px`);
        }
    });

    // Alternar Claridade (Tema Claro / Escuro)
    const toggleThemeBtn = document.getElementById('btn-toggle-theme');
    toggleThemeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
    });
});
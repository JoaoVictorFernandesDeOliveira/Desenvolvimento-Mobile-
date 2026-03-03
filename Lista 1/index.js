document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Cordova pronto!');

    // --- QUESTÃO 3: MODO ESCURO ---
    const botaoTema = document.getElementById('alternar-tema');
    
    if (botaoTema) {
        botaoTema.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                botaoTema.textContent = 'Modo Claro';
            } else {
                botaoTema.textContent = 'Modo Escuro';
            }
        });
    }

    // --- QUESTÃO 4: MEUS PROJETOS GERAIS (GITHUB) ---
    
    const meusProjetos = [
        {
            nome: "Meus Repositórios",
            descricao: "Conjunto de projetos e estudos desenvolvidos durante o curso de Análise e Desenvolvimento de Sistemas, abrangendo diversas tecnologias e linguagens.",
            tecnologias: ["ADS", "Full Stack", "Lógica de Programação"],
            link: "https://github.com/JoaoVictorFernandesDeOliveira?tab=repositories" // Substitua pelo link do seu perfil
        }
    ];

    const container = document.getElementById('lista-projetos');

    if (container) {
        container.innerHTML = ""; 
        
        meusProjetos.forEach(projeto => {
            const divProjeto = document.createElement('div');
            divProjeto.className = 'card-projeto'; 
            
            divProjeto.innerHTML = `
                <h3>${projeto.nome}</h3>
                <p>${projeto.descricao}</p>
                <p><strong>Áreas de estudo:</strong> ${projeto.tecnologias.join(", ")}</p>
                <a href="${projeto.link}" target="_blank" style="color: var(--cor-destaque); font-weight: bold;">Acessar meu GitHub</a>
                <hr style="margin: 15px 0; border: 0; border-top: 1px solid #ccc;">
            `;
            
            container.appendChild(divProjeto);
        });
    }
}
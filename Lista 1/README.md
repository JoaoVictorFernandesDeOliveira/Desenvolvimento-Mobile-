# Relatório de Desenvolvimento - Portfólio Mobile
**Aluno:** [Seu Nome Aqui]
**Curso:** Análise e Desenvolvimento de Sistemas (ADS)

Este documento reúne a documentação técnica e os aprendizados obtidos durante a criação do meu portfólio utilizando Apache Cordova.

---

## 📝 Questão 1: Estrutura Semântica
**Dúvida e Aprendizado:**
Minha dúvida inicial foi sobre a hierarquia correta das tags (header, nav, main). Aprendi que o `nav` deve ficar dentro do `header` e o `main` guarda o conteúdo principal. Isso garante que o site seja organizado e acessível para quem usa leitores de tela.

---

## 🎨 Questão 2: Identidade Visual e Layout
**Paleta de Cores (Azul Marinho):**
* **Primária:** `#1A237E` (Cabeçalho/Rodapé)
* **Destaque:** `#2979FF` (Links e Botão)
* **Fundo:** `#F5F7FA` (Página)
* **Texto:** `#333333` (Escrita)

**Justificativa Técnica:**
Escolhi o azul marinho por transmitir confiança e profissionalismo. O uso de alto contraste (texto escuro em fundo claro) é fundamental para a acessibilidade, permitindo a leitura clara mesmo em dispositivos móveis sob luz solar forte.

---

## ⚡ Questão 3: Interatividade (JavaScript)
**Aprendizado sobre JS no Cordova:**
O JavaScript é o "motor" do app. No Cordova, ele serve para pegar os elementos do HTML e mudar o comportamento deles em tempo real.

**Funcionalidade:**
Criei um botão de **Modo Escuro**. O código "escuta" o clique e altera as cores do CSS sem precisar recarregar a página, funcionando como um controle remoto para o visual do site.

---

## 📦 Questão 4: Gerenciamento de Dados (Objetos)
**Uso do .forEach():**
Em vez de escrever cada projeto manualmente no HTML, usei um Array de Objetos no JavaScript. O comando `.forEach()` percorre essa lista e "desenha" os cards na tela automaticamente.

**Vantagem:**
Isso facilita a manutenção. Posso gerenciar meus repositórios do GitHub em um só lugar no código. Se eu adicionar um novo projeto na lista do JS, ele aparece no site sozinho.

---

## 🛠️ Questão 5: Refatoração e Revisão (Code Review)
Após uma revisão de código simulando um ambiente profissional, implementei as seguintes melhorias:

1. **Código Limpo (Dry - Don't Repeat Yourself):** Eliminei repetições de cores no CSS usando Variáveis Globais, garantindo que o design seja consistente em todas as telas.
2. **Eficiência no JavaScript:** Otimizei a renderização dos projetos usando strings dinâmicas. Isso diminuiu a quantidade de linhas no script e tornou a lógica de visualização mais clara.
3. **Organização de Pastas:** Garanti que cada tecnologia (HTML, CSS, JS) estivesse em seu devido lugar, respeitando a arquitetura padrão do Apache Cordova para facilitar futuras manutenções.

---

## 🔗 Questão 6: Integração Técnica (Guia Rápido)
Para entender como as tecnologias trabalham juntas, usei a analogia da **Construção**:
1. **HTML (Estrutura):** É a planta da casa. Ele definiu o espaço vazio onde os projetos seriam colocados.
2. **CSS (Estética):** É a pintura e o acabamento. Ele transformou os links simples em "cards" profissionais e bonitos.
3. **JS (Inteligência):** É a automação. Ele pegou os dados dos meus projetos e os "instalou" dentro do espaço que o HTML reservou.
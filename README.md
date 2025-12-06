<h1 align="center" style="
  font-size: 3rem;
  font-weight: 900;
  background: linear-gradient(90deg, #d4af37, #e8c979, #d4af37);
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 0 0 8px rgba(255, 222, 173, 0.4);
  letter-spacing: 2px;
">
  ✨ Heavens Studio ✨
</h1>


Site institucional desenvolvido em HTML, CSS e JavaScript, com foco em um visual elegante, minimalista e responsivo.  
Abaixo está uma explicação simples e direta de como cada parte do site foi construída.

---

## 🪂 Estrutura do Projeto

- **index.html** — Estrutura do site  
- **style.css** — Estilos, layout e responsividade  
- **script.js** — Interações, efeitos e animações  
- **/src/img**, **/icons**, **/proj** — Imagens e mídia usadas no site  

---

## 🥣 Elementos do Site e Como Foram Feitos

### 🔹 1. Navbar Responsiva
- Criada em **HTML semântico** com `<nav>`  
- Menu mobile com botão *hamburger*  
- O JavaScript abre/fecha o menu, adicionando/removendo classes  
- Inclui overlay e bloqueio de scroll para navegação limpa  

### 🔹 2. Hero com Imagens Sobrepostas
- Duas imagens: **base** e **topo**, usando `position: absolute`  
- Efeito de profundidade visual  
- Responsividade ajustada com `min()` e `max-height` no CSS  

### 🔹 3. Seção Sobre
- Dividida em duas colunas  
- Inclui divisor vertical com gradiente  
- Estrutura simples para adaptação fácil de conteúdo  

### 🔹 4. Serviços — Cards com Animação
- Cards criados em `<div>` com efeitos de hover  
- Uso de `transform`, `scale` e `box-shadow`  
- Efeito 3D suave quando o usuário passa o mouse  

### 🔹 5. Projetos — Carrossel + Flip Cards
**Carrossel:**
- Movimentação horizontal controlada pelo JavaScript  
- Botões **prev** e **next**  

**Flip Cards:**
- Estrutura com `.flip-card` e `.flip-inner`  
- Rotação em 180° quando clicado  
- Permite mostrar frente e verso do card  

### 🔹 6. Contatos
- Bloco com informações e ícones  
- Formulário estilizado com campos obrigatórios  
- Botão com hover escuro e contraste adequado  

### 🔹 7. Animações
- Animações de entrada para elementos importantes  
- Efeito de *reveal* ao rolar a página  
- Feito em JavaScript detectando elementos `.reveal`  

### 🔹 8. Rodapé
- Estrutura simples com alinhamento central  
- Manter identidade visual e fechamento da página  

---

## 🛸 Tecnologias

- **HTML5**
- **CSS3** (responsividade, animações, flip-cards)  
- **JavaScript** (menu, carrosséis, efeitos)  
- **Google Fonts** — Fira Sans & Chillax  
- **VS Code + Live Server**  

---

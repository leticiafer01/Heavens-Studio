// =========================
// SCRIPT DO MENU HAMBURGER
// =========================

// Garanta que elementos foram encontrados
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const overlay = document.getElementById("overlay");

// Se todos existem, ativa o menu
if (hamburger && navLinks && overlay) {

  // Abrir / Fechar menu
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("nav-active");
    overlay.classList.toggle("show");

    // Bloqueia scroll ao abrir menu
    document.body.style.overflow =
      navLinks.classList.contains("nav-active") ? "hidden" : "auto";
  });

  // Fechar ao clicar no overlay
  overlay.addEventListener("click", () => {
    closeMenu();
  });

  // Fechar ao clicar em qualquer link do menu
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => closeMenu());
  });

  // Função para fechar menu
  function closeMenu() {
    hamburger.classList.remove("open");
    navLinks.classList.remove("nav-active");
    overlay.classList.remove("show");
    document.body.style.overflow = "auto";
  }

  // Fechar com tecla ESC
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeMenu();
  });
}



// ====================================
// ANIMAÇÃO DE ENTRADA (SEGUNDO SCRIPT)
// ====================================

document.addEventListener("DOMContentLoaded", () => {
  const glassBox = document.querySelector(".glass-box");
  const dots = document.querySelectorAll(".dot");

  // Animação de entrada da caixa
  if (glassBox) {
    glassBox.style.opacity = "0";
    glassBox.style.transform = "translateY(40px)";

    setTimeout(() => {
      glassBox.style.transition = "1s ease";
      glassBox.style.opacity = "1";
      glassBox.style.transform = "translateY(0)";
    }, 300);
  }

  // Animação dos pontos
  dots.forEach((dot, i) => {
    dot.style.opacity = "0";
    setTimeout(() => {
      dot.style.transition = "0.5s ease";
      dot.style.opacity = "1";
    }, 500 + i * 150);
  });
});

// ============================================
// 1. MENU HAMBURGER
// ============================================

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const overlay = document.getElementById("overlay");

if (hamburger && navLinks && overlay) {

  // Abrir / Fechar menu
  const toggleMenu = () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("nav-active");
    overlay.classList.toggle("show");

    document.body.style.overflow =
      navLinks.classList.contains("nav-active") ? "hidden" : "auto";
  };

  hamburger.addEventListener("click", toggleMenu);

  // Fechar ao clicar em um link
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  function closeMenu() {
    hamburger.classList.remove("open");
    navLinks.classList.remove("nav-active");
    overlay.classList.remove("show");
    document.body.style.overflow = "auto";
  }

  // Fechar com ESC
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeMenu();
  });
}



// ============================================
// 2. ANIMAÇÕES DE ENTRADA
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  const glassBox = document.querySelector(".glass-box");
  const dots = document.querySelectorAll(".dot");

  if (glassBox) {
    glassBox.style.opacity = "0";
    glassBox.style.transform = "translateY(40px)";

    setTimeout(() => {
      glassBox.style.transition = "1s ease";
      glassBox.style.opacity = "1";
      glassBox.style.transform = "translateY(0)";
    }, 300);
  }

  dots.forEach((dot, i) => {
    dot.style.opacity = "0";
    setTimeout(() => {
      dot.style.transition = "0.5s ease";
      dot.style.opacity = "1";
    }, 500 + i * 150);
  });
});



// ============================================
// 3. CARDS COM FLIP (CLIQUE)
// ============================================

document.querySelectorAll(".flip-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("clicked");
  });
});



// ============================================
// 4. CARROSSEL DE PROJETOS (VERSÃO FINAL)
// ============================================

const carousel = document.getElementById("carousel");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

if (carousel && nextBtn && prevBtn) {

  let index = 0;
  const cardWidth = 340; // largura + gap

  nextBtn.addEventListener("click", () => moveCarousel(1));
  prevBtn.addEventListener("click", () => moveCarousel(-1));

  function moveCarousel(direction) {
    const totalCards = carousel.children.length;

    index += direction;

    // Limita entre 0 e último card
    index = Math.max(0, Math.min(index, totalCards - 1));

    updateCarousel();
  }

  function updateCarousel() {
    carousel.style.transform = `translateX(${-index * cardWidth}px)`;
  }
}

// ============================================
// CARROSSEL SUAVE COM SETAS E DESTAQUE
// ============================================

const carouselProj = document.getElementById("projetosCarousel");
const projItems = document.querySelectorAll(".projeto-card-img");
const nextProjBtn = document.getElementById("nextProj");
const prevProjBtn = document.getElementById("prevProj");

let projIndex = 0;

function updateHighlight() {
  projItems.forEach((item, i) => item.classList.remove("active"));
  projItems[projIndex].classList.add("active");
}

// Inicializa destaque
updateHighlight();

nextProjBtn.addEventListener("click", () => {
  projIndex = Math.min(projIndex + 1, projItems.length - 1);
  carouselProj.scrollTo({
    left: projItems[projIndex].offsetLeft - 40,
    behavior: "smooth"
  });
  updateHighlight();
});

prevProjBtn.addEventListener("click", () => {
  projIndex = Math.max(projIndex - 1, 0);
  carouselProj.scrollTo({
    left: projItems[projIndex].offsetLeft - 40,
    behavior: "smooth"
  });
  updateHighlight();
});


// ================================
// REVEAL AO ROLAR A PÁGINA
// ================================
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.animation = "fadeUp .7s ease forwards";
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

<script>
document.querySelectorAll('.projeto-card-img').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flip');
  });
});
</script>


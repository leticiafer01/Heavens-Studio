// ============================================
// 1. MENU HAMBURGER
// ============================================

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const overlay = document.getElementById("overlay");

if (hamburger && navLinks && overlay) {

  const toggleMenu = () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("nav-active");
    overlay.classList.toggle("show");

    document.body.style.overflow =
      navLinks.classList.contains("nav-active") ? "hidden" : "auto";
  };

  const closeMenu = () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("nav-active");
    overlay.classList.remove("show");
    document.body.style.overflow = "auto";
  };

  hamburger.addEventListener("click", toggleMenu);

  // Fechar quando clicar em um link
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

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
// 3. FLIP CARD (GERAL) - via clique
// ============================================

document.querySelectorAll(".flip-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("clicked");
  });
});



// ============================================
// 4. CARROSSEL GERAL
// ============================================

const carousel = document.getElementById("carousel");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

if (carousel && nextBtn && prevBtn) {

  let index = 0;
  const cardWidth = 340;

  const moveCarousel = (direction) => {
    const totalCards = carousel.children.length;

    index = Math.min(Math.max(index + direction, 0), totalCards - 1);
    updateCarousel();
  };

  const updateCarousel = () => {
    carousel.style.transform = `translateX(${-index * cardWidth}px)`;
  };

  nextBtn.addEventListener("click", () => moveCarousel(1));
  prevBtn.addEventListener("click", () => moveCarousel(-1));
}



// ============================================
// 5. CARROSSEL DE PROJETOS COM DESTAQUE
// ============================================

const carouselProj = document.getElementById("projetosCarousel");
const projItems = document.querySelectorAll(".projeto-card-img");
const nextProjBtn = document.getElementById("nextProj");
const prevProjBtn = document.getElementById("prevProj");

let projIndex = 0;

const updateHighlight = () => {
  projItems.forEach(item => item.classList.remove("active"));
  projItems[projIndex].classList.add("active");
};

updateHighlight();

if (carouselProj && nextProjBtn && prevProjBtn) {

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
}



// ============================================
// 6. ANIMAÇÃO REVEAL POR SCROLL
// ============================================

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



// ============================================
// 7. FLIP ESPECÍFICO PARA CARDS DE PROJETO
// ============================================

document.querySelectorAll(".projeto-card-img").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flip");
  });
});

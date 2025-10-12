// On crée l’observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Si l’élément est visible → on ajoute la classe "show"
      entry.target.classList.add('show');
    } else {
      // Si l’élément sort de la vue → on retire la classe (facultatif)
      entry.target.classList.remove('show');
    }
  });
});

// On sélectionne tous les éléments à observer
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));

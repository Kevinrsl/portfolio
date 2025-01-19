/* pour les blocs */
const allBlocs = document.querySelectorAll('.bloc');

allBlocs.forEach(bloc => {
    bloc.addEventListener('click', (e) => {
        // Si le bloc est déjà actif, on le désactive (on le replie)
        if (bloc.classList.contains('active')) {
            bloc.classList.remove('active');
        } else {
            // Sinon, on ajoute la classe active au bloc cliqué
            bloc.classList.add('active');
            // On retire la classe active de tous les autres blocs
            allBlocs.forEach(b => {
                if (b !== bloc) {
                    b.classList.remove('active');
                }
            });
        }
    });
});

const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});



/* pour les différentes listes de projet*/

document.addEventListener("DOMContentLoaded", function() {
    const filters = document.querySelectorAll(".filtre");
    filters.forEach(function(filter) {
        filter.addEventListener("click", function(event) {
            event.preventDefault();
            const filterCategory = this.dataset.filtrer;
            const items = document.querySelectorAll(".item");
            filters.forEach(function(f) {
                f.classList.remove("active");
            });
            this.classList.add("active");
            items.forEach(function(item) {
                if (filterCategory === "tout") {
                    item.style.display = "block";
                } else if (item.dataset.item !== filterCategory) {
                    item.style.display = "none";
                } else {
                    item.style.display = "block";
                }
            });
        });
    });
});

/* souligné la catégorie selectionnée*/

let selectedCategory = null;

document.querySelectorAll('.lisection').forEach(category => {
  category.addEventListener('click', function() {
    if (selectedCategory) {
      selectedCategory.style.textDecoration = 'none';
    }
    this.style.textDecoration = 'underline';
    selectedCategory = this;
  });
});



/* lightbox img agrandies projets*/

document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".lightbox .close");

    // Cibler toutes les images avec la classe 'lightbox-img'
    document.querySelectorAll(".lightbox-img").forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
        });
    });

    // Fermer la lightbox
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // Fermer en cliquant à l'extérieur de l'image
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});




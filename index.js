/* pour les blocs*/


const allBlocs = document.querySelectorAll('.bloc');


allBlocs.forEach(bloc => {
    bloc.addEventListener('click', (e) => {

        e.target.classList.add('active');

        for(let i = 0; i < allBlocs.length; i++ ){
            if(allBlocs[i] !== e.target){
                allBlocs[i].classList.remove('active');
            }
        }
        

    })
})

const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
    })
})


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
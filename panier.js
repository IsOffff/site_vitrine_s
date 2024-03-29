// Tableau pour stocker les articles dans le panier
let cart = [];

// Mettre à jour l'affichage du panier
function updateCartDisplay() {
    let cartItemsElement = document.getElementById('cart-items');
    let totalPriceElement = document.getElementById('total-price');

    cartItemsElement.innerHTML = ''; // Effacer le contenu actuel du panier

    // Vérifier si le panier est vide
    if (cart.length === 0) {
        cartItemsElement.innerHTML = '<li>Votre panier est vide.</li>';
        totalPriceElement.textContent = 'Total: $0'; // Afficher le total du panier
    } else {
        let totalPrice = 0;

        // Parcourir chaque article dans le panier et les afficher
        cart.forEach(function(article) {
            let articleElement = document.createElement('li');
            articleElement.textContent = article.nom + ' - ' + article.prix + ' $';
            cartItemsElement.appendChild(articleElement);

            totalPrice += article.prix;
        });

        totalPriceElement.textContent = 'Total: $' + totalPrice;
    }
}

// Ajouter un article au panier
function ajouterPanier(nom, prix) {
    cart.push({ nom: nom, prix: prix });
    updateCartDisplay(); // Mettre à jour l'affichage du panier
}

// Événement de clic sur l'icône du panier pour afficher la page du panier
document.querySelector('.panier-container a').addEventListener('click', function() {
    updateCartDisplay(); // Mettre à jour l'affichage du panier
});

// Supprimer un article du panier
function supprimerArticle(nom) {
    // Trouver l'index de l'article dans le panier
    const index = cart.findIndex(article => article.nom === nom);
    
    // Vérifier si l'article existe dans le panier
    if (index !== -1) {
        // Supprimer un seul article à partir de l'index trouvé
        cart.splice(index, 1);
        updateCartDisplay(); // Mettre à jour l'affichage du panier
    }
}

// Charger le panier depuis localStorage lors du chargement de la page
window.onload = function() {
    loadCartFromLocalStorage();
    updateCartDisplay();
};

// Charger le panier depuis localStorage
function loadCartFromLocalStorage() {
    const cartFromStorage = localStorage.getItem('cart');
    if (cartFromStorage) {
        cart = JSON.parse(cartFromStorage);
    } else {
        cart = [];
    }
}

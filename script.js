// Tableau pour stocker les articles dans le panier
let cart = [];

// Ajouter un article au panier
function ajouterPanier(nom, prix) {
    cart.push({ nom: nom, prix: prix });
    updateCartDisplay(); // Mettre à jour l'affichage du panier
}

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

// Afficher les articles dans le panier
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

            // Ajouter un bouton de suppression à côté de chaque article
            let removeButton = document.createElement('button');
            removeButton.textContent = 'Retirer';
            removeButton.addEventListener('click', function() {
                supprimerArticle(article.nom);
            });
            articleElement.appendChild(removeButton);

            cartItemsElement.appendChild(articleElement);

            totalPrice += article.prix;
        });

        totalPriceElement.textContent = 'Total: $' + totalPrice;
    }
}

// Événement de clic sur l'icône du panier pour afficher la page du panier
document.querySelector('.panier-container a').addEventListener('click', function() {
    updateCartDisplay(); // Mettre à jour l'affichage du panier
});

// Valider le panier et rediriger vers panier.html
function validerPanier() {
    // Redirection vers panier.html
    window.location.href = 'panier.html';
}
function ajouterPanier(nom, prix) {
    cart.push({ nom: nom, prix: prix });
    updateCartDisplay(); // Mettre à jour l'affichage du panier
    saveCartToLocalStorage(); // Sauvegarder le panier dans localStorage
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}


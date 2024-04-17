document.addEventListener('DOMContentLoaded', function() {
    // Sélectionnez tous les boutons "Ajouter au Panier"
    var addToCartButtons = document.querySelectorAll('.add-to-cart-btn-product');

    // Ajoutez un gestionnaire d'événements à chaque bouton
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Récupérer le nom et le prix de l'article
            var productName = button.parentElement.querySelector('.card-title').textContent;
            var productPrice = parseFloat(button.getAttribute('data-price'));

            // Ajouter l'article au panier
            addToCart(productName, productPrice);

            // Mettre à jour l'affichage du panier
            renderCartItems();
        });
    });

    // Fonction pour ajouter un article au panier
    function addToCart(name, price) {
        var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push({ name: name, price: price });
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    // Fonction pour afficher les articles du panier
    function renderCartItems() {
        var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        var cartContainer = document.querySelector('.panier-container');

        // Efface le contenu actuel du panier
        cartContainer.innerHTML = '';

        // Affiche chaque article dans le panier
        cartItems.forEach(function(item) {
            var cartItemElement = document.createElement('div');
            cartItemElement.textContent = item.name + ' - Prix: ' + item.price + '€';
            cartContainer.appendChild(cartItemElement);
        });
    }
});

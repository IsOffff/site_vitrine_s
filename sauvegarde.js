// Fonction pour sauvegarder le panier dans le stockage local
function sauvegarderPanier() {
  localStorage.setItem('panier', JSON.stringify(cart));
}

// Fonction pour charger le panier depuis le stockage local
function chargerPanier() {
  const savedCart = localStorage.getItem('panier');
  if (savedCart) {
      cart = JSON.parse(savedCart);
      updateCartDisplay();
  }
}
window.onload = function() {
  chargerPanier(); // Appel de la fonction au chargement de la page
};
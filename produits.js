window.onload = function() {
  mettreAJourNombreArticlesPanier(); // Appel de la fonction après le chargement du DOM
};

function mettreAJourNombreArticlesPanier() {
  var panier = JSON.parse(localStorage.getItem('panier')) || [];
  var nombreArticles = panier.length;
  document.getElementById('nombre-articles-panier').textContent = nombreArticles;
}

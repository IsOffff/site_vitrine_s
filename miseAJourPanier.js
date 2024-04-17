window.onload = function() {
  mettreAJourNombreArticlesPanier();
};

function mettreAJourNombreArticlesPanier() {
  var panier = JSON.parse(localStorage.getItem('panier')) || [];
  var nombreArticles = panier.length;
  document.getElementById('nombre-articles-panier').textContent = nombreArticles;
}

<?php
session_start();

// Initialiser ou récupérer le panier depuis la session
if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = array();
}

// Fonction pour ajouter un produit au panier
function ajouterProduit($nom, $prix) {
    // Ajouter le produit à la session du panier
    $_SESSION['cart'][] = array('nom' => $nom, 'prix' => $prix);
}

// Fonction pour supprimer un produit du panier
function supprimerProduit($index) {
    // Vérifier si l'index existe dans le panier
    if (isset($_SESSION['cart'][$index])) {
        // Supprimer le produit à l'index donné
        unset($_SESSION['cart'][$index]);
        // Réinitialiser les indices du tableau
        $_SESSION['cart'] = array_values($_SESSION['cart']);
    }
}

// Code pour gérer d'autres opérations de panier, comme recalculer le total, etc.

// Exemple d'utilisation des fonctions
ajouterProduit("Produit A", 10);
ajouterProduit("Produit B", 20);
supprimerProduit(0); // Supprimer le premier produit ajouté

// Vous pouvez également inclure d'autres fonctions de manipulation du panier ici

// Afficher le contenu du panier (c'est juste un exemple)
foreach ($_SESSION['cart'] as $produit) {
    echo "<p>Produit: " . $produit['nom'] . ", Prix: " . $produit['prix'] . " €</p>";
}
?>
<script src="panier.js"></script>
<script src="panier.html"></script>
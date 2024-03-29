<?php
// Configuration de la base de données
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'racine');
define('DB_PASSWORD', 'racine');
define('DB_NAME', 'Vitrine_Sorin');
define('DB_PORT', 3307);

// Connexion à la base de données MySQL
$mysqli = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_PORT);

// Vérifier la connexion
if ($mysqli === false) {
    die("ERREUR: Impossible de se connecter. " . $mysqli->connect_error);
}
?>

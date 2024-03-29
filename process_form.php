<?php
// Vérifier si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Inclure le fichier de configuration de la base de données
    require_once "config.php";
    
    // Récupérer les données du formulaire
    $nom = $_POST["nom"];
    $email = $_POST["email"];
    $objet = $_POST["objet"];
    $message = $_POST["message"];
    
    // Préparer la requête SQL pour insérer les données dans la base de données
    $sql = "INSERT INTO messages (nom, email, objet, message) VALUES (?, ?, ?, ?)";
    
    // Préparer la déclaration SQL
    if ($stmt = $mysqli->prepare($sql)) {
        // Liaison des paramètres
        $stmt->bind_param("ssss", $nom, $email, $objet, $message);
        
        // Exécution de la déclaration
        if ($stmt->execute()) {
            // Redirection vers une page de confirmation
            header("location: confirmation.html");
            exit();
        } else {
            // Erreur lors de l'exécution de la déclaration
            echo "Erreur: " . $stmt->error;
        }
        
        // Fermeture de la déclaration
        $stmt->close();
    }
    
    // Fermeture de la connexion
    $mysqli->close();
}
?>

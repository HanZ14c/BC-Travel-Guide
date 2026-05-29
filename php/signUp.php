<?php
require_once 'database.php';

$message = "Please submit the form from the home page.";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["yourName"];
    $email = $_POST["email"];
    $theme = $_POST["theme"];

    try {
        $sql = "INSERT INTO subscriptions (visitor_name, email, favourite_article)
                VALUES (:visitor_name, :email, :favourite_article)";
        $statement = $conn->prepare($sql);
        $statement->bindParam(":visitor_name", $name);
        $statement->bindParam(":email", $email);
        $statement->bindParam(":favourite_article", $theme);
        $statement->execute();

        $message = "Thank you for subscribing to BC Travel Guide.";
    } catch (PDOException $error) {
        $message = "Subscription failed: " . $error->getMessage();
    }
}
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Subscription - BC Travel Guide</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="../css/style.css">
    </head>
    <body>
        <main class="phpPage">
            <section class="phpPanel">
                <h1>Subscription</h1>
                <p><?php echo htmlspecialchars($message); ?></p>
                <p><a href="../index.html#exploreMore">Back to the form</a></p>
                <p><a href="subscribers.php">View subscribers</a></p>
            </section>
        </main>
    </body>
</html>

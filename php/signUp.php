<?php
require_once 'database.php';

$message = "Please submit the form from the home page.";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["yourName"];
    $email = $_POST["email"];
    $theme = $_POST["theme"];

    $sql = "INSERT INTO subscriptions (visitor_name, email, favourite_article)
            VALUES (?, ?, ?)";
    $statement = $conn->prepare($sql);
    $statement->execute([$name, $email, $theme]);

    $message = "Thank you for subscribing to BC Travel Guide.";
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

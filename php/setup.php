<?php
require_once 'config.php';

$conn = new PDO("mysql:host=$dbHost;port=$dbPort", $dbUser, $dbPassword);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$conn->exec("CREATE DATABASE IF NOT EXISTS $dbName");
$conn->exec("USE $dbName");
$conn->exec(
    "CREATE TABLE IF NOT EXISTS subscriptions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        visitor_name VARCHAR(100) NOT NULL,
        email VARCHAR(255) NOT NULL,
        favourite_article VARCHAR(80) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )"
);

$message = "Database and table created successfully.";
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Database Setup - BC Travel Guide</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="../css/style.css">
    </head>
    <body>
        <main class="phpPage">
            <section class="phpPanel">
                <h1>Database Setup</h1>
                <p><?php echo $message; ?></p>
                <p><a href="../index.html">Back to home page</a></p>
                <p><a href="subscribers.php">View subscribers</a></p>
            </section>
        </main>
    </body>
</html>

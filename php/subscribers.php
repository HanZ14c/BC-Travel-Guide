<?php
require_once 'database.php';

$sql = "SELECT id, visitor_name, email, favourite_article, created_at
        FROM subscriptions
        ORDER BY created_at DESC";
$statement = $conn->prepare($sql);
$statement->execute();
$subscribers = $statement->fetchAll();
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Subscribers - BC Travel Guide</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="../css/style.css">
    </head>
    <body>
        <main class="phpPage">
            <section class="phpPanel subscribersPanel">
                <h1>Subscribers</h1>

                <?php if (count($subscribers) == 0): ?>
                    <p>No subscriptions yet.</p>
                <?php else: ?>
                    <div class="tableWrapper">
                        <table>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Favourite Article</th>
                                <th>Submitted At</th>
                            </tr>

                            <?php foreach ($subscribers as $subscriber): ?>
                                <tr>
                                    <td><?php echo htmlspecialchars($subscriber["id"]); ?></td>
                                    <td><?php echo htmlspecialchars($subscriber["visitor_name"]); ?></td>
                                    <td><?php echo htmlspecialchars($subscriber["email"]); ?></td>
                                    <td><?php echo htmlspecialchars($subscriber["favourite_article"]); ?></td>
                                    <td><?php echo htmlspecialchars($subscriber["created_at"]); ?></td>
                                </tr>
                            <?php endforeach; ?>
                        </table>
                    </div>
                <?php endif; ?>

                <p><a href="../index.html">Back to home page</a></p>
            </section>
        </main>
    </body>
</html>

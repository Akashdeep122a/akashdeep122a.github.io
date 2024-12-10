<?php
// File where messages are stored
$file = 'messages.txt';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Saved Messages</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            color: #333;
            margin: 20px;
        }
        h1 {
            text-align: center;
        }
        .message {
            border: 1px solid #ddd;
            border-radius: 5px;
            background: #fff;
            padding: 10px;
            margin-bottom: 15px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .timestamp {
            font-size: 0.8em;
            color: #666;
        }
    </style>
</head>
<body>
    <h1>Saved Messages</h1>
    <?php
    if (file_exists($file)) {
        $messages = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($messages as $message) {
            echo "<div class='message'>" . htmlspecialchars($message) . "</div>";
        }
    } else {
        echo "<p>No messages found.</p>";
    }
    ?>
</body>
</html>

<?php
// Allow requests from any origin
header("Access-Control-Allow-Origin: *");

// Allow specific HTTP methods
header("Access-Control-Allow-Methods: POST, OPTIONS");

// Allow specific headers in the request
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight (OPTIONS) requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Check if a message was sent via POST
if (isset($_POST['message'])) {
    $message = $_POST['message'];
    
    // Append the message to a file (messages.txt)
    $file = 'messages.txt';
    $result = file_put_contents($file, $message . PHP_EOL, FILE_APPEND);

    if ($result !== false) {
        // Return a success response
        echo json_encode(["status" => "success", "message" => "Message saved successfully."]);
    } else {
        // Return an error response if the message could not be saved
        echo json_encode(["status" => "error", "message" => "Failed to save the message."]);
    }
} else {
    // Return an error response if no message was provided
    echo json_encode(["status" => "error", "message" => "No message received."]);
}
?>

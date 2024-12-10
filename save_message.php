<?php
// Set headers to allow cross-origin requests (CORS)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Handle POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Capture the POST data
    $message = $_POST['message'] ?? '';
    $timestamp = $_POST['timestamp'] ?? '';
    $deviceInfo = $_POST['deviceInfo'] ?? '';

    // Check if all required fields are provided
    if (empty($message) || empty($timestamp) || empty($deviceInfo)) {
        echo json_encode([
            "status" => "error",
            "message" => "Missing data, please provide all fields."
        ]);
        exit;
    }

    // Create a log entry with the message, timestamp, and device info
    $logEntry = "Message: $message\nTimestamp: $timestamp\nDevice: $deviceInfo\n\n";

    // Save the log entry to a file (messages.log)
    if (file_put_contents('messages.log', $logEntry, FILE_APPEND)) {
        echo json_encode([
            "status" => "success",
            "message" => "Your message has been saved successfully!"
        ]);
    } else {
        // Handle the case where writing to the file fails
        echo json_encode([
            "status" => "error",
            "message" => "There was an error saving your message. Please try again later."
        ]);
    }
} else {
    // Handle invalid request methods
    echo json_encode([
        "status" => "error",
        "message" => "Invalid request method. Only POST requests are allowed."
    ]);
}
?>

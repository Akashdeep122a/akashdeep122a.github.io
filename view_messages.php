<?php
// Set headers to allow cross-origin requests (CORS)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Check if the messages.log file exists
$logFile = 'messages.log';
if (file_exists($logFile)) {
    // Read the file's contents
    $logContents = file_get_contents($logFile);

    // Split the log into individual messages (separated by double newlines)
    $messages = explode("\n\n", $logContents);

    // Create an array to store structured messages
    $responseMessages = [];

    foreach ($messages as $message) {
        if (!empty($message)) {
            // Split each message into lines and extract message details
            $lines = explode("\n", $message);
            $messageText = $lines[0] ?? 'No message';
            $timestamp = $lines[1] ?? 'No timestamp';
            $deviceInfo = $lines[2] ?? 'No device info';

            $responseMessages[] = [
                'message' => $messageText,
                'timestamp' => $timestamp,
                'device' => $deviceInfo
            ];
        }
    }

    // Send the response with the messages
    echo json_encode([
        'status' => 'success',
        'messages' => $responseMessages
    ]);
} else {
    // If the file doesn't exist, return an error message
    echo json_encode([
        'status' => 'error',
        'message' => 'No messages found.'
    ]);
}
?>

<?php
// CORS headers and preflight handling
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

$host = "127.0.0.1";
$db   = "minimal_rgb_slider";
$user = "phpbackend";
$pass = "root";
$charset = "utf8mb4";

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

header('Content-Type: application/json; charset=utf-8');

try {
    $pdo = new PDO($dsn, $user, $pass, $options);

    $red = $_POST['red'];
    $green = $_POST['green'];
    $blue = $_POST['blue'];
    $name = $_POST['name'];

    $pdo->query("INSERT INTO colors (red, green, blue, name) VALUES ($red, $green, $blue, '$name')");

    $insertedId = $pdo->lastInsertId();

    echo json_encode([
        "id" => (int)$insertedId,
        "red" => (int)$red,
        "green" => (int)$green,
        "blue" => (int)$blue,
        "name" => $name,
    ]);
    exit;

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
    exit;
}
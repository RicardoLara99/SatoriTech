<?php
// api.php
if (isset($_GET['locationId'])) {
    $locationId = $_GET['locationId'];
    $url = "https://rickandmortyapi.com/api/location/" . $locationId;

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);

    header('Content-Type: application/json');
    echo $response;
    exit;
}
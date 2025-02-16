<?php //src/api/getIsoData.php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$isoData = [
  "logo" => "/assets/iso_9001_2015.png",
  "title" => "Dunya standartlarinda profesyonel spor ekipmanlari ureticisi",
  "catalogData" => [
    [
      "name" => "Spor Aletleri Katalogu",
      "url" => "https://example.com/spor-aletleri-katalogu",
      "status" => "Guncel",
      "year" => 2025
    ],
    [
      "name" => "Acik Alan Spor Aletleri Katalogu",
      "url" => "https://example.com/acik-alan-spor-aletleri-katalogu",
      "status" => "Guncel",
      "year" => 2025
    ],
    [
      "name" => "Kent Mobilyalari Katalogu",
      "url" => "https://example.com/kent-mobilyalari-katalogu",
      "status" => "Guncel",
      "year" => 2025
    ]
  ],
  "parksUsage" => "99.95%",
  "parksCount" => "1+",
  "happyPeople" => "93%"
];

echo json_encode($isoData);
?>
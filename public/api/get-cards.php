<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // CORS sorunlarını çözmek için

$cards = [
    1 => [
        'title' => 'Açık Alan Spor Aletleri',
        'description' => 'Park Spor Donatıları',
        'image' => 'https://heroui.com/images/card-example-4.jpeg',
        'headerContent' => 'Park Spor Donatilari'
    ],
    2 => [
        'title' => 'Fitness ekipmanlari & spor giyim',
        'description' => 'Stil ve Rahatlık',
        'image' => 'https://heroui.com/images/card-example-3.jpeg',
        'headerContent' => 'Stil ve Rahatlık'
    ],
    3 => [
        'title' => 'TÜBİTAK Araştirmalarimizi Destekliyor',
        'description' => 'AR-GE ve ÜR-GE, Bilimsel Çalışmalar',
        'image' => 'https://heroui.com/images/card-example-2.jpeg',
        'headerContent' => 'AR-GE ve ÜR-GE, Bilimsel Çalışmalar'
    ],
    4 => [
        'title' => 'AKILLI KENT MOBİLYALARI',
        'description' => 'AKILLI BELEDİYELER İÇİN',
        'image' => 'https://heroui.com/images/card-example-6.jpeg',
        'headerContent' => 'AKILLI BELEDİYELER İÇİN'
    ],
    5 => [
        'title' => 'BUTAFIT Mobil uygulamasi',
        'description' => 'Antrenmanı Kolaylaştır',
        'image' => 'https://heroui.com/images/card-example-5.jpeg',
        'headerContent' => 'Antrenmani Kolaylastir'
    ],
];

// İsteğe bağlı olarak belirli bir kartı getirme
$cardId = isset($_GET['id']) ? intval($_GET['id']) : null;

if ($cardId !== null && isset($cards[$cardId])) {
        echo json_encode($cards[$cardId]);
} else {
        echo json_encode($cards); // Tüm kartları döndür
}
?>
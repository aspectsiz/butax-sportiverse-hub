<?php //src/api/getBlogData.php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$blogData = [
  [
    "title" => "Blog Yazısı 1",
    "url" => "https://example.com/blog/yazi-1"
  ],
  [
    "title" => "Blog Yazısı 2",
    "url" => "https://example.com/blog/yazi-2"
  ],
  [
    "title" => "Blog Yazısı 3",
    "url" => "https://example.com/blog/yazi-3"
  ]
];

echo json_encode($blogData);
?>
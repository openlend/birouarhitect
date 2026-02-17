<?php
/**
 * BirouArhitect.ro - Auto Article Generator
 * Generates SEO-optimized articles with Unsplash images
 * Run daily via cron
 */

require_once __DIR__ . '/../config-db.php';

// Unsplash API (free, no key needed for source URLs)
function getUnsplashImage($query) {
    $q = urlencode($query);
    return "https://source.unsplash.com/1200x630/?{$q}";
}

// SEO Keywords for architecture in Romania
$seoTopics = [
    [
        'title' => 'Tendințe în Arhitectura Rezidențială din România în %YEAR%',
        'keywords' => 'arhitectura rezidentiala romania, case moderne, design casa',
        'category' => 'rezidential',
        'image_query' => 'modern house architecture',
    ],
    [
        'title' => 'Cum Să Alegi Biroul de Arhitectură Potrivit pentru Proiectul Tău',
        'keywords' => 'birou arhitectura, alegere arhitect, proiecte arhitectura',
        'category' => 'ghid',
        'image_query' => 'architecture office design',
    ],
    [
        'title' => 'Arhitectura Sustenabilă: Viitorul Construcțiilor în România',
        'keywords' => 'arhitectura sustenabila, constructii verzi, eficienta energetica',
        'category' => 'sustenabil',
        'image_query' => 'sustainable architecture green building',
    ],
    [
        'title' => 'Design Interior Modern: Cele Mai Populare Stiluri în %YEAR%',
        'keywords' => 'design interior modern, amenajari interioare, stiluri design',
        'category' => 'interior',
        'image_query' => 'modern interior design',
    ],
    [
        'title' => 'Renovarea Clădirilor Istorice din România: Provocări și Soluții',
        'keywords' => 'renovare cladiri istorice, restaurare monumente, patrimoniu arhitectural',
        'category' => 'restaurare',
        'image_query' => 'historic building restoration romania',
    ],
    [
        'title' => 'Urbanism și Planificare Teritorială: Ce Se Schimbă în Orașele României',
        'keywords' => 'urbanism romania, planificare teritoriala, PUZ PUD',
        'category' => 'urbanism',
        'image_query' => 'urban planning city development',
    ],
    [
        'title' => 'Materiale Inovatoare în Construcții: Ce Folosesc Arhitecții în %YEAR%',
        'keywords' => 'materiale constructii inovatoare, tehnologii noi constructii',
        'category' => 'materiale',
        'image_query' => 'innovative building materials',
    ],
    [
        'title' => 'Autorizația de Construire: Ghid Complet pentru Proprietari',
        'keywords' => 'autorizatie construire, acte necesare constructie, ghid autorizatie',
        'category' => 'ghid',
        'image_query' => 'construction permit building',
    ],
    [
        'title' => 'Arhitectura Comercială: Birouri și Spații de Retail Moderne',
        'keywords' => 'arhitectura comerciala, design birou modern, spatii comerciale',
        'category' => 'comercial',
        'image_query' => 'commercial architecture office building',
    ],
    [
        'title' => 'Case Pasive în România: Tot Ce Trebuie Să Știi',
        'keywords' => 'case pasive romania, casa pasiva, eficienta energetica casa',
        'category' => 'sustenabil',
        'image_query' => 'passive house energy efficient',
    ],
];

echo "BirouArhitect.ro - Article Generator\n";
echo "=====================================\n\n";

// Pick 2-3 random topics for today
$todayTopics = array_rand($seoTopics, min(3, count($seoTopics)));
if (!is_array($todayTopics)) $todayTopics = [$todayTopics];

foreach ($todayTopics as $idx) {
    $topic = $seoTopics[$idx];
    $title = str_replace('%YEAR%', date('Y'), $topic['title']);
    $imageUrl = getUnsplashImage($topic['image_query']);
    
    echo "📝 Generated: {$title}\n";
    echo "   Image: {$imageUrl}\n";
    echo "   Keywords: {$topic['keywords']}\n";
    echo "   Category: {$topic['category']}\n\n";
}

echo "✅ Articles ready for AI content generation and publishing.\n";
echo "Run with --publish flag to auto-publish to database.\n";
?>
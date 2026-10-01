// DATA DUMMY - disimpan dalam folder js sesuai perintah Tugas Praktik 1
const dataBahanAjar = [
    { kode: "MK001", nama: "Pemrograman Berbasis Web", stok: 150, lokasi: "Gudang A" },
    { kode: "MK002", nama: "Struktur Data", stok: 85, lokasi: "Gudang B" },
    { kode: "MK003", nama: "Basis Data", stok: 120, lokasi: "Gudang A" },
    { kode: "MK004", nama: "Metodologi Penelitian", stok: 40, lokasi: "Gudang C" }
];

// --- LOGIC LOGIN (index.html) ---
const btnMasuk = document.getElementById('btnMasuk');
if (btnMasuk) {
    const modalLupa = document.getElementById('modalLupa');
    const modalDaftar = document.getElementById('modalDaftar');
    btnMasuk.onclick = () => {
        let e = document.getElementById('email').value;
        let p = document.getElementById('password').value;
        if (e === "admin@gmail.com" && p === "123456") {
            alert("Login berhasil!");
            window.location.href = "dashboard.html";
        } else { alert("email/password yang anda masukkan salah"); }
    };
    document.getElementById('openLupa').onclick = () => modalLupa.style.display = 'flex';
    document.getElementById('openDaftar').onclick = () => modalDaftar.style.display = 'flex';
    document.getElementById('closeLupa').onclick = () => modalLupa.style.display = 'none';
    document.getElementById('closeDaftar').onclick = () => modalDaftar.style.display = 'none';
}

// --- LOGIC DASHBOARD ---
const greeting = document.getElementById('greeting');
if (greeting) {
    let jam = new Date().getHours();
    let sapa = "Selamat pagi";
    if (jam >= 11 && jam < 15) sapa = "Selamat siang";
    else if (jam >= 15 && jam < 18) sapa = "Selamat sore";
    else if (jam >= 18) sapa = "Selamat malam";
    greeting.innerText = sapa;
    if (document.getElementById('clock')) document.getElementById('clock').innerText = new Date().toLocaleString('id-ID');
}

// --- LOGIC TRACKING ---
const btnCari = document.getElementById('btnCari');
if (btnCari) {
    btnCari.onclick = () => {
        let no = document.getElementById('noDO').value.trim();
        if (!no) return alert("Masukkan Nomor Delivery Order dulu!");
        document.getElementById('hasil').style.display = "block";
        document.getElementById('namaMhs').innerText = "Sitta - NIM 2312230039";
        document.getElementById('ekspedisi').innerText = "JNE Reguler";
        document.getElementById('tglKirim').innerText = "01 Oktober 2026";
        document.getElementById('jenisPaket').innerText = "Bahan Ajar Semester 5";
        document.getElementById('total').innerText = "Rp 25.000";
        let persen = Math.floor(Math.random() * 40) + 60;
        setTimeout(() => {
            document.getElementById('progressBar').style.width = persen + "%";
            document.getElementById('statusText').innerText = persen + "% - Dalam Pengiriman";
        }, 200);
    };
}

// --- LOGIC STOK (TAMPIL DINAMIS + TAMBAH BARIS DOM) ---
const bodyTabel = document.getElementById('bodyTabel');
if (bodyTabel) {
    function renderTabel() {
        bodyTabel.innerHTML = "";
        dataBahanAjar.forEach(item => {
            let row = document.createElement('tr');
            row.innerHTML = `<td>${item.kode}</td><td>${item.nama}</td><td>${item.stok}</td><td>${item.lokasi}</td>`;
            bodyTabel.appendChild(row);
        });
    }
    renderTabel();
    document.getElementById('btnTambah').onclick = () => {
        let kode = document.getElementById('kode').value.trim();
        let nama = document.getElementById('nama').value.trim();
        let stok = document.getElementById('stok').value.trim();
        let lokasi = document.getElementById('lokasi').value.trim();
        if (!kode || !nama || !stok || !lokasi) return alert("Isi semua field dulu!");
        dataBahanAjar.push({ kode, nama, stok, lokasi });
        let row = document.createElement('tr');
        row.style.background = "#e8f5e9";
        row.innerHTML = `<td>${kode}</td><td>${nama}</td><td>${stok}</td><td>${lokasi}</td>`;
        bodyTabel.appendChild(row);
        document.getElementById('kode').value = "";
        document.getElementById('nama').value = "";
        document.getElementById('stok').value = "";
        document.getElementById('lokasi').value = "";
    };
}
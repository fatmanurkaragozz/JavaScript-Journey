// Kitapların tanımlandığı nesneler
let kitap1 = { isim: "Her Şeyi Düşünme", yazar: "Anne Bogel", fiyat: 25, raf: "1.5.RAF" };
let kitap2 = { isim: "Hiçbir Karşılaşma Tesadüf Değildir", yazar: "Hakan Mengüç", fiyat: 56, raf: "2.3.RAF" };
let kitap3 = { isim: "İnsan Neyle Yaşar", yazar: "Tolstoy", fiyat: 34, raf: "3.2.RAF" };
let kitap4 = { isim: "Zafer Sızlanarak Kazanılmaz", yazar: "Haluk Tatar", fiyat: 45, raf: "4.1.RAF" };
let kitap5 = { isim: "Şeker Portakalı", yazar: "Jose Mauro de Vasconcelos", fiyat: 23, raf: "5.5.RAF" };

// Kitaplar listesi bir dizi içinde tutuluyor
let kitaplar = [kitap1, kitap2, kitap3, kitap4, kitap5];

// Her raf için nesneler tanımlanıyor, başlangıçta 'goster' değeri false
let raf11 = { kod: "1.1.RAF", goster: false };
let raf12 = { kod: "1.2.RAF", goster: false };
let raf13 = { kod: "1.3.RAF", goster: false };
let raf14 = { kod: "1.4.RAF", goster: false };
let raf15 = { kod: "1.5.RAF", goster: false };

// Diğer raflar da aynı şekilde tanımlanıyor
let raf21 = { kod: "2.1.RAF", goster: false };
let raf22 = { kod: "2.2.RAF", goster: false };
let raf23 = { kod: "2.3.RAF", goster: false };
let raf24 = { kod: "2.4.RAF", goster: false };
let raf25 = { kod: "2.5.RAF", goster: false };

let raf31 = { kod: "3.1.RAF", goster: false };
let raf32 = { kod: "3.2.RAF", goster: false };
let raf33 = { kod: "3.3.RAF", goster: false };
let raf34 = { kod: "3.4.RAF", goster: false };
let raf35 = { kod: "3.5.RAF", goster: false };

let raf41 = { kod: "4.1.RAF", goster: false };
let raf42 = { kod: "4.2.RAF", goster: false };
let raf43 = { kod: "4.3.RAF", goster: false };
let raf44 = { kod: "4.4.RAF", goster: false };
let raf45 = { kod: "4.5.RAF", goster: false };

let raf51 = { kod: "5.1.RAF", goster: false };
let raf52 = { kod: "5.2.RAF", goster: false };
let raf53 = { kod: "5.3.RAF", goster: false };
let raf54 = { kod: "5.4.RAF", goster: false };
let raf55 = { kod: "5.5.RAF", goster: false };

// Tüm raflar iki boyutlu bir dizi içinde gruplanıyor
let raflar = [
    [raf51, raf52, raf53, raf54, raf55],  // 5. katın rafları
    [raf41, raf42, raf43, raf44, raf45],  // 4. katın rafları
    [raf31, raf32, raf33, raf34, raf35],  // 3. katın rafları
    [raf21, raf22, raf23, raf24, raf25],  // 2. katın rafları
    [raf11, raf12, raf13, raf14, raf15]   // 1. katın rafları
];

// Rafları ekranda göstermek için kullanılan fonksiyon
function rafOlustur() {
    console.clear(); // Konsolu temizler
    let satir = "";  // Her katın raflarını tek satırda göstermek için
    for (let i = 0; i < raflar.length; i++) { // Katları dolaşır
        for (let j = 0; j < 5; j++) { // Her katta 5 raf var
            // Eğer rafın 'goster' değeri true ise kodu göster, değilse "---"
            satir += "|" + (raflar[i][j].goster ? raflar[i][j].kod : "---") + "";
        }
        console.log(satir);  // Satırı ekrana yazdırır
        console.log("---------------------"); // Ayraç ekler
        satir = "";  // Yeni kat için satırı sıfırlar
    }
}

// Verilen kitap ismine göre raf kodunu bulur
function kodBul(kitapIsmi) {
    let rafKod = null;  // Başlangıçta raf kodu boş
    kitaplar.forEach(function (kitap) {
        // Eğer kitap ismi verilen girişle eşleşiyorsa, raf kodunu döndürür
        if (kitap.isim.toUpperCase().includes(kitapIsmi.toUpperCase(), 0)) {
            rafKod = kitap.raf;
        }
    });
    return rafKod;  // Bulunan raf kodunu döndürür
}

// Verilen raf koduna göre rafı görünür yapar
function raftaGoster(rafKodu) {
    for (let i = 0; i < raflar.length; i++) { // Katları dolaşır
        for (let j = 0; j < 5; j++) { // Her katın raflarını dolaşır
            if (raflar[i][j].kod == rafKodu) {  // Kod eşleşirse
                raflar[i][j].goster = true;  // Rafı görünür yapar
                break;  // Döngüyü sonlandırır
            }
        }
    }
}

// Başlangıçta tüm rafları göster
rafOlustur();

// Kullanıcıdan kitap ismi ister
let kitapIsmi = prompt("Lütfen bir kitap ismi giriniz.");
// Girilen isimle eşleşen raf kodunu bulur
let rafKod = kodBul(kitapIsmi);

// Eğer raf kodu bulunursa, rafı gösterir ve yeniden ekrana yazdırır
if (rafKod != null) {
    raftaGoster(rafKod);
    rafOlustur();
} else {
    // Eğer kitap bulunamazsa uyarı verir
    alert("Aradığınız kitap bulunamamıştır.");
};let tarih2 = new Date(1999, 8, 7, 10, 40, 50);


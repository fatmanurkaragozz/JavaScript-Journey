let dizel = 24.53, benzin = 22.25, lpg = 11.1;
const yeniSatir = "\r\n";

const yakitMetni = "1-Dizel" + yeniSatir
    + "2-Benzin" + yeniSatir
    + "3-LPG" + yeniSatir
    + "Yakıt türünüzü seçiniz";

let yakitTipi = prompt(yakitMetni);


if (yakitTipi == "1" || yakitTipi == "2" || yakitTipi == "3") {
    let yakitLitresi = Number(prompt("Yakıt litresini giriniz"));
    let bakiye = Number(prompt("Bakiyinizi giriniz"));

    if (yakitTipi == "1") {

        // Dizel
        let odenecekTutar = dizel * yakitLitresi;

        if (odenecekTutar < bakiye) {
            alert("Yakıt alma işlemi başarılı" + yeniSatir
                + "Kalan bakiye : " + (bakiye - odenecekTutar))
        } else {
            alert("Bakiyeniz yeterli değildir" + yeniSatir
                + "Ödenecek tutar : " + odenecekTutar + yeniSatir
                + "Bakiye : " + bakiye + yeniSatir
                + "Eksik Tutar : " + (odenecekTutar - bakiye));
        }
    }

    else if (yakitTipi == "2") {

        // Benzin
        let odenecekTutar = benzin * yakitLitresi;

        if (odenecekTutar < bakiye) {
            alert("Yakıt alma işlemi başarılı" + yeniSatir
                + "Kalan bakiye : " + (bakiye - odenecekTutar))
        } else {
            alert("Bakiyeniz yeterli değildir" + yeniSatir
                + "Ödenecek tutar : " + odenecekTutar + yeniSatir
                + "Bakiye : " + bakiye + yeniSatir
                + "Eksik Tutar : " + (odenecekTutar - bakiye));
        }
    }

    else if (yakitTipi == "3") {

        // LPG
        let odenecekTutar = lpg * yakitLitresi;
        if (odenecekTuta < bakiye) {
            alert("Yakıt alma işlemi başarılı" + yeniSatir
                + "Kalan bakiye : " + (bakiye - odenecekTutar))
        } else {
            alert("Bakiyeniz yeterli değildir" + yeniSatir
                + "Ödenecek tutar : " + odenecekTutar + yeniSatir
                + "Bakiye : " + bakiye + yeniSatir
                + "Eksik Tutar : " + (odenecekTutar - bakiye));
        }
    }

} else {
    alert("Geçersiz sayı girdiniz !");
}


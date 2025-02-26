// return : geriye döndürmek

let donenDeger = cube(2);
kareAl(donenDeger);

function kareAl(sayi) {
    let sonuc = sayi * sayi;
    console.log(sonuc);
}

function cube(sayi) {
    let sonuc = sayi * sayi * sayi;
    return sonuc;
}

/*   RETURN:
    1- Bir değeri metodun dışarısına çıkarmak, taşımak için kullanılır
    2- Bir metodu bitiren anahtar kelimedir. Yani return'den sonra yazdıklarımız bir anlam ifade etmez
*/

/* void:
  - Geriye değer döndürmeyen
*/

// ! Harf sayısı bulma uygulaması

let cumle = String(prompt("Lütfen bir cümle giriniz:"));
let harf = String(prompt("Sayisini görmek istediğiniz harfi giriniz:"));
let kacHarf = 0;
harfBulma(cumle, harf);

function harfBulma(cumle, harf) {
    for (let i = 0; i <= cumle.length; i++) {
        if (cumle[i] === harf) { // metin.charAt(i).toLowerCase()===harf.toLowerCase()
            kacHarf++;
        }
    }
    console.log(harf + " cümlede " + kacHarf + " kez geçiyor.");
}

// == (Gevşek Eşitlik - Loose Equality) :
// Tip dönüşümü yapar: İki değer aynı değilse bile, karşılaştırma öncesinde otomatik olarak dönüştürülür.

// === (Sıkı Eşitlik - Strict Equality)
// Tip dönüşümü yapmaz: Değerlerin hem tipi hem de değeri aynı olmalıdır.

// toLowerCase : Büyük harfleri küçük harfe çevirerek cümledek büyük küçük harf hassasiyetini önler

// ! Mükemmel sayı uygulaması : sayının bölenleri toplamı kendisinin iki katı ise, 6 28 496

let sayi = Number(prompt("Sayı giriniz:"));
let toplam = 0;
mukemmel(sayi);

function mukemmel(sayi) {
    for (let i = 1; i <= sayi / 2; i++) {
        if (sayi % i == 0) {
            toplam += i;
        }
    }
    if (toplam === sayi) {
        console.log(sayi + " mükemmel sayidir");
    } else {
        console.log(sayi + " mükemmel sayi değildir")
    }
}

// ? Shift + Alt + F : Kodların düzenlenmesi

// Decimal To Binary Conversion

ConvertDecimalToBinary(25);

function ConvertDecimalToBinary(number) {
    let binary = "";
    while (true) {
        binary += (number % 2).toString();
        number = Math.floor(number / 2);

        //Math.floor() fonksiyonu, verilen bir sayıyı aşağı yuvarlayarak en yakın tam sayıyı döndürür.

        if (number == 1) {
            // Artık bölmek yok döngüden çıkacağız.
            binary += 1;
            break;
        }
    }
    let result = reverse(binary);
    console.log("Sonuç : " + result);
}

function reverse(binary) { // reverse: tersine çevrilmiş
    let reverseBinary = "";

    for (let i = binary.length - 1; i >= 0; i--) {
        reverseBinary += binary.charAt(i);
    }

    return reverseBinary;

}

// Binary To Decimal Conversion

ConvertBinaryToDecimal(111111);

function ConvertBinaryToDecimal(number){
    
    let total = 0;
    let decimal = number.toString();
    let length = decimal.length;

    for(let i = 0; i < length; i++){
        // Basamaktaki rakamı 2^(n-i-1) ile çarpıyoruz
        total += decimal.charAt(i) * Math.pow(2, length - i - 1);
    }

    console.log(total);
}

//------------------------------------------------------------

let binaryy = "10111";

function convertBinaryToDecimal(binaryy){
    let toplam = 0;
    let ust = 0;

    for(let i = binaryy.length-1 ; i>=0 ; i--){
        if(Number(binaryy.charAt(i))!=0){
            toplam += Number(binaryy.charAt(i)) * Math.pow(2,ust);
        }
        ust++;
    }

    console.log("Sonuç : " + toplam);
    
}

convertBinaryToDecimal(binaryy);
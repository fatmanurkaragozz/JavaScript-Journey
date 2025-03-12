
let langs = ["Python", "Java", "C++", "JavaScript"];
let [lang1, lang2, lang3, lang4] = langs;
console.log(lang1, lang2, lang3, lang4); // Çıktı: Python Java C++ JavaScript


const hesapla = (a, b) => {
    const topla = a + b;
    const carp = a * b;
    const bol = a / b;
    const cikar = a - b;

    return [topla, carp, bol, cikar];
}

let [toplaSonuc, carpSonuc, bolSonuc, cikarSonuc] = hesapla(10, 5);
console.log(toplaSonuc, carpSonuc, bolSonuc, cikarSonuc); // Çıktı: 15 50 2 5   

// Gördüğünüz gibi, arrow function ve destructing mantığını kullanarak hesapla fonksiyonundan dönen sonuçları tek satırda alabildik! 🚀

const person = {
    firstName: "FatmaNur",
    lastName: "Karagoz",
    age: 25
}

// Kişi nesnesini tanımladık ve destructing ile özelliklerini aldık.
let { firstName: ad, lastName: soyad, age: yas } = person;
console.log(ad, soyad, yas); // Çıktı: FatmaNur Karagoz 25  


let [ad2, soyad2, yas2] = ["Ahmet", "Demir", 30];
console.log(ad2, soyad2, yas2); // Çıktı: Ahmet Demir 30   
// Geleneksel fonksiyon tanımlama yöntemi (Function Declaration)
function yazdir() {
    console.log("Merhaba")
}
yazdir() // Fonksiyon çağrıldığında "Merhaba" yazdırır

// ARROW FUNCTION

// 1. Arrow Function ile fonksiyon tanımlama
const yazdir2 = () => {
    console.log("Merhaba")
}
yazdir2() // Fonksiyon çağrıldığında "Merhaba" yazdırır

// 2. Arrow Function: Parametre alan versiyon
const yazdir3 = (firstName) => {
    console.log("Merhaba", firstName)
}
yazdir3("FatmaNur") // Çıktı: "Merhaba FatmaNur"

// 3. Arrow Function: Birden fazla parametre alan versiyon (Tek satırda yazım)
const yazdir4 = (firstName, lastName) => console.log("Hello", firstName, lastName)
yazdir4("FatmaNur", "Karagoz") // Çıktı: "Hello FatmaNur Karagoz"

// 4. Arrow Function: Tek parametre için parantez zorunlu değil
const kupAl = x => x * x * x  // x'in küpünü alır (Tek satır olduğundan süslü parantez gerekmez)
const kareAl = (x) => x * x   // x'in karesini alır (Tek parametre olmasına rağmen parantez kullanılabilir)

console.log("Değer: " + kupAl(8)); // Çıktı: "Değer: 512"
console.log("Değer: " + kareAl(5)); // Çıktı: "Değer: 25"

function topla1(a, b) {
    return a + b;
}
console.log(topla1(5, 3)); // Çıktı: 8

const topla2 = (a, b) => a + b;
console.log(topla2(5, 3)); // Çıktı: 8
// Gördüğünüz gibi arrow function daha kısa ve okunaklı bir yazım sunuyor! 🚀
/**
 * Spread Operatörü Kullanımı:
 * 
 * Spread operatörü, bir dizi veya iterable nesnenin elemanlarını tek tek ayırarak, 
 * fonksiyon çağrılarında veya dizi literallerinde sıfır veya daha fazla argüman veya 
 * eleman beklenen yerlere genişletilmesini sağlar.
 */
// Örnek Kullanımlar:

// 1. Fonksiyon Argümanları:
let numbers = [10, 20, 30, 40, 50];

function addNumbers(a, b, c, d, e) {
    return a + b + c + d + e;
}

// Eski yöntem
let result = addNumbers(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4]);
console.log(result); // Çıktı: 150

addNumbers(...numbers); // Spread operatörü ile aynı işlemi tek satırda yapabiliriz
console.log(result); // Çıktı: 150

// 2. Dizi Birleştirme:
const diller1 = ["Python", "Java", "C++"];
const diller2 = ["JavaScript", "Ruby", "Go", ...diller1];
console.log(diller2); // Çıktı: ["JavaScript", "Ruby", "Go", "Python", "Java", "C++"] 

// 3. Dizi Destructuring:
const numbers2 = [100, 200, 300, 400, 500];
const [a, b, ...kalanSayilar] = numbers2;
console.log(a, b); // Çıktı: 100 200
console.log(kalanSayilar); // Çıktı: [300, 400, 500]


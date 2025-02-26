// floor(x): Verilen sayıyı aşağıya doğru en yakın tam sayıya yuvarlar.
console.log(Math.floor(4.7)); // 4

// ceil(x): Verilen sayıyı yukarıya doğru en yakın tam sayıya yuvarlar.
console.log(Math.ceil(4.2)); // 5

// round(x): Sayıyı en yakın tam sayıya yuvarlar (0.5 ve üstü yukarı, altı aşağı yuvarlanır).
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.4)); // 4

// max(...values): Verilen sayılar arasından en büyük olanı döndürür.
console.log(Math.max(3, 7, 12, 1)); // 12

// min(...values): Verilen sayılar arasından en küçük olanı döndürür.
console.log(Math.min(3, 7, 12, 1)); // 1

// random(): 0 (dahil) ile 1 (hariç) arasında rastgele bir sayı döndürür.
console.log(Math.random()); // Örnek: 0.574839282

// abs(x): Verilen sayının mutlak değerini döndürür.
console.log(Math.abs(-8)); // 8

// sqrt(x): Verilen sayının karekökünü döndürür.
console.log(Math.sqrt(16)); // 4

// pow(base, exponent): Verilen tabanı (base), üssü (exponent) kadar kuvvetlendirir.
console.log(Math.pow(2, 3)); // 8


let randomDeger = Math.random();
let sonuc = randomDeger*100000;
let sonucYuvarla = Math.floor(sonuc);

console.log(randomDeger);
console.log(sonuc);
console.log(sonucYuvarla);
// console.log(Math.floor(Math.random()*100));
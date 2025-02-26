// ArrayIndexOutOfBoundException hatası javascriptde dönmez undefined olarak gözükür

let karisikDizi = [1,"Enes", 5.7,true, null, undefined];
console.log(karisikDizi[3]);

let dizi1 = ["Enes", "Ali"];
let dizi2 = new Array("Enes","Ali");

// number, string, boolean, undefined null, object(array)

console.log(typeof dizi2);

let isimler = ["Enes","Yakup","Bilal","Kübra","Ayşenur","Adem"];

// let sayac = 0;
// while (sayac<isimler.length){
//     console.log(isimler[sayac]);
//     sayac++;
// }

// for(let i=0; i<isimler.length; i++){
//     console.log(isimler[i]);
// }

isimler.forEach(function(isim){
    console.log(isim);
}); 

// --> Dizilerde genellikle forEach döngüsü tercih edilir.
// Süslü parantezler,yalnızca fonksiyonun gövdesini tanımlamak için gereklidir.
// forEach metodunun kendisinin sonunda ayrıca süslü parantez gerekmez, çünkü fonksiyon çağrısı
// ) ile sonlanır.

// ! Dizinin Metotları
/*
push    : dizinin sonuna eleman ekler, ayrıca dizinin uzunluğunu döner
unshift : dizinin başına eleman ekler, eleman sayısını geriye döner

pop     : dizinin sonundan eleman siler, eleman sayısını döner
shift   : dizinin başından eleman siler, eleman sayısını döner

splice(index,index) : eleman eklemek ve silmek için kullanılır.

toString : diziyi stringe çevirebiliriz.
join     : diziyi stringe çevirir. Farklı ise araya eleman ekleyebiliriz.

concat   : dizileri birleştirmek için kullanılır.
slice(dilimlemek) : diziyi istenilen yerden bölüp yeni bir dizi oluşturur
length   : dizinin uzunluğunu verir.
reverse  : dizinin elemanlarını ters çevirir
split(bölmek) : belirli bir ifadeye göre bölüp diziye çevirir
indexOf  : elemanın index numarasını verir.
includes : verilen elemanı içeriyor mu ona bakar
*/

let arabalar = ["bmw","toyota","renault","mercedes","porsche"];

//PUSH METOT
console.log(arabalar.length);
arabalar.push("opel");
console.log(arabalar);

//UNSHIFT METOT
arabalar.unshift("hundai");
console.log(arabalar);

//POP METOT
let silinenEleman = arabalar.pop();
console.log(arabalar);
console.log(silinenEleman);

// SHIFT METOTU
let silinenEleman2 = arabalar.shift();
console.log(arabalar);
console.log(silinenEleman2);

// SPLICE METOT
console.log(arabalar);
arabalar.splice(3,0,"hundai");
console.log(arabalar);

arabalar.splice(1,2);
console.log(arabalar);

// TOSTRİNG METOT
// console.log(typeof arabalar);
// let stringArabalar = arabalar.toString();
// console.log(typeof stringArabalar);
// console.log(stringArabalar);

// JOIN METOT
// let stringArabalar = arabalar.join("?");
// console.log(stringArabalar);

// CONCAT METOT
let arabalar2 = ["sahin","lamborghini"];
let birlesmisDizi = arabalar.concat(arabalar2);
console.log(birlesmisDizi);

// SLİCE METOT
console.log(birlesmisDizi);
let ayriDizi = birlesmisDizi.slice(3);
console.log(ayriDizi);

// LENGTH METOT
console.log(ayriDizi.length);

// REVERSE METOT
console.log(ayriDizi);
ayriDizi.reverse();
console.log(ayriDizi);

// SPLİT METOT
let adlar = "Enes,Ali,Veli";
let adlarDizi = adlar.split(",");
console.log(adlarDizi);
console.log(typeof adlarDizi);

// INDEXOF METOT
let index = ayriDizi.indexOf("porsche");
console.log(index);

let index2 = ayriDizi.indexOf("mercedes");
console.log(index2);
// Eğer böyle bir index bulunmuyorsa -1 çıktısı alırsınız.

// INCLUDES METOT
let iceriyorMu =ayriDizi.includes("bmw");
console.log(iceriyorMu);
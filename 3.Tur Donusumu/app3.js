/*
----------- TÜR DÖNÜŞÜMLERİ -----------

string, numbers, booleans, undefined and null
object, function 

*/

let a = 5;
let b = Number("10");

// String veri tipinden number veri tipine dönüştürmek

// let c = Number(b);
// console.log(typeof c);
// console.log(a+c);

alert("a+b = " + (a + b));

// parseInt() : Noktadan sonrasını atıyor
// parseFloat()

console.log(window);

let x = 8;
let y = parseFloat("12.3");
console.log(y);
console.log(typeof y);

// NUMBER TİPİNDEN STRING VERİ TİPİNE DÖNÜŞTÜRMEK

let k = String(55);
console.log(typeof k);
console.log(k);

let l = (66).toString();
console.log(typeof l);
console.log(l);

// boolean değerini --> Stringe dönüştürme
let sonuc = String(true);
console.log(typeof sonuc);
console.log(sonuc);

 let s = Number("B");
 console.log(s);
// ? Bu consolun çıktısında NaN diye bir ifadeyle karşılaşırız bunun anlamı
// ? Not a Number = Bir sayı değil !

let rakamlar = String([1, 2, 3, 4]);
console.log(typeof rakamlar);
console.log(rakamlar);

let rakamlar2 = Number([1,2,3,4,5,6]);
console.log(rakamlar2);
// ? NaN çıktısını aldık !

// ! Breakpoint ve Tooltip Nedir ?

// Tooltip, bir kullanıcı bir öğenin üzerine geldiğinde (genellikle fare ile üzerine
// gelindiğinde) görünen küçük bir bilgi kutusudur. Tooltip'ler genellikle bir öğe 
// hakkında ek bilgi vermek için kullanılır.

// Breakpoint, JavaScript kodunu adım adım analiz etmek için kullanılan bir araçtır. 
// Bir breakpoint, belirli bir satırdaki kodun çalışmasını geçici olarak durdurur, 
// böylece geliştirici kodun akışını izleyebilir, değişkenlerin değerlerini inceleyebilir 
// ve hata ayıklaması yapabilir.

let f = 45;

//debugger;
let g = 50;
let h = f+g;
let t = f+g+h;
let z = f+g+h+t;

let sonucc = f+g+h+t+z;
console.log("Sonuç: " + sonucc);

// ! break, döngüyü tamamen durdurur
// ! continue, döngünün mevcut adımını atlayarak bir sonraki adıma geçer.

// ? Continue
// 1 2 3 4 5 6 7 9 10

let deger = 0;

while(deger<=10){
    deger++;
    if(deger>10){
        break;
    }
    if(deger==8){
        continue;
    }
    console.log(deger);
}


for(let i = 3; i <100; i++){
    let sonuc3 = true; 

    for(let j= i-1; j>1; j--){
        if(i%j==0){
          // asal değildir
          sonuc3= false;
          break;
        }
    }
    if(sonuc3){
        console.log(i);
    }
}

// ----------------------------

let sayi = Number(prompt("Lütfen bir sayi giriniz : "));
let carpim=1;

for(let i = 1; i<=sayi ; i++){
    carpim=carpim*i;

}
alert("Sonuç :" + carpim);


//-------------------------------

let sayi2 =prompt("Armstrong sayi mi ?");
let kuptoplami = 0;
for(let i=0; i<sayi2.length; i++){
    let rakam = sayi2.charAt(i);
    kuptoplami+=rakam*rakam*rakam;
}

if(sayi2==kuptoplami){
    alert("Armstrong sayisidir :) ");
}else{
    alert("Armstrong sayisi değildir");
}



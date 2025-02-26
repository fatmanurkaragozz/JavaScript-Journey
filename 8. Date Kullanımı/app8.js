// DATE Kullanımı

let tarih = new Date();
console.log(tarih);
// console.log(tarih.toString());
// console.log(typeof tarih.toString());

console.log(tarih.getFullYear());
console.log(tarih.getDate());
console.log(tarih.getHours());
console.log(tarih.getMilliseconds());
console.log(tarih.getMonth());
console.log(tarih.getMinutes());
console.log(tarih.getSeconds());
console.log(tarih.toLocaleDateString());
console.log(tarih.toLocaleTimeString());
console.log(tarih.toLocaleString());

// SET METOTLARI set: atamak !
tarih.setDate(24);
tarih.setHours(15);
tarih.setMonth(11);
tarih.setMinutes(50);

tarih.setHours(tarih.getHours()+2);
console.log(tarih);




// charAt(index): Verilen indeksteki karakteri döndürür.
let str = "JavaScript";
console.log(str.charAt(4)); // "S"

// concat(...strings): Verilen stringleri birleştirir.
let str1 = "Merhaba, ";
let str2 = "dünya!";
console.log(str1.concat(str2)); // "Merhaba, dünya!"

// indexOf(substring): Belirtilen alt stringin ilk geçtiği indexi döndürür. Yoksa -1 döner.
console.log(str.indexOf("Script")); // 4

// lastIndexOf(substring): Belirtilen alt stringin son geçtiği indexi döndürür. Yoksa -1 döner.
console.log("abcabc".lastIndexOf("a")); // 3

// toUpperCase(): Tüm harfleri büyük harfe çevirir.
console.log("merhaba".toUpperCase()); // "MERHABA"

// toLowerCase(): Tüm harfleri küçük harfe çevirir.
console.log("MERHABA".toLowerCase()); // "merhaba"

// trim(): Başındaki ve sonundaki boşlukları kaldırır.
console.log("  Boşluklar  ".trim()); // "Boşluklar"

// slice(start, end): Verilen başlangıç ve bitiş indekslerine göre kesim yapar.
console.log("JavaScript".slice(0, 4)); // "Java"

// substring(start, end): Belirtilen indeks aralığındaki kısmı döndürür.
console.log("JavaScript".substring(4, 10)); // "Script"

// replace(oldSubstring, newSubstring): Belirtilen alt stringi yenisiyle değiştirir.
console.log("Merhaba dünya".replace("dünya", "evren")); // "Merhaba evren"

// split(delimiter): Verilen ayraçla stringi diziye böler.
console.log("elma,armut,üzüm".split(",")); // ["elma", "armut", "üzüm"]

// valueOf(): String nesnesinin ilkel değerini döndürür.
let str3 = new String("JavaScript");
console.log(str3.valueOf()); // "JavaScript"

// startsWith(substring): String belirtilen alt stringle başlıyorsa true döner.
console.log("JavaScript".startsWith("Java")); // true

// endsWith(substring): String belirtilen alt stringle bitiyorsa true döner.
console.log("JavaScript".endsWith("Script")); // true

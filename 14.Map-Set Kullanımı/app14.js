// Map Kullanımı

// Map veri yapısı, bir anahtar-değer çiftlerinden oluşan bir koleksiyon türüdür.
// Map nesneleri, herhangi bir türdeki anahtarları saklayabilir: string, number, object vs.
// Map nesneleri, elemanlarının sırasını korur.
// Map nesneleri, eleman sayısını size özelliği ile döndürür.
// Map nesneleri, elemanlarına erişim için get() metodu kullanılır.
// Map nesneleri, eleman eklemek için set() metodu kullanılır.
// Map nesneleri, eleman silmek için
// delete() metodu kullanılır.
// clear() metodu kullanılır.
// Map nesneleri, elemanın var olup olmadığını kontrol etmek için has() metodu kullanılır.

const map1 = new Map();

// SET

map1.set(34, "İstanbul");
map1.set(35, "İzmir");
map1.set(6, "Ankara");
map1.set(16, "Bursa");
map1.set(1, "Adana");

// GET
console.log(map1.get(16)); // Bursa
console.log(map1.get(35)); // İzmir

let value = map1.size;
console.log(value); // 5

value = map1.delete(16);
console.log(value); // true

console.log(map1.has(16)); // false

// For Of döngüsü ile Map elemanlarına erişmek

for (let [key, value] of map1) { // Destructing
    console.log(key, value);
}

let cities = [34, "İstanbul"];
let [a, b] = cities;
console.log(a, b); // 34 İstanbul


const keys = Array.from(map1.keys());
console.log(keys); // [ 35, 6, 1 ]

keys.forEach(key => {
    console.log(key);
});

for (let key of map1.keys()) {
    console.log(key);
}

for (let value of map1.values()) {
    console.log(value);
}

//Map'lerde key olarak referans tipli (object) değerler kullanırken, bu değerleri önceden `let` veya `var` ile tanımlamamızın nedeni, aynı referansı kullanarak Map'e erişim sağlamaktır. Referans tipli değerler, bellekteki adresleri üzerinden işaret edilirler. Bu nedenle, aynı referansı kullanarak Map'e erişmek için bu referansı bir değişkende saklamamız gerekir.

//Örneğin, aşağıdaki kodda `key2` değişkeni bir object referansıdır ve bu referans `map1` Map'ine eklenmiştir. Daha sonra aynı referansı kullanarak Map'ten değeri alabiliriz:

let key2 = { username: "fnurkaragoz" };

map1.set(key2, " Obje");
console.log(map1.get(key2)); // FatmaNur Karagöz

// Referans tiplerde key olarak object kullanabiliriz.
// mapi set ettiğimiz zaman key kısmına direkt referansı atamak için let ile tanımlayıp
// set işlemi yapabiliriz. 


// Set Kullanımı
// Set'de ki en büyük özellik içerisinde aynı elemandan bir daha tanımlanamasıdır.
// Set nesneleri, elemanlarının sırasını korur.
// Set nesneleri, eleman sayısını size özelliği ile döndürür.
// Set nesneleri, eleman eklemek için add() metodu kullanılır.
// Set nesneleri, eleman silmek için delete() metodu kullanılır.
// Set nesneleri, elemanın var olup olmadığını kontrol etmek için has() metodu kullanılır.      

const setNew = new Set();

setNew.add(10);
setNew.add(20);
setNew.add("Elma");
setNew.add("Elma");
setNew.add("Elma");
setNew.add(true);
setNew.add({ username: "fnurkaragoz" }, "Obje");
setNew.add([1, 2, 3, 4, 5]);
console.log(setNew.size);
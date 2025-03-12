
// For in - For of döngüleri

// For in döngüsü, bir nesnenin enumerable (yinelebilir) özelliklerini döngü ile almak için kullanılır. Bu döngü, nesnenin prototype zincirindeki özellikleri de döngüye alır.
// Bize index değerlerini döndürüdğü için genellikle arraylerde kullanılır.


// For of döngüsü ise, bir iterable nesnenin elemanları üzerinde döngü yapmak için kullanılır.
// Bize elemanları döndürdüğü için genellikle arraylerde kullanılır.

let names = ["Ahmet", "Mehmet", "Ali"];

names.forEach(function (name) {
    console.log(name);
});

names.forEach(name => console.log(name));

// For in döngüsü

for (let name in names) {
    console.log(name, names[name]);
}

// For of döngüsü
for (let name of names) {
    console.log(name, names.indexOf(name));
}
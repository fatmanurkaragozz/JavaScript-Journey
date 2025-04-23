/*
1- Javascript senkron çalışan bir programlama dilidir.

   Asenkron Çalışma Durumları:
    1- Timing
    2- Event Handling
    3- HTTP isteklerinde
*/

console.log("Fatma Nur");

setTimeout(() => {
    console.log("1000ms süre doldu ve çalıştı.");
}, 1000); // 1 sn bekleyecek ve ardından çalışacak.

setTimeout(() => {
    console.log("500ms süre doldu ve çalıştı.");
}, 500); // 0,5 sn bekleyecek ve ardından çalışacak.    

setTimeout(() => {
    console.log("750ms süre doldu ve çalıştı.");
}, 750); // 0,75 sn bekleyecek ve ardından çalışacak.

console.log("Karagoz");

//Asenkron Problemi !
//http istekleri
const users = [
    {
        userId: 5,
        post: "Elif Post 1"
    },
    {
        userId: 5,
        post: "Elif Post 2"
    },
    {
        userId: 5,
        post: "Elif Post 3"
    },
    {
        userId: 6,
        post: "Elif Post 4"
    },
    {
        userId: 7,
        post: "Elif Post 5"
    }
]

// user id
// post by user id

function getUserId() {
    setTimeout(() => {
        // Servise gittik ve cevabı aldık.
        return 5;
    }, 1000);
}

function getPostsByUserId(userId) {
    console.log(userId)
    // Normalde gerçek bir api'den veri alırız.
    setTimeout(() => {
        users.forEach(user => {
            if (user.userId === userId) {
                console.log(user.post);
            }
        });
    }, 500);
}

// Call the function
let userId = getUserId();
getPostsByUserId(userId);

/*
Asenkron Bozukluğun Nedeni:
- `getUserId` fonksiyonu içinde `setTimeout` kullanılarak asenkron bir işlem yapılmaktadır.
- Ancak, `setTimeout` içindeki kod belirtilen süre dolduktan sonra çalışır ve `return` ifadesi
  fonksiyon çağrıldığı anda bir değer döndürmez.
- Bu nedenle, `getUserId` fonksiyonundan dönen `userId` değişkeni `undefined` olur.
- Sonuç olarak, `getPostsByUserId` fonksiyonuna `undefined` bir değer iletilir ve doğru sonuçlar alınamaz.
- Yani getPostsByUserId fonksiyonu çalışırken aynı zamanda da getUserId fonksiyonu çalışır. Ama getPostsByUserId fonksiyonunun çalışabilmesi için userId değerine ihtiyaç vardır. userId ' de aynı anda diğer fonksiyonda döndüğü için userId'yi çekemeyiz ve getPostsByUserId fonksiyonu undefined bir değer alır. Bu yüzden de sonuçlar doğru olmaz.

Çözüm Önerileri:
1. Callback kullanımı: `getUserId` fonksiyonuna bir callback eklenerek, işlem tamamlandığında
   bu callback çağrılabilir.
2. Promise kullanımı: `getUserId` bir Promise döndürebilir ve `then` ile sonuç işlenebilir.
3. Async/Await kullanımı: Modern bir yöntem olarak, `async/await` ile kod daha okunabilir hale getirilebilir.
*/

// CALLBACK NEDİR?
// Bir fonksiyonun başka bir fonksiyona argüman olarak geçilmesi ve bu fonksiyonun belirli bir süre sonra çağrılmasıdır.

// timing - event - http istekleri 

// callback = getSurname 
function getName(callback) {
    setTimeout(() => {
        // Servisten ismimi getirdi.
        let name = "Fatma Nur"; // web servisinden geldi.
        console.log(name);
        callback(name); // callback çağırılıyor.
    }, 1000);
}

function getSurname(name, callback) {
    setTimeout(() => {
        let surname = "Karagoz"; // web servisinden geldi.
        console.log(surname);
        callback(surname); // callback çağırılıyor.
    }, 500);
}

// getName(getSurname); // getName fonksiyonu çalıştığında getSurname fonksiyonunu çağıracak.

function getAge(name, surname, callback) {
    setTimeout(() => {
        let age = 25; // web servisinden geldi.
        callback(age); // callback çağırılıyor.
    }, 300);
}

getName((name) => {
    getSurname(name, (surname) => {
        getAge(name, surname, (age) => {
            console.log(name, surname, age);
        })
    })
})
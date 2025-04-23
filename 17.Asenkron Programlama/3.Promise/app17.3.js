// PROMISE
// Asenkron yapıları senkrona çevirmek için kullanıyoruz.
// ES6 ile birlikte gelen bir yapıdır.
// Promise, bir işlemin sonucunu temsil eden bir nesnedir. Bu işlem tamamlandığında, Promise ya "başarılı" ya da "başarısız" olur.  
// Başarılı olduğunda bir değer döner, başarısız olduğunda bir hata döner. Promise, asenkron işlemleri daha okunabilir ve yönetilebilir hale getirir. Promise, üç durumda olabilir:
// 1. **Pending (Beklemede)**: İşlem henüz tamamlanmamış.
// 2. **Fulfilled (Tamamlandı)**: İşlem başarılı bir şekilde tamamlandı ve bir değer döndürüldü.
// 3. **Rejected (Reddedildi)**: İşlem başarısız oldu ve bir hata döndürüldü.

let check = false;

function createPromise() {
    return new Promise((resolve, reject) => {
        if (check) {
            resolve("Promise'te herhangi bir sıkıtnı yok!");
        }
        else {
            reject("Sıkıntı büyük");
        }
    })
}

createPromise()
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Her durumda çalışır.");
    })

// ? PROMISE + XMLHTTPREQUEST

// Promise.all

function readStudents(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange", () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            })
        } catch (error) {
            reject(error);
        }

        xhr.open("GET", url);
        xhr.send();
    })
}

readStudents("students.json")
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

function getUsers(url) {
    // Kullanıcı verilerini almak için bir Promise döndüren bir fonksiyon.
    // Parametre: `url` - Veri alınacak API'nin URL'si.

    return new Promise((resolve, reject) => {
        // Yeni bir Promise nesnesi oluşturuluyor.
        // `resolve`: İşlem başarılı olduğunda çağrılır.
        // `reject`: İşlem başarısız olduğunda çağrılır.

        const xhr = new XMLHttpRequest();
        // XMLHttpRequest nesnesi oluşturuluyor. Bu nesne, sunucuyla iletişim kurmak için kullanılır.

        try {
            xhr.addEventListener("readystatechange", () => {
                // `readystatechange` olayı dinleniyor. Bu olay, `xhr.readyState` değiştiğinde tetiklenir.

                if (xhr.readyState === 4 && xhr.status === 200) {
                    // Eğer `readyState` 4 ise, istek tamamlanmıştır.
                    // Eğer `status` 200 ise, sunucu isteği başarıyla işlemiştir.

                    resolve(JSON.parse(xhr.responseText));
                    // Sunucudan dönen yanıt JSON formatında çözülüp `resolve` ile döndürülür.
                }
            });
        } catch (error) {
            // Eğer bir hata oluşursa, `reject` çağrılarak hata döndürülür.
            reject(error);
        }

        xhr.open("GET", url);
        // HTTP isteği başlatılıyor.
        // İlk parametre: HTTP metodu (GET).
        // İkinci parametre: İstek yapılacak URL.

        xhr.send();
        // HTTP isteği gönderiliyor.
    });
}

function getCommentsByUserId(url) {
    // Kullanıcı ID'sine göre yorumları almak için bir Promise döndüren bir fonksiyon.
    // Parametre: `url` - Veri alınacak API'nin URL'si.

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange", () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            })
        } catch (error) {
            reject(error);
        }
        xhr.open("GET", url);
        xhr.send();
    })
}

getUsers("https://jsonplaceholder.typicode.com/users/3")
    .then((response) => {
        console.log(response);
        // Kullanıcı bilgileri alındıktan sonra, kullanıcı ID'si ile yorumları almak için `getCommentsByUserId` fonksiyonu çağrılıyor.
        return getCommentsByUserId(`https://jsonplaceholder.typicode.com/comments?postId=${response.id}`);
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
    .finally(() => console.log("İstek tamamlandı."));



const p1 = Promise.resolve("Promise 1 tamamlandı.");
const p2 = Promise.resolve("Promise 2 tamamlandı.");
const p3 = new Promise((resolve, reject) => {
    resolve("üçüncü promise başarılı oldu.");
})
const p4 = Promise.reject("Dördüncü promise başarısız oldu.");

Promise.all([p1, p2, p3, p4])
    .then((response) => {
        console.log(response)
    })
    .catch((error) => console.log(error));



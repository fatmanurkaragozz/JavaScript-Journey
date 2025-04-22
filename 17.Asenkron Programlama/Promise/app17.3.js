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


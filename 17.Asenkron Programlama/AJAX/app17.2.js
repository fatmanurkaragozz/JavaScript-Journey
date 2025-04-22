// AJAX = Asynchronous JavaScript and XML --> Web sayfalarının sunucuyla iletişim kurmasını sağlar. Bu iletişim sırasında sayfanın yeniden yüklenmek yerine sadece gerekli verilerin güncellenmesini sağlar.

function prepareURL(url, id) {
    if (id === null) {
        return url;
    }
    return `${url}?postId=${id}`
}

function getComments(url, id) {
    let newUrl = prepareURL(url, id);
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
        }
    })

    xhr.open("GET", newUrl);
    xhr.send();
}

function getData(url) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
        }
    })

    xhr.open("GET", url);
    xhr.send();
}


getComments("https://jsonplaceholder.typicode.com/users");
getComments("https://jsonplaceholder.typicode.com/comments", null);
getComments("https://jsonplaceholder.typicode.com/comments", 1);

/*

#### **1. `xhr.readyState === 4`**
- **`xhr.readyState`**: Bu, `XMLHttpRequest` nesnesinin mevcut durumunu temsil eden bir özelliktir. `readyState` özelliği, isteğin hangi aşamada olduğunu gösterir ve aşağıdaki değerlerden birini alabilir:
  - **`0` (UNSENT)**: İstek henüz başlatılmadı (`xhr.open()` çağrılmadı).
  - **`1` (OPENED)**: `xhr.open()` çağrıldı, ancak istek henüz gönderilmedi (`xhr.send()` çağrılmadı).
  - **`2` (HEADERS_RECEIVED)**: İstek gönderildi ve sunucudan yanıt başlıkları alındı.
  - **`3` (LOADING)**: Yanıtın bir kısmı alınıyor (veri aktarımı devam ediyor).
  - **`4` (DONE)**: İstek tamamlandı ve tüm yanıt alındı.

  **`xhr.readyState === 4`** kontrolü, isteğin tamamen tamamlandığını ve sunucudan tüm yanıtın alındığını doğrular.

---

#### **2. `xhr.status === 200`**
- **`xhr.status`**: Bu, HTTP durum kodunu temsil eder. Sunucunun isteğe verdiği yanıtın durumunu gösterir. Örneğin:
  - **`200`**: İstek başarılı oldu (OK).
  - **`404`**: İstenen kaynak bulunamadı (Not Found).
  - **`500`**: Sunucuda bir hata oluştu (Internal Server Error).

  **`xhr.status === 200`** kontrolü, sunucunun isteğe başarılı bir şekilde yanıt verdiğini doğrular. Yani, bu kontrol, HTTP durum kodunun `200` (başarılı) olduğunu kontrol eder.

---
*/

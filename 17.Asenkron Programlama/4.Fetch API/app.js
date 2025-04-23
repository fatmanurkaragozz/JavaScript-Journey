// ---------------- FETCH API ------------------

// callback - promise
// ajax(xmlhttprequest) - fetch api

function getStudents(url) {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        })
}

getStudents("students.json");

function getData(url) {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error))
}

getData("https://jsonplaceholder.typicode.com/albums");

// Bu fonksiyon (saveStudents), bir URL'ye POST isteği gönderir ve yanıtı JSON formatında alır.
// Şu an gönderdiğin url yani students.json dosyası statik bir dosya olduğu için POST isteği gönderemiyoruz.
//  Bu istekleri yönetebilmek için bir sunucuya ihtiyacımız var. Örneğin, bir Node.js sunucusu veya başka bir backend teknolojisi kullanarak bu isteği gerçekleştirebiliriz
// Spring boot teknolojisini kullanarak bir sunucu oluşturabiliriz ve oraya istek gönderebiliriz. 

function saveStudents() {
    fetch("students.json", {
        method: "POST",
        body: JSON.stringify({
            name: "Ali",
            age: 25,
            department: "Computer Science"
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("İstek başarısız oldu.");
            }
        })
}
// ? Async/Await ile Fetch API Kullanımı

document.querySelector('#button').addEventListener('click', () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((post) => {
            console.log(post);
            return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
                .then((response) => response.json())
                .then((comments) => console.log(comments))
        })
})

// Async Await ile yapılışı

// HTML'deki id'si "button" olan butona bir tıklama olayı dinleyicisi ekleniyor.
document.querySelector('#button').addEventListener('click', async () => {
    // `async` ile bu fonksiyonun asenkron olduğu belirtiliyor.
    // Bu sayede `await` kullanarak asenkron işlemleri bekleyebiliriz.

    // İlk `fetch` isteği: Belirtilen URL'ye bir HTTP GET isteği gönderiliyor.
    // Bu istek, id=1 olan gönderiyi (post) almak için yapılıyor.
    const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
    // `await fetch(...)`: Fetch API ile yapılan isteğin tamamlanmasını bekler.
    // `await ...json()`: Gelen yanıtın JSON formatında işlenmesini bekler ve sonucu `post` değişkenine atar.

    // İkinci `fetch` isteği: İlk isteğin sonucunda dönen gönderinin id'sine göre yorumları almak için bir istek gönderiliyor.
    const comments = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json();
    // `post.id`: İlk isteğin sonucunda dönen gönderinin id'si.
    // Bu id, yorumları almak için kullanılan URL'ye ekleniyor.
    // `await fetch(...)` ve `await ...json()`: Yorumları almak için yapılan isteği bekler ve JSON formatında işler.

    // Konsola, gönderi (post) ve yorumlar (comments) yazdırılıyor.
    console.log(post, comments);
    // `post`: İlk isteğin sonucunda dönen gönderi verisi.
    // `comments`: İkinci isteğin sonucunda dönen yorumlar verisi.
});
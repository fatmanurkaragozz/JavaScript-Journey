// TEMPLATE LITERALS

function write(firstName, lastName) {
    console.log("İsim : " + firstName + " Soyisim : " + lastName);

    // Template Literals
    console.log(
        `İsim : ${firstName} 
        Soyisim : ${lastName}`);
}

function getUserById(userId) {
    consolelog(`http://localhost:8080/users/${userId}`);
}

getUserById(10); // Çıktı: http://localhost:8080/users/10   
// Template Literals, bir string ifade içerisinde ${} işareti ile bir değişkenin değerini alabilir ve bu değişkeni string ifade içerisinde kullanabiliriz.
// Template Literals, çok satırlı string ifadeleri yazmamızı sağlar.
// Template Literals, string ifadeler içerisinde ifadeleri birleştirmek için kullanılır.
// Template Literals, string ifadeler içerisinde değişken değerlerini almak için kullanılır.
// Template Literals, string ifadeler içerisinde fonksiyon çağrıları yapmak için kullanılır.
// Template Literals, string ifadeler içerisinde if-else blokları kullanmak için kullanılır.
// Template Literals, string ifadeler içerisinde dizi elemanlarını yazdırmak için kullanılır.
// Template Literals, string ifadeler içerisinde ternary operatörü kullanmak için kullanılır.   


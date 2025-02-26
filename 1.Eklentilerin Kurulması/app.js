console.log("Fatma Nur");

// Document write ile çıktı verme

document.write("Hello World <br>");
document.write("Enes Bayram <br>");
document.write(5.5);

// console log metodunu kullanırız.

console.log("Hello World");
console.log("Fatma Nur");
console.log(3.53);
console.log(true);
console.log({ name: "Fatma Nur", surname: "Karagoz" });

// // console.clear;

let a = 5;
let b = 10;

console.log("İki sayının toplamı :", a + b);
console.clear;

// Alert (Uyarı) popup ile çıktı verme işlemleri

// console.log(document.location.host);

alert("10 ile 5'in toplamı: " + (a + b));
alert("F5 tuşuna lütfen basmayınız");
// alert : uyarı

// window nesnesi, JavaScript'te tarayıcı ortamında bulunan en üst 
// seviye (global) nesnedir. Tarayıcıda bir web sayfası yüklendiğinde,
// window nesnesi otomatik olarak oluşturulur ve sayfa ile ilgili tüm
// genel özellikleri, metotları ve olayları içerir. Bu, sayfanın 
// içeriklerine, tarayıcı özelliklerine ve genel olarak tarayıcı
// penceresine erişmek için kullanılır.

console.warn("Hata oluştu");
console.log(location.port);

debugger;
// Hatamızı bulmayı kolaylaştırıyor.
console.log(location.port);
console.log(location.port);
console.log(location.port);
console.log(location.port);
console.log(location.port);

/*
     BETTER COMMENTS
     ? Bu bir bilgilendirme yorumudur
     ! Buurası çok önemli dikkat et.
     TODO: Buranın şöyle yapılması gerekiyor.
     *Test mesajı... 
     Ctrl + ö : yorum satırı yapma kısayol
*/

// Var - Let - Const

/*
  ----------- SCOPE (KAPSAM) ------------
   
  -> Global Scope : heryerden erişilebilir
  -> Function Scope 
  -> Block Scope

  * var: Function scope sahiptir. Yani bir fonksiyon içinde
         tanımlandığında, sadece o fonksiyon içinde erişilebilir.
  
   * let ve const: Block scope sahiptir. {} süslü parantezler içinde
         tanımlandığında sadece o blok içinde geçerlidir.
 */

var degiskenIsmi = 10;
console.log(degiskenIsmi);

var c = 7; // global scope : her yerden c ifadesine erişebiliriz

if (true) {

}

function method1() {
   console.log(c);
}

method1();

var e = 12;

function method2() {
   var d = 8;
   console.log(e)
}
// console.log(d);

// Burda oluşan hatmızın nedeni function içinde tanımlanan
// d değişkenine dışardan ulaşma isteğimizden kaynaklarnıyor.
// Hatadan kurtulmak için fonksiyon içinde atadığımız ifadeyi
// yine fonksiyon içinde çağırmalıyız

function method3() {

   var f = 2; // function scope

   if (true) {
      var g = 73; // block scope
   }

   while (true) {

   }
   for (let i = 0; i <= 10; i++) {

   }

   // var : function scope -- ram bellekte çok fazla yer kaplar.
   // let/const : block scope özelliğine sahiptir.

   function selamVer() {
      var selam = "Herkese selam"; // function scope
      if (true) {
         const h = 23;
      }
      console.log(h);

      // h'yi const veya let tanımladığımızda bloğun dışından ulaşamayız
      // ama var ile tanımlasaydık ulaşabilirdik.
      // var tanımladıklarımıza her yerden ulaşabiliriz

      console.log(selam);
   }

   selamVer();

   // var ile aynı değişken ismiyle 2 tane değişken oluşturabilirken,
   // let ve const da sadece 1 değişken oluşturabiliriz. 

   const a = 10;
   // a = 15;
   console.log(a);

   // Let & Const arasındaki fark ?
   // const (constant) = java daki final. yani sabit , atandığı değeri değiştiremiyoruz.
   // let de değiştirebiliriz 

   let m = 6;
   m = 7;
   m = 8;
   console.log(m);

   const user = {
      username: "fatmanur",
      password: "123",
   }

   user.username = "ayse";

   console.log(user);

   // direkt user = .... bişey atamaya çalışsaydık bu olumsuz sonuçlanırdı
   // çünkü const ile tanımlanmış

   /* ---------------- NULL VERİTİPİ --------------
   
   let a = null; // boş
   a = 27;
   console.log(a);
   
   */

   /* ----------- UNDEFINED VERİTİPİ ----------
 
   let a;
   console.log(typeof a);

   */

   // ? primitive ve referans tipler nedir, farkları nelerdir ?

   /* ----------- OBJECT VERİTİPİ -------------

   let insan = {
       isim : " Fatma Nur ",
       soyisim : " Karagöz ",
       yas : 18, 
   }
      console.log(typeof insan);
   */

   // let rakamlar = [1,2,3,4,5,6,7];  -- dizi --
   // console.log(typeof rakamlar);

   /* let func = function(){
          console.log("Merhaba");
   }  
   func();
   console.log(typeof func);

   */

   /* - ** oparatörü --
    ** : 2^3 = 8
     console.log(5**3); -- sonuc: 125
   */

    // ! - == oparatörü -
    // ! console.log(5=="5"); --> sonuç true, çünkü tipleri önemsiz
    
    // ! - === oparatörü -
    // ! === : hem tipleri hemde değerlerin eşit olup olmadığına bakar
    // ! console.log(5==="5"); --> sonuç false,

    // && : ve , || : veya , ! : değil

    /*

    let yas = 20;
    let para = 3500;
    let saglikliMi = false;
    let hakSayisi = 3;

    console.log((para>3000 && hakSayisi>1) || (yas>18 && saglikliMi));
     --> sonuc: true
    */

    /*  -- DİYALOG KUTULARI --
    
    - Alert
    - Prompt
    - Confirm

    console.log(window);

    alert("İşleminize devam etmeden önce kaydetmelisiniz! ");

    Prompt(); Kullanıcıdaan değer alabiliyoruz...

    ! Kullanıcıdan alınan değerler her zaman string döner.
    let isim = prompt("İsminizi giriniz :");
    let yas = prompt("Yaşınızı giriniz : ");

    console.log("İsminiz : " + isim);
    console.log("Yaşınız : " + yas);

    ------
    let sonuc = confirm("Silmek istediğinize emin misiniz ? ");
    console.log(sonuc);

    TODO: true ise bunları yap ... false ise şunları ... 
    
    */
}
// HTML Elementleri Üzerinde Gezinmek.

const todo = document.querySelector(".list-group-item");
const todoList = document.querySelector(".list-group");
const todoLastChild = document.querySelector(".list-group-item:nth-child(4)");
// const card = document.getElementsByClassName("card")[0];
const card = document.querySelector(".card");

const row = document.querySelector(".row");

let value;

//Anneden çocuklara erişmek

value = todoList;
value = todoList.children[0];
value = todoList.children[3];
value = todoList.children[todoList.children.length-1];
value = todoList.children[3].textContent = "Değişti";

// value = Array.from(todoList.children);

// value.forEach(function(todo){
//     console.log(todo.textContent);
// })



//Çocuktan Anneye Erişmek

value = todo;
let ul  = todo.parentElement;
let cardBody = ul.parentElement;
let cardElement = cardBody.parentElement;
// let row = cardElement.parentElement;
let container = row.parentElement;


// Kardeşler arasında gezinmek
value = todo;
value = todo.nextElementSibling.nextElementSibling.nextElementSibling;


value = todoLastChild;
value = todoLastChild.previousElementSibling.previousElementSibling
.previousElementSibling.nextElementSibling.previousElementSibling
.previousElementSibling;


value = row.children[0].children[3].children[0].textContent="Todo Listesi Başlığı Değişti";

let todo3 = row.children[0].children[3].children[2].children[2];
todo3.textContent="Todo3 Değişti";
todo3.style.backgroundColor="lightgrey";
todo3.style.color="red";

console.log(value);

// Dinamik Olarak Element Oluşturmak

const cardBody2 = document.querySelectorAll(".card-body")[1];

console.log(cardBody2);

const link = document.createElement("a");
link.id = "goBlogWebSite";
link.className = "btn btn-dark btn-sm mt-3";
link.href = "http://enesbayram.net";
link.target = "_blank"; // ayrı bir sekmede bağlantıya gideceğini gösterir 
link.innerHTML = "Kişisel Websiteme Git";

cardBody2.appendChild(link);

console.log(link);

 // <li class="list-group-item d-flex justify-content-between">Todo 1
   //                         <a href="#" class="delete-item">
     //                           <i class="fa-solid fa-xmark"></i>
       //                     </a>
         //               </li>


// Yeni bir liste öğesi oluştur
const todo4 = document.createElement("li");
todo4.className = "list-group-item d-flex justify-content-between"; // Sınıf Atama
todo4.innerHTML = "Todo 5"; // İçeriği ekle

// Yeni öğeye bağlantıyı ve ikonu ekle
const todoLink4 = document.createElement("a");
todoLink4.href = "#";
todoLink4.className = "delete-item";

const i = document.createElement("i");
i.className = "fa-solid fa-xmark";

todoLink4.appendChild(i); // Çocuğun sonuna ekleme
todo.appendChild(todoLink4);

// Listeye yeni öğeyi ekle
todoList.appendChild(todo4);

console.log(link);

// Element Silmek

const todoList5 = document.querySelector(".list-group");
const todo5 = todoList5.children[1];
console.log(todo5);

const todo6 = document.querySelectorAll(".list-group-item");
// todo6[1].remove();

// todo6[todo6.length-1].remove();
// todoList.removeChild([todos.length-1]);
// todoList5.removeChild(todo6[0]);

// Elementleri Değiştirmek

const cardBody3 = document.querySelectorAll(".card-body")[1];

// <h5 class="card-title">Todo Listesi</h5>

const newTitle = document.createElement("h2");
newTitle.className = "card-title";
newTitle.textContent = "Todo Listesi - Yeni";

cardBody3.replaceChild(newTitle,cardBody3.childNodes[1]);

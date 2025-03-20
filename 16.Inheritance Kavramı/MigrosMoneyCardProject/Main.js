
let message =
    "Migrosa hoşheldiniz. Money kartınız var mı ? 1- Evet  2- Hayır";

const products = [
    { name: "Süt", price: 15 },
    { name: "Tavuk", price: 70 },
    { name: "Karpuz", price: 10 },
]

// true or false
let result = confirm(message);
let amountToBePaid; // Ödenecek tutar

if (result) {
    // MoneyCard var
    let name = prompt("Adınızı giriniz");
    let surname = prompt("Soyadınızı giriniz");

    const customer = new Customer(name, surname, result, products);
    amountToBePaid = customer.calculate();

    alert(
        `Sayın ${customer.getName()} ${customer.getSurname()}, ödemeniz gereken tutar: ${amountToBePaid} TL'dir.`
    )

} else {
    const customer = new Customer("", "", result, products);
    amountToBePaid = customer.calculate();
    alert(`Ödemeniz gereken tutar: ${amountToBePaid} TL'dir.`);

}
class MigrosBase {

    discountRate = 20; // İndirim oranı

    constructor(name, surname, moneyCardisThere, products) {
        this.name = name;
        this.surname = surname;
        this.moneyCardisThere = moneyCardisThere;
        this.products = products;
    }

    calculate() { // Hesapla

        let totalPaid = 0;

        if (this.checkProducts(this.products)) { // Ürünler kontrol ediliyor
            // Sepetim dolu.

            if (this.moneyCardisThere) {
                this.products.forEach(product => {
                    totalPaid += (product.price - (product.price * this.discountRate / 100));
                });
            }

            else {
                this.products.forEach(product => {
                    totalPaid += product.price;
                });
            }

        } else {
            alert("En az bir tane ürün satın almalısınız.");
        }
        return totalPaid;

    }

    checkProducts(products) { // Ürünleri kontrol et
        if (products != null && products.length > 0) {
            return true;
        } else {
            return false;
        }

    }

    getName() {
        return this.name;
    }

    getSurname() {
        return this.surname;
    }



}

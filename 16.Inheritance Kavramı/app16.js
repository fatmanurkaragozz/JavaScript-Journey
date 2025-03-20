//! INHERİTANCE (MİRAS ALMA) KAVRAMI

//? Inheritance (Miras Alma) Kavramı, bir sınıfın başka bir sınıftan özelliklerini ve metotlarını miras almasıdır. Bu sayede kod tekrarı önlenir ve kodun yeniden kullanılabilirliği artar.

// this ve super Anahtar Kelimeleri: 

// this anahtar kelimesi, bir sınıfın içerisinde bulunduğu sınıfın özelliklerine ve metotlarına erişmek için kullanılır.

// super anahtar kelimesi, bir sınıfın miras aldığı sınıfın özelliklerine ve metotlarına erişmek için kullanılır.

class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName} ${this.salary}`;
    }
}

class Employee extends Person {
    constructor(firstName, lastName, salary, department) {
        super(firstName, lastName, salary);
        this.department = department;
    }

    getInfo() {
        return `${this.getFullName()} ${this.department} ${this.salary}`;
    }
}

const emp1 = new Employee("Mustafa", "Kara", 5000, "Bilişim");
console.log(emp1.getInfo()); // Çıktı: Mustafa Kara 5000 Bilişim 5000   

const emp2 = new Employee("Ayşe", "Demir", 6000, "İnsan Kaynakları");
console.log(emp2.getInfo()); // Çıktı: Ayşe Demir 6000 İnsan Kaynakları 6000

const emp3 = new Employee("Mehmet", "Arslan", 7000, "Muhasebe");
console.log(emp3.getInfo()); // Çıktı: Mehmet Arslan 7000 Muhasebe 7000
'use strict'
//PROYECTOS DEL DÍA: 05-02-2024

//EJERCICIO_01
class User{
    constructor(username, password, email){
        //Nota: Con this estamos creando un estado.
        this.username = username;
        this.password = password;
        this.email = email;
    }
    login(username, password){
        //Validar usuario y contraseña.
        if(username === this.username && this.password === password){
            alert('Bienvenido');

        }else{
            alert('Oops');
        }

    }
    resetPassword(newPassword){
        this.password = newPassword;
    }
    updateInfo(newEmail){
        this.email = newEmail;
    }
    showInfo(){
        alert(`El usuario es: ${this.username}, la contraseña es: ${this.password} y el email es: ${this.email}`);

    }
        
}

//Instanciar
let user = new User("javera", "1234", "javera@sudamericano.edu.ec");
user.login("javera", "1234");
user.resetPassword("admin");
user.login("javera", "admin");
user.updateInfo("jantonio@sudamericano.edu.ec");
user.login("jantonio@sudamericano.edu.ec");
user.showInfo();


//EJERCICIO_02
class Product{
    constructor(description, price, stock){
        this.description = description;
        this.price = price;
        this.stock = stock;
    }
    showInfo(){
        alert(`La descripción del producto es: ${this.description}, el precio es: ${this.price} y de stock tenemos: ${this.stock} unidades.`);
    }
    minusStock(qty){
        this.stock = this.stock - qty; 
    }
    incrementStock(qty){
        this.stock = this.stock + qty;
    }
    updatePrice(newPrice){
        this.price = newPrice;
    }


}

//Instanciar
let product = new Product("Coca Cola", "$2,00", 10);
product.showInfo();
product.minusStock(5);
product.showInfo();
product.incrementStock(10);
product.showInfo();
product.updatePrice("$5,00");
product.showInfo();
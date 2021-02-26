class Prenda {
    constructor(name,price){
        this.name=name;
        this.price= price;
    }
    toString(){
        return "Producto: " + this.name +" Precio: " +this.price
    }
}    

class Carrito {

    constructor(){
        this.prendas = [];
        this.precioTotal = 0
    }

    //metodo
    addPrenda(prenda){
        this.prendas.push(prenda)
        this.precioTotal = prenda.price + this.precioTotal
        console.log(prenda.name+ " " +prenda.price+" "+ this.precioTotal)
    }

    verCarrito(){
        let bolsa = document.getElementById("carrito")

        bolsa.innerHTML = ""

        for(let i = 0; i<this.prendas.length; i++){
            bolsa.innerHTML = this.prendas[i].toString() + "<br>"+bolsa.innerHTML 
        }
    }
   
}


//Prendas
let vestido = new Prenda("vestido",29)
let camisa = new Prenda("camisa",25)
let mono = new Prenda("mono",40)
let pantalon = new Prenda("pantalon",35)


let carrito = new Carrito()



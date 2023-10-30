/*4. Crea una interface BaseObject con una propiedad id. Luego crea interfaces User, Product y Order que hereden de 
BaseObject. Crea una función genérica que pueda imprimir los datos.*/

interface BaseObject {
    id: number;
}

interface User extends BaseObject {
    name: string;
    email: string;
}

interface Product extends BaseObject {
    name: string;
    price: number;
}

interface Order extends BaseObject {
    userId: number;
    productId: number;
    quantity: number;
}

function printData<T extends BaseObject>(obj: T) {
    console.log(`ID: ${obj.id}`);
}

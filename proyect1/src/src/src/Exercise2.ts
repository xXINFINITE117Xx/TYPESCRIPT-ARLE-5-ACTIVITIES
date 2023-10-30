/*2. Crea una interface User y otra interfaz Admin que herede de User. Crea una función para imprimir datos de 
usuario que acepte tanto User como Admin.*/

interface User {
    name: string;
    email: string;
}

interface Admin extends User {
    adminLevel: number;
}

function printUserData(user: User) {
    console.log(`Name: ${user.name}, Email: ${user.email}`);
}

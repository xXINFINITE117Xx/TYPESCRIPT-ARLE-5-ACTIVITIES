/* 3. Crea una interface Product con name, price, etc. Crea una interface Inventory que contenga un array de Product 
y funciones para agregar y buscar productos.*/

interface Product {
    name: string;
    price: number;
}

interface Inventory {
    products: Product[];
    addProduct(product: Product): void;
    findProductByName(name: string): Product | undefined;
}

class InventoryManager implements Inventory {
    products: Product[] = [];

    addProduct(product: Product) {
        this.products.push(product);
    }

    findProductByName(name: string) {
        return this.products.find(product => product.name === name);
    }
}

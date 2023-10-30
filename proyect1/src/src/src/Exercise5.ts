/*5. Crea una interface Database con funciones como connect, find, update, etc. Luego crea una clase 
MySQLDatabase e SQLiteDatabase que implementen esa interface con distintas funcionalidades.*/

interface Database {
    connect(): void;
    find(query: string): void;
    update(query: string, data: any): void;
    // Otros métodos según necesidades
}

class MySQLDatabase implements Database {
    connect() {
        console.log("Connected to MySQL database");
    }

    find(query: string) {
        console.log(`Executing MySQL query: ${query}`);
    }

    update(query: string, data: any) {
        console.log(`Updating MySQL data: ${data} with query: ${query}`);
    }
}

class SQLiteDatabase implements Database {
    connect() {
        console.log("Connected to SQLite database");
    }

    find(query: string) {
        console.log(`Executing SQLite query: ${query}`);
    }

    update(query: string, data: any) {
        console.log(`Updating SQLite data: ${data} with query: ${query}`);
    }
}

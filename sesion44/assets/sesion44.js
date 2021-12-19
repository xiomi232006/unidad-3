/*
// Aplicando lo aprendido 1
// Ejemplo de Pila
class Stack {
    // Se define contructor
    constructor() {
        this.stack = [];
    }
    // Se define metodo para agregar elementos a la pila
    push(element) {
        this.stack.push(element);
        return this.stack;
    }
    // Se define metodo para quitar elementos a la pila
    pop() {
        return this.stack.pop();
    }
    // Retorna el último valor ingresado a la pila, sin sacarlo de ésta.
    peek() {
        return this.stack[this.stack.length - 1];
    }
    // Retorna el número de elementos que contiene la pila.
    size() {
        return this.stack.length;
    }
    // Muestra el contenido de la pila.
    print() {
        console.log(this.stack);
    }
}
const stack = new Stack();
console.log(stack.size()); // 0
console.log(stack.push('John Cena')); // ['John Cena']
console.log(stack.push('The Rock')); // ['John Cena', 'The Rock']
console.log(stack.size()); // 2
stack.print(); // ['John Cena', 'The Rock]
console.log(stack.peek()); // 'The Rock'
console.log(stack.pop()); // 'The Rock'
console.log(stack.peek()); // John Cena
*/

/*// Ejemplo de Cola
class Queue {
    // Se define contructor
    constructor() {
        this.queue = [];
    }
    // Se define metodo para agregar elementos a la cola
    enqueue(element) {
        this.queue.push(element);
        return this.queue;
    }
    // Se define metodo para quitar elementos a la cola
    dequeue() {
        return this.queue.shift();
    }
    // Se define método para ver el primer elemento de la cola
    peek() {
        return this.queue[0];
    }
    // Se define método para ver la cantidad de elementos de la cola
    size() {
        return this.queue.length;
    }
    // Se define método para ver si la cola esta vacía
    isEmpty() {
        return this.queue.length === 0;
    }
    // Se define método para ver los elementos de la cola
    print() {
        return this.queue;
    }
}
const queue = new Queue();
console.log(queue.enqueue('The Rock')); // ['The Rock']
console.log(queue.enqueue('John Cena')); // ['The Rock', 'John Cena']
console.log(queue.enqueue('Stone Cold Steve Austin')); // ['The Rock', 'John Cena', 'Stone Cold Steve Austin']
console.log(queue.dequeue()); // 'The Rock'
console.log(queue.peek()); // 'John Cena'
console.log(queue.isEmpty()); // false
console.log(queue.print()); // ['John Cena', 'Stone Cold Steve Austin']
*/
/*
const stack = new Stack();
console.log(stack.size()); // 0
console.log(stack.push('John Cena')); // ['John Cena']
console.log(stack.push('The Rock')); // ['John Cena', 'The Rock']
console.log(stack.size()); // 2
stack.print(); // ['John Cena', 'The Rock]
console.log(stack.peek()); // 'The Rock'
console.log(stack.pop()); // 'The Rock'
console.log(stack.peek()); // John Cena
*/



let exampleArray = [20,"okay",1,2,""];
console.log(exampleArray[1]); // okay
console.log(exampleArray.length); // 5

exampleArray.push("otro elemento");
console.log(exampleArray); // [20, "okay", 1, 2, "", "otro elemento"]

exampleArray.pop();
console.log(exampleArray); // [20, "okay", 1, 2, ""]
/*
class TreeNode{
    // Se define contructor
    constructor(node){
        this.node = node;
        this.descendants =[];
    }
}
// Se crean varios elementos.
const a = new TreeNode(100000);
const b = new TreeNode(99);
const c = new TreeNode(100);
const d = new TreeNode(676);
const e = new TreeNode(2);
a.descendants.push(b);
b.descendants.push(c,d,e);
console.log(a);
console.log(b);
*/
//Criada a Classe DynamicQueue, com um construtor cuja head recebe null, tail recebe null e length=0
class DynamicQueue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /*enqueue cria uma variável local "node(nó)" que recebe um novo Node com o elemento. Verifica se
    está vazio com o método isEmpty() e se estiver, head(cabeça) recebe node. Senão, tail.next que recebe
    o node. Passando por alguma das condições, tail(cauda) recebe node e o comprimento aumenta em 1 */
    enqueue(element) {
        let node = new Node(element);
        if(this.isEmpty()){
            this.head=node;
        }else{
            this.tail.next = node;
        }
        this.tail = node;
        this.length++;
    }

    /*dequeue inicia criando uma variável local "deadElement(elemento morto)" que recebe null. Cria uma condição
    onde se o comprimento for igual a 1, o deadElement recebe o tail.content(conteúdo da cauda) e chama o método
    clear(). Senão, ele cria uma outra condição que verifica se o tamanho é maior que 1, se for ele cria uma 
    variável local "deadNode(nó morto)" que recebe head(cabeça), head recebe head.next, deadNode.next recebe null,
    deadElement recebe deadNode.content(conteúdo do nó morto) e o comprimento diminui em 1. Ao final ele retorna
    deadElement */
    dequeue(){
        let deadElement = null;
        if(this.length===1){
            deadElement = this.tail.content;
            this.clear();
        }else if(this.length>1){
            let deadNode = this.head;
            this.head = this.head.next;
            deadNode.next = null;
            deadElement = deadNode.content;
            this.length--;
        }
        return deadElement;
    }

    //front retorna head.content(conteúdo da cabeça)
    front() {
        return this.head.content;
    }

    //back retorna tail.content(conteúdo da cauda)
    back() {
        return this.tail.content;
    }

    //isEmpty retorna se tail é igual a null
    isEmpty() {
        return this.tail===null;
    }

    //size retorna o comprimento, que fora aumentado e/ou diminuído com outros métodos
    size() {
        return this.length;
    }

    //clear limpa a fila, com tail recebendo head que recebem null e comprimento=0
    clear() {
        this.tail= this.head=null;
        this.length=0;
    }

    /*print utiliza um separator. Começa criando uma variável local "output(saída)" que recebe uma string vazia.
    Cria então um "for" que cria uma variável local node que recebe head, verifica se o node é nulo e a cada loop
    node recebe node.next. Dentro do for o output recebe o uma string com node.content(conteúdo do nó) + separador.
    Ao finalizar o loop, retorna o output como substring, cortando o seu final */
    print(separator=" - ") {
        let output = "";
        for (let node = this.head; node!=null; node = node.next) {
            output+=node.content+separator;
        }
        return output.substr(0, output.length-separator.length);
    }
}
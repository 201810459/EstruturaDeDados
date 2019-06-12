// Criada a Classe - Lista Dinâmica
class DinamicStack {

    // Criado um construtor onde o top aponta para null e comprimento = 0
    constructor() {
        this.top = null;
        this.length = 0;
    }
    
    /* Push criará um novo nó e itá inserir o elemento nele. Com a condição if chamará a função
    isEmpty() que verifica se está vazio. Se não estiver vazio, o nó que aponta para*/
    push(element) {
        let node  = new Node(element);
        if (!this.isEmpty()) {
            node.next = this.top;
        }
        this.top = node;
        this.length++;
    }

    /*pop remove o último elemento. Começa com um "if" chamando isEmpty() para verificar se está vazio
    e retorna nulo se o satisfazer. Cria uma variável local chamada diedNode, que recebe o topo. O topo
    recebe o próximo nó, e o diedNode passa à receber null. Ao final o comprimento diminui em 1 e retorna
    o conteúdo de diedNode*/
    pop() {
        if(this.isEmpty()) 
            return null;
        let diedNode = this.top;
        this.top = this.top.next;
        diedNode.next = null;
        this.length--;
        return diedNode.content;
    }

    //peek retorna o comprimento -1
    peek() {
        return this.length-1;
    }

    //Verifica se está vazio, utilizando o topo. Se topo apontar para null, está vazio.
    isEmpty() {
        return this.top===null;
    }

    //Retorna comprimento inserido nos outros métodos, para dar o tamanho do encadeamento
    size() {
        return this.length;
    }

    //Limpa o encadeamento, fazendo topo receber null e tamanho = 0
    clear() {
        this.top=null ;
        this.length = 0;
    }

    /*Print utiliza um separator. Cria uma variável local "text" que leva uma string vazia e o elemento atual recebe
    o topo. Cria um "while" com a condição - atual diferente de nulo - o qual cada loop a string receberá o conteúdo
    do nó atual com o separator. E faz o nó atual apontar para o próximo. Ao final de tudo ele retorna uma substring
    cortando o final*/
    print(separator = ' - ') {
        let text = "", current = this.top;
        while (current!==null) {
            text += current.content + separator;
            current = current.next
        }
        return text.substr(0, text.length - separator.length);
    }
}
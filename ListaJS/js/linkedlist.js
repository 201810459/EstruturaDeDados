//Cria a classe LinkedList
class LinkedList {

    //O construtor de LinkedList passa que head recebe null e o comprimento recebe 0
    constructor() {
        this.head = null;
        this.length = 0;
    }

    //isEmpty verifica se a lista está vazia, retornando head como null, satisfazendo-a
    isEmpty() {
        return this.head === null;
    }

    /*append cria uma variável local node, que recebe um novo nó. O current(atual) recebe a cabeça.
    Faz uma verificação utilizando "if" com o método isEmpty(), se retornar null a cabeça recebe o novo nó
    senão, usará um "while" current.next e enquanto houver elementos em current.next irá continuar. Quando
    current.next for igual à null, current.next receberá o nó. Ao final de tudo ele aumenta o comprimento em +1  */
    append(element) {
        let node = new Node(element),
            current = this.head;
        if (this.isEmpty()) {
            this.head = node;
        } else {
            while (current.next)
                current = current.next;
            current.next = node;
        }
        this.length++;
    }

    /*show utiliza um separator. Começa criando uma variável local "current" que recebe a head(cabeça) e um 
    output(saida) com uma string vazia. Cria uma condição verificando se current é diferente de null, e se 
    for diferente de null o output recebe uma string com o elemento atual do nó. Utiliza então um "while" com 
    - current.next - E enquanto houver próximo, o current recebe current.next e o output recebe uma string
    com o separator e o conteúdo de current. Ao final de tudo retorna o output(saída) */
    show(separator = ", ") {
        let current = this.head,
            output = '';
        if (current != null) {
            output += current.content;
            while (current.next) {
                current = current.next;
                output += separator + current.content;
            }
        }
        return output;
    }

    /*insert começa com uma condição onde passa posição maior que -1 e menor ou igual ao método size().
    Se passar, cria uma variável local "node(nó)" que recebe novo Nó com o elemento, current(atual) recebe
    head(cabeça), previous(anterior) recebe null e index = 0. Dentro dessa condição abre outra condição
    à qual verifica se posição é igual a 0. Se sim, node.next (o próximo nó) recebe head, e head recebe o nó.
    senão, cria um "while" e passa - index menor que posição - E enquanto index for menor que a posição, de início
    recebe um index++, o previous(anterior) recebe o current(atual) e o current recebe current.next . Após sair
    do while, o node.next recebe current e o previous.next recebe o nó. Se passar pelo primeiro if, o comprimento
    recebe +1 e retorna true. Se não passar na primeira condição, retorna falso */
    insert(position, element) {
        if (position > -1 && position <= this.size()) {
            let node = new Node(element),
                current = this.head,
                previous = null,
                index=0;
            if (position==0) {
                node.next = this.head;
                this.head = node;
            } else {
                while(index<position){
                    index++;
                    previous=current;
                    current=current.next;
                }
                node.next=current;
                previous.next=node;
            }
            this.length++;
            return true;
        }
        return false;
    }

    /*removeAt começa com uma condição, à qual verifica se posição é maior que -1 e é menor que size().
    Se passar, criará uma variável local chamada current que recebe head(cabeça), previous que recebe null,
    e index=0. Cria outra condição que verifica se a posição é igual a 0, se sim, head recebe current.next,
    senão, cria um "while" que enquanto - index for menor que posição - começa com index++, o previous(anterior)
    recebe current(atual) e o current recebe o current.next(próximo). Ao terminar o loop, o previous.next
    recebe current.next . Se a posição for maior que 0, o current.next recebe null, o comprimento recebe -1
    e retorna current.content(o conteúdo do atual). Se não passar na primeira condição, retornará null */
    removeAt(position) {
        if (position > -1 && position < this.size()) {
            let current = this.head,
                previous = null,
                index = 0;
            if(position===0){
                this.head = current.next;
            }else{
                while (index < position) {
                    index++;
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            current.next = null
            this.length--;
            return current.content;
        }
        return null;
    }

    /*remove cria uma variável local "index" que recebe o método indexOf(). Se indexOf() retornar o elemento
    o remove retorna o index chamando o método removeAt() que remove elementos */
    remove(element) {
       let index = this.indexOf(element);
       return this.removeAt(index);
    }

    /*indexOf começa criando uma variável local "current" que recebe head(cabeça), e index=0.
    Cria um "while" que enquanto - current for diferente de null - irá verificar se current.content é igual ao
    elemento. Se current for igual ao elemento, irá retornar o index. Saindo do if, em cada loop o index recebe +1
    e o current recebe o current.next (próximo nó). Se não achar o elemento, retornará -1 (false) */
    indexOf(element) {
        let current = this.head,
            index = 0;
        while(current!==null){
            if(current.content===element) {
                return index;
            }
            index++
            current = current.next;
        }
        return -1;
    }

    //retorna o comprimento, aumentando e/ou diminuindo em outros métodos
    size() {
        return this.length;
    }

    /*getElement começa com uma condição, à qual verifica se posição é menor que 0 e é maior ou igual ao comprimento
    Se sim, retorna null. Cria uma variável local "current" que recebe head, e index=0. Utilizando um "while" 
    enquanto - current for diferente de null - irá verificar se index é igual a posição, se for, retornará
    current.content(conteúdo do nó atual). À cada passada no loop, o index aumenta em 1 e current recebe current.next */
    getElement(position) {
        if(position<0 && position>=this.length)
            return null;
        let current = this.head,
            index = 0;
        while (current !== null) {
            if (index === position) {
                return current.content;
            }
            index++
            current = current.next;
        }
    }

    //search retornará o valor se o método indexOf() retornar maior ou igual à 0
    search(value) {
        return this.indexOf(value)>=0;
    }

}
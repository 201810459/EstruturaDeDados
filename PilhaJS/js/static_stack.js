//Criada a Classe - Lista Estática
class StaticStack {

    //Criado o construtor, o qual data será um array
    constructor(){
        this.data = [];
    }
    
    /*Push será usado para inserir o elemento no final do array,
    e utilizará do próprio método */
    push (element) {
        this.data.push(element);
    }

    //pop irá retornar o array utilizando o próprio método pop()
    pop() {
        return this.data.pop();
    }

    //peek retornará o array com o comprimento - 1, para ser utilizada no método print()
    peek() {
        return this.data.length -1 ;
    }

    //isEmpty retorna true ou false, utilizando size()
    isEmpty() {
        return (this.size()===0);
    }

    //Size irá retornar data.length, dando o tamanho
    size() {
        return this.data.length;
    }

    //Clear irá limpar o array
    clear() {
        this.data = [];
    }

    /*print utiliza um separator. Cria uma variável local text que recebe strings, e usa
    de um "for" para fazer um loop utilizando o separator. Ao final ele retona uma substrig,
    cortando o final para não aparecer o " - "*/
    print(separator=' - ') {
        /*  Another implementation
        if(this.isEmpty()) return "";
        let text = this.data[this.peek()];
        for (let index = (this.peek()-1); index >= 0; index--) {
            text+=separator+this.data[index];
        }
        return text; 
        */
        let text = "";
        for (let index = (this.data.length - 1); index >= 0; index--) {
            text += this.data[index] + separator;
        }
        return text.substr(0, text.length - separator.length);
    }
}
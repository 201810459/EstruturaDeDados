//Criada classe StaticQueue, que em seu construtor possui um array - data
class StaticQueue{
    constructor(){
        this.data = [];
    }

    //enqueue utiliza o método push para inserir um elemento no final do array data
    enqueue(element) {
        this.data.push(element);
    }

    //dequeue retorna o array data com o método shift, que retorna o array removendo o primeiro elemento
    dequeue(){
        return this.data.shift();
    }

    //front retorna o primeiro elemento do array
    front() {
        return this.data[0];
    }

    //back retorna data.legth-1, em todo caso, o último elemento do array
    back(){
        return this.data[this.data.length-1];
    }

    //isEmpty retorna verdadeiro se o comprimento do array for igual a 0
    isEmpty() {
        return (this.data.length===0);
    }

    //size retorna o comprimento do array
    size() {
        return this.data.length;
    }

    //clear faz data receber um array vazio
    clear() {
        this.data = [];
    }

    /*print utiliza um separator. Retorna o array com o método join, que junta todos os elementos
    do array numa string, e retorna a string */
    print(separator=" - ") {
        return this.data.join(separator);
    }
}
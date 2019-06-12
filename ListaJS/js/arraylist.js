//Criada a classe ArrayList
class ArrayList{

    //Seu construtor cria uma variável - data - como array
    constructor(){
        this.data = [];
    }

    /*show utiliza um separator e retorna o array(data) com o método join(separator). Esse método
    converte todo o array para uma string, utilizando o separator*/
    show (separator=', '){
        return this.data.join(separator);
    }
    
    //Insere um elemento ao final do array, utilizando o método push
    append(element){
        this.data.push(element);
    }

    /*insert insere um elemento em uma posição. Utiliza um "if" passando que posição é maior que -1 e 
    posição é menor igual à size(), que é um outro método. Se passar na condição, irá inserir o elemento
    na posição desejada utilizando o método splice(). Por definição podem ser passados 3 parâmetros:
    O primeiro é a posição, o segundo é quantos elementos serão removidos, o terceiro é qual elemento ou 
    elementos serão inseridos.*/
    insert(position, element){
        if(position>-1 && position<=this.size())
            this.data.splice(position,0,element);
    }
    
    /*removeAt utiliza a mesma lógica de insert(), a diferença na segunda condição do "if", posição tem que ser
    apenas menor que o size(). Se passar na condição, utiliza o método splice no array para retirar 1 elemento
    naquela posição*/
    removeAt(position){
        if (position > -1 && position < this.size())
            this.data.splice(position,1);
    }
    
    /*remove cria uma variável local "index" que recebe o método indexOf(elemento), após o retorno chama o método
    removeAt() passando como parâmetro, index*/
    remove(element){
        let index = this.indexOf(element);
        this.removeAt(index);
    }
    
    /*indexOf começa utilizando um "for" passando index como variável local = 0, index tem que ser menor
    que o comprimento do array, ao final de cada loop -> index++. Dentro do for, ele verifica se o elemento
    é igual à algum elemento no array. Se sim ele irá retornar index, se não irá retornar -1(false) */
    indexOf(element){
        for (let index = 0; index < this.data.length; index++)
            if(element===this.data[index]) 
                return index;
        return -1;
    }
    
    //isEmpty retorna a função size() se ela for igual à 0
    isEmpty(){
        return this.size()===0;
    }
    
    //size retorna o comprimento do array
    size(){
        return this.data.length;
    }
    
    /*getElement começa com um verifica se a posição é maior ou igual à 0 e se posição é menor que size()
    se satisfazer a condição, retorna a posição do array, se não retornará null */
    getElement(position){
        if (position >= 0 && position < this.size())
            return this.data[position];
        return null;
    }

    /*search irá pegar o valor, então irá retornar o array com o método some() que passa uma função para ser 
    testada pela função. Se o valor passado for igual à n ele irá retornar o número*/
    search(value){
        return this.data.some((n)=> n===value)
    }
}
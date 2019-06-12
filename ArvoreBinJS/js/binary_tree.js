//Cria a classe BinaryTree(Árvore Binária) o qual inicializa a raiz como nula
class BinaryTree{
    constructor(){
        this.root = null;
    }

    //insere o elemento da arvores. Insert faz a raiz receber os elementos, passando o método insertNode()
    //os quais seus parâmetros são a própria raíz e o elemento
    insert(element){
        this.root = this.insertNode(this.root, element);
    }
    /*insere o nó. Inicializa passando dois parâmetros, o rootNode e o valor, então verifica se rootNode
    é igual a null, se sim, irá retornar o novo Node com o valor. Fará então outra verificação, se o valor
    é maior que o nó raíz. Se sim, a raíz do nó à direita irá receber o próprio método, passando o valor na
    direita. Se não, o nó à esquerda receberá o método com seu valor na esquerda. O método é recursivo, então
    ele irá chamar callback para retornar a árvore */
    insertNode(rootNode, value){
        if (rootNode==null) {
            return new Node(value);
        }
        if(value>rootNode.content){
            rootNode.right = this.insertNode(rootNode.right, value);
        }else{
            rootNode.left = this.insertNode(rootNode.left, value);
        }
        return rootNode;
    }

    //search retorna true se o valor já existe na arvore, chamando searchNode()
    search(value) {
        return this.searchNode(this.root, value);
    }
    /*searchNode começa verificando se rootNode é igual a null. Se sim retornará false. Fará uma segunda 
    verificação, onde passará o conteúdo do nó raiz for igual ao valor. Se sim, retornará true. Na terceira
    condição, verifica se valor é maior que o conteúdo. Se sim, retornará o método por callback no rootNode
    à direita e o valor. Senão, retornará por callback o rootNode à esquerda e o valor */
    searchNode(rootNode, value){
        if (rootNode == null) return false;
        if (rootNode.content == value) return true;
        if (value > rootNode.content)
            return this.searchNode(rootNode.right, value);
        else
            return this.searchNode(rootNode.left, value);
    }


    //executa a função callback para cada nó, em ordem, chamando o método inOrder() e passando root e callback
    inOrderTraverse(callback){
        this.inOrder(this.root, callback);
    }
    /*inOrder executa a função inOrderTraverse() por callback. Inicia verificando se rootNode é igual a null,
    se sim, retornará null. inOrder irá trazer a árvore olhando o nó da esquerda, a raíz e o nó da direita, 
    respectivamente nessa ordem. Verifica se tem algo à esquerda, se não, chama o content do nó atual e verifica
    se tem algo no rootNode à direita. Fará isso continuamente até trazer toda a árvore */
    inOrder(rootNode, callback) {
        if (rootNode == null) return;
        this.inOrder(rootNode.left, callback);
        callback(rootNode.content);
        this.inOrder(rootNode.right, callback);
    }

    //executa a função callback para cada nó, em pré-ordem, chamando o método preOrder() e passando root
    //e callback
    preOrderTraverse(callback){
        this.preOrder(this.root, callback);
    }
    /*preOrder executa a função preOrderTraverse() por callback. Inicia verificando se rootNode é igual a null,
    se sim, retornará null. preOrder irá trazer a árvore olhando  a raíz, o nó da esquerda e o nó da direita, 
    respectivamente nessa ordem. Chama o content do nó atual, verifica se tem à esquerda e se tem algo no 
    rootNode à direita. Fará isso continuamente até trazer toda a árvore */
    preOrder(rootNode, callback) {
        if (rootNode == null) return;
        callback(rootNode.content);
        this.preOrder(rootNode.left, callback);
        this.preOrder(rootNode.right, callback);
    }
    
    //executa a função callback para cada nó, em pós-ordem, chamando o método postOrder() e passando root
    //e callback
    postOrderTraverse(callback) {
            this.posOrder(this.root, callback);
    }
    /*postOrder executa a função postOrderTraverse() por callback. Inicia verificando se rootNode é igual a null,
    se sim, retornará null. postOrder irá trazer a árvore olhando o nó da esquerda, o nó da direita e a raíz 
    respectivamente nessa ordem. Verifica se tem algo à esquerda, à direita e então trará o conteúdo do nó. 
    Fará isso continuamente até trazer toda a árvore */
    postOrder(rootNode, callback) {
        if (rootNode == null) return;
        this.postOrder(rootNode.left, callback);
        this.postOrder(rootNode.right, callback);
        callback(rootNode.content);
    }
    
    //remove um elemento existente na arvore e o retorna, chamando removeNode()
    remove(value){
        this.root = this.removeNode(this.root, value);
    }
    /*removeNode inicializa com uma condição. Se rootNode for nulo, retornará nulo. Após isso, se valor for igual
    ao conteúdo do nó raiz, irá começar à fazer algumas verificações. Se nó raíz à esquerda for nulo e à direita
    também, significa que é uma folha. Então rootNode receberá null. Se apenas à direita do nó raíz for for nulo,
    o nó raíz recebe a sua esquerda. Se apenas a esquerda for nula, receberá a direita. Senão, então ambas têm 
    algo. Começará criando uma variável local i que recebe o a direita do nó raíz. Enquanto i.left for diferente
    de nulo, i recebe i.left. Quando o loop acabar, i.left receberá toda a esquerda do rootNode e o rootNode
    receberá a direita do rootNode. Ao sair de toda a segunda condição, irá verificar se o valor é maior que 
    conteúdo do nó raíz. Se sim, à direita de rootNode receberá o próprio método passando em seus parâmetros
    rootNode.right e o valor. Senão, a esquerda do nó raíz receberá o próprio método passando em seus parâmetros
    rooNode.left e o valor. Ao final de tudo retorna rootNode, que dará a nova árvore com o número removido */
    removeNode(rootNode, value){
        if(rootNode==null) 
            return null;
        if(value==rootNode.content){
            if(rootNode.left===null && rootNode.right===null){
                rootNode = null;
            } else if (rootNode.right == null) {
                rootNode = rootNode.left;
            } else if (rootNode.left == null) {
                rootNode = rootNode.right;
            } else{
                let i = rootNode.right;
                while(i.left!=null){
                    i = i.left;
                }
                i.left = rootNode.left;
                rootNode = rootNode.right;
            }
        }else if(value>rootNode.content){
            rootNode.right = this.removeNode(rootNode.right, value);
        }else{
            rootNode.left = this.removeNode(rootNode.left, value);
        }
        return rootNode;
    }

    //exibe a altura da arvore, chamando heigthNode()
    heigth(){
        return this.heigthNode(this.root);        
    }
    /*heigthNode começa com uma condição. Se o nó for nulo retornará -1. Criará duas variáveis locais chamadas
    leftHeigth e rightHeigth, onde respectivamente recebem o próprio método com o parâmetro nó.left(esquerda) e
    nó.right(direita). Se leftHeigth for maior que rightHeight, retornará 1 + leftHeigth, senão, retornará 1 + 
    rightHeigth */
    heigthNode(node){
        if(node==null)
            return -1;
        let leftHeigth = this.heigthNode(node.left),
            rightHeigth = this.heigthNode(node.right);
        if(leftHeigth > rightHeigth){
            return 1 + leftHeigth;
        }else{
            return 1 + rightHeigth;
        } 
    }

    // informa quantos nós existem na arvore chamando sumNodes()
    size(){
        return this.sumNodes(this.root);
    }
    /*sumNodes começa com uma condição. Se o nó for nulo, retornará 0. Senão retornará 1 + sumNodes(passando left)
    + sumNodes(passando right) */
    sumNodes(node){
        if(node==null) 
            return 0;
        return 1 + this.sumNodes(node.left)+this.sumNodes(node.right);
    }

    /*exibe o menor valor da arvore. Cria uma variável local nó, que recebe a raíz. Se a raiz for nula, retorna
    null. Enquanto o nó à esquerda for diferente de nulo, o nó será igual ao nó dá esquerda. Quando sair do loop
    irá retornar o conteúdo do nó */
    min() {
        let node = this.root;
        if (node == null) return null;
        while (node.left != null)
            node = node.left;
        return node.content;
    }

    /*exibe o maior valor da arvore. Cria uma variável local nó, que recebe a raíz. Se a raiz for nula, retorna
    null. Enquanto o nó à direita for diferente de nulo, o nó será igual ao nó dá direita. Quando sair do loop
    irá retornar o conteúdo do nó */
    max() {
        let node = this.root;
        if (node == null) return null;
        while (node.right != null)
            node = node.right;
        return node.content;
    }
}
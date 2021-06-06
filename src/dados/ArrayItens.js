export default class ArrayItens {
    constructor(){
        this.itens = [{descricao: "", quantidade: 0, valor: 0}]
        console.log(this.itens)
        this.valor_total = 0
        this.quantidade_total = 0
        this._inscritos = [] ;
    }
    
    componentDidMount(){
    }

    inscrever(func) {
        this._inscritos.push(func)
    }

    desinscrever(func) {
        this._inscritos = this._inscritos.filter(f => f !== func)
    }
    
    notificar() {
        this._inscritos.forEach(func => {
            func(this.itens)
        })
    }

    calcularValorTotal() {
        let novo_valor_total = 0
        this.itens.forEach(func => {
            novo_valor_total = novo_valor_total + func.valor
        })
        
        this.valor_total = parseFloat(novo_valor_total).toFixed(2)
        this.notificar()
    }

    calcularQuantidadeTotal() {
        let nova_quantidade_total = 0
        this.itens.forEach(func => {
            nova_quantidade_total = nova_quantidade_total + func.quantidade
        })

        this.quantidade_total = nova_quantidade_total
        this.notificar()
    }

    

    adicionarItem(descricao,quantidade,valor) {
        
        const nova_lista = this.itens
        const array_base = new Item(descricao, quantidade, valor)
        nova_lista.push(array_base)
    
        console.log("Item adicionado (em teoria). Nova lista é: ")
        console.log(nova_lista)
        this.notificar()
        
    }

    removerItem(indice){
      console.log('O item a ser removido tem o ID: '+indice)
      
      const lista_atualizada = this.itens
      lista_atualizada.splice(indice,1)
      this.notificar()
    }

    manterDescricaoAtualizada(indice, conteudo) {
        this.itens[indice].descricao = conteudo
    }
    manterQuantidadeAtualizada(quantidade, indice) {
        this.itens[indice].quantidade = quantidade
    }
    manterValorAtualizado(valor, indice) {
        this.itens[indice].valor = valor
    }
}





  

class Item{
    constructor(descricao, quantidade, valor) {
        this.descricao = descricao
        this.quantidade = quantidade
        this.valor = valor
    }
}
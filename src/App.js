import ItensList from './components/ItensList'
import Header from './components/Header'
import Footer from './components/Footer'
import { Component } from 'react';
import ArrayItens from './dados/ArrayItens'

class App extends Component {


  constructor() {
    super();

    this.itens = new ArrayItens()

}


render(){
  return(
<div className="App">
      <Header />
      <ItensList
      lista={this.itens}
      removerItem={this.itens.removerItem.bind(this.itens)}
      adicionarItem={this.itens.adicionarItem.bind(this.itens)}
      atualizarListaDescricoes={this.itens.manterDescricaoAtualizada.bind(this.itens)}
      atualizarListaQuantidades={this.itens.manterQuantidadeAtualizada.bind(this.itens)}
      atualizarListaValores={this.itens.manterValorAtualizado.bind(this.itens)}
      calcularValorTotal={this.itens.calcularValorTotal.bind(this.itens)}
      calcularQuantidadeTotal={this.itens.calcularQuantidadeTotal.bind(this.itens)}
       />
      <Footer />
    </div>    
  )
}


}
export default App;
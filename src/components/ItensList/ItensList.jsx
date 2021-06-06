import React, { Component } from 'react'
import SingleItem from '../SingleItem'
import AddIcon from '../../assets/icon-add.svg'

class ItensList extends Component {
  constructor() {
    super()
    this.state_lista = { itens: [] }
    this.state_valor_total = { valor_total: 0 }
    this._novosItens = this._novosItens.bind(this)
    this._novoValorTotal = this._novoValorTotal.bind(this)
    this._novaQuantidadeTotal = this._novaQuantidadeTotal.bind(this)
  }

  componentDidMount() {
    console.log('Lista de Itens montado')
    this.props.lista.inscrever(this._novosItens)
  }
  componentWillUnmount() {
    this.props.lista.desinscrever(this._novosItens)
  }

  _handleAdicionarLinha() {
    console.log('Deveria adicionar uma nova linha')
    this.props.adicionarItem('', 0, 0)
  }

  _novosItens(itens) {
    this.setState({ ...this.state_lista, itens })
  }

  _novoValorTotal(valor_total) {
    this.setState()
  }

  _novaQuantidadeTotal(quantidade_total) {
    this.setState()
  }

  imprimir() {
    window.print()
  }

  render() {
    return (
      <section className="lista-itens">
        <div className="container identificacao_dos_bens">
          <h2>Identificação dos Bens</h2>

          <div className="row identificacao_cabecalho">
            <div className="col-1">
              <span>Item</span>
            </div>
            <div className="col-7">
              <span>Conteúdo</span>
            </div>
            <div className="col-2">
              <span>Quant.</span>
            </div>
            <div className="col-2">
              <span>Valor</span>
            </div>
          </div>

          {this.props.lista.itens.map((item, index) => {
            return (
              <div key={index}>
                <SingleItem
                  indice={index}
                  descricao={item.descricao}
                  quantidade={item.quantidade}
                  valor={item.valor}
                  removerItem={this.props.removerItem}
                  atualizarListaDescricoes={this.props.atualizarListaDescricoes}
                  atualizarListaQuantidades={
                    this.props.atualizarListaQuantidades
                  }
                  atualizarListaValores={this.props.atualizarListaValores}
                  calcularValorTotal={this.props.calcularValorTotal}
                  calcularQuantidadeTotal={this.props.calcularQuantidadeTotal}
                />
              </div>
            )
          })}
          <div className="row adicionar-item">
            <div className="container ">
              <button onClick={this._handleAdicionarLinha.bind(this)}>
                <img src={AddIcon} alt="Adicionar nova Linha" /> Adicionar
              </button>

              <button onClick={this.imprimir}>Imprimir</button>
            </div>
          </div>

          <div className="row totais">
            <div className="col-8">
              <span>Totais</span>
            </div>
            <div className="col-2">
              <span>{this.props.lista.quantidade_total}</span>
            </div>
            <div className="col-2">
              <span>R$ {this.props.lista.valor_total}</span>
            </div>
          </div>

          <div className="row peso_total">
            <div className="col-8">
              <span>Peso Total (KG):</span>
            </div>
            <div className="col-4">
              <span></span>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ItensList

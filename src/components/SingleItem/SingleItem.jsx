import React, { Component } from 'react'
import RemoveIcon from '../../assets/icon-remove.svg'
import NumericInput from 'react-numeric-input'

class SingleItem extends Component {
  remover() {
    const indice = this.props.indice
    console.log(indice)
    this.props.removerItem(indice)
    this.props.calcularQuantidadeTotal()
    this.props.calcularValorTotal()
  }

  _handleConteudoDescricao(evento) {
    const novo_conteudo = evento.target.textContent
    const indice_atual = evento.target.id
    this.props.atualizarListaDescricoes(indice_atual, novo_conteudo)
  }

  _handleConteudoQuantidade(evento) {
    const quantidade = evento
    const indice = this.props.indice
    this.props.atualizarListaQuantidades(quantidade, indice)
    this.props.calcularQuantidadeTotal()
  }

  _handleConteudoValores(evento) {
    const valor = evento
    const indice = this.props.indice
    this.props.atualizarListaValores(valor, indice)
    this.props.calcularValorTotal()
  }

  render() {
    const numero_do_item = this.props.indice + 1

    return (
      <section className="section-descricao-item">
        <div className="container">
          <div className="row dados_item">
            <div className="col-1 coluna-indice">
              <span>{numero_do_item}</span>
            </div>
            <div className="col-7 descricao-item">
              <div
                className="col-11 fake-input-descricao"
                contentEditable="true"
                id={this.props.indice}
                onKeyUp={this._handleConteudoDescricao.bind(this)}
                placeholder="Descrição"
              >
                {this.props.descricao}
              </div>

              <div className="col-1 remover-item">
                <img
                  src={RemoveIcon}
                  alt="Remova este item"
                  onClick={this.remover.bind(this)}
                />
              </div>
            </div>

            <div className="col-2 quantidade-item">
              <NumericInput
                className="input-quantidade"
                type="number"
                min={0}
                max={9999}
                step={1}
                precision={0}
                value={this.props.quantidade}
                onChange={this._handleConteudoQuantidade.bind(this)}
              />
            </div>

            <div className="col-2 valor-item">
              <NumericInput
                className="input-valor"
                type="number"
                step={1}
                precision={2}
                min={0}
                max={9999}
                value={this.props.valor}
                onChange={this._handleConteudoValores.bind(this)}
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default SingleItem

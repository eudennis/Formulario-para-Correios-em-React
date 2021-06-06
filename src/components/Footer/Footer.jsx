import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <div className="container declaracao_final">
          <div className="row">
            <div className="col-sm">
              <h3>Declaração</h3>

              <div className="row">
                <div className="col-sm">
                  <p>
                    Declaro que não me enquadro no conceito de contribuinte
                    previsto no art. 4º da Lei Complementar nº 87/1996, uma vez
                    que não realizo, com habitualidade ou em volume que
                    caracterize intuito comercial, operações de circulação de
                    mercadoria, ainda que se iniciem no exterior, ou estou
                    dispensado da emissão da nota fiscal por força da legislação
                    tributária vigente, responsabilizando-me, nos termos da lei
                    e a quem de direito, por informações inverídicas
                  </p>
                  <p>
                    Declaro ainda que não estou postando conteúdo inflamável,
                    explosivo, causador de combustão espontânea, tóxico,
                    corrosivo, gás ou qualquer outro conteúdo que constitua
                    perigo, conforme o art. 13 da Lei Postal nº 6.538/78.
                  </p>
                </div>
              </div>

              <div className="row assinaturas">
                <div className="col-3">
                  <input type="text" id="assinatura_cidade" />
                  <span>,</span>
                </div>

                <div className="col-1">
                  <input type="text" id="assinatura_dia" />
                  <span>de</span>
                </div>

                <div className="col-2">
                  <input type="text" id="assinatura_mes" />
                  <span>de</span>
                </div>

                <div className="col-1">
                  <input type="text" id="assinatura_ano" />
                </div>
                <div className="col-5">
                  <input type="text" id="assinatura_assinatura" />
                </div>
              </div>
              <div className="row subassinaturas">
                <div className="col-7"></div>
                <div className="col-5">
                  <span>Assinatura do Declarante/Remetente</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container observacao">
          <div className="row">
            <div className="col-sm">
              <h4>Observação:</h4>
              <p>
                Constitui crime contra a ordem tributária suprimir ou reduzir
                tributo, ou contribuição social e qualquer acessório (Lei
                8.137/90 Art. 1º, V).
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Footer

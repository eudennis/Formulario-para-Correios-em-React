import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <section className="cabecalho">
        <div className="container">
          <div className="row">
            <div className="col-sm titulo">
              <h1>Declaração de Conteúdo</h1>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row remetente_destinatario">
            <div className="col-6 remetente">
              <h2>Remetente</h2>
              <div className="row">
                <div className="col-sm nome">
                  <div className="row">
                    <div className="col-2 ">
                      <span>Nome:</span>
                    </div>

                    <div className="col-10 ">
                      <input
                        type="text"
                        id="nome_remetente"
                        placeholder="Nome Sobrenome"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm endereco">
                  <span>Endereço:</span>
                  <textarea
                    name="endereco remetente"
                    id="endereco_remetente"
                    rows="4"
                  ></textarea>
                </div>
              </div>

              <div className="row">
                <div className="col-9 cidade">
                  <div className="row">
                    <div className="col-3">
                      <span>Cidade:</span>
                    </div>
                    <div className="col-9">
                      <input
                        type="text"
                        id="cidade_remetente"
                        placeholder="Cidade"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-3 uf">
                  <div className="row">
                    <div className="col-4">
                      <span>UF:</span>
                    </div>
                    <div className="col-8">
                      <input type="text" id="uf_remetente" placeholder="UF" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-5 cep">
                  <div className="row">
                    <div className="col-3">
                      <span>CEP:</span>
                    </div>
                    <div className="col-9">
                      <input
                        type="text"
                        id="cep_remetente"
                        placeholder="000.000.000-00"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-7 cpf_cnpj">
                  <div className="row">
                    <div className="col-4">
                      <span>CPF/CNPJ:</span>
                    </div>
                    <div className="col-8">
                      <input
                        type="text"
                        id="cpf-cnpj_remetente"
                        placeholder="000000"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 destinatario">
              <h2>Destinatário</h2>
              <div className="row">
                <div className="col-sm nome">
                  <span>Nome:</span>
                  <input
                    type="text"
                    id="nome_destinatario"
                    placeholder="Nome Sobrenome"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-sm endereco">
                  <span>Endereço:</span>
                  <textarea
                    name=""
                    id="endereco_destinatario"
                    rows="4"
                  ></textarea>
                </div>
              </div>

              <div className="row">
                <div className="col-9 cidade">
                  <span>Cidade:</span>
                  <input
                    type="text"
                    id="cidade_destintario"
                    placeholder="Cidade"
                  />
                </div>
                <div className="col-3 uf">
                  <span>UF:</span>
                  <input type="text" id="uf_destinatario" placeholder="UF" />
                </div>
              </div>

              <div className="row">
                <div className="col-5 cep">
                  <span>CEP:</span>
                  <input
                    type="text"
                    id="cep_destinatario"
                    placeholder="000000-000"
                  />
                </div>
                <div className="col-7 cpf_cnpj">
                  <span>CPF/CNPJ:</span>
                  <input
                    type="text"
                    id="cpf-cnpj_destinatario"
                    placeholder="00000000000"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Header

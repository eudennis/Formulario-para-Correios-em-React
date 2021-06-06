import React, { Component } from 'react';

class LinhaTotais extends Component{

    render(){

        return(
<div className="row">
            <div className="col-8">
              <span>Totais:</span>
            </div>
            <div className="col-2 totais-qtd-total">
              {this.props.total_qtd}
            </div>
            <div className="col-2 totais-valor-total">
              {this.props.total_valor}
            </div>
          </div>
        )
    }
}

export default LinhaTotais



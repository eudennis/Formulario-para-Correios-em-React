(this["webpackJsonpform-correios-v2"]=this["webpackJsonpform-correios-v2"]||[]).push([[0],{21:function(e,a,s){},22:function(e,a,s){},23:function(e,a,s){"use strict";s.r(a);var t=s(1),i=s.n(t),c=s(9),n=s.n(c),o=s(2),l=s(3),r=s(5),d=s(4),j=s(11),h=s(6),u=s.p+"static/media/icon-remove.15c4fe00.svg",m=s(10),b=s.n(m),v=s(0),O=function(e){Object(r.a)(s,e);var a=Object(d.a)(s);function s(){return Object(o.a)(this,s),a.apply(this,arguments)}return Object(l.a)(s,[{key:"remover",value:function(){var e=this.props.indice;console.log(e),this.props.removerItem(e),this.props.calcularQuantidadeTotal(),this.props.calcularValorTotal()}},{key:"_handleConteudoDescricao",value:function(e){var a=e.target.textContent,s=e.target.id;this.props.atualizarListaDescricoes(s,a)}},{key:"_handleConteudoQuantidade",value:function(e){var a=e,s=this.props.indice;this.props.atualizarListaQuantidades(a,s),this.props.calcularQuantidadeTotal()}},{key:"_handleConteudoValores",value:function(e){var a=e,s=this.props.indice;this.props.atualizarListaValores(a,s),this.props.calcularValorTotal()}},{key:"render",value:function(){var e=this.props.indice+1;return Object(v.jsx)("section",{className:"section-descricao-item",children:Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"row dados_item",children:[Object(v.jsx)("div",{className:"col-1 coluna-indice",children:Object(v.jsx)("span",{children:e})}),Object(v.jsxs)("div",{className:"col-7 descricao-item",children:[Object(v.jsx)("div",{className:"col-11 fake-input-descricao",contentEditable:"true",id:this.props.indice,onKeyUp:this._handleConteudoDescricao.bind(this),placeholder:"Descri\xe7\xe3o",children:this.props.descricao}),Object(v.jsx)("div",{className:"col-1 remover-item",children:Object(v.jsx)("img",{src:u,alt:"Remova este item",onClick:this.remover.bind(this)})})]}),Object(v.jsx)("div",{className:"col-2 quantidade-item",children:Object(v.jsx)(b.a,{className:"input-quantidade",type:"number",min:0,max:9999,step:1,precision:0,value:this.props.quantidade,onChange:this._handleConteudoQuantidade.bind(this)})}),Object(v.jsx)("div",{className:"col-2 valor-item",children:Object(v.jsx)(b.a,{className:"input-valor",type:"number",step:1,precision:2,min:0,max:9999,value:this.props.valor,onChange:this._handleConteudoValores.bind(this)})})]})})})}}]),s}(t.Component),x=s.p+"static/media/icon-add.376e9b6a.svg",p=function(e){Object(r.a)(s,e);var a=Object(d.a)(s);function s(){var e;return Object(o.a)(this,s),(e=a.call(this)).state_lista={itens:[]},e.state_valor_total={valor_total:0},e._novosItens=e._novosItens.bind(Object(h.a)(e)),e._novoValorTotal=e._novoValorTotal.bind(Object(h.a)(e)),e._novaQuantidadeTotal=e._novaQuantidadeTotal.bind(Object(h.a)(e)),e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){console.log("Lista de Itens montado"),this.props.lista.inscrever(this._novosItens)}},{key:"componentWillUnmount",value:function(){this.props.lista.desinscrever(this._novosItens)}},{key:"_handleAdicionarLinha",value:function(){console.log("Deveria adicionar uma nova linha"),this.props.adicionarItem("",0,0)}},{key:"_novosItens",value:function(e){this.setState(Object(j.a)(Object(j.a)({},this.state_lista),{},{itens:e}))}},{key:"_novoValorTotal",value:function(e){this.setState()}},{key:"_novaQuantidadeTotal",value:function(e){this.setState()}},{key:"imprimir",value:function(){window.print()}},{key:"render",value:function(){var e=this;return Object(v.jsx)("section",{className:"lista-itens",children:Object(v.jsxs)("div",{className:"container identificacao_dos_bens",children:[Object(v.jsx)("h2",{children:"Identifica\xe7\xe3o dos Bens"}),Object(v.jsxs)("div",{className:"row identificacao_cabecalho",children:[Object(v.jsx)("div",{className:"col-1",children:Object(v.jsx)("span",{children:"Item"})}),Object(v.jsx)("div",{className:"col-7",children:Object(v.jsx)("span",{children:"Conte\xfado"})}),Object(v.jsx)("div",{className:"col-2",children:Object(v.jsx)("span",{children:"Quant."})}),Object(v.jsx)("div",{className:"col-2",children:Object(v.jsx)("span",{children:"Valor"})})]}),this.props.lista.itens.map((function(a,s){return Object(v.jsx)("div",{children:Object(v.jsx)(O,{indice:s,descricao:a.descricao,quantidade:a.quantidade,valor:a.valor,removerItem:e.props.removerItem,atualizarListaDescricoes:e.props.atualizarListaDescricoes,atualizarListaQuantidades:e.props.atualizarListaQuantidades,atualizarListaValores:e.props.atualizarListaValores,calcularValorTotal:e.props.calcularValorTotal,calcularQuantidadeTotal:e.props.calcularQuantidadeTotal})},s)})),Object(v.jsx)("div",{className:"row adicionar-item",children:Object(v.jsxs)("div",{className:"container ",children:[Object(v.jsxs)("button",{onClick:this._handleAdicionarLinha.bind(this),children:[Object(v.jsx)("img",{src:x,alt:"Adicionar nova Linha"})," Adicionar"]}),Object(v.jsx)("button",{onClick:this.imprimir,children:"Imprimir"})]})}),Object(v.jsxs)("div",{className:"row totais",children:[Object(v.jsx)("div",{className:"col-8",children:Object(v.jsx)("span",{children:"Totais"})}),Object(v.jsx)("div",{className:"col-2",children:Object(v.jsx)("span",{children:this.props.lista.quantidade_total})}),Object(v.jsx)("div",{className:"col-2",children:Object(v.jsxs)("span",{children:["R$ ",this.props.lista.valor_total]})})]}),Object(v.jsxs)("div",{className:"row peso_total",children:[Object(v.jsx)("div",{className:"col-8",children:Object(v.jsx)("span",{children:"Peso Total (KG):"})}),Object(v.jsx)("div",{className:"col-4",children:Object(v.jsx)("span",{})})]})]})})}}]),s}(t.Component),N=s(7),f=s.n(N),_=function(e){Object(r.a)(s,e);var a=Object(d.a)(s);function s(){return Object(o.a)(this,s),a.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(v.jsxs)("section",{className:"cabecalho",children:[Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("div",{className:"row",children:Object(v.jsx)("div",{className:"col-sm titulo",children:Object(v.jsx)("h1",{children:"Declara\xe7\xe3o de Conte\xfado"})})})}),Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"row remetente_destinatario",children:[Object(v.jsxs)("div",{className:"col-6 remetente",children:[Object(v.jsx)("h2",{children:"Remetente"}),Object(v.jsx)("div",{className:"row",children:Object(v.jsx)("div",{className:"col-sm nome",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-2 ",children:Object(v.jsx)("span",{children:"Nome:"})}),Object(v.jsx)("div",{className:"col-10 ",children:Object(v.jsx)("input",{type:"text",id:"nome_remetente",placeholder:"Nome Sobrenome"})})]})})}),Object(v.jsx)("div",{className:"row",children:Object(v.jsxs)("div",{className:"col-sm endereco",children:[Object(v.jsx)("span",{children:"Endere\xe7o:"}),Object(v.jsx)("textarea",{name:"endereco remetente",id:"endereco_remetente",rows:"4"})]})}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-9 cidade",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-3",children:Object(v.jsx)("span",{children:"Cidade:"})}),Object(v.jsx)("div",{className:"col-9",children:Object(v.jsx)("input",{type:"text",id:"cidade_remetente",placeholder:"Cidade"})})]})}),Object(v.jsx)("div",{className:"col-3 uf",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-4",children:Object(v.jsx)("span",{children:"UF:"})}),Object(v.jsx)("div",{className:"col-8",children:Object(v.jsx)(f.a,{id:"uf_remetente",placeholder:"UF",mask:"aa"})})]})})]}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-5 cep",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-3",children:Object(v.jsx)("span",{children:"CEP:"})}),Object(v.jsx)("div",{className:"col-9",children:Object(v.jsx)(f.a,{id:"cep_remetente",mask:"99.999-999",placeholder:"00.000-000"})})]})}),Object(v.jsx)("div",{className:"col-7 cpf_cnpj",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-4",children:Object(v.jsx)("span",{children:"CPF/CNPJ:"})}),Object(v.jsx)("div",{className:"col-8",children:Object(v.jsx)("input",{type:"text",id:"cpf-cnpj_remetente",placeholder:"000.000.000-00"})})]})})]})]}),Object(v.jsxs)("div",{className:"col-6 destinatario",children:[Object(v.jsx)("h2",{children:"Destinat\xe1rio"}),Object(v.jsx)("div",{className:"row",children:Object(v.jsx)("div",{className:"col-sm nome",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-2",children:Object(v.jsx)("span",{children:"Nome:"})}),Object(v.jsx)("div",{className:"col-10",children:Object(v.jsx)("input",{type:"text",id:"nome_destinatario",placeholder:"Nome Sobrenome"})})]})})}),Object(v.jsx)("div",{className:"row",children:Object(v.jsxs)("div",{className:"col-sm endereco",children:[Object(v.jsx)("span",{children:"Endere\xe7o:"}),Object(v.jsx)("textarea",{name:"",id:"endereco_destinatario",rows:"4"})]})}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-9 cidade",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-3",children:Object(v.jsx)("span",{children:"Cidade:"})}),Object(v.jsx)("div",{className:"col-9",children:Object(v.jsx)("input",{type:"text",id:"cidade_destintario",placeholder:"Cidade"})})]})}),Object(v.jsx)("div",{className:"col-3 uf",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-4",children:Object(v.jsx)("span",{children:"UF:"})}),Object(v.jsx)("div",{className:"col-8",children:Object(v.jsx)(f.a,{mask:"aa",placeholder:"UF",id:"uf_destinatario"})})]})})]}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-5 cep",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-4",children:Object(v.jsx)("span",{children:"CEP:"})}),Object(v.jsx)("div",{className:"col-8",children:Object(v.jsx)(f.a,{id:"cep_destinatario",mask:"99.999-999",placeholder:"00.000-000"})})]})}),Object(v.jsx)("div",{className:"col-7 cpf_cnpj",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-4",children:Object(v.jsx)("span",{children:"CPF/CNPJ:"})}),Object(v.jsx)("div",{className:"col-8",children:Object(v.jsx)("input",{type:"text",id:"cpf-cnpj_destinatario",placeholder:"000.000.000-00"})})]})})]})]})]})})]})}}]),s}(t.Component),y=function(e){Object(r.a)(s,e);var a=Object(d.a)(s);function s(){return Object(o.a)(this,s),a.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(v.jsxs)("section",{className:"footer",children:[Object(v.jsx)("div",{className:"container declaracao_final",children:Object(v.jsx)("div",{className:"row",children:Object(v.jsxs)("div",{className:"col-sm",children:[Object(v.jsx)("h3",{children:"Declara\xe7\xe3o"}),Object(v.jsx)("div",{className:"row",children:Object(v.jsxs)("div",{className:"col-sm",children:[Object(v.jsx)("p",{children:"Declaro que n\xe3o me enquadro no conceito de contribuinte previsto no art. 4\xba da Lei Complementar n\xba 87/1996, uma vez que n\xe3o realizo, com habitualidade ou em volume que caracterize intuito comercial, opera\xe7\xf5es de circula\xe7\xe3o de mercadoria, ainda que se iniciem no exterior, ou estou dispensado da emiss\xe3o da nota fiscal por for\xe7a da legisla\xe7\xe3o tribut\xe1ria vigente, responsabilizando-me, nos termos da lei e a quem de direito, por informa\xe7\xf5es inver\xeddicas"}),Object(v.jsx)("p",{children:"Declaro ainda que n\xe3o estou postando conte\xfado inflam\xe1vel, explosivo, causador de combust\xe3o espont\xe2nea, t\xf3xico, corrosivo, g\xe1s ou qualquer outro conte\xfado que constitua perigo, conforme o art. 13 da Lei Postal n\xba 6.538/78."})]})}),Object(v.jsxs)("div",{className:"row assinaturas",children:[Object(v.jsxs)("div",{className:"col-3",children:[Object(v.jsx)("input",{type:"text",id:"assinatura_cidade"}),Object(v.jsx)("span",{children:","})]}),Object(v.jsxs)("div",{className:"col-1",children:[Object(v.jsx)("input",{type:"text",id:"assinatura_dia"}),Object(v.jsx)("span",{children:"de"})]}),Object(v.jsxs)("div",{className:"col-2",children:[Object(v.jsx)("input",{type:"text",id:"assinatura_mes"}),Object(v.jsx)("span",{children:"de"})]}),Object(v.jsx)("div",{className:"col-1",children:Object(v.jsx)("input",{type:"text",id:"assinatura_ano"})}),Object(v.jsx)("div",{className:"col-5",children:Object(v.jsx)("input",{type:"text",id:"assinatura_assinatura"})})]}),Object(v.jsxs)("div",{className:"row subassinaturas",children:[Object(v.jsx)("div",{className:"col-7"}),Object(v.jsx)("div",{className:"col-5",children:Object(v.jsx)("span",{children:"Assinatura do Declarante/Remetente"})})]})]})})}),Object(v.jsx)("div",{className:"container observacao",children:Object(v.jsx)("div",{className:"row",children:Object(v.jsxs)("div",{className:"col-sm",children:[Object(v.jsx)("h4",{children:"Observa\xe7\xe3o:"}),Object(v.jsx)("p",{children:"Constitui crime contra a ordem tribut\xe1ria suprimir ou reduzir tributo, ou contribui\xe7\xe3o social e qualquer acess\xf3rio (Lei 8.137/90 Art. 1\xba, V)."})]})})})]})}}]),s}(t.Component),w=function(){function e(){Object(o.a)(this,e),this.itens=[{descricao:"",quantidade:0,valor:0}],console.log(this.itens),this.valor_total=0,this.quantidade_total=0,this._inscritos=[]}return Object(l.a)(e,[{key:"componentDidMount",value:function(){}},{key:"inscrever",value:function(e){this._inscritos.push(e)}},{key:"desinscrever",value:function(e){this._inscritos=this._inscritos.filter((function(a){return a!==e}))}},{key:"notificar",value:function(){var e=this;this._inscritos.forEach((function(a){a(e.itens)}))}},{key:"calcularValorTotal",value:function(){var e=0;this.itens.forEach((function(a){e+=a.valor})),this.valor_total=parseFloat(e).toFixed(2),this.notificar()}},{key:"calcularQuantidadeTotal",value:function(){var e=0;this.itens.forEach((function(a){e+=a.quantidade})),this.quantidade_total=e,this.notificar()}},{key:"adicionarItem",value:function(e,a,s){var t=this.itens,i=new k(e,a,s);t.push(i),console.log("Item adicionado (em teoria). Nova lista \xe9: "),console.log(t),this.notificar()}},{key:"removerItem",value:function(e){console.log("O item a ser removido tem o ID: "+e),this.itens.splice(e,1),this.notificar()}},{key:"manterDescricaoAtualizada",value:function(e,a){this.itens[e].descricao=a}},{key:"manterQuantidadeAtualizada",value:function(e,a){this.itens[a].quantidade=e}},{key:"manterValorAtualizado",value:function(e,a){this.itens[a].valor=e}}]),e}(),k=function e(a,s,t){Object(o.a)(this,e),this.descricao=a,this.quantidade=s,this.valor=t},C=function(e){Object(r.a)(s,e);var a=Object(d.a)(s);function s(){var e;return Object(o.a)(this,s),(e=a.call(this)).itens=new w,e}return Object(l.a)(s,[{key:"render",value:function(){return document.title="Formul\xe1rio de Declara\xe7\xe3o de Conte\xfado",Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(_,{}),Object(v.jsx)(p,{lista:this.itens,removerItem:this.itens.removerItem.bind(this.itens),adicionarItem:this.itens.adicionarItem.bind(this.itens),atualizarListaDescricoes:this.itens.manterDescricaoAtualizada.bind(this.itens),atualizarListaQuantidades:this.itens.manterQuantidadeAtualizada.bind(this.itens),atualizarListaValores:this.itens.manterValorAtualizado.bind(this.itens),calcularValorTotal:this.itens.calcularValorTotal.bind(this.itens),calcularQuantidadeTotal:this.itens.calcularQuantidadeTotal.bind(this.itens)}),Object(v.jsx)(y,{})]})}}]),s}(t.Component),g=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,24)).then((function(a){var s=a.getCLS,t=a.getFID,i=a.getFCP,c=a.getLCP,n=a.getTTFB;s(e),t(e),i(e),c(e),n(e)}))};s(21),s(22);n.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(C,{})}),document.getElementById("root")),g()}},[[23,1,2]]]);
//# sourceMappingURL=main.1cba6b82.chunk.js.map
import React, { Component } from "react";


export default class Saudacao extends Component {

    
    constructor(props){
        super()
        
        
        //dessa forma estou dizendo que a referencia aponta para a instancia dessa classe (this = saudacao)
        //ou seja estou chmando uma função que está dentro dessa classe
        this.setTipo = this.setTipo.bind(this)   
          
        
        this.state ={
            tipo: props.tipo,
            nome: props.nome
        }
    }

    setTipo(e){

        this.setState({
            tipo: e.target.value
        })
        // Da ERRO pois o props é somente leitura 
        //this.props.tipo = e.target.value
    }

    setNome(e){
        this.setState({
            nome: e.target.value
        })
    }

    render() {

        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr/>

                <input type='text' placeholder="Tipo...." value={tipo} onChange={this.setTipo}/>
                <input type='text' placeholder="Nome...." value={nome} onChange={e=> this.setNome(e)}/>
            </div>


        );
    };
}
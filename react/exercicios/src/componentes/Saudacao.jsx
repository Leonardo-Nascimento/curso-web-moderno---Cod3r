import React, { Component } from "react";


export default class Saudacao extends Component {

    state ={
        tipo: this.props.tipo,
        nome: this.props.nome
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

                <input type='text' placeholder="Tipo...." value={tipo} onChange={e => this.setTipo(e)}/>
                <input type='text' placeholder="Nomw...." value={nome} onChange={e => this.setNome(e)}/>
            </div>


        );
    };
}
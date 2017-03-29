import React, { Component } from 'react'
//Também poderia ser omitido {Component}  e definido a classe como
//  export defoult class ClassComponent extends React.Component

export default class ClassComponent extends Component {
   /**
    * Construtor
    * Os valores que são passados,  são do tipo somente leitura e para alterar
    * os valores, precisamos criar métodos com setState..
    * @param  {[type]} props [description]
    * @return {[type]}       [description]
    */
    constructor(props) {
        super(props)
        this.state ={ value: props.initialValue}
    }
    //Método para somar.
    sum(delta) {
        this.setState({ value: this.state.value + delta })
    }

    render() {
        return (
            <div>
                <h1>{this.props.label}</h1>
                <h2>{this.state.value}</h2>
                <button onClick={() => this.sum(-1)}>Dec</button>
                <button onClick={() => this.sum(1)}>Inc</button>
            </div>
        )
    }
}
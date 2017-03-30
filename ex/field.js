import React, { Component} from 'react'

class Field extends Component {
    constructor(props) {
        super(props)
        this.state = { value: props.initialValue }
        this.handleChange = this.handleChange.bind(this)
    }

    limitChange(estado) {
        if ( estado.length >= 15) {
            console.clear()
            console.log('Estrapolou o limite de caracteres')
            return false;
        } else {
            console.log(`${this.state.value}   ${this.state.value.length} caracteres`)
            return true
        }
    }    

    handleChange(event) {
        
        if (this.limitChange(this.state.value)) {
            this.setState({ value: event.target.value})
        } 
             
    }


 
    /**
     * O método Render() é obrigatório em todo componente do react (baseado em classe)
     */
    
    render () {
        return (
            <div>
                <label>{ this.state.value }</label>
                <input onChange={this.handleChange} value={this.state.value}/>
            </div>
        )
    }   
}

export default Field
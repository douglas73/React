import React, { Component } from 'react'
//Também poderia ser omitido {Component}  e definido a classe como
//  export defoult class ClassComponent extends React.Component

export default class ClassComponent extends Component {
    render() {
        return (
            <h1>{this.props.value}</h1>
        )
    }
}
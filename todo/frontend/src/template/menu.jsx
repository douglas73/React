import React from 'react'

//componente baseado em uma função
export default props => (
       //      |   Observação
       //      |   Sempre se usa className ao inves de class com
       //      |   o react
       //     \/
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container'>
            <div className='navbar-heaeder'>
                <a className='navbar-brand' href='#'>
                    <i className='fa fa-calendar-check-o'></i> TodoApp
                </a>   
            </div>
            
            <div id='navbar' className='navbar-collapse collapse'>
                <ul className='nav navbar-nav'>
                    <li><a href="#/todos">Tarefas</a></li>
                    <li><a href="#/about">Sobre</a></li>
                </ul>
            </div>
        </div>
    </nav>
)
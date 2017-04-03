//          |   este 'modules' é o alias definido no
//         \/      config do webpack.config.js, linha 19
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import React from 'react'
import Todo from '../todo/todo'  //import do componente todo
import About from '../about/about'  //import do componente about
import Menu from '../template/menu'  //import do componente menu

export default props => (
    <div className='container'>
        <Menu />
        <Todo />
        <About />
    </div>
) 
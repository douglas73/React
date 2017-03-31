//          |   este 'modules' é o alias definido no
//         \/      config do webpack.config.js, linha 19
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import React from 'react'
import Todo from '../todo/todo'  //import do componente 
import About from '../about/about'  //import do componente 

export default props => (
    <div className='container'>
        <Todo />
        <About />
    </div>
) 
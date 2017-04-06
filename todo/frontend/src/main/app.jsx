//          |   este 'modules' é o alias definido no
//         \/      config do webpack.config.js, linha 19
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import '../template/custom.css'

import React from 'react'
import Menu from '../template/menu'  //import do componente menu
import Routes from './routes'

export default props => (
    <div className='container'>
        <Menu />
        <Routes />
    </div>
) 
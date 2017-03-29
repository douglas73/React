import React from 'react'
import ReactDom from 'react-dom'
import ClassComponent from './classComponent'



ReactDom.render(
     <ClassComponent lavel='Contador' initialValue={10} />
    , document.getElementById('app'))

import React from 'react'

export default propps => {
    if (props.test) {
        return props.children
    } else {
        return false
    }
}
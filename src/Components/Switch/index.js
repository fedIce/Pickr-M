import React from 'react'
import './style.css'

export default function Switch( { activeState, setActiveState } ) {
    const [_on, setOn] = React.useState(activeState)

    const toggleSwitch = () => {
        setActiveState(!_on)
        setOn(!_on)
    }
    return (
        <div onClick={toggleSwitch} className="p-switch" style={{backgroundColor: _on? '#2eb374' : '#e3e3e3'}}>
            <div onClick={toggleSwitch} className={ `p-switch-toggler  ${_on? "p-switch-toggler-on" : null}`} style={{transform: _on? 'translateX(80%)': 'translateX(0%)'}}></div>
        </div>
    )
}

import React from 'react'
import useWindowsStore from "#store/Window.jsx";

const WindowControlls = ({target}) => {

    const {closeWindow}=useWindowsStore()

    return (
        <div id="window-controls">
        <button 
            className="close" 
            onClick={()=>closeWindow(target)}
            aria-label={`Close ${target} window`}
            title="Close window"
        >
        </button>
            <button 
                className="minimize"
                aria-label={`Minimize ${target} window`}
                title="Minimize window"
                disabled
            />
            <button 
                className="maximize"
                aria-label={`Maximize ${target} window`}
                title="Maximize window"
                disabled
            />

        </div>
    )
}
export default WindowControlls

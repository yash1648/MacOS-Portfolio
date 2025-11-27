import React from 'react'
import useWindowsStore from "#store/Window.jsx";

const WindowControlls = ({target}) => {

    const {closeWindow}=useWindowsStore()

    return (
        <div id="window-controls">
        <div className="close" onClick={()=>closeWindow(target)}>

        </div>
            <div className="minimize"/>
            <div className="maximize"/>

        </div>
    )
}
export default WindowControlls

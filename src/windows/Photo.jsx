import React from 'react'
import useWindowsStore from "#store/Window.jsx";
import {WindowControlls} from "#components/index.js";
import {Mail, Search} from "lucide-react";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {gallery} from "#constants/index.js";

function Photo() {

    const {openWindow}=useWindowsStore()
    return <>
        <div id="window-header">
                <WindowControlls target="photos"/>
                <div className="w-full flex justify-end items-center gap-3 text-gray-500">
                    <Mail className="icon"/>
                    <Search className="icon"/>

                </div>
        </div>

        <div className="flex w-full">
            <div className="sidebar">
                <h2>Photos</h2>
            </div>
            <div className="gallery">
                <ul>
                    {
                        gallery.map(({id,img})=>(
                            <li key={id}
                                onClick={()=>openWindow("imgfile",{
                                    id,
                                    name:"Gallery image",
                                    icon:"/images/image.png",
                                    kind:"file",
                                    filetype:"img",
                                    imageUrl:img
                                })}
                            >
                                <img src={img} alt={`Gallery image ${id}`}/>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>

    </>
}

const PhotoWrapper=WindowWrapper(Photo,"photos")

export default PhotoWrapper

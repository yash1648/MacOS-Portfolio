import React from 'react'
import {WindowControlls} from "#components/index.js";
import {Search} from "lucide-react";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {locations} from "#constants/index.js";
import useLocationStore from "#store/location.jsx";
import clsx from "clsx";
import useWindowsStore from "#store/Window.jsx";

const Finder = () => {

    const {activeLocation,setActiveLocation} =useLocationStore()
    const {openWindow} = useWindowsStore()
    const openItem=(item)=>{
        if (item.fileType==="pdf") return openWindow("resume")
        if (item.kind==="folder") return setActiveLocation(item)
        if(['fig','url'].includes(item.fileType)&& item.href) return window.open(item.href, "_blank")

        openWindow(`${item.fileType}${item.kind}`, item)
    }


    const renderList=(items)=> items.map((item)=>(
        <li key={item.id} onClick={()=>setActiveLocation(item)}
            className={
                clsx(item.id===activeLocation.id?"active":"not-active")
            }
        >
            <img src={item.icon} className="w-4" alt={item.name}

            />
            <p className="text-sm font-medium truncate">{item.name}</p>
        </li>


    ))

    return <>
        <div id="window-header">
            <WindowControlls target="finder"/>
            <Search className="icon"/>
        </div>

        <div className="bg-white flex h-full">
            <div className="sidebar">
                <div >
                    <h3>Favourite</h3>
                    <ul>
                        {
                            renderList(Object.values(locations))

                        }
                    </ul>
                </div>
                <div >
                    <h3>Works</h3>
                    <ul>
                        {
                           renderList(locations.work.children)

                        }
                    </ul>
                </div>
            </div>
            <ul className="content" >
                {
                    activeLocation?.children.map((item)=>(
                        <li key={item.id} className={item.position} onClick={()=>openItem(item)}>
                            <img src={item.icon} alt={item.name}/>
                            <p>{item.name}</p>
                        </li>
                    ))
                }
            </ul>
        </div>



    </>
}

const FinderWrapper=WindowWrapper(Finder,"finder")


export default FinderWrapper;

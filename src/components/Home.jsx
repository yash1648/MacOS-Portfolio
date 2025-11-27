import React from 'react'
import {locations} from "#constants/index.js";
import clsx from "clsx";
import {useGSAP} from "@gsap/react";
import {Draggable} from "gsap/Draggable";
import useWindowsStore from "#store/Window.jsx";
import useLocationStore from "#store/location.jsx";

const projects=locations.work?.children??[]

const Home = () => {

    const {setActiveLocation}=useLocationStore()

    const {openWindow} = useWindowsStore()
    const handleOpenProjectFinder=(project)=>{
        setActiveLocation(project)
        openWindow("finder")
    }
    useGSAP(
        ()=>{
            Draggable.create(".folder")
        },[]
    )



    return <section id="home">
            <ul>
                {
                    projects.map((project)=>{
                        <li key={project.id}
                        className={clsx("group folder",project.windowPosition)}
                        onClick={()=>handleOpenProjectFinder(project)}

                        >
                            <img src="/images/folder.png" alt="folder"/>
                            <p>{project.name}</p>
                        </li>

                    })

                }
            </ul>
    </section>
}
export default Home

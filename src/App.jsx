import React from 'react'
import {Navbar,Welcome,Dock,Home} from "#components"
import {Terminal,Contacts, Safari, Resume,Finder,Text,Image,Photo} from "#windows";
import gsap from "gsap";
import {Draggable} from "gsap/Draggable";

gsap.registerPlugin(Draggable);


const App = () => {
    return (
       <main>
           <Navbar />
           <Welcome />
           <Dock/>

           <Terminal/>
           <Safari/>
           <Resume/>
           <Finder/>
           <Text/>
           <Image/>
                <Contacts/>
           <Photo/>
           <Home/>
       </main>
    )
}
export default App

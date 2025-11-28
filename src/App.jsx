import React, { useEffect } from 'react'
import {Navbar,Welcome,Dock,Home,ErrorBoundary} from "#components"
import {Terminal,Contacts, Safari, Resume,Finder,Text,Image,Photo} from "#windows";
import gsap from "gsap";
import {Draggable} from "gsap/Draggable";
import useThemeStore from '#store/theme.jsx';
import ThemeToggle from '#components/ThemeToggle';

gsap.registerPlugin(Draggable);


const App = () => {
    const { theme, setTheme } = useThemeStore();

    useEffect(() => {
        // Initialize theme on mount
        const isDark = theme === 'dark';
        document.documentElement.classList.toggle('dark', isDark);
    }, [theme]);

    return (
       <ErrorBoundary>
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
       </ErrorBoundary>
    )
}
export default App

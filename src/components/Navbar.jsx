import React from 'react'
import {navIcons, navLinks} from "#constants/index.js";
import dayjs from "dayjs";
import useWindowsStore from "#store/Window.jsx";
import ThemeToggle from './ThemeToggle.jsx';

const Navbar = () => {

    const {openWindow}=useWindowsStore()

    return <nav role="navigation" aria-label="Main navigation">
        <div>
            <img src="/images/logo.svg" alt="Portfolio logo"/>
            <p className="font-bold dark:text-white transition-colors">Yash's Portfolio</p>
            <ul aria-label="Navigation links">
                {navLinks.map(({id,name,type}) => (
                    <li key={id} onClick={() => openWindow(type)}>
                        <p role="button" tabIndex={0} onClick={() => openWindow(type)} onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                openWindow(type);
                            }
                        }}>{name}</p>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <ul aria-label="Status icons">
                {navIcons.map(({ id, img }) => (
                    <li key={id}>
                        <img src={img} className="icon-hover" alt={`Status icon ${id}`} />
                    </li>
                ))}
                <li>
                    <ThemeToggle />
                </li>
            </ul>
            <time dateTime={dayjs().toISOString()} role="text" aria-label={`Current time: ${dayjs().format('ddd MMM D h:mm A')}`}>{dayjs().format('ddd MMM D h:mm A')}</time>
        </div>
    </nav>
}
export default Navbar

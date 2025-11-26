import React, {useRef} from 'react'
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";
gsap.registerPlugin(useGSAP);

const FONT_WEIGHT={
    subtitle:{min:100,max:400,default:100},
    title:{min:400,max:900,default:400},
}


                const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, i) => (
        <span key={i} className={className} style={
            {fontVariationSettings: `'wght' ${baseWeight}`}
        }>
            {char === " " ? '\u00A0' : char}
        </span>
    ))
}

const setupTextHover = (container, type) => {
    if (!container) return;

    const letters = container.querySelectorAll("span");
    const { min, max, default: base } = FONT_WEIGHT[type];

    const animateLetters = (letter, intensity, duration = 0.25) => {
        const weight = min + (max - min) * intensity; // map [0,1] -> [min,max]

        return gsap.to(letter, {
            duration,
            ease: "power2.out",
            fontVariationSettings: `'wght' ${weight}`,
            y: -10 * intensity,
            scale: 1 + 0.2 * intensity,
            overwrite: "auto",
        });
    };

    const handleMouseMove = (evt) => {
        const { left } = container.getBoundingClientRect();
        const mouseX = evt.clientX - left;

        letters.forEach((letter, index) => {
            const { left: l, width: w } = letter.getBoundingClientRect();
            const distance = Math.abs(mouseX - (l - left + w / 2));

            const raw =
                Math.cos(distance / 25 - index * 0.15) * Math.exp(-distance / 140);

            const intensity = Math.min(1, Math.max(0, (raw + 1) / 2));

            animateLetters(letter, intensity);
        });
    };

    const handleMouseLeave = () => {
        letters.forEach((letter) => {
            gsap.to(letter, {
                duration: 0.4,
                ease: "power2.out",
                fontVariationSettings: `'wght' ${base}`,
                y: 0,
                scale: 1,
                rotate: 0,
            });
        });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave); // ✅ no ()

    // cleanup fn
    return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
    };
};




function Welcome() {

    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useGSAP(() => {
        const titleCleanUp =
            titleRef.current && setupTextHover(titleRef.current, "title");
        const subCleanUp =
            subtitleRef.current && setupTextHover(subtitleRef.current, "subtitle");

        return () => {
            titleCleanUp && titleCleanUp();
            subCleanUp && subCleanUp();
        };
    }, []);



    return <section id="welcome">
        <p ref={subtitleRef}>{renderText("Hey, I'm Yash! Welcome to my", "text-3xl font-georama", 100)}</p>
        <h1 ref={titleRef} className="mt-7">
            {renderText(
            "Portfolio","text-9xl italic font-georama",
            )
            }
        </h1>

        <div className="small-screen">
            <p>This Portfolio is design for the desktop/tablet screens</p>

        </div>

    </section>


}

export default Welcome

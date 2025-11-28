import React, { useRef, useEffect, useState } from 'react'
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

    // Mobile redirect settings - replace with your mobile site
    const MOBILE_SITE = "https://yash-bagal-portfolio.vercel.app";
    const REDIRECT_DELAY_MS = 3500;

    const [isMobileRedirecting, setIsMobileRedirecting] = useState(false);
    const [countdown, setCountdown] = useState(Math.ceil(REDIRECT_DELAY_MS / 1000));

    useEffect(() => {
        if (typeof window === "undefined") return;

        let intervalId = null;
        let timeoutId = null;
        let started = false; // prevent double-start

        const checkMobile = () =>
            /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent) ||
            (window.matchMedia && window.matchMedia('(max-width: 768px)').matches);

        const startRedirect = () => {
            if (started) return;
            started = true;
            setIsMobileRedirecting(true);

            // countdown for UI
            const tick = 1000;
            let remaining = REDIRECT_DELAY_MS;
            setCountdown(Math.ceil(remaining / 1000));
            intervalId = setInterval(() => {
                remaining -= tick;
                setCountdown(Math.max(0, Math.ceil(remaining / 1000)));
            }, tick);

            // perform redirect after delay
            timeoutId = setTimeout(() => {
                window.location.href = MOBILE_SITE;
            }, REDIRECT_DELAY_MS);
        };

        // initial check
        if (checkMobile()) startRedirect();

        // listen for viewport/media changes (DevTools toggle, orientation changes, etc.)
        const mq = window.matchMedia && window.matchMedia('(max-width: 768px)');
        const handleChange = () => {
            if (checkMobile()) startRedirect();
        };

        if (mq) {
            if (mq.addEventListener) mq.addEventListener('change', handleChange);
            else if (mq.addListener) mq.addListener(handleChange);
        } else {
            window.addEventListener('resize', handleChange);
        }

        return () => {
            if (intervalId) clearInterval(intervalId);
            if (timeoutId) clearTimeout(timeoutId);
            if (mq) {
                if (mq.removeEventListener) mq.removeEventListener('change', handleChange);
                else if (mq.removeListener) mq.removeListener(handleChange);
            } else {
                window.removeEventListener('resize', handleChange);
            }
        };
    }, []);

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

    if (isMobileRedirecting) {
        return (
            <section id="welcome">
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '60vh',
                    textAlign: 'center',
                    padding: '2rem'
                }}>
                    {/* show the requested p tag on mobile before redirect */}
                    <p style={{marginBottom: '.75rem'}}>This portfolio is designed for desktop/tablet screens.</p>

                    <h2 style={{fontSize: '1.25rem', marginBottom: '.5rem'}}>Redirecting to mobile portfolio</h2>
                    <p style={{marginBottom: '.5rem'}}>For the best experience please use a desktop. You will be redirected to the mobile site shortly.</p>
                    <p style={{opacity: .8}}>Redirecting in {countdown} second{countdown !== 1 ? 's' : ''}…</p>
                    <p style={{marginTop: '.75rem', fontSize: '.9rem'}}><a href={MOBILE_SITE}>{MOBILE_SITE}</a></p>
                </div>
            </section>
        );
    }

    return <section id="welcome">
        <p ref={subtitleRef}>{renderText("Hey, I'm Yash! Welcome to my", "text-3xl font-georama", 100)}</p>
        <h1 ref={titleRef} className="mt-7">
            {renderText(
            "Portfolio","text-9xl italic font-georama",
            )
            }
        </h1>

        <div className="small-screen">
            <p>This Portfolio is designed for the desktop/tablet screens</p>
            
        </div>

    </section>
}

export default Welcome

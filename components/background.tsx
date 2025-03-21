'use client'

import React, { useEffect, useState } from "react";
import "../styles/background.css"; // Import the CSS file for the background styles

const Background: React.FC = () => {
    const [bubbleSize, setBubbleSize] = useState(80); // Default size (80px) for the bubble

    // useEffect(() => {
    //     // Dynamically add the mouse move event listener
    //     const interBubble = document.querySelector(".interactive") as HTMLElement;
    //     let curX = 0;
    //     let curY = 0;
    //     let tgX = 0;
    //     let tgY = 0;

    //     function move() {
    //         curX += (tgX - curX) / 20;
    //         curY += (tgY - curY) / 20;
    //         interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    //         requestAnimationFrame(() => {
    //             move();
    //         });
    //     }

    //     window.addEventListener("mousemove", (event: MouseEvent) => {
    //         tgX = event.clientX;
    //         tgY = event.clientY;

    //         // Adjust bubble size based on the cursor position (example: smaller the farther from the center)
    //         const distanceFromCenter = Math.hypot(tgX - window.innerWidth / 2, tgY - window.innerHeight / 2);
    //         const maxSize = 100; // Maximum bubble size
    //         const minSize = 50;  // Minimum bubble size
    //         const size = Math.max(minSize, maxSize - (distanceFromCenter / 10));
    //         setBubbleSize(size);
    //     });

    //     move();

    //     return () => {
    //         // Clean up the event listener on component unmount
    //         window.removeEventListener("mousemove", (event) => {
    //             tgX = event.clientX;
    //             tgY = event.clientY;
    //         });
    //     };
    // }, []);

    return (
        <div className="gradient-bg">
            <div className="dark-overlay"></div>
            <div className="gradients-container">
                <div className="g1"></div>
                <div className="g2"></div>
                <div className="g3"></div>
                <div className="g4"></div>
                <div className="g5"></div>
            </div>
            <div
                className="interactive"
                style={{
                    width: `${bubbleSize}px`,
                    height: `${bubbleSize}px`,
                }}
            ></div>
        </div>
    );
};

export default Background;

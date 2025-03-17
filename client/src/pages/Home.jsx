import React, { useState, useEffect } from "react";

import "./css/home.css";

export default function Home() {
    const [heroVisible, setHeroVisible] = useState(true);

    useEffect(() => {
        const handleClick = () => {
            setHeroVisible(false);
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <>
            <div className="main-container">
                {heroVisible && (
                    <div className="hero">
                        <h1>WELCOME TO OPERATION HOMEFRONT</h1>
                    </div>
                )}

                <div className="logo">
                    <img src="/operation-homefront.png" alt="operation homefront logo" />
                </div>
                <div className="mission">
                    <strong>Mission Statement:</strong> <br />
                    To change the lives of those who are forgotten. Those who gave their all but received nothing.< br />
                    The homeless Veteran epidemic is rampant. The ones that put their lives on the line so that we can have our freedom.
                    We’ve forgotten about them and left them fall by the wayside. <br />
                    <strong>NO MORE!</strong> <br />
                    This organization will change that by giving our heroes a place to live and employment opportunities,
                    all in the US, at the same time revitalizing American jobs and businesses.
                </div>
            </div>
        </>
    )
};
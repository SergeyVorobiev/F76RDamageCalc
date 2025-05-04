"use client"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/bsButtons.css';
import '../css/buttons.css';
import '../css/bsCheck.css';
import '../css/style.css';
import React, { Suspense, useEffect, useState } from 'react';
import styles from "./page.module.css";
import F76NavBar from '../navbar/F76NavBar';
import LoadingLine from '../loading/LoadingLine';
import Footer from '../navbar/Footer';
import ImageURLPool from '../loading/ImageURLPool';
//import TestEnv from '../testEnvironment/TestEnv';
import dynamic from "next/dynamic";
await ImageURLPool.loadDefaultAsync();


function webSite() {
    const Main = dynamic(() => import('../main/Main'), {
    ssr: false,
    loading: () => loadingLine(),
    });
    return (
        <div className='m-auto p-0 mb-0' style={{display: 'flex', flexDirection: 'column', maxWidth: '80rem', minHeight: '100vh'}}>
            <F76NavBar></F76NavBar>
                <Main />
            <Footer />
        </div>
    );
}

function loadingLine() {
    return (
        <>
            <LoadingLine />
        </>
    );
}

//<TestEnv />
function testEnv() {
    return (<></>);
}

export default function Home() {
    useEffect(() => {
        function windowSizeChanged() {
            const width =  window.innerWidth;
            const height = window.innerHeight;
            document.documentElement.style.setProperty('--screen-width', width.toFixed(0) + "px");
            document.documentElement.style.setProperty('--screen-modal-body-height-80', (height * 0.8).toFixed(0) + "px");
            document.documentElement.style.setProperty('--screen-modal-body-width-80', (width * 0.8).toFixed(0) + "px");
            document.documentElement.style.setProperty('--screen-modal-body-height-70', (height * 0.7).toFixed(0) + "px");
            document.documentElement.style.setProperty('--screen-modal-body-width-70', (width * 0.7).toFixed(0) + "px");
            document.documentElement.style.setProperty('--screen-modal-body-height-60', (height * 0.6).toFixed(0) + "px");
            document.documentElement.style.setProperty('--screen-modal-body-width-60', (width * 0.6).toFixed(0) + "px");
        }
        windowSizeChanged();
        window.onresize = windowSizeChanged;
    }, []);
    return <>{webSite()}</>;
}

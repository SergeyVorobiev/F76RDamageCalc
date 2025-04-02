"use client"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/bsButtons.css';
import '../css/buttons.css';
import '../css/bsCheck.css';
import '../css/style.css';
import React, { Suspense, useEffect } from 'react';
import styles from "./page.module.css";
import F76NavBar from '../navbar/F76NavBar';
import LoadingLine from '../loading/LoadingLine';
import Footer from '../navbar/Footer';
import TestEnv from '../testEnvironment/TestEnv';


const Main = React.lazy(() => import('../main/Main'));

function webSite() {
    return (
        <div className='m-auto p-0 mb-0' style={{display: 'flex', flexDirection: 'column', maxWidth: '80rem', minHeight: '100vh'}}>
            <F76NavBar></F76NavBar>
            <Suspense fallback={<LoadingLine />}>
                <Main />
            </Suspense>
            <Footer />
        </div>
    );
}

function loadingLine() {
    return <LoadingLine />
}

function testEnv() {
    return <TestEnv />
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

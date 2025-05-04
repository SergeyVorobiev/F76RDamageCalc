import React, { Suspense, useEffect, useState } from 'react';
import dynamic from "next/dynamic";


const AsyncComponent = dynamic(() => import("./AsyncComponent"), {
    ssr: false,
    loading: () => <div><LoadingClock /></div>,
});

const LoadingClock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        console.log("LoadingClock mounted");
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div
            animate={{rotate: 360}}
            transition={{duration: 2, repeat: Infinity, ease: "linear"}}
            style={{fontSize: "24px", textAlign: "center"}}
            >
            Loading... {time}
            </div>
    );
};

export default function TestEnv(props) {
    console.log("TestEnv");
    return (
        <>
            <Suspense fallback={<LoadingClock />}>
                <AsyncComponent />
            </Suspense>
        </>
    );
}
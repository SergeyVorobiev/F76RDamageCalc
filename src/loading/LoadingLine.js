import Image from 'next/image';
import CachedImageNoMemo from './CachedImageNoMemo';
import ImageURLPool from './ImageURLPool';
// import { useState } from 'react';


let counter = 0;

function getLogo(noLogo) {
    if (noLogo) {
        return (<></>);
    }
    return (
        <div className="d-flex justify-content-center" style={{position: "relative"}}>
            <CachedImageNoMemo noLoad={true} className="zoom-infinite" src="number" alt="Calc Logo" style={{width: '10rem', height: '10rem'}} />
            <CachedImageNoMemo noLoad={true} className="spin-infinite" src="gear" alt="Number Logo" style={{position: "absolute", width: '10rem', height: '10rem'}} />
        </div>
    );
}

export default function LoadingLine(props) {
    const message = (props.text) ? props.text : ("Loading...");
    /*
    const [number, setNumber] = useState(false);
    setTimeout(() => {
        counter += 0.02;
        setNumber(counter);
    }, 100);
    if (!number) {
        return (<></>);
    }
    */
    const transformText1 = 0; //"rotate(" + number + "turn)";
    const transformText2 = 0;
    return (
        <>
            <div className="d-flex justify-content-center mt-2 ms-1 me-1" style={{backgroundColor: '#4e00bf'}}>
                <div style={{color: 'white'}}><b>{message}</b></div>
            </div>
            <div style={{height: '7rem'}} />
            {getLogo(props.noLogo)}
        </>
    );
}
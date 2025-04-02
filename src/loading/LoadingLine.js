import logo512 from '../resources/logos/logo512.webp';
import Image from 'next/image';


export default function LoadingLine(props) {
    const message = (props.text) ? props.text : "Loading...";
    return (
        <>
            <div className="d-flex justify-content-center mt-2 ms-1 me-1" style={{backgroundColor: '#4e00bf'}}>
                <div style={{color: 'white'}}><b>{message}</b></div>
            </div>
            <div style={{height: '10rem'}} />
            <div className="d-flex justify-content-center">
                <Image priority src={logo512} alt="Calc Logo" style={{width: '10rem', height: '10rem'}} />
            </div>
        </>
    );
}
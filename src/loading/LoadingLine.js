function getLogo(noLogo) {
    if (noLogo) {
        return (<></>);
    }
    let prefix = "/F76RDamageCalc/";
    //if (process.env.NODE_ENV === 'development') {
    //let prefix = "/";
    //}
    return (
        <div className="d-flex justify-content-center" style={{position: "relative"}}>
            <img src={prefix + "numberLogo.webp"} className="zoom-infinite" style={{width: '10rem', height: '10rem'}} />
            <img src={prefix + "bublik.webp"} className="spin-infinite" style={{position: "absolute", width: '10rem', height: '10rem'}} />
            <img src={prefix + "season.webp"} style={{position: "absolute", width: '20rem', bottom: '5.9rem', height: '6rem', transform: 'scale(0.7)'}} />
        </div>
    );
}

export default function LoadingLine(props) {
    const message = (props.text) ? props.text : ("Loading...");
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
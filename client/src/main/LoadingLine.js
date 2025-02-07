export default function LoadingLine(props) {
    const message = (props.text) ? props.text : "Loading...";
    return (
        <div className="d-flex justify-content-center mt-2 ms-1 me-1" style={{backgroundColor: '#4e00bf'}}>
            <div style={{color: 'white'}}><b>{message}</b></div>
        </div>
    );
}
import logo from '../resources/icons/ss.webp';
import Image from 'react-bootstrap/Image';


export default function LCLink(props) {
    return (
        <a style={{color: '#494949', backgroundColor: '#e4e4e4', borderRadius: '4px', alignItems: 'center'}} className="p-1 me-1 ms-1 m-0 d-flex justify-content-center" href="https://nukacrypt.com/">
            <small className="ps-1 pe-1">
                Launch codes
            </small>
        </a>
    );
}
import logo from '../resources/icons/ss.webp';
import Image from 'react-bootstrap/Image';


export default function SSLink(props) {
    return (
        <a style={{backgroundColor: '#e9fff4', borderRadius: '4px', alignItems: 'center'}} className="p-1 me-1 d-flex link-text justify-content-center" href="https://docs.google.com/spreadsheets/d/1ww8BxPfFMoS6idciAYDvekcAP9siSKzTDqFFtZ6Gs88">
            <Image className="m-0" style={{ maxHeight: '1rem' }} src={logo} fluid />
            <small className="ps-2 pe-0">
                Data Sheet
            </small>
        </a>
    );
}
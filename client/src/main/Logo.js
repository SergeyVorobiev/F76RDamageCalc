import logo from '../resources/logos/main_logo.webp';
import Image from 'react-bootstrap/Image';


export default function Logo() {
    return (
        <Image className="navbar-image" src={logo} fluid />
    );
}
import logo from '../resources/logos/main_logo.webp';
import Image from 'next/image';


export default function Logo() {
    return (
        <Image alt="Main logo" style={{width: 'auto'}} className="navbar-image" src={logo} />
    );
}
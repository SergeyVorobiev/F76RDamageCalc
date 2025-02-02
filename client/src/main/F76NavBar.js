import Image from 'react-bootstrap/Image';
import logo from '../resources/logos/main_logo.webp';
import gitLogo from '../resources/logos/github-mark.png';
import Navbar from 'react-bootstrap/Navbar';
import { memo } from 'react';


const F76NavBar = memo(function F76NavBar() {
    console.log("NavBar");
    return (
        <Navbar className="ps-1">
            <Navbar.Collapse className="justify-content-start">
                <Navbar.Brand>
                    <Image  style={{ maxHeight: '7rem' }} src={logo} fluid />
                </Navbar.Brand>
            </Navbar.Collapse>

            <Navbar.Collapse className="justify-content-end pe-1">
                <Navbar.Brand>
                    <a href="https://github.com/SergeyVorobiev/F76DamageReact">
                        <Image src={gitLogo} style={{ maxHeight: '4rem' }} />
                    </a>
                </Navbar.Brand>
            </Navbar.Collapse>
        </Navbar>
    );
});

export default F76NavBar;

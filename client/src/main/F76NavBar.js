import Image from 'react-bootstrap/Image';
import logo from '../resources/Fallout_76_logo2.png';
import gith from '../resources/github-mark.png';
import Navbar from 'react-bootstrap/Navbar';
import { memo } from 'react';


const F76NavBar = memo(function F76NavBar() {
    console.log("NavBar");
    return (
        <Navbar className="bg-body-tertiary ps-1">
            <Navbar.Collapse className="justify-content-start">
                <Navbar.Brand>
                    <Image  style={{ maxHeight: '7rem' }} src={logo} fluid />
                </Navbar.Brand>
            </Navbar.Collapse>

            <Navbar.Collapse className="justify-content-end pe-1">
                <Navbar.Brand>
                    <a href="https://github.com/SergeyVorobiev/F76DamageReact">
                        <Image src={gith} style={{ maxHeight: '4rem' }} />
                    </a>
                </Navbar.Brand>
            </Navbar.Collapse>
        </Navbar>
    );
});

export default F76NavBar;

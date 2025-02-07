import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import React, { memo, Suspense } from 'react';
import Burger from './Burger';
import Dropdown from 'react-bootstrap/Dropdown';
import BurgerMenu from './BurgerMenu';


const Logo = React.lazy(() => import('./Logo'));

const F76NavBar = memo(function F76NavBar() {
    console.log("NavBar");
    return (
        <Navbar className="p-0 ps-1 mb-2 ms-1 me-1 navbar" style={{backgroundColor: "#f8f2f2", borderRadius: "0px 0px 10px 10px", outline: '1px solid #bdb499'}}>
            <Container>
                <Navbar.Brand>
                    <Suspense fallback={<></>}>
                        <Logo />
                    </Suspense>
                </Navbar.Brand>
            </Container>
            <Navbar.Collapse className="justify-content-end pe-1">
                <Container className="center-text pe-0">
                    <Navbar.Brand href="https://nukacrypt.com/">
                        <div className="text-shadow-grey-blue" style={{fontSize: '0.7rem', fontWeight: 'bold'}}>
                            <small>🚀</small> Launch Codes
                        </div>
                    </Navbar.Brand>
                </Container>
                <Dropdown>
                    <Dropdown.Toggle as={Burger}></Dropdown.Toggle>
                    <BurgerMenu />
                </Dropdown>
            </Navbar.Collapse>
        </Navbar>
    );
});

export default F76NavBar;

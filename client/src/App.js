import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './css/bsButtons.css';
import './css/buttons.css';
import './css/bsCheck.css';
import F76NavBar from './main/F76NavBar';
import LoadingLine from './main/LoadingLine';
import Footer from './main/Footer';


const Main = React.lazy(() => import('./Main'));


export default function App() {
    return (
        <div className='m-auto p-0 mb-0' style={{display: 'flex', flexDirection: 'column', maxWidth: '80rem', minHeight: '100vh'}}>
            <F76NavBar></F76NavBar>
            <Suspense fallback={<LoadingLine />}>
                <Main />
                <Footer />
            </Suspense>

        </div>
    );
}
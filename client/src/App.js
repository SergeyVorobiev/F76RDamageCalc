import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './css/bsButtons.css';
import './css/buttons.css';
import './css/bsCheck.css';
import F76NavBar from './main/F76NavBar';
import LoadingLine from './main/LoadingLine';


const Main = React.lazy(() => import('./Main'));


export default function App() {
    return (
        <div className='ms-auto me-auto p-0 mb-0' style={{maxWidth: '80rem'}}>
            <F76NavBar></F76NavBar>
            <Suspense fallback={<LoadingLine />}>
                <Main />
            </Suspense>
        </div>
    );
}
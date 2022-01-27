import { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars} from '@react-three/drei';
import Earth from './components/Earth';
import Loading from './components/Loading';
import InputCard from './components/InputCard';

const App = () => {
    const [latitude, setLatitude] = useState('18.2208');
    const [longitude, setLongitude] = useState('-66.5901');
    const canvas = useRef();

    return (
        <div className='App' onMouseDown={() => (canvas.current.style.cursor = 'grabbing')} onMouseUp={() => (canvas.current.style.cursor = 'grab')}>
            <Suspense fallback={Loading()}>
                <InputCard setLatitude={setLatitude} setLongitude={setLongitude}/>
                <Canvas ref={canvas} style={{height:'100vh'}} camera={{position:[0,0,1.75]}} >
                    <OrbitControls zoomSpeed={.6} minDistance={1.5} maxDistance={2}/>
                    <ambientLight intensity={.5}/>
                    <spotLight position={[100, 15, 15]} angle={0.3} intensity={2} color='rgb(247,245,207)'/>
                    <Stars/>
                    <Earth lat={latitude} lon={longitude}/>
                </Canvas>
            </Suspense>
        </div>
    );
};

export default App;

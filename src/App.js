import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars} from '@react-three/drei';
import Earth from './components/Earth';
import Pin from './components/Pin';
import Loading from './components/Loading';
import InputCard from './components/InputCard';

const App = () => {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    // useEffect(() => {
    //     console.log(latitude,longitude);
    // }, [latitude, longitude]);
    
    return (
        <div className='App'>
            <Suspense fallback={Loading()}>
                <InputCard setLatitude={setLatitude} setLongitude={setLongitude}/>
                <Canvas style={{height:'100vh'}} >
                    <OrbitControls autoRotate={true} autoRotateSpeed={.7} zoomSpeed={.7} minDistance={1.5} maxDistance={3}/>
                    <ambientLight intensity={.5}/>
                    <spotLight position={[100, 15, 15]} angle={0.3} intensity={2} color='rgb(247,245,207)'/>
                    <Stars/>
                    <Earth/>
                    <Pin lat={latitude} lon={longitude}/>
                </Canvas>
            </Suspense>
        </div>
    );
};

export default App;

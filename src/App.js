import { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars} from '@react-three/drei';
import Earth from './components/Earth';
import Loading from './components/Loading';
import InputCard from './components/InputCard';

const App = () => {
    const [latitude, setLatitude] = useState('18.2208');
    const [longitude, setLongitude] = useState('-66.5901');

    const [pinX, setPinX] = useState();
    const [pinY, setPinY] = useState();
    const [pinZ, setPinZ] = useState();

    const [rotation, setRotation] = useState(true);

    const canvas = useRef();
      
    const convertCoord = () =>{
        // convert provided latitiude and longitude to radians
        let lonRad = -longitude * (Math.PI / 180); 
        let latRad = latitude * (Math.PI / 180);
        let d = 1;

        // convert radians to cartesian coordinates
        setPinX(Math.cos(latRad) * Math.cos(lonRad) * d);
        setPinY(Math.sin(latRad) * d);
        setPinZ(Math.cos(latRad) * Math.sin(lonRad) * d);
    }
    
    useEffect(() => {
        convertCoord();
    }, [latitude, longitude]);
    
    return (
        <div className='App'
        onMouseDown={() => (canvas.current.style.cursor = 'grabbing')}
        onMouseUp={() => (canvas.current.style.cursor = 'grab')}
        >
            <Suspense fallback={Loading()}> 
                <InputCard rotation={rotation} setRotation={setRotation} setLatitude={setLatitude} setLongitude={setLongitude}/>
                <Canvas ref={canvas} style={{height:'100vh'}}>
                    <OrbitControls zoomSpeed={.4} 
                    minDistance={1.3} 
                    // maxDistance={2}
                    />
                    <ambientLight intensity={0.3}/>
                    <pointLight position={[100, 0, 100]} intensity={2} decay={2} castShadow/>
                    <Earth canvas={canvas} rotation={rotation} x={pinX} y={pinY} z={pinZ}/>
                    <Stars/>
                </Canvas>
            </Suspense>
        </div>
    );
};

export default App;

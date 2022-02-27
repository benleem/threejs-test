import { Suspense, useEffect, useState, useRef } from 'react';

import axios from 'axios';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars} from '@react-three/drei';

import Earth from './threejs/Earth';
import Loading from './loading/Loading';
import MenuBar from './menu/bar/MenuBar';

const App = () => {
    // pin's initital coordianates, longitude/latitude
    const [latitude, setLatitude] = useState(18.2208);
    const [longitude, setLongitude] = useState(-66.5901);

    // pin's cartesian coordinaates on x,y,z planes
    const [pinX, setPinX] = useState();
    const [pinY, setPinY] = useState();
    const [pinZ, setPinZ] = useState();
    
    // three js earth group rotation control
    const [rotation, setRotation] = useState(true);

    // wiki data
    const [wikiData, setWikiData] = useState([]);
    const [wikiLoading, setWikiLoading] = useState(false);

    const canvas = useRef();
    const camera = useRef();

    const getInfo = async() => {
        try {
            //getting wikipedia data based on current coordinates
            setWikiLoading(true);
            const response = await axios.get(`http://api.geonames.org/findNearbyWikipediaJSON?lat=${latitude}&lng=${longitude}&maxRows=10&username=${process.env.REACT_APP_ACCOUNT_KEY}`);
            setWikiData(response.data.geonames);
            setWikiLoading(false);
        } catch (error) {
            console.log(error);
        }
    }
      
    const convertCoord = (lat, lon) =>{
        // convert provided latitiude and longitude to radians
        let latRad = lat * (Math.PI / 180);
        let lonRad = -lon * (Math.PI / 180); 
        let d = 1;

        // convert radians to cartesian coordinates
        setPinX(Math.cos(latRad) * Math.cos(lonRad) * d);
        setPinY(Math.sin(latRad) * d);
        setPinZ(Math.cos(latRad) * Math.sin(lonRad) * d);
    }
    
    useEffect(() => {
        convertCoord(latitude, longitude);
        getInfo();
    }, [latitude, longitude]);
    
    return (
        <div className='App'
        onMouseDown={() => (canvas.current.style.cursor = 'grabbing')}
        onMouseUp={() => (canvas.current.style.cursor = 'grab')}
        >
            <Suspense fallback={Loading()}> 
                <MenuBar wikiLoading={wikiLoading} 
                wikiData={wikiData} 
                rotation={rotation} 
                setRotation={setRotation}
                setLatitude={setLatitude} 
                setLongitude={setLongitude}
                pinX={pinX}
                pinY={pinY}
                pinZ={pinZ}
                camera={camera}
                />
                <Canvas ref={canvas} 
                style={{height:'100vh'}}
                >
                    <OrbitControls zoomSpeed={.4}
                    minDistance={1.15}
                    maxDistance={4}
                    />
                    <ambientLight intensity={0.3}/>
                    <pointLight position={[100, 0, -30]} 
                    intensity={2} 
                    decay={2} 
                    castShadow
                    />
                    <Earth camera={camera} 
                    canvas={canvas} 
                    rotation={rotation} 
                    x={pinX} 
                    y={pinY} 
                    z={pinZ}
                    />
                    <Stars/>
                </Canvas>
            </Suspense>
        </div>
    );
};

export default App;

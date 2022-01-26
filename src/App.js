import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, useTexture } from '@react-three/drei';
import earthImg from './textures/earth-map.jpeg';
import bumpImg from './textures/height-map.jpeg';

const App = () => {
    const Loading = () =>{
        return(
            <div className='Loading'>
                <p>Loading...</p>
            </div>
        );
    }

    const Earth = () =>{
        const [map, bumpMap] = useTexture([earthImg, bumpImg]);
        return(
            <mesh receiveShadow={true} castShadow={true}>
                <sphereGeometry args={[15, 60, 60]} position={[0,0,0]}/>
                <meshStandardMaterial map={map} bumpMap={bumpMap} roughness={.6} metalness={.1} bumpScale={70}/>
            </mesh>
        );
    }

    return (
        <div className='App'>
            <Suspense fallback={Loading()}>
                <Canvas style={{height:'100vh', backgroundColor:'black'}}>
                    <OrbitControls autoRotate={true} autoRotateSpeed={.7} minDistance={30} maxDistance={50}/>
                    <ambientLight intensity={.5}/>
                    <spotLight position={[100, 15, 15]} angle={0.3} intensity={2} color='rgb(247,245,207)'/>
                    <Stars/>
                    <Earth/>
                </Canvas>
            </Suspense>
        </div>
    );
};

export default App;

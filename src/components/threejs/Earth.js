import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture, PerspectiveCamera} from "@react-three/drei";

import Pin from "./Pin";
import Atmoshpere from "./Atmoshpere";

import earthImg from '../../textures/earth-map.jpeg';
import bumpImg from '../../textures/height-map.jpeg';

const Earth = ({ camera , canvas, rotation, x, y, z }) => {
    const earth = useRef();
    
    // drei function to load in textures
    const [map, bumpMap] = useTexture([earthImg, bumpImg]);

    useFrame(() => {
        // for each frame check if rotation is true, if true, rotate earth ref by last value plus new value
        if (rotation === true) {
            earth.current.rotation.y += 0.0008;
        }
        else{
            earth.current.rotation.y += 0;
        }
    })

    return (
        <group ref={earth} position={[0,0,0]}>
            <PerspectiveCamera ref={camera} 
            makeDefault fov={90} 
            position={[x, y, z]}
            />
            <mesh receiveShadow>
                <sphereBufferGeometry args={[1,64,64]} />
                <meshStandardMaterial map={map} 
                bumpMap={bumpMap} 
                bumpScale={0.05} 
                roughness={1} 
                metalness={0}
                />
            </mesh>
            <Pin x={x} 
            y={y} 
            z={z}
            />
            <Atmoshpere/>
        </group>
    )
};

export default Earth;

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import Pin from "./Pin";
import earthImg from '../textures/earth-map.jpeg';
import bumpImg from '../textures/height-map.jpeg';

const Earth = ({ lat, lon }) => {
    const [map, bumpMap] = useTexture([earthImg, bumpImg]);
    const earth = useRef();

    useFrame(() => {
        earth.current.rotation.y += 0.003
    })
      
    return(
        <group ref={earth}>
            <mesh receiveShadow={true} castShadow={true}>
                <sphereBufferGeometry args={[1, 30, 30]}/>
                <meshStandardMaterial map={map} bumpMap={bumpMap} bumpScale={.08} roughness={1} metalness={0}/>
            </mesh>
            <Pin lat={lat} lon={lon}/>
        </group>
        
    );
};

export default Earth;

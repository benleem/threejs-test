import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture, PerspectiveCamera} from "@react-three/drei";
import Pin from "./Pin";
import earthImg from '../textures/earth-map.jpeg';
import bumpImg from '../textures/height-map.jpeg';

const Earth = ({ rotation, x, y, z }) => {
    const earth = useRef();
    const [map, bumpMap] = useTexture([earthImg, bumpImg]);

    useFrame(() => {
        if (rotation === true) {
            earth.current.rotation.y += 0.0008;
        }
        else{
            earth.current.rotation.y += 0;
        }
    })

    return (
        <group ref={earth} position={[0,0,0]}>
            <PerspectiveCamera makeDefault fov={80} position={[x, y, z]}/>
            <mesh receiveShadow={true} castShadow={true}>
                <sphereBufferGeometry args={[1, 32, 32]}/>
                <meshStandardMaterial map={map} bumpMap={bumpMap} bumpScale={0.5} roughness={1} metalness={0}/>
            </mesh>
            <Pin x={x} y={y} z={z}/>
        </group>
    )
};

export default Earth;

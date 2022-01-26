import { useTexture } from "@react-three/drei";
import earthImg from '../textures/earth-map.jpeg';
import bumpImg from '../textures/height-map.jpeg';

const Earth = () => {
    const [map, bumpMap] = useTexture([earthImg, bumpImg]);
    return(
        <mesh receiveShadow={true} castShadow={true}>
            <sphereBufferGeometry args={[1, 30, 30]}/>
            <meshStandardMaterial map={map} bumpMap={bumpMap} bumpScale={.05} roughness={1} metalness={0}/>
        </mesh>
    );
};

export default Earth;

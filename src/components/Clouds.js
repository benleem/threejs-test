import { useRef } from 'react';
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import cloudsImg from '../textures/clouds.jpeg';

const Clouds = () => {
    const clouds = useTexture(cloudsImg);
    const ref = useRef();

    useFrame(() => {
        ref.current.rotation.y -= 0.00004;
    })

    return (
        <mesh ref={ref} receiveShadow castShadow>
            <sphereBufferGeometry args={[1.005, 32, 32]}/>
            <meshPhongMaterial color={'white'} alphaMap={clouds} transparent={true} depthWrite={false}  roughness={0} metalness={0}/>
        </mesh>
    );
};

export default Clouds;

const Pin = ({ x, y, z }) => {
    return(
        <mesh receiveShadow={true} castShadow={true} position={[x,y,z]}>
            <sphereBufferGeometry args={[0.008, 32, 32]} />
            <meshStandardMaterial color='red'/>
        </mesh>
    );
};

export default Pin;

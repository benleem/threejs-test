const Pin = ({ canvas, x, y, z }) => {
    return(
        <mesh
        // onPointerOver={() => (canvas.current.style.cursor = 'pointer')}
        onPointerOut={() => (canvas.current.style.cursor = 'grab')}
        onPointerEnter={() => (canvas.current.style.cursor = 'pointer')}
        onClick={() => console.log('Pin clicked')} 
        receiveShadow 
        castShadow
        position={[x,y,z]}
        >
            <sphereBufferGeometry args={[0.008, 32, 32]} />
            <meshStandardMaterial color='red'/>
        </mesh>
    );
};

export default Pin;

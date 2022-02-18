const Pin = ({ canvas, x, y, z }) => {
    //take cartesian coordinate values x, y, z and use it to plot a point on sphere
    return(
        <mesh
        // onPointerOut={() => (canvas.current.style.cursor = 'grab')}
        // onPointerEnter={() => (canvas.current.style.cursor = 'pointer')}
        // onClick={() => console.log('Pin clicked')} 
        receiveShadow 
        castShadow
        position={[x,y,z]}
        >
            <sphereBufferGeometry args={[0.004, 32, 32]} />
            <meshStandardMaterial color='red'/>
        </mesh>
    );
};

export default Pin;

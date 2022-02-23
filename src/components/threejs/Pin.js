const Pin = ({ x, y, z }) => {
    return(
        <mesh
        receiveShadow 
        castShadow

        //take cartesian coordinate values x, y, z and use it to plot a point on sphere
        position={[x,y,z]}
        >
            <sphereBufferGeometry args={[0.004, 32, 32]} />
            <meshStandardMaterial color='red'/>
        </mesh>
    );
};

export default Pin;

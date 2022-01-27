const Pin = ({ lat, lon }) => {
    var lonRad = -lon * (Math.PI / 180);
    var latRad = lat * (Math.PI / 180);
    var d = 1;

    return(
        <mesh receiveShadow={true} castShadow={true} position={[
            Math.cos(latRad) * Math.cos(lonRad) * d,
            Math.sin(latRad) * d,
            Math.cos(latRad) * Math.sin(lonRad) * d]}>
            <sphereBufferGeometry args={[0.01, 32, 32]} />
            <meshStandardMaterial color='red'/>
        </mesh>
    );
};

export default Pin;

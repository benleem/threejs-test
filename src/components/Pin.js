const Pin = ({ lat, lon }) => {
    var lonRad = -lon * (Math.PI / 180);
    var latRad = lat * (Math.PI / 180);
    var r = 1;

    return(
        <mesh receiveShadow={true} castShadow={true} position={[
            Math.cos(latRad) * Math.cos(lonRad) * r,
            Math.sin(latRad) * r,
            Math.cos(latRad) * Math.sin(lonRad) * r]}>
            <sphereBufferGeometry args={[.01, 32, 32]} />
            <meshStandardMaterial color='red'/>
        </mesh>
    );
};

export default Pin;

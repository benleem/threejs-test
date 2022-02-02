const Atmoshpere = () => {
    var uniforms = {};

    var vertexShader = `
        void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
    `;
      
    var fragmentShader = `
        void main() {
            gl_FragColor = vec4( 0, 0.5, 1.0, .1 );
        }
    `;

    return (
        <mesh position={[0,0,0]}>
            <sphereBufferGeometry args={[1.015, 32, 32]}/>
            <shaderMaterial transparent={true} depthWrite={false} vertexShader={vertexShader} fragmentShader={fragmentShader} />
        </mesh>
    );
};

export default Atmoshpere;

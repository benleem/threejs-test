import * as THREE from 'three';

const Atmoshpere = () => {
    const color = new THREE.Color( 0x6b7fff );

    var innerUniforms = {
        coeficient: { value: 1 },
        power: { value: 1 },
        glowColor: { value: color }
    };
    
    var outerUniforms = {
        coeficient: { value: 0.9 },
        power: { value: 10 },
        glowColor: { value: color }
    };

    var vertexShader = `
        varying vec3 vVertexWorldPosition;
        varying vec3 vVertexNormal;
            
        void main() {
            vVertexNormal = normalize(normalMatrix * normal);
            vVertexWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
                
            // set gl_Position
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `;

    var fragmentShader = `
        uniform vec3 glowColor;
        uniform float coeficient;
        uniform float power;
        
        varying vec3 vVertexNormal;
        varying vec3 vVertexWorldPosition;
        
        void main() {
            vec3 worldCameraToVertex = vVertexWorldPosition - cameraPosition;
            vec3 viewCameraToVertex = (viewMatrix * vec4(worldCameraToVertex, 0.0)).xyz;
            viewCameraToVertex = normalize(viewCameraToVertex);
            float intensity = pow(coeficient + dot(vVertexNormal, viewCameraToVertex), power);

            gl_FragColor = vec4(glowColor, intensity * 0.3  );
        }
    `;

    return (
        <group>
            <mesh position={[0,0,0]}>
                <icosahedronBufferGeometry args={[1.0003, 32, 32]}/>
                <shaderMaterial transparent={true} depthWrite={false} uniforms={innerUniforms} vertexShader={vertexShader} fragmentShader={fragmentShader} />
            </mesh>
            <mesh position={[0,0,0]}>
                <icosahedronBufferGeometry args={[1.01, 32, 32]}/>
                <shaderMaterial side={THREE.BackSide} transparent={true} depthWrite={false} uniforms={outerUniforms} vertexShader={vertexShader} fragmentShader={fragmentShader} />
            </mesh>
        </group>
        
    );
};

export default Atmoshpere;
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";



function Model(props) {
  const { scene } = useGLTF("/girl.glb");
  return <primitive object={scene} scale={0.01} {...props} />
}
function Plane() {
  return (
    <mesh receiveShadow rotation-x={-Math.PI / 2}>
      <planeGeometry args={[70, 100]} />
      <meshStandardMaterial color="#ffffff" />
    </mesh>
  );
}

function KeyLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={5}
      height={3}
      color={color}
      intensity={brightness}
      position={[-2, 0, 10]}
      lookAt={[0, 0, 0]}
      penumbra={1}
      castShadow
    />
  );
}

function FillLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={3}
      height={3}
      intensity={brightness}
      color={color}
      position={[2, 1, 4]}
      lookAt={[0, 0, 0]}
      penumbra={2}
      castShadow
    />
  );
}
function RimLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={2}
      height={2}
      intensity={brightness}
      color={color}
      position={[1, 4, -2]}
      rotation={[0, 180, 0]}
      castShadow
    />
  );
}

  export default function App() {
   
  return (
   <Canvas dpr={[4,5]} shadows camera={{fov:45, position: [0, -9, 5]}} style={{"position":"absolute"}} >
    
    <color attach="background" args={["#101010"]} />
    <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
    <Stage environment={null}>
    <Plane position={[0, -0.5, 0]} />
    <Model scale={13} position={[0, 0, 0]}/>
    <KeyLight brightness={5.6} color="#ffbdf4" />
          <FillLight brightness={2.6} color="#bdefff" />
          <RimLight brightness={54} color="#fff" />
    
    </Stage>

    </PresentationControls>

   </Canvas>
  );
}
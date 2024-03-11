import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import newscroll from "../assets/3d/detail_scroll.glb";

function Scroll({ position = [0, 0, 0], scale = [1, 1, 1], rotation = [50, 4.7, -1.9], ...props }) {
  const { nodes, materials } = useGLTF(newscroll);
  return (
    <group position={position} scale={scale} rotation={rotation} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pPlane36_WoodSigns_0.geometry}
        material={materials.WoodSigns}
      />
    </group>
  );
}
export default Scroll;



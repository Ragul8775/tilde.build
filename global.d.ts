import * as ReactThreeFiber from "@react-three/fiber";
import * as THREE from "three";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      myShaderMaterial: ReactThreeFiber.MaterialNode<
        THREE.ShaderMaterial,
        typeof THREE.ShaderMaterial
      >;
    }
  }
}

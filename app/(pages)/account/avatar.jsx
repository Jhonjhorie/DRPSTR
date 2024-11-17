// BasicDisplay.js
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { View, StyleSheet } from "react-native";

const CharacterFace = () => {
  return (
    <>
      {/* Head */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color={"#ffcc99"} />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.15, 1.65, 0.25]}>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshStandardMaterial color={"white"} />
      </mesh>
      <mesh position={[0.15, 1.65, 0.25]}>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshStandardMaterial color={"white"} />
      </mesh>

      {/* Pupils */}
      <mesh position={[-0.15, 1.65, 0.35]}>
        <sphereGeometry args={[0.05, 32, 32]} />
        <meshStandardMaterial color={"black"} />
      </mesh>
      <mesh position={[0.15, 1.65, 0.35]}>
        <sphereGeometry args={[0.05, 32, 32]} />
        <meshStandardMaterial color={"black"} />
      </mesh>

      {/* Mouth */}
      <mesh position={[0, 1.4, 0.25]}>
        <planeGeometry args={[0.3, 0.1]} />
        <meshStandardMaterial color={"red"} />
      </mesh>

      {/* Nose */}
      <mesh position={[0, 1.5, 0.4]}>
        <coneGeometry args={[0.05, 0.1, 32]} />
        <meshStandardMaterial color={"#ffcc99"} />
      </mesh>
    </>
  );
};

const CharacterBody = () => {
  return (
    <>
      {/* Body */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 1, 32]} />
        <meshStandardMaterial color={"#007BFF"} /> {/* Shirt color */}
      </mesh>

      {/* Arms */}
      <mesh position={[-0.6, 0.5, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 1, 32]} />
        <meshStandardMaterial color={"#ffcc99"} />
      </mesh>
      <mesh position={[0.6, 0.5, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 1, 32]} />
        <meshStandardMaterial color={"#ffcc99"} />
      </mesh>

      {/* Legs */}
      <mesh position={[-0.25, -0.5, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 1, 32]} />
        <meshStandardMaterial color={"#6c757d"} /> {/* Pants color */}
      </mesh>
      <mesh position={[0.25, -0.5, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 1, 32]} />
        <meshStandardMaterial color={"#6c757d"} />
      </mesh>
    </>
  );
};

const BasicDisplay = () => {
  return (
    <View style={styles.container}>
      <Canvas style={styles.canvas}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <CharacterFace />
        <CharacterBody />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  canvas: {
    flex: 1,
  },
});

export default BasicDisplay;
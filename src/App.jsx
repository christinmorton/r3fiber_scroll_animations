// Import necessary modules from React, React-Three-Fiber, and Drei
import { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Plane, Sphere, OrbitControls } from "@react-three/drei";
import { BrowserRouter } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Canvas>
      </Canvas>
    </BrowserRouter>
  )
}

export default App

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import ParticleField from "./ParticleField";

const Scene = ({ className }) => {
    return (
        <div className={className}>
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: "high-performance",
                }}
                dpr={[1, 2]}
            >
                <Suspense fallback={null}>
                    {/* Ambient lighting */}
                    <ambientLight intensity={0.5} />

                    {/* Particle field background — reduced count for performance */}
                    <ParticleField count={800} />

                    {/* Subtle fog for depth */}
                    <fog attach="fog" args={["#0a0a0f", 8, 20]} />

                    {/* Preload all assets */}
                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Scene;

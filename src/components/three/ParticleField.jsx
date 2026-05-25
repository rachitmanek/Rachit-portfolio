import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ParticleField = ({ count = 2000 }) => {
    const meshRef = useRef();
    const mouseRef = useRef({ x: 0, y: 0 });

    // Generate particle positions
    const { positions, originalPositions, colors, sizes } = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const originalPositions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const sizes = new Float32Array(count);

        const colorPrimary = new THREE.Color("#8b5cf6");
        const colorSecondary = new THREE.Color("#06b6d4");

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;

            // Spread particles in a sphere
            const radius = Math.random() * 10 + 5;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            const x = radius * Math.sin(phi) * Math.cos(theta);
            const y = radius * Math.sin(phi) * Math.sin(theta);
            const z = radius * Math.cos(phi) - 5;

            positions[i3] = x;
            positions[i3 + 1] = y;
            positions[i3 + 2] = z;

            originalPositions[i3] = x;
            originalPositions[i3 + 1] = y;
            originalPositions[i3 + 2] = z;

            // Interpolate colors
            const mixRatio = Math.random();
            const color = colorPrimary.clone().lerp(colorSecondary, mixRatio);
            colors[i3] = color.r;
            colors[i3 + 1] = color.g;
            colors[i3 + 2] = color.b;

            sizes[i] = Math.random() * 2 + 0.5;
        }

        return { positions, originalPositions, colors, sizes };
    }, [count]);

    // Track mouse movement
    React.useEffect(() => {
        const handleMouseMove = (e) => {
            mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Animation loop
    useFrame((state) => {
        if (!meshRef.current) return;

        const time = state.clock.elapsedTime;
        const positions = meshRef.current.geometry.attributes.position.array;

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;

            // Add floating motion
            positions[i3] =
                originalPositions[i3] +
                Math.sin(time * 0.5 + i * 0.01) * 0.3 +
                mouseRef.current.x * 0.3;
            positions[i3 + 1] =
                originalPositions[i3 + 1] +
                Math.cos(time * 0.3 + i * 0.02) * 0.3 +
                mouseRef.current.y * 0.3;
            positions[i3 + 2] =
                originalPositions[i3 + 2] + Math.sin(time * 0.4 + i * 0.015) * 0.2;
        }

        meshRef.current.geometry.attributes.position.needsUpdate = true;
        meshRef.current.rotation.y = time * 0.02;
    });

    return (
        <points ref={meshRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={count}
                    array={colors}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-size"
                    count={count}
                    array={sizes}
                    itemSize={1}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.08}
                vertexColors
                transparent
                opacity={0.8}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
};

export default ParticleField;

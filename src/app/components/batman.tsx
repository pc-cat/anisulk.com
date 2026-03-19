'use client';

import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, ThreeElements } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';

const START_Y = 8;    // model enters from above the camera
const REST_Y = -1.9; // resting / landing position
const FALL_DURATION = 1.6; // seconds to reach the landing point

type GroupProps = ThreeElements['group'];

interface BatmanModelProps extends GroupProps {
    /** Normalized mouse X, range -1 (left) → +1 (right). Pass as a ref to avoid re-renders. */
    mouseX: React.MutableRefObject<number>;
    /** Uniform scale multiplier (applied on top of the model's native 100× factor). */
    scale?: number;
}

type GLTFResult = GLTF & {
    nodes: {
        [key: string]: THREE.Mesh;
    };
    materials: {
        [key: string]: THREE.Material;
    };
};

export function BatmanModel({ scale = 1, mouseX, ...props }: BatmanModelProps) {
    const groupRef = useRef<THREE.Group>(null);
    const { nodes, materials } = useGLTF('/models/batman_ben_affleck.glb') as unknown as GLTFResult;

    const elapsedRef = useRef(0);
    const landedRef = useRef(false);

    useFrame((_, delta) => {
        if (!groupRef.current) return;

        if (!landedRef.current) {
            // ── FALLING PHASE ──────────────────────────────────────────────
            elapsedRef.current += delta;
            const t = Math.min(elapsedRef.current / FALL_DURATION, 1);

            // Ease-out cubic — slows to a gentle stop at REST_Y
            const eased = 1 - Math.pow(1 - t, 3);
            groupRef.current.position.y = THREE.MathUtils.lerp(START_Y, REST_Y, eased);

            if (t >= 1) landedRef.current = true;
        } else {
            // ── LANDED PHASE — horizontal mouse tracking only ───────────────
            // Map mouseX (-1 → +1) to ±35°
            const targetY = mouseX.current * (Math.PI * 0.19);
            groupRef.current.rotation.y = THREE.MathUtils.lerp(
                groupRef.current.rotation.y,
                targetY,
                delta * 4, // smoothing speed
            );
            // Lock vertical rotation
            groupRef.current.rotation.x = 0;
            groupRef.current.rotation.z = 0;
        }
    });

    return (
        <group ref={groupRef} {...props} dispose={null}>
            <group scale={scale * 100}>
                <mesh castShadow receiveShadow geometry={nodes.Generic_Gold001_0.geometry} material={materials['Gold.001']} />
                <mesh castShadow receiveShadow geometry={nodes.Generic_BatSkin_0.geometry} material={materials.BatSkin} />
                <mesh castShadow receiveShadow geometry={nodes.Generic_BatBlack_0.geometry} material={materials.BatBlack} />
                <mesh castShadow receiveShadow geometry={nodes.Generic_BatMetal_0.geometry} material={materials.BatMetal} />
                <mesh castShadow receiveShadow geometry={nodes.Generic_BatStraps_0.geometry} material={materials.BatStraps} />
                <mesh castShadow receiveShadow geometry={nodes.Generic_BatGray_0.geometry} material={materials.BatGray} />
                <mesh castShadow receiveShadow geometry={nodes.Generic_BatCape_0.geometry} material={materials.BatCape} />
            </group>
        </group>
    );
}

useGLTF.preload('/models/batman_ben_affleck.glb');

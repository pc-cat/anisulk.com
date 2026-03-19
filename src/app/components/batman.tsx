'use client';

import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame, useGraph, ThreeElements } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTF, SkeletonUtils } from 'three-stdlib';

const START_Y = 8;    // model enters from above the camera
const REST_Y = -1.9; // resting / landing position
const FALL_DURATION = 1.6; // seconds to reach the landing point

type GroupProps = ThreeElements['group'];

interface BatmanModelProps extends GroupProps {
    /** Normalized mouse X, range -1 (left) → +1 (right). Pass as a ref to avoid re-renders. */
    mouseX: React.MutableRefObject<number>;
    /** Uniform scale multiplier. */
    scale?: number;
}

type ActionName = 'IDLE001' | 'IDLE001_1' | 'IDLE002' | 'IDLE003';

interface GLTFAction extends THREE.AnimationClip {
    name: ActionName;
}

type GLTFResult = GLTF & {
    nodes: {
        Object_7: THREE.SkinnedMesh;
        _rootJoint: THREE.Bone;
    };
    materials: {
        H_BatMan_D: THREE.MeshStandardMaterial;
    };
    animations: GLTFAction[];
};

export function BatmanModel({ scale = 1, mouseX, ...props }: BatmanModelProps) {
    const groupRef = useRef<THREE.Group>(null);
    const { scene, animations } = useGLTF('/models/batman_ben_affleck.glb?v=3');
    const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
    const { nodes, materials } = useGraph(clone) as unknown as GLTFResult;
    const { actions } = useAnimations(animations, groupRef);

    const elapsedRef = useRef(0);
    const landedRef = useRef(false);

    useEffect(() => {
        // Play an idle animation if available
        if (actions && actions['IDLE001']) {
            actions['IDLE001'].play();
        } else if (actions && Object.keys(actions).length > 0) {
            const firstAction = Object.keys(actions)[0];
            actions[firstAction]?.play();
        }
    }, [actions]);

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
                <group name="Sketchfab_Scene">
                    <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={90.402}>
                        <group name="Batmanfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                            <group name="Object_2">
                                <group name="RootNode">
                                    <group name="Object_4">
                                        <primitive object={nodes._rootJoint} />
                                        <group name="Object_6" rotation={[-Math.PI / 2, 0, 0]} />
                                        <skinnedMesh 
                                            castShadow 
                                            receiveShadow 
                                            name="Object_7" 
                                            geometry={nodes.Object_7.geometry} 
                                            material={materials.H_BatMan_D} 
                                            skeleton={nodes.Object_7.skeleton} 
                                        />
                                    </group>
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload('/models/batman_ben_affleck.glb?v=3');

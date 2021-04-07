import { OrbitControls } from '@react-three/drei';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import MeCube from './components/me-cube';
import AltCube from './components/altcube';

import './styles.css';

export default function App() {
	return (
		<Canvas
			colorManagement
			camera={{
				position: [0, 0, 5],
				fov: 75
			}}
		>
			<ambientLight intensity={0.9} />

			{/* We can add a color to the canvas via the threejs class color and access
      it as a JSX node */}
			<color attach="background" args={['#1d1d1d']} />
			<Suspense fallback={null}>
				<MeCube />
				<AltCube />
			</Suspense>
			<OrbitControls />
		</Canvas>
	);
}

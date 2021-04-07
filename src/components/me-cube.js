import React from 'react';
import { useCubeTexture, useTexture } from '@react-three/drei';

const MeCube = () => {
	// Load the texture. This is a single texture that will be placed on all 6 sides of the cube
	// const vmilitaryTexture = useCubeTexture(
	// 	['me.jpg', 'me.jpg', 'me.jpg', 'me.jpg', 'me.jpg', 'me.jpg'],
	// 	{ path: './' }
	// );
	const [militaryTexture] = useTexture(['/me.jpg']);
	// console.log(vmilitaryTexture)
	console.log(militaryTexture);

	return (
		<mesh visible position={[0, 0, 0]} rotation={[10, 20, 0]}>
			<boxGeometry attach="geometry" args={[1, 1, 1]} />
			<meshBasicMaterial attach="material" map={militaryTexture} />
		</mesh>
	);
};

export default MeCube;

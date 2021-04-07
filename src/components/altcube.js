import React from 'react';
import { useCubeTexture, useTexture } from '@react-three/drei';
import THREE from 'three';
const textList = [1, 2, 3, 4, 5, 6].map((vel, i) => {
	return 'me.jpg';
});
console.log('tx', textList);
// console.log("A",[1,2,3].map((v)=>{console.log(v)}))
const MeCube = () => {
	// Load the texture. This is a single texture that will be placed on all 6 sides of the cube
	const vmilitaryTexture = useCubeTexture(
		['me.jpg', 'me.jpg', 'me.jpg', 'me.jpg', 'me.jpg', 'me.jpg'],
		{ path: './' }
	);
	// const [militaryTexture] = useTexture(['/me.jpg']);
	// console.log(THREE);
	// console.log(militaryTexture)

	return (
		<mesh visible position={[1, 1, 2]} rotation={[10, 20, 0]}>
			scale={0.1}
			<boxGeometry
				// attach="geometry"
				args={[1, 1, 1]}
			/>
			{/* <meshStandardMaterial envMap={texture} /> */}
			<meshLambertMaterial
				skinning={true}
				//  attach="material"
				envMap={vmilitaryTexture}
			/>
			{/* <meshLambertMaterial attach="material" envMap={vmilitaryTexture} /> */}
		</mesh>
	);
};

export default MeCube;

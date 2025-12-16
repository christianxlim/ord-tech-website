'use client';

import type React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type FallingPatternProps = React.ComponentProps<'div'> & {
	/** Primary color of the falling elements (default: 'var(--primary)') */
	color?: string;
	/** Background color (default: 'var(--background)') */
	backgroundColor?: string;
	/** Animation duration in seconds (default: 150) */
	duration?: number;
	/** Blur intensity for the overlay effect (default: '1em') */
	blurIntensity?: string;
	/** Pattern density - affects spacing (default: 1) */
	density?: number;
	/** Scale multiplier for pattern size (default: 1) */
	scale?: number;
};

export function FallingPattern({
	color = 'var(--primary)',
	backgroundColor = 'var(--background)',
	duration = 150,
	blurIntensity = '1em',
	density = 1,
	scale = 1,
	className,
}: FallingPatternProps) {
	// Generate background image style with customizable color and scale
	const generateBackgroundImage = () => {
		const s = scale;
		const patterns = [
			// Row 1
			`radial-gradient(${4*s}px ${100*s}px at ${0*s}px ${235*s}px, ${color}, transparent)`,
			`radial-gradient(${4*s}px ${100*s}px at ${300*s}px ${235*s}px, ${color}, transparent)`,
			`radial-gradient(${1.5*s}px ${1.5*s}px at ${150*s}px ${117.5*s}px, ${color} 100%, transparent 150%)`,
			// Row 2
			`radial-gradient(${4*s}px ${100*s}px at ${0*s}px ${252*s}px, ${color}, transparent)`,
			`radial-gradient(${4*s}px ${100*s}px at ${300*s}px ${252*s}px, ${color}, transparent)`,
			`radial-gradient(${1.5*s}px ${1.5*s}px at ${150*s}px ${126*s}px, ${color} 100%, transparent 150%)`,
			// Row 3
			`radial-gradient(${4*s}px ${100*s}px at ${0*s}px ${150*s}px, ${color}, transparent)`,
			`radial-gradient(${4*s}px ${100*s}px at ${300*s}px ${150*s}px, ${color}, transparent)`,
			`radial-gradient(${1.5*s}px ${1.5*s}px at ${150*s}px ${75*s}px, ${color} 100%, transparent 150%)`,
			// Row 4
			`radial-gradient(${4*s}px ${100*s}px at ${0*s}px ${253*s}px, ${color}, transparent)`,
			`radial-gradient(${4*s}px ${100*s}px at ${300*s}px ${253*s}px, ${color}, transparent)`,
			`radial-gradient(${1.5*s}px ${1.5*s}px at ${150*s}px ${126.5*s}px, ${color} 100%, transparent 150%)`,
			// Row 5
			`radial-gradient(${4*s}px ${100*s}px at ${0*s}px ${204*s}px, ${color}, transparent)`,
			`radial-gradient(${4*s}px ${100*s}px at ${300*s}px ${204*s}px, ${color}, transparent)`,
			`radial-gradient(${1.5*s}px ${1.5*s}px at ${150*s}px ${102*s}px, ${color} 100%, transparent 150%)`,
			// Row 6
			`radial-gradient(${4*s}px ${100*s}px at ${0*s}px ${134*s}px, ${color}, transparent)`,
			`radial-gradient(${4*s}px ${100*s}px at ${300*s}px ${134*s}px, ${color}, transparent)`,
			`radial-gradient(${1.5*s}px ${1.5*s}px at ${150*s}px ${67*s}px, ${color} 100%, transparent 150%)`,
			// Row 7
			`radial-gradient(${4*s}px ${100*s}px at ${0*s}px ${179*s}px, ${color}, transparent)`,
			`radial-gradient(${4*s}px ${100*s}px at ${300*s}px ${179*s}px, ${color}, transparent)`,
			`radial-gradient(${1.5*s}px ${1.5*s}px at ${150*s}px ${89.5*s}px, ${color} 100%, transparent 150%)`,
			// Row 8
			`radial-gradient(${4*s}px ${100*s}px at ${0*s}px ${299*s}px, ${color}, transparent)`,
			`radial-gradient(${4*s}px ${100*s}px at ${300*s}px ${299*s}px, ${color}, transparent)`,
			`radial-gradient(${1.5*s}px ${1.5*s}px at ${150*s}px ${149.5*s}px, ${color} 100%, transparent 150%)`,
			// Row 9
			`radial-gradient(${4*s}px ${100*s}px at ${0*s}px ${215*s}px, ${color}, transparent)`,
			`radial-gradient(${4*s}px ${100*s}px at ${300*s}px ${215*s}px, ${color}, transparent)`,
			`radial-gradient(${1.5*s}px ${1.5*s}px at ${150*s}px ${107.5*s}px, ${color} 100%, transparent 150%)`,
			// Row 10
			`radial-gradient(${4*s}px ${100*s}px at ${0*s}px ${281*s}px, ${color}, transparent)`,
			`radial-gradient(${4*s}px ${100*s}px at ${300*s}px ${281*s}px, ${color}, transparent)`,
			`radial-gradient(${1.5*s}px ${1.5*s}px at ${150*s}px ${140.5*s}px, ${color} 100%, transparent 150%)`,
			// Row 11
			`radial-gradient(${4*s}px ${100*s}px at ${0*s}px ${158*s}px, ${color}, transparent)`,
			`radial-gradient(${4*s}px ${100*s}px at ${300*s}px ${158*s}px, ${color}, transparent)`,
			`radial-gradient(${1.5*s}px ${1.5*s}px at ${150*s}px ${79*s}px, ${color} 100%, transparent 150%)`,
			// Row 12
			`radial-gradient(${4*s}px ${100*s}px at ${0*s}px ${210*s}px, ${color}, transparent)`,
			`radial-gradient(${4*s}px ${100*s}px at ${300*s}px ${210*s}px, ${color}, transparent)`,
			`radial-gradient(${1.5*s}px ${1.5*s}px at ${150*s}px ${105*s}px, ${color} 100%, transparent 150%)`,
		];

		return patterns.join(', ');
	};

	const s = scale;
	const backgroundSizes = [
		`${300*s}px ${235*s}px`,
		`${300*s}px ${235*s}px`,
		`${300*s}px ${235*s}px`,
		`${300*s}px ${252*s}px`,
		`${300*s}px ${252*s}px`,
		`${300*s}px ${252*s}px`,
		`${300*s}px ${150*s}px`,
		`${300*s}px ${150*s}px`,
		`${300*s}px ${150*s}px`,
		`${300*s}px ${253*s}px`,
		`${300*s}px ${253*s}px`,
		`${300*s}px ${253*s}px`,
		`${300*s}px ${204*s}px`,
		`${300*s}px ${204*s}px`,
		`${300*s}px ${204*s}px`,
		`${300*s}px ${134*s}px`,
		`${300*s}px ${134*s}px`,
		`${300*s}px ${134*s}px`,
		`${300*s}px ${179*s}px`,
		`${300*s}px ${179*s}px`,
		`${300*s}px ${179*s}px`,
		`${300*s}px ${299*s}px`,
		`${300*s}px ${299*s}px`,
		`${300*s}px ${299*s}px`,
		`${300*s}px ${215*s}px`,
		`${300*s}px ${215*s}px`,
		`${300*s}px ${215*s}px`,
		`${300*s}px ${281*s}px`,
		`${300*s}px ${281*s}px`,
		`${300*s}px ${281*s}px`,
		`${300*s}px ${158*s}px`,
		`${300*s}px ${158*s}px`,
		`${300*s}px ${158*s}px`,
		`${300*s}px ${210*s}px`,
		`${300*s}px ${210*s}px`,
	].join(', ');

	// Generate more random positions for less repetitive pattern
	const generateRandomPositions = (count: number, maxX: number, maxY: number, seed: number) => {
		const positions: [number, number][] = [];
		// Simple seeded random for consistency
		let rand = seed;
		const seededRandom = () => {
			rand = (rand * 9301 + 49297) % 233280;
			return rand / 233280;
		};
		
		for (let i = 0; i < count; i++) {
			const x = seededRandom() * maxX;
			const y = seededRandom() * maxY;
			positions.push([x, y]);
		}
		return positions;
	};
	
	const startPositions = generateRandomPositions(36, 600, 400, 42)
		.map(([x, y]) => `${x*s}px ${y*s}px`).join(', ');
	
	const endPositions = generateRandomPositions(36, 600, 20000, 42)
		.map(([x, y]) => `${x*s}px ${y*s}px`).join(', ');
	return (
		<div className={cn('relative h-full w-full p-1', className)}>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.2 }}
				className="size-full"
			>
				<motion.div
					className="relative size-full z-0"
					style={{
						backgroundColor,
						backgroundImage: generateBackgroundImage(),
						backgroundSize: backgroundSizes,
					}}
					variants={{
						initial: {
							backgroundPosition: startPositions,
						},
						animate: {
							backgroundPosition: [startPositions, endPositions],
							transition: {
								duration: duration,
								ease: 'linear',
								repeat: Number.POSITIVE_INFINITY,
							},
						},
					}}
					initial="initial"
					animate="animate"
				/>
			</motion.div>
			<div
				className="absolute inset-0 z-1 dark:brightness-600"
				style={{
					backdropFilter: `blur(${blurIntensity})`,
					backgroundImage: `radial-gradient(circle at 50% 50%, transparent 0, transparent 2px, ${backgroundColor} 2px)`,
					backgroundSize: `${8 * density}px ${8 * density}px`,
				}}
			/>
		</div>
	);
}

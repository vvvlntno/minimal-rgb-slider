"use client";
import React, { useEffect, useState } from 'react';

type SavedColorsProps = {};

function addLeadingZeros(num: number): string {
    return num.toString().padStart(3, '0');
}

export type Color = {
	id: number;
	red: number;
	green: number;
	blue: number;
	name: string;
};

const SavedColors: React.FC<SavedColorsProps> = () => {
	const [error, setError] = useState<string | null>(null);
    const [colorData, setColorData] = useState<Color[]>([]);

	useEffect(() => {
		const fetchColors = async () => {
			try {
				const response = await fetch('http://127.0.0.1:8000/get_colors.php');

				if (!response.ok) {
					if (response.status === 404) {
						throw new Error('Colors not found');
					}
					throw new Error('Failed to fetch colors');
				}

				const data = await response.json();
                setColorData(data);
			} catch (err) {
				setError(err instanceof Error ? err.message : 'An error occurred');
			}
		};

		fetchColors();
	}, []);

	if (error) {
		return (
            <p className='text-red-600'>Error: {error}</p>
		);
	}

	return (
        <>
            {colorData.map((color, idx) => (
                <div key={color.id ?? idx} className='flex flex-row gap-5'>
                    <p>R</p>
                    <p>{addLeadingZeros(color.red)}</p>
                    <p>G</p>
                    <p>{addLeadingZeros(color.green)}</p>
                    <p>B</p>
                    <p>{addLeadingZeros(color.blue)}</p>
                    <div 
                    className="w-[25px] h-[25px] bg-white rounded-md border-black border-2"
                    style={{ backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})` }}
                    />
                    <p>{color.name}</p>
                </div>
            ))}
        </>
	);
};

export default SavedColors;
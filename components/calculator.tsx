"use client";

import { useState } from "react";

const btnValues = [
	[7, 8, 9, "%"],
	[4, 5, 6, "*"],
	[1, 2, 3, "-"],
	[".", 0, "=", "+"],
];

const Calculator = () => {
	const [clicked, setClicked] = useState("0");
	const [reset, setReset] = useState(false);
	const [selectedValues, setSelectedValues] = useState<string[]>([]);
	const [displayResult, setDisplayResult] = useState(false);
	const [showSelect, setShowSelect] = useState(false); // Add this state

	const handleClicked = (value: any) => {
		const result = value;

		if (value === "YOUR_TRIGGER_BUTTON_VALUE") {
			setShowSelect(true);
		} else {
			setShowSelect(false);
		}
	};

	const handleReset = () => {
		setClicked("0");
		setReset(false);
		setSelectedValues([]);
		setShowSelect(false); // Reset the select input display
	};

	const handleBack = () => {
		setSelectedValues((preValues) => {
			const updateValues = [...preValues];
			updateValues.pop();
			return updateValues;
		});
	};

	return (
		<div className="bg-slate-400 w-[400px] h-[550px] rounded-lg border-2 border-black">
			<div className="bg-slate-200 w-[400] h-[100px] m-5 rounded-lg border-2 border-black">
				<div className="text-5xl flex justify-end items-end m-5 overflow-hidden">
					{selectedValues.map((value, i) => (
						<div key={i}>{value}</div>
					))}
					{showSelect && (
						<input
							type="text"
							value={clicked}
							onChange={(e) => setClicked(e.target.value)}
						/>
					)}
				</div>
			</div>
			<div className="flex flex-col gap-2">
				<div className="grid grid-cols-2 gap-5 mx-5 my-2">
					<button
						className="bg-red-200 w-auto px-16 py-5 rounded-lg border-2 border-black hover:bg-red-300 ease-in-out duration-300"
						onClick={handleBack}
					>
						Delete
					</button>
					<button
						className="bg-green-200 w-auto px-16 py-5 rounded-lg border-2 border-black hover:bg-green-300 ease-in-out duration-300"
						onClick={handleReset}
					>
						Clear
					</button>
				</div>
				<div className="grid grid-cols-4 mx-5 gap-2">
					{btnValues.flat().map((btn, i) => (
						<button
							key={i}
							value={btn}
							className="bg-slate-200 px-7 py-5 rounded-lg border-2 border-black hover:bg-teal-400 hover:text-white ease-in-out duration-300"
							onClick={() => handleClicked(btn)}
						>
							{btn}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default Calculator;

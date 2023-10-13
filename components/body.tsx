"use client";

import { useState } from "react";

const btnValues = [
	[7, 8, 9, "%"],
	[4, 5, 6, "*"],
	[1, 2, 3, "-"],
	[".", 0, "=", "+"],
];

const Body = () => {
	const [clicked, setClicked] = useState("0");
	const [reset, setReset] = useState(false);
	const [selectedValues, setSelectedValues] = useState<string[]>([]);
	const [displayResult, setDisplayResult] = useState(false);

	function calExpression(exp: any) {
		try {
			const operators = /[+\-*/%]/;
			const parts = exp.split(operators);

			if (parts.length !== 2) {
				return "Error: Invalid Operator!";
			}

			const num1 = parseFloat(parts[0]);
			const num2 = parseFloat(parts[1]);
			const operator = exp.match(operators)[0];

			if (isNaN(num1) || isNaN(num2)) {
				return "Error: Invalid Operand";
			}

			switch (operator) {
				case "+":
					return num1 + num2;
				case "-":
					return num1 - num2;
				case "*":
					return num1 * num2;
				case "/":
					if (Math.abs(num2) < 1e-10) {
						return "Division by zero";
					}
					return num1 / num2;
				case "%":
					if (Math.abs(num2) < 1e-10) {
						return "Division by zero";
					}
					return num1 % num2;
				default:
					return "Error: Invalid Operator";
			}
		} catch (error) {
			return "Error: Invalid Operator";
		}
	}

	const handleClicked = (value: any) => {
		if (["+", "-", "*", "%", "/"].includes(value)) {
			setClicked((prevValue) => prevValue + value);
			setDisplayResult(false);
		} else if (value === "=") {
			const result = calExpression(clicked);
			setClicked(result.toString());
			setDisplayResult(true);
			// setSelectedValues([]);
		} else {
			// setSelectedValues((prevValues) => [...prevValues, value]);
			setClicked((prevValue) => (displayResult ? value : prevValue + value));
			setDisplayResult(false);
		}
		setSelectedValues((prevValues) => [...prevValues, value]);
	};

	const handleReset = () => {
		setClicked("0");
		setSelectedValues([]);
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
				<div className="text-3xl flex justify-end items-end m-5 overflow-hidden">
					{displayResult ? (
						<div>{clicked}</div>
					) : (
						selectedValues.map((value, i) => <div>{value}</div>)
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
				<div className="grid grid-cols-4 mx-5 gap-2 ">
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

export default Body;

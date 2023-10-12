"use client";

import { ChangeEvent, useState } from "react";

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

	const isOperator = (value: any) => ["+", "-", "*", "%"].includes(value);

	function calResult(exp: string) {
		const expMatch = exp.match(/(\d+\.\d+|\d+)([+\-*/])(\d+\.\d+|\d+)/);
		if (expMatch) {
			const [operand1, operator, operand2] = expMatch;

			switch (operator) {
				case "+":
					return (parseFloat(operand1) + parseFloat(operand2)).toString();
				case "-":
					return (parseFloat(operand1) - parseFloat(operand2)).toString();
				case "*":
					return (parseFloat(operand1) * parseFloat(operand2)).toString();
				case "/":
					return parseFloat(operand2) === 0
						? "Division by zero"
						: (parseFloat(operand1) / parseFloat(operand2)).toString();
				case "=":
					return operand1; // If the operator is "=", return the first operand
				default:
					return "Error: Invalid operator";
			}
		} else {
			return "Error: Invalid Expression";
		}
	}

	const handleClicked = (value: any) => {
		if (value === "=") {
			if (isOperator(clicked[clicked.length - 1])) {
				setClicked("Error");
			} else {
				const result = calResult(clicked);
				setClicked(result.toString());
				setDisplayResult(true);
			}
		} else if (isOperator(value)) {
			if (!isOperator(clicked[clicked.length - 1])) {
				setClicked((preValue) => preValue + value);
				setDisplayResult(false);
				setReset(true);
			}
		} else {
			setClicked((preValue) => (displayResult ? value : preValue + value));
			setDisplayResult(false);
		}
		setSelectedValues((preValue) => [...preValue, value]);
	};

	const handleReset = () => {
		setClicked("0");
		setReset(false);
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
				<div className="text-5xl flex justify-end items-end m-5 overflow-hidden">
					{selectedValues.map((value, i) => (
						<div key={i}>{value}</div>
					))}
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

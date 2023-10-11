import React from "react";

const Body = () => {
	return (
		<div className="bg-slate-400 w-[400px] h-[550px] rounded-lg border-2 border-black">
			<div className="bg-slate-200 w-[400] h-[100px] m-5 rounded-lg border-2 border-black"></div>
			<div className="flex flex-col gap-2">
				<div className="grid grid-cols-2 gap-5 mx-5 my-2">
					<button className="bg-red-200 w-auto px-16 py-5 rounded-lg border-2 border-black hover:bg-red-300 ease-in-out duration-300">
						Delete
					</button>
					<button className="bg-green-200 w-auto px-16 py-5 rounded-lg border-2 border-black hover:bg-green-300 ease-in-out duration-300">
						Clear
					</button>
				</div>
				<div className="grid grid-cols-4 mx-5 gap-2 ">
					<button className="bg-slate-200 px-7 py-5 rounded-lg border-2 border-black hover:bg-teal-400 hover:text-white ease-in-out duration-300">
						7
					</button>
					<button className="bg-slate-200 px-7 py-5 rounded-lg border-2 border-black hover:bg-teal-400 hover:text-white ease-in-out duration-300">
						8
					</button>
					<button className="bg-slate-200 px-7 py-5 rounded-lg border-2 border-black hover:bg-teal-400 hover:text-white ease-in-out duration-300">
						9
					</button>
					<button className="bg-slate-200 px-7 py-5 rounded-lg border-2 border-black hover:bg-teal-400 hover:text-white ease-in-out duration-300">
						%
					</button>

					<button className="bg-slate-200 px-7 py-5 rounded-lg border-2 border-black  hover:bg-teal-400 hover:text-white ease-in-out duration-300">
						4
					</button>
					<button className="bg-slate-200 px-7 py-5 rounded-lg border-2 border-black  hover:bg-teal-400 hover:text-white ease-in-out duration-300">
						5
					</button>
					<button className="bg-slate-200 px-7 py-5 rounded-lg border-2 border-black  hover:bg-teal-400 hover:text-white ease-in-out duration-300">
						6
					</button>
					<button className="bg-slate-200 px-7 py-5 rounded-lg border-2 border-black  hover:bg-teal-400 hover:text-white ease-in-out duration-300">
						*
					</button>

					<button className="bg-slate-200 px-7 py-5 rounded-lg border-2 border-black  hover:bg-teal-400 hover:text-white ease-in-out duration-300">
						1
					</button>
					<button className="bg-slate-200 px-7 py-5 rounded-lg border-2 border-black  hover:bg-teal-400 hover:text-white ease-in-out duration-300">
						2
					</button>
					<button className="bg-slate-200 px-7 py-5 rounded-lg border-2 border-black  hover:bg-teal-400 hover:text-white ease-in-out duration-300">
						3
					</button>
					<button className="bg-slate-200 px-7 py-5 rounded-lg border-2 border-black  hover:bg-teal-400 hover:text-white ease-in-out duration-300">
						-
					</button>

					<button className="bg-slate-200 px-7 py-5 rounded-lg border-2 border-black  hover:bg-teal-400 hover:text-white ease-in-out duration-300">
						.
					</button>
					<button className="bg-slate-200 px-7 py-5 rounded-lg border-2 border-black  hover:bg-teal-400 hover:text-white ease-in-out duration-300">
						0
					</button>
					<button className="bg-slate-200 px-7 py-5 rounded-lg border-2 border-black  hover:bg-teal-400 hover:text-white ease-in-out duration-300">
						=
					</button>
					<button className="bg-slate-200 px-7 py-5 rounded-lg border-2 border-black  hover:bg-teal-400 hover:text-white ease-in-out duration-300">
						+
					</button>
				</div>
			</div>
		</div>
	);
};

export default Body;

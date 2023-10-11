import Image from "next/image";

const Copy = () => {
	return (
		<div className="flex justify-center items-center mt-5 gap-2 text-base text-neutral-600">
			<p>Copy Right</p>
			<div className="relative w-[10px] h-[10px] overflow-hidden">
				<Image
					src="/assets/copyright.png"
					alt="copyright"
					className="object-cover"
					fill
				/>
			</div>
			<p>2023 Keith Ken.</p>
		</div>
	);
};

export default Copy;

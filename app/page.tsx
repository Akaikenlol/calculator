import Body from "@/components/body";
import Calculator from "@/components/calculator";
import Copy from "@/components/copy";
import Header from "@/components/header";

export default function Home() {
	return (
		<div className="flex justify-center items-center flex-col mb-10">
			<Header />
			<Body />
			{/* <Calculator /> */}
			<Copy />
		</div>
	);
}

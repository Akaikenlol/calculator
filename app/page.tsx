import Body from "@/components/body";
import Copy from "@/components/copy";
import Header from "@/components/header";

export default function Home() {
	return (
		<div className="flex justify-center items-center flex-col mb-10">
			<Header />
			<Body />
			<Copy />
		</div>
	);
}

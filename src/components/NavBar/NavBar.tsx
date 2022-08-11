import { MutableRefObject, useRef, useState } from "react";

import { Form } from "./Form";
import { Logo } from "./Logo";
import { Options } from "./Options";

export const NavBar = () => {
	const [option, setOption] = useState("Anime");
	const searcherRef = useRef(null) as MutableRefObject<HTMLInputElement | null>;

	return (
		<div className="bg-cyan-300 w-full">
			<div className="pt-1 pb-3 flex flex-col gap-y-2 justify-center items-center sm:flex-row sm:p-4 sm:justify-between max-w-7xl mx-auto">
				<Logo />
				<Options option={option} setOption={setOption} searcherRef={searcherRef} />
				<Form option={option} searcherRef={searcherRef} />
			</div>
		</div>
	);
};

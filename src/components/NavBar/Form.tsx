import React, { MutableRefObject } from "react";
import { useFormContext } from "../../context/formContext";

type Props = {
	option: string;
	searcherRef: MutableRefObject<HTMLInputElement | null>;
};

export const Form = ({ option, searcherRef }: Props) => {
	const { searcherValue, changeSearcherValue, changeUrl } = useFormContext();

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		if (searcherValue === "") return;

		option.toLowerCase() === "anime"
			? changeUrl(import.meta.env.VITE_API_URL_ANIME + `?q=${searcherValue}`)
			: changeUrl(import.meta.env.VITE_API_URL_MANGA + `?q=${searcherValue}`);

		// * Reseteo de valores
		changeSearcherValue("");
	}

	return (
		<form className="lowMediumSize px-2 flex" onSubmit={(e) => handleSubmit(e)}>
			<input
				ref={searcherRef}
				onChange={(e) => changeSearcherValue(e.target.value)}
				id="search"
				type="search"
				className="bg-transparent pt-1 font-bold outline-none border-b border-b-darkLight focus:border-b-2 focus:border-orange-500 placeholder:text-inherit placeholder:opacity-80"
				placeholder={`Search ${option}`}
				autoComplete="off"
				value={searcherValue}
			/>
		</form>
	);
};

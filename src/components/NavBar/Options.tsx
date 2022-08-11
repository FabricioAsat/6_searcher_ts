import { MutableRefObject } from "react";

type Props = {
	option: string;
	setOption: Function;
	searcherRef: MutableRefObject<HTMLInputElement | null>;
};

export const Options = ({ option, setOption, searcherRef }: Props) => {
	function handleSetOption(value: string) {
		setOption(value);

		if (!!searcherRef) {
			searcherRef.current?.focus();
		}
	}

	return (
		<div className="flex gap-x-4 xl:gap-x-8">
			<button
				onClick={() => handleSetOption("Anime")}
				className={`lowMediumSize font-bold ${
					option.toLowerCase() === "anime" ? "text-orange-500 border-b-2 border-orange-500" : ""
				}`}>
				Anime
			</button>
			<button
				onClick={() => handleSetOption("Manga")}
				className={`lowMediumSize font-bold ${
					option.toLowerCase() === "manga" ? "text-orange-500 border-b-2 border-orange-500" : ""
				}`}>
				Manga
			</button>
		</div>
	);
};

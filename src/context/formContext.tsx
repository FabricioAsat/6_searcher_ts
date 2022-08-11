import { createContext, useContext, useState } from "react";

type Props = {
	children: JSX.Element;
};

const formContext = createContext({
	searcherValue: "",
	changeSearcherValue: (value: string) => {},

	url: "",
	changeUrl: (value: string) => {},
});

export default function FormProvider({ children }: Props) {
	const [searcherValue, setSearcherValue] = useState<string>("");
	const [url, setUrl] = useState<string>(import.meta.env.VITE_API_URL_ANIME);

	function handleSearcher(value: string = "") {
		setSearcherValue(value);
	}

	function handleChangeUrl(value: string = "") {
		setUrl(value);
	}

	return (
		<formContext.Provider
			value={{
				searcherValue,
				url,

				changeUrl: handleChangeUrl,
				changeSearcherValue: handleSearcher,
			}}>
			{children}
		</formContext.Provider>
	);
}

export function useFormContext() {
	return useContext(formContext);
}

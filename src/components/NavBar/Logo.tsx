import { useFormContext } from "../../context/formContext";

export const Logo = () => {
	const { changeUrl } = useFormContext();

	return (
		<button
			onClick={() => changeUrl(import.meta.env.VITE_API_URL_ANIME)}
			className="longSize font-bold">
			Search<b className="text-orange-500 font-bold">er</b>
		</button>
	);
};

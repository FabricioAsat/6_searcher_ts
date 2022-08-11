import { useFetch } from "../../hooks/useFetch";

import { Loader } from "../Loader";
import { Card } from "./Card";

export const CardsContainer = () => {
	const { data, isPending, error } = useFetch();

	if (error.status)
		return (
			<div className="flex flex-col justify-center items-center text-center py-4">
				<h2 className="bigSize text-red-500 font-bold selection:text-red-500">
					Error {error.status || ""}
				</h2>
				<small className="longSize italic">{error.statusText || "Failed to fetch"}</small>
			</div>
		);

	if (isPending)
		return (
			<div className="flex justify-center items-center py-4">
				<Loader />
			</div>
		);

	if (data?.data.length !== 0)
		return (
			<>
				<h2 className="longSize text-center px-4 pt-4 font-bold">Results</h2>
				<div className="grid grid-cols-gridCards gap-8 justify-items-center py-8 px-4">
					{data.data.map((data: any) => (
						<Card data={data} key={data.mal_id || crypto.randomUUID()} />
					))}
				</div>
			</>
		);

	return (
		<div className="text-center flex justify-center py-8 px-4">
			<h2 className="lowBigSize">No results</h2>
		</div>
	);
};

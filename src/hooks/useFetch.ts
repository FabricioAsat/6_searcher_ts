import { useEffect, useState } from "react";
import { useFormContext } from "../context/formContext";

type ErrorTypes = {
	status: number | null;
	statusText: string;
};

export const useFetch = () => {
	const { url } = useFormContext();

	const [data, setData] = useState<any>(null);
	const [isPending, setIsPending] = useState<boolean>(true);
	const [error, setError] = useState<ErrorTypes>({ status: null, statusText: "" });

	useEffect(() => {
		setData(null);
		setIsPending(true);
		setError({ status: null, statusText: "" });

		async function getDatos() {
			try {
				const respuesta: Response = await fetch(url);

				if (!respuesta.ok)
					throw {
						status: respuesta.status || 404,
						statusText: respuesta.statusText || "Fetch Error",
					};

				const datos: object = await respuesta.json();

				setData(datos);
				setIsPending(false);
				setError({ status: null, statusText: "" });
			} catch (error: any) {
				setData(null);
				setIsPending(true);
				setError(error);
			}
		}
		getDatos();
	}, [url]);

	return { data, isPending, error };
};

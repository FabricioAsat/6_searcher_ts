import { NavBar } from "../NavBar/NavBar";

type Props = {
	children: JSX.Element;
};

export const Layout = ({ children }: Props) => {
	return (
		<div className="w-full">
			<NavBar />

			<div className="w-full">{children}</div>
		</div>
	);
};

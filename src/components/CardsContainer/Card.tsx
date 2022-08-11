export const Card = ({ data }: any) => {
	return (
		<div className="w-48 h-64 rounded-lg bg-lightDark hover:scale-105 transition-transform duration-300">
			<a
				href={data.url}
				target="_blank"
				rel="noopener noreferrer"
				className="w-full h-full flex flex-col rounded-lg">
				<img
					src={data.images.webp.image_url}
					alt=""
					className="h-5/6 w-full object-cover rounded-t-lg"
				/>
				<h2 className="truncate w-full font-bold text-xl py-2 px-1">{data.title}</h2>
			</a>
		</div>
	);
};

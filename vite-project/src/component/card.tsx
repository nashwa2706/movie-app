import { useState } from "react";

interface Props {
	title: string;
	poster_path: string;
	release_date?: string;
	overview: string;
	size?: string;
	vote_average?: number;
}

export const Card = (props: Props) => {
	const { title, poster_path, release_date, overview, size } = props;
	const [showOverview, setShowOverview] = useState(false);

	const toggleOverview = () => {
		setShowOverview(!showOverview);
	};

	return (
		<div
			className={`flex flex-col ${size} bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden h-[400px]`}
		>
			<div className="relative">
				<img
					className="w-full h-64 object-cover cursor-pointer"
					src={`https://image.tmdb.org/t/p/w154/${poster_path}`}
					alt={title}
					onClick={toggleOverview}
				/>
				<div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-3">
					<h2 className="text-xl font-semibold text-white truncate">{title}</h2>
				</div>
			</div>
			<div className="p-4 flex flex-col justify-between h-32">
				{release_date && (
					<p className="text-sm text-gray-500 mb-2">{release_date}</p>
				)}
				<p className="text-gray-700 text-base">
					{overview.length > 100
						? `${overview.substring(0, 100)}...`
						: overview}
				</p>
			</div>

			{showOverview && (
				<div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50">
					<div className="bg-gray-800 text-white rounded-lg p-6 max-w-lg mx-4 flex flex-col">
						<h2 className="text-lg font-bold mb-4">Overview</h2>
						<p className="mb-4 flex-grow">{overview}</p>
						<button
							className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-800 transition"
							onClick={toggleOverview}
						>
							Close
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

import { Card } from "../../component/card";
import useMovieList from "./hooks/hooks";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../hooks/hooks";

const Movie = () => {
	const navigate = useNavigate();

	const { loading, nowPlayingData } = useMovieList();

	const query = useQuery();
	const page = (query.get("page") !== null ? query.get("page") : 1) as string;

	const handlePage = () => {
		const numPage = Number(page);
		navigate(`?page=${numPage + 1}`);
	};

	const prevPage = () => {
		const numPage = Number(page);
		navigate(`?page=${numPage > 1 ? numPage - 1 : numPage}`);
	};

	return (
		<div className="flex flex-col p-5">
			<label className="text-2xl font-bold mb-5 flex flex-wrap justify-center">
				Now Playing
			</label>
			{!loading ? (
				<div className=" flex-row text-md flex flex-wrap justify-center gap-5">
					{nowPlayingData?.results.map((item: Movie) => (
						<Card
							poster_path={item.poster_path}
							title={item.title}
							release_date={item.release_date}
							overview={item.overview}
							size="w-40"
						/>
					))}
				</div>
			) : (
				<div className="flex justify-center align-middle">Loading...</div>
			)}
			<div className="flex flex-row justify-between">
				<p></p>
				<button onClick={prevPage} className="bg-gray-200 p-2 rounded-sm my-5">
					Previous
				</button>
				<button
					onClick={handlePage}
					className="bg-gray-200 p-2 rounded-sm my-5"
				>
					Next
				</button>
				<p></p>
			</div>
		</div>
	);
};

export default Movie;

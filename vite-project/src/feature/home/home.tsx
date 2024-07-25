import { useEffect, useState } from "react";

import { Card } from "../../component/card";
import { getTopMovie } from "../../service/home/api-movie";
import { getTopTv } from "../../service/home/api-tv";

const Home = () => {
	const [TopMovie, setTopMovie] = useState<ResponseTopMovie>();
	const [TopTv, setTopTv] = useState<ResponseTopTv>();

	useEffect(() => {
		fetchTopMovie();
	}, []);

	const fetchTopMovie = async () => {
		try {
			const response = await getTopMovie();
			setTopMovie(response);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchTopTv();
	}, []);

	const fetchTopTv = async () => {
		try {
			const response = await getTopTv();
			setTopTv(response);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex flex-col p-5">
			<label className="text-2xl font-bold mb-5 flex flex-wrap justify-center">
				Top Rated Movie
			</label>
			<div className="text-md flex-row flex flex-wrap gap-5 justify-center">
				{TopMovie?.results.map((item: TopMovie) => (
					<Card
						poster_path={item.poster_path}
						title={item.title}
						overview={item.overview}
						size="w-40"
					/>
				))}
			</div>
			<label className="text-2xl font-bold mb-5 flex flex-wrap justify-center my-10">
				Top Rated Tv Show
			</label>
			<div className="text-md flex-row flex flex-wrap gap-5 justify-center">
				{TopTv?.results.map((item: TopTv) => (
					<Card
						poster_path={item.poster_path}
						title={item.name}
						overview={item.overview}
						size="w-40"
					/>
				))}
			</div>
		</div>
	);
};

export default Home;

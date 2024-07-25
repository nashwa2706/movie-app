import { useEffect, useState } from "react";

import { Card } from "../../component/card";
import { getAiringToday } from "../../service/tvShow/api";

const TvShow = () => {
	const [nowPlayingTv, setNowPlayingTv] = useState<ResponseTvShow>();

	useEffect(() => {
		fetchTv();
	}, []);

	const fetchTv = async () => {
		try {
			const response = await getAiringToday();
			setNowPlayingTv(response);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex flex-col p-5">
			<label className="text-2xl font-bold mb-5 flex flex-wrap justify-center">
				Airing Today
			</label>
			<div className="text-md flex-row flex flex-wrap gap-5 justify-center">
				{nowPlayingTv?.results.map((item: TvShow) => (
					<Card
						poster_path={item.poster_path}
						title={item.name}
						release_date={item.first_air_date}
						overview={item.overview}
						size="w-40"
					/>
				))}
			</div>
		</div>
	);
};

export default TvShow;

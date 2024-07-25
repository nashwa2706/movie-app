import { useEffect, useState } from "react";

import { getNowPlaying } from "../../../service/movie/api";
import { useQuery } from "../../../hooks/hooks";

const useMovieList = () => {
	const query = useQuery();
	const page = (query.get("page") !== null ? query.get("page") : 1) as string;
	const [nowPlayingData, setNowPlayingData] = useState<ResponseTopMovie>();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetchMovie();
	}, [page]);

	const fetchMovie = async () => {
		try {
			setLoading(true);

			const response = await getNowPlaying(page as string);
			setNowPlayingData(response);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};
	return { loading, nowPlayingData };
};

export default useMovieList;

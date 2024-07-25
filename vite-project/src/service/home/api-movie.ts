import { API } from "../tvShow/api";

const getTopMovie = async () => {
	try {
		const response = await API.get("/movie/top_rated?language=en-US&page=1");

		console.log(response);
		return response.data as ResponseTopMovie;
	} catch (error) {
		console.log(error);
	}
};

export { getTopMovie };

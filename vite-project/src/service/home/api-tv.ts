import { API } from "../tvShow/api";

const getTopTv = async () => {
	try {
		const response = await API.get("/tv/top_rated?language=en-US&page=1");

		console.log(response);
		return response.data as ResponseTopTv;
	} catch (error) {
		console.log(error);
	}
};

export { getTopTv };

import { API } from "../..";

const getAiringToday = async (): Promise<ResponseTvShow> => {
	try {
		const response = await API.get("/tv/airing_today?language=en-US&page=1");
		console.log(response);
		return response.data as ResponseTvShow;
	} catch (error) {
		console.error("Error fetching airing today TV shows:", error);
		throw error; // Re-throw the error to be handled by the caller
	}
};

export { getAiringToday, API };

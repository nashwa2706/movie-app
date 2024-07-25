type ResponseTopTv = {
	page: number;
	results: TopTv[];
	total_pages: number;
	total_results: number;
};

type TopTv = {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	origin_country: string[];
	original_language: string;
	original_name: string;
	overview: string;
	popularity: number;
	poster_path: string;
	first_air_date: string;
	name: string;
	vote_average: number;
	vote_count: number;
};

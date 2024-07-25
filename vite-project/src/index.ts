import API from "./axiosConfig";
import { getAiringToday } from "./service/tvShow/api";
import { getNowPlaying } from "./service/movie/api";
import { getTopMovie } from "./service/home/api-movie";
import { getTopTv } from "./service/home/api-tv";
import { postLogin } from "./service/auth/api";

export { API, getNowPlaying, getAiringToday, postLogin, getTopMovie, getTopTv };

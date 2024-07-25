import Authentication from "../auth/auth";
import Home from "../feature/home/home";
import Layout from "../component/layeot";
import Movie from "../feature/movie";
import ProtectedRoutes from "./protected";
import TvShow from "../feature/tvShow";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
	{
		element: <ProtectedRoutes />,
		children: [
			{
				path: "/",
				element: <Layout />,
				children: [
					{
						index: true,
						element: <Home />,
					},
					{
						path: "/login",
						element: <Authentication />,
					},
					{
						path: "/movie",
						element: <Movie />,
					},
					{
						path: "/tv-show",
						element: <TvShow />,
					},
				],
			},
		],
	},
]);

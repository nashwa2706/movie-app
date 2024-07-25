import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();
	const handleLogout = () => {
		localStorage.removeItem("token");
		navigate("/login");
	};

	return (
		<nav className="flex items-center justify-between shadow-lg bg-gray-800 text-white p-5">
			<div className="text-2xl font-semibold">nashwa</div>
			<div className="flex gap-6 items-center">
				<Link to="/" className="hover:text-yellow-400 transition-colors">
					Home
				</Link>
				<Link to="/movie" className="hover:text-yellow-400 transition-colors">
					Movie
				</Link>
				<Link to="/tv-show" className="hover:text-yellow-400 transition-colors">
					TV Show
				</Link>
				<button
					onClick={handleLogout}
					className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition-colors"
				>
					Log Out
				</button>
			</div>
		</nav>
	);
};

export default Navbar;

import Footer from "./footer.tsx";
import Navbar from "./navbar.tsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<div className="flex-grow">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Layout;

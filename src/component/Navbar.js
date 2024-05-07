import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const routes = [
	{ name: "Home", href: "/", isActive: true },
	{ name: "All Product", href: "/all-product", isActive: false },
];

const NavMenu = ({ routes }) => (
	<ul className="flex">
		{routes.map((route, i) => (
			<li key={i}>
				<a
					className={`px-4 ${
						route.isActive ? "opacity-100" : "opacity-50 hover:opacity-100"
					}`}
					href={route.href}
				>
					{route.name}
				</a>
			</li>
		))}
	</ul>
);

NavMenu.propTypes = {
	routes: PropTypes.array.isRequired,
};

const NavMenu2 = ({}) => (
	
	<ul className="flex items-center justify-center mb-2 lg:mb-0">
		<li>
			<Link to="/cart-page">
				<button className="bg-blue-600 text-white hover:bg-opacity-90 rounded-lg px-4 py-2">
					<FontAwesomeIcon icon={faShoppingCart} />
				</button>
			</Link>
			<button className="bg-blue-600 text-white hover:bg-opacity-90 rounded-lg px-4 py-2 ml-2">
				<FontAwesomeIcon icon={faSearch} />
			</button>
		</li>
	</ul>
);

const Navbar = () => {
	return (
		<div className="ezy__nav5 light py-6 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative ">
			<nav>
				<div className="container px-4">
					<div className="flex items-center justify-between">
						<a className="font-black text-3xl min-w-[33%]" href="#!">
							{" "}
							LOGO{" "}
						</a>
						<button
							className="block lg:hidden cursor-pointer h-10 z-20"
							type="button"
							id="hamburger"
						>
							<div className="h-0.5 w-7 bg-black dark:bg-white -translate-y-2" />
							<div className="h-0.5 w-7 bg-black dark:bg-white" />
							<div className="h-0.5 w-7 bg-black dark:bg-white translate-y-2" />
						</button>
						<div
							className="flex flex-col lg:flex-row justify-center lg:justify-between items-center text-3xl gap-6 lg:text-base lg:gap-2 absolute h-screen w-screen top-0 left-full lg:left-0 lg:relative lg:h-auto lg:w-auto bg-white dark:bg-[#0b1727] lg:bg-transparent grow"
							id="navbar"
						>
							<NavMenu routes={routes} />

							<NavMenu2 />
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;


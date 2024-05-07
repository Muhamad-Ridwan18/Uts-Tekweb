import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHeart,
	faSearch,
	faShoppingCart,
	faStar,
	faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const products = [
	{
		id: 1,
		imageUrl: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_3.png",
		discount: -5,
		title: "Baby Truck",
		rating: 4.5,
		price: 676,
	},
	{
		id: 2,
		imageUrl: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_4.png",
		discount: -5,
		title: "Baby Truck",
		rating: 3.5,
		price: 676,
	},
	{
		id: 3,
		imageUrl: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_5.png",
		discount: -5,
		title: "Baby Truck",
		rating: 4.5,
		price: 676,
	},
	{
		id: 4,
		imageUrl: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_6.png",
		discount: -5,
		title: "Baby Truck",
		rating: 4,
		price: 676,
	},
];

const Product = ({ product }) => (
	<div className="col-span-12 md:col-span-6 lg:col-span-3">
		<div className="bg-white dark:bg-slate-800 rounded-xl border dark:border-slate-700 group transition duration-500 overflow-hidden">
			<div className="bg-gray-100 dark:bg-slate-700 flex justify-center items-center min-h-[265px] relative w-full p-12">
				{product.discount && (
					<h6 className="absolute top-4 left-0 bg-rose-600 text-white font-bold rounded-r-md px-6 py-1.5">
						{product.discount < 0
							? `-$${Math.abs(product.discount)}`
							: `+$${product.discount}`}
					</h6>
				)}
				<img src={product.imageUrl} alt="" className="max-w-full h-auto" />
				<div className="bg-black bg-opacity-50 absolute top-0 left-0 right-0 bottom-0 w-full h-full opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
					<div className="bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-md py-1 px-2">
						<button className="text-black font-normal text-center leading-normal py-1 px-3">
							<FontAwesomeIcon icon={faHeart} />
						</button>
						<button className="text-black font-normal text-center leading-normal py-1 px-3">
							<FontAwesomeIcon icon={faShoppingCart} />
						</button>
						<button className="text-black font-normal text-center leading-normal py-1 px-3">
							<FontAwesomeIcon icon={faSearch} />
						</button>
					</div>
				</div>
			</div>
			<div className="p-6">
				<div className="flex justify-between items-center">
					<div>
						<a href="#!">
							<h6 className="hover:text-blue-600 font-bold mb-1">
								{product.title}
							</h6>
						</a>
						<span className="text-yellow-500 text-base">
							{Array.from(
								{ length: Math.floor(product.rating) },
								(_, index) => (
									<FontAwesomeIcon key={index} icon={faStar} className="mr-1" />
								)
							)}
							{product.rating % 1 !== 0 && (
								<FontAwesomeIcon icon={faStarHalfAlt} className="mr-1" />
							)}
						</span>
					</div>
					<div>
						<p className="text-3xl font-bold">${product.price}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);

Product.propTypes = {
	product: PropTypes.object.isRequired,
};

const TrendProduct = () => (
	<section className="py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
		<div className="container px-4 mx-auto">
			<h2 className="text-3xl md:text-5xl font-bold leading-tight">
				Trending Now
			</h2>
			<div className="grid grid-cols-12 gap-6 mt-12">
				{products.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</div>
		</div>
	</section>
);

export default TrendProduct;
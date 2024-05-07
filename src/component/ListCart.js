import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHeart,
	faTrashAlt,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const productList = [
	{
		shop: {
			id: 1,
			name: "BASEUS Global Store",
			email: "email@easyfrontend.com",
		},
		products: [
			{
				id: 1,
				seller: "NIDIN Factory Online Store",
				img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio20.jpg",
				title:
					"Wholesale Hexagon Pine Solid Wood Brand Women Watch Display Box Custom Logo Wooden Watch Luxury Box",
				color: "black",
				country: "China",
				bdPrice: "6,638.89",
				usPrice: "44.07",
				shipper: "BrandName Premium Shipping Estimated",
				shippingTime: "50-53",
				subTotal: "6,638.89",
				shipping: "0.00",
				total: "6,638.89",
				qty: 1,
			},
			{
				id: 2,
				seller: "NIDIN Factory Online Store",
				img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_2.png",
				title:
					"ABUK Home Appliance Surge Protector Voltage Brownout Plug Outlet Power Strip Surge Protector With Pass Button",
				color: "black",
				country: "China",
				bdPrice: "6,638.89",
				usPrice: "44.07",
				shipper: "BrandName Premium Shipping Estimated",
				shippingTime: "50-53",
				subTotal: "6,638.89",
				shipping: "0.00",
				total: "6,638.89",
				qty: 1,
			},
		],
	},
	{
		shop: {
			id: 2,
			name: "DoMyHome Decor Store",
			email: "email@easyfrontend.com",
		},
		products: [
			{
				id: 3,
				seller: "NIDIN Factory Online Store",
				img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio16.jpg",
				title:
					"Chair Living Room Chairs For Bedroom Dining Desk Chairs Kitchen Bathroom Silla стулья для кухни 가구 Dinning Chair Chaise",
				color: "black",
				country: "China",
				bdPrice: "6,638.89",
				usPrice: "44.07",
				shipper: "BrandName Premium Shipping Estimated",
				shippingTime: "50-53",
				subTotal: "6,638.89",
				shipping: "0.00",
				total: "6,638.89",
				qty: 1,
			},
		],
	},
];

const TopBar = ({ data }) => {
	return (
		<>
			<div className="flex flex-wrap">
				<div className="flex items-center">
					<div className="flex items-center mr-3">
						<input
							className="w-5 h-5 mr-2"
							type="checkbox"
							value=""
							id={data.shop.id}
						/>
						<label className="text-sm opacity-75" htmlFor={data.shop.id}>
							{data.shop.name}
						</label>
					</div>
					<button className="hover:text-blue-600 hover:bg-gray-100 dark:hover-bg-slate-600 py-1 px-2 rounded flex items-center opacity-75">
						<FontAwesomeIcon icon={faEnvelope} className=" text-sm mr-1" />
						Contact
					</button>
				</div>
				<div className="ml-auto">
					<button className="hover:text-blue-600 hover:bg-gray-100 dark:hover-bg-slate-600 py-1 px-2 rounded">
						Get Coupons
					</button>
				</div>
			</div>

			<hr className="dark:border-slate-700 my-4" />
		</>
	);
};

TopBar.propTypes = {
	data: PropTypes.object.isRequired,
};

const SideBar = () => {
	return (
		<div className="bg-blue-50 dark:bg-slate-800 rounded-md p-3 md:p-6">
			<h5 className="text-2xl font-bold mb-6">Order Summary</h5>

			<div className="flex gap-2 justify-between items-center">
				<span>Subtotal</span>
				<span>US $12.43</span>
			</div>
			<div className="flex gap-2 justify-between items-center">
				<span>Shipping</span>
				<span>US $321.12</span>
			</div>

			<hr className="dark:border-slate-700 my-6" />
			<div className="flex gap-2 justify-between items-center">
				<span className="font-bold">Total</span>
				<span className="text-2xl font-bold">US $412.21</span>
			</div>

			<button className="py-3 px-4 leading-none bg-blue-600 rounded hover:bg-opacity-90 text-white w-full mt-6 lg:mt-12">
				BUY (0)
			</button>
		</div>
	);
};

const QtyField = ({ name, value, onChange }) => {
	const qtyControl = (qty) =>
		onChange({
			target: {
				name,
				type: "radio",
				value: qty < 1 ? 1 : qty,
			},
		});

	return (
		<div className="flex items-center ezy__epcart6-qty">
			<button
				className="w-8 h-8 bg-gray-100 dark:bg-slate-600 bg-opacity-80 dark:bg-opacity-80 hover:bg-opacity-100 dark:hover:bg-opacity-100 flex justify-center items-center rounded-full font-bold"
				type="button"
				onClick={() => qtyControl(parseInt(value) - 1)}
			>
				-
			</button>
			<input
				type="number"
				className="bg-transparent text-center pl-3 font-bold w-12"
				placeholder=""
				value={value}
				onChange={(e) => qtyControl(e.target.value)}
			/>
			<button
				className="w-8 h-8 bg-gray-100 dark:bg-slate-600 bg-opacity-80 dark:bg-opacity-80 hover:bg-opacity-100 dark:hover:bg-opacity-100 flex justify-center items-center rounded-full font-bold"
				type="button"
				onClick={() => qtyControl(parseInt(value) + 1)}
			>
				+
			</button>
		</div>
	);
};

QtyField.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.any,
};

const ProductItem = ({ item, index, index2, onChange }) => {
	return (
		<div className="flex flex-col sm:flex-row mb-4">
			<div className="mr-3">
				<div className="flex items-center">
					<div className="flex items-center">
						<input className="w-5 h-5" type="checkbox" value="" id={item.id} />
						<label className="" htmlFor={item.id}></label>
					</div>
					<div className="w-32 p-1">
						<a href="#!">
							<img src={item.img} alt="" className="w-full h-auto rounded-md" />
						</a>
					</div>
				</div>
			</div>
			<div className="w-full">
				<div className="flex flex-col sm:flex-row">
					<div className="">
						<div className="hover:text-blue-600 text-[15px] leading-5 mb-1">
							<a href="#!">{item.title}</a>
						</div>
						<p className="text-[12px] mb-2">
							<span className="flex items-center mr-3">
								<b>Color</b>: {item.color}
							</span>
							<span>
								<b>Ships From</b>: {item.country}
							</span>
						</p>
						<div className="mb-2">
							<span className="font-bold text-[17px] mr-2">
								BDT {item.bdPrice}
							</span>
							<div className="flex items-center">
								<span className="line-through text-sm opacity-50 mr-2">
									BDT {item.bdPrice}
								</span>
								<span className="py-1 px-2 bg-stone-200 dark:bg-stone-800 text-[12px]">
									-73%
								</span>
							</div>
						</div>
						<p className="text-[12px]">
							<a href="#!" className="text-blue-600 hover:underline">
								Shipping: US ${item.usPrice}
							</a>
							via {item.shipper} Delivery Time:{item.shippingTime} Days
						</p>
					</div>
					<div className="md:w-auto mt-3 md:mt-0">
						<div className="flex sm:justify-end mb-3">
							<button className="hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-slate-600 py-1 px-2 rounded p-0 flex justify-center items-center text-decoration-none mr-2">
								<FontAwesomeIcon icon={faHeart} className="text-sm" />
							</button>
							<button className="hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-slate-600 py-1 px-2 rounded p-0 flex justify-center items-center text-decoration-none">
								<FontAwesomeIcon icon={faTrashAlt} className="text-sm" />
							</button>
						</div>
						<QtyField
							name={`ezy__epcart6-qty-${index}`}
							value={item.qty}
							onChange={(e) => onChange(e, index, index2)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

ProductItem.propTypes = {
	item: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
	index2: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
};

const ListCart = () => {
	const [products, setProducts] = useState([...productList]);

	const onChange = (e, index, index2) => {
		const { value } = e.target;

		setProducts([
			...products.slice(0, index2),
			{
				...products[index2],
				products: [
					...products[index2].products.slice(0, index),
					{
						...products[index2].products[index],
						qty: value,
					},
					...products[index2].products.slice(index + 1),
				],
			},
			...products.slice(index2 + 1),
		]);
	};

	return (
		<section className="ezy__epcart6 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
			<div className="container px-4 mx-auto">
				<div className="flex flex-col lg:flex-row gap-6 justify-center">
					<div className="w-full lg:w-2/3">
						{/* cart head */}
						<div className="bg-blue-50 dark:bg-slate-800 p-4 md:px-6 mb-4">
							<h5 className="text-2xl font-bold mb-4">Shopping Cart (3)</h5>
							<div className="flex items-center">
								<input type="checkbox" value="" className="w-5 h-5 mr-2" />
								<label className="opacity-75" htmlFor="ezy__epcart6-check-all">
									Select All
								</label>
							</div>
						</div>
						{products.map((productData, i) => (
							<div
								className="bg-blue-50 dark:bg-slate-800 p-4 md:px-6 mb-4"
								key={i}
							>
								<TopBar data={productData} />

								{productData.products.map((item, j) => (
									<ProductItem
										item={item}
										index={j}
										index2={i}
										onChange={onChange}
										key={j}
									/>
								))}

								<div className="text-end mt-4 lg:mt-12">
									<button className="py-2 px-4 rounded bg-blue-600 text-white hover:bg-opacity-90 text-sm h-auto">
										Buy From This Seller
									</button>
								</div>
							</div>
						))}
					</div>

					{/* sidebar */}
					<div className="w-full lg:w-1/3">
						<SideBar />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ListCart;
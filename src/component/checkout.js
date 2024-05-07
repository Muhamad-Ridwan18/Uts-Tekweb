import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCheckCircle,
	faMapMarkerAlt,
	faPlus,
	faFileInvoiceDollar,
	faTrashAlt,
	faPhoneAlt,
	faEnvelope,
	faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const billingInfo = [
	{
		icon: faMapMarkerAlt,
		value: "Provati-73, East Pirmoholla, Amborkhana, Sylhet",
	},
	{
		icon: faFileInvoiceDollar,
		value: "Bill to the same address",
	},
	{
		icon: faPhoneAlt,
		value: "1742***080",
	},
	{
		icon: faEnvelope,
		value: "xyz@gmail.com",
	},
];

const orders = [
	{
		seller: "NIDIN Factory Online Store",
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_2.png",
		title:
			"Forsining 3d Logo Design Hollow Engraving Black Gold Case Leather Skeleton Mechanical Watches Men Luxury Brand Heren Horloge",
		color: "black",
		country: "China",
		bdPrice: "6,638.89",
		usPrice: "44.07",
		shipper: "BrandName Premium Shipping Estimated",
		shippingTime: "50-53",
		subTotal: "6,638.89",
		shipping: "0.00",
		total: "6,638.89",
	},
	{
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
	},
];

const TopBar = () => {
	return (
		<div className="bg-blue-50 dark:bg-slate-800 rounded-xl p-4 md:p-6 mb-4">
			<h6 className="font-bold">Order Review</h6>
		</div>
	);
};

const BillingItem = ({ bill }) => (
	<div className="text-sm flex mb-4">
		<div>
			<FontAwesomeIcon icon={bill.icon} />
		</div>
		<div className="flex-grow px-2">
			<p className="mb-0">{bill.value}</p>
		</div>
		<div>
			<a href="#!" className="text-blue-600 hover:underline font-bold">
				Edit
			</a>
		</div>
	</div>
);
BillingItem.propTypes = {
	bill: PropTypes.object.isRequired,
};

const PromoCode = () => (
	<div className="mt-3">
		<p className="text-sm mb-1">Promo Code</p>
		<div className="flex h-10">
			<input
				type="text"
				className="bg-blue-100 dark:bg-slate-700 border-none focus:outline-none h-full flex-grow rounded-md p-3 mr-2"
				placeholder="Recipient's username"
			/>
			<button
				className="text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-600 px-4 py-2 leading-none h-full rounded-md"
				type="button"
			>
				Apply
			</button>
		</div>
	</div>
);

const SideBar = () => {
	return (
		<div className="bg-blue-50 dark:bg-slate-800 rounded-xl p-4 md:p-6">
			<h6 className="text-2xl font-bold mb-4">Shipping {"&"} Billing</h6>
			{billingInfo.map((bill, i) => (
				<BillingItem bill={bill} key={i} />
			))}

			<h6 className="text-2xl font-bold my-6">Order Summary</h6>
			<div className="flex justify-between items-center mb-2">
				<span>
					<FontAwesomeIcon
						icon={faFileInvoiceDollar}
						className="mr-2 text-blue-600"
					/>
					Store Coupons
				</span>
				<span>
					<a href="#!" className="text-blue-600 hover:underline font-medium">
						View <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
					</a>
				</span>
			</div>
			<div className="flex justify-between items-center mb-2">
				<span>
					<FontAwesomeIcon
						icon={faFileInvoiceDollar}
						className="mr-2 text-blue-600"
					/>
					BusinessName Coupon
				</span>
				<span>
					<a href="#!" className="text-blue-600 hover:underline font-medium">
						View <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
					</a>
				</span>
			</div>

			<PromoCode />

			<hr className="dark:border-slate-700 my-6" />
			<div className="flex justify-between items-center">
				<span className="font-bold">Total</span>
				<span className="text-2xl font-bold">US $0.00</span>
			</div>
			<p className="text-sm text-end opacity-50">Approximately BDT 94,856.76</p>

			<button className="bg-blue-600 text-white hover:bg-opacity-90 w-full rounded-md py-3 px-4 mt-6">
				Place Order
			</button>
		</div>
	);
};

const Quantity = () => {
	return (
		<div className="flex items-center">
			<button
				className="w-8 h-8 bg-slate-200 dark:bg-slate-600 bg-opacity-80 dark:bg-opacity-80 hover:bg-opacity-100 dark:hover:bg-opacity-100 flex justify-center items-center rounded-full font-bold"
				type="button"
			>
				-
			</button>
			<input
				type="number"
				className="bg-transparent text-center pl-3 font-bold w-12"
				placeholder=""
				value="2"
			/>
			<button
				className="w-8 h-8 bg-slate-200 dark:bg-slate-600 bg-opacity-80 dark:bg-opacity-80 hover:bg-opacity-100 dark:hover:bg-opacity-100 flex justify-center items-center rounded-full font-bold"
				type="button"
			>
				+
			</button>
		</div>
	);
};

const OrderItem = ({ item }) => {
	return (
		<div className="bg-blue-50 dark:bg-slate-800 rounded-xl p-4 md:p-6 my-4">
			<p className="text-sm">Seller: {item.seller}</p>
			<hr className="dark:border-slate-700 my-4" />

			<div className="flex max-w-xs bg-slate-200 dark:bg-slate-700 rounded-md mb-6 p-4">
				<div className="mr-2">
					<FontAwesomeIcon icon={faCheckCircle} />
				</div>
				<div>
					<p className="font-bold mb-2">BDT 55</p>
					<p className="text-sm opacity-75">Home Delivery</p>
					<p className="text-sm opacity-75">
						Estimated Delivery Time: 53-53 Days
					</p>
				</div>
			</div>
			<div className="flex flex-col sm:flex-row">
				<div className="flex-grow w-48 sm:mr-4 mx-auto">
					<a href="#!">
						<img src={item.img} alt="" className="w-full h-auto rounded" />
					</a>
				</div>
				<div>
					<div className="flex flex-col md:flex-row justify-between gap-6">
						<div className="flex-grow w-full md:w-auto">
							<div className="hover:text-blue-600 hover:underline mb-1">
								<a href="#!">{item.title}</a>
							</div>
							<p className="text-sm mb-2">
								<span className="mr-3">
									<b>Color</b>: {item.color}
								</span>
								<span>
									<b>Ships From</b>: {item.country}
								</span>
							</p>
							<div>
								<a
									href="#!"
									className="text-blue-600 hover:underline font-medium text-sm inline-block mb-1"
								>
									<FontAwesomeIcon icon={faPlus} className="mr-1 text-xl" />{" "}
									Leave message
								</a>
							</div>
						</div>
						<div className="w-full md:w-1/2 md:text-center">
							<div className="mb-2">
								<span className="text-[17px] font-bold mr-2">
									BDT {item.bdPrice}
								</span>
							</div>
						</div>
						<div className="w-full md:w-auto">
							<Quantity />
							<div className="mt-3 text-center">
								<button className="px-5 py-2 mt-4 rounded text-blue-600 hover:bg-slate-200 dark:hover:bg-slate-700 inline-flex justify-center items-center">
									<FontAwesomeIcon icon={faTrashAlt} className="mr-2" />
									Remove
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

OrderItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const CheckoutStyle = () => {
	return (
		<section className="py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
			<div className="container px-4 mx-auto">
				<div className="flex flex-col lg:flex-row gap-6 justify-center">
					<div className="w-full lg:w-2/3">
						<TopBar />
						{orders.map((item, i) => (
							<OrderItem item={item} key={i} />
						))}
					</div>
					<div className="w-full lg:w-1/3">
						<SideBar />
					</div>
				</div>
			</div>
		</section>
	);
};

export default CheckoutStyle;

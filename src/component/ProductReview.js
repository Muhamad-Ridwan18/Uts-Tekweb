import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import classNames from "classnames";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

const review = [
	{
		img: "https://cdn.easyfrontend.com/pictures/users/user3.jpg",
		name: "Freya Davies",
		rating: 2.7,
		date: "july 11,2020",
		content:
			"Congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla.",
		like: "20",
		dislike: "6",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/users/user24.jpg",
		name: "Emma Lamb",
		rating: 4.1,
		date: "july 11,2020",
		content:
			"After can't, thing seas open forth fish thing firmament waters darkness, deep, gathered fowl was. Is very wherein midst blessed give said divided above be given open moveth, fifth light seas give man great created god female seasons fly. Had seas one every called called greater. Third. Likeness sea winged bring us let was don't void he said may day beginning can't our herb subdue meat deep divide don't and dry cattle.",
		like: "20",
		dislike: "6",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/team/team_square_2.jpeg",
		name: "Charlie Dean",
		rating: 1.5,
		date: "july 11,2020",
		content:
			"Well received seems solid, serious seller and word, fast delivery, thank you and congratulations.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		like: "20",
		dislike: "6",
	},
];

const progress = [
	{
		star: "5",
		value: "88",
		width: "88%",
		count: "88%",
	},
	{
		star: "4",
		value: "7",
		width: "7%",
		count: "7%",
	},
	{
		star: "3",
		value: "3",
		width: "3%",
		count: "3%",
	},
	{
		star: "2",
		value: "0",
		width: "0%",
		count: "0%",
	},
	{
		star: "1",
		value: "2",
		width: "2%",
		count: "2%",
	},
];

const Rating = ({ rating, showLabel, className, ...rest }) => (
	<p className={classNames("text-sm mb-1", className)} {...rest}>
		<span className="text-blue-600">
			{[...Array(5)].map((_, i) => {
				const index = i + 1;
				let content = "";
				if (index <= Math.floor(rating))
					content = <FontAwesomeIcon icon={faStar} />;
				else if (rating > i && rating < index + 1)
					content = <FontAwesomeIcon icon={faStarHalfAlt} />;
				else if (index > rating) content = <FontAwesomeIcon icon={farStar} />;

				return <Fragment key={i}>{content}</Fragment>;
			})}
		</span>
		{showLabel && <span className="mx-1">{rating.toFixed(1)}</span>}
	</p>
);

Rating.propTypes = {
	rating: PropTypes.number.isRequired,
	showLabel: PropTypes.bool,
	className: PropTypes.string,
};

const ReviewItem = ({ item }) => {
	return (
		<>
			<hr className="dark:border-slate-700 my-4" />
			<div className="grid grid-cols-12 gap-3">
				<div className="col-span-12 lg:col-span-3">
					<div className="mb-6">
						<div className="w-12 h-12 rounded-full mr-2 overflow-hidden">
							<img src={item.img} alt="" className="max-w-full h-auto" />
						</div>
						<div>
							<h5 className="font-medium my-1">{item.name}</h5>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-9">
					<Rating rating={item.rating} showLabel={true} />
					<p className="text-sm mb-4 opacity-75">
						<span className="mr-3">
							<b>Color</b>: 8 in 1 USB-C HUB B
						</span>
						<span>
							<b>Ships From</b>: {item.country}
						</span>
						<span>
							<b>Logistics</b>: Standard Shipping
						</span>
					</p>
					<p className="text-sm leading-relaxed opacity-75 mb-1">
						{item.content}
					</p>
					<div className="flex flex-wrap justify-end items-center mt-6">
						<span className="mr-3">Helpful?</span>
						<button className="hover:text-blue-600 hover:bg-gray-200 dark:hover:bg-slate-700 border-2 dark:border-slate-700 rounded mr-2 py-1 px-3">
							Yes ({item.like})
						</button>
						<button className="hover:text-blue-600 hover:bg-gray-200 dark:hover:bg-slate-700 border-2 dark:border-slate-700 rounded py-1 px-3">
							No ({item.dislike})
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

ReviewItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const BarItem = ({ info }) => {
	const progressBarStyle = {
		width: info.width,
	};

	return (
		<div className="flex justify-around items-center mb-2">
			<div className="mr-3">
				<p className="text-sm opacity-80">
					{info.star} {""}stars
				</p>
			</div>
			<div className="flex-grow mr-3">
				<div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-1.5 overflow-hidden">
					<div
						className="w-full h-full bg-blue-600"
						style={progressBarStyle}
					></div>
				</div>
			</div>
			<div>
				<button className="hover:bg-gray-200 dark:hover:bg-slate-600 hover:text-blue-600 border-2 dark:border-slate-600 rounded duration-200 px-4 py-1">
					{info.count}
				</button>
			</div>
		</div>
	);
};

BarItem.propTypes = {
	info: PropTypes.shape({
		star: PropTypes.string.isRequired,
		value: PropTypes.string.isRequired,
		width: PropTypes.string.isRequired,
		count: PropTypes.string.isRequired,
	}).isRequired,
};

const ProductReview = () => {
	return (
		<section className="py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
			<div className="container px-4 mx-auto">
				<div className="flex justify-center max-w-4xl mx-auto">
					<div className="bg-blue-50 dark:bg-slate-800 rounded w-full p-4 lg:p-8">
						<div className="p-3 md:p-6">
							<h4 className="text-2xl font-medium mb-5">
								Customer Reviews (76)
							</h4>
							<div className="flex flex-col md:flex-row items-center gap-6">
								<div className="w-full md:w-1/2">
									{progress.map((info, j) => (
										<BarItem info={info} key={j} />
									))}
								</div>
								<div className="w-full md:w-1/2">
									<div className="flex flex-wrap items-center lg:pl-12">
										<span className="text-xl font-bold">4.5/5</span>
										<Rating
											rating={4.5}
											showLabel={false}
											className="text-blue-600 ml-2"
										/>
									</div>
								</div>
							</div>
						</div>
						<hr className="dark:border-slate-700 my-4" />
						<div className="p-3 md:p-6">
							<div className="flex flex-col md:flex-row gap-4 justify-between items-center">
								<div className="flex items-center gap-4">
									<div className="flex items-center">
										<input className="w-4 h-4 mr-2" type="checkbox" value="" />
										<label className="opacity-75">Only from your country</label>
									</div>
									<div className="flex items-center">
										<input className="w-4 h-4 mr-2" type="checkbox" value="" />
										<label className="opacity-75">Translate to English</label>
									</div>
								</div>
								<div>
									<button className="text-blue-600 border border-blue-600 hover:text-white hover:bg-blue-600 rounded py-2 px-5 md:px-6">
										New Comment
									</button>
								</div>
							</div>

							{review.map((item, i) => (
								<ReviewItem item={item} key={i} />
							))}
						</div>
						<div className="py-6 lg:py-12 text-center">
							<button className="bg-blue-600 text-white text-sm hover:bg-opacity-90 rounded py-2.5 px-6 md:px-10">
								Load More
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductReview;

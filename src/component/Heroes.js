import React from "react";

const Heroes = () => {
	return (
		<section className="ezy__header26 light py-24 md:py-32 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4 mx-auto relative">
				<div className="grid grid-cols-12 gap-y-6 lg:gap-x-6">
					<div className="col-span-12 lg:col-span-7 text-center lg:text-start">
						<div className="flex flex-col justify-center h-full">
							<h2 className="text-3xl font-bold leading-tight md:text-[55px] mb-6">
								Easy Access From Anywhere
							</h2>
							<p className="text-xl leading-tight opacity-80">
								Tincidunt eget lectus facilisis ut tincidunt. Tellus at diam
								facilisis enim consectetur adipiscing cras tincidunt. Et
								placerat tempor dignissim tempor eget sit cursus. Diam nunc
								vulputate vel ornare.
							</p>
							<div className="flex items-center mt-12">
								<a href="#!" className="shadow m-1">
									<img
										src="https://cdn.easyfrontend.com/pictures/hero/play-app-android.png"
										alt=""
									/>
								</a>
								<a href="#!" className="shadow m-1">
									<img
										src="https://cdn.easyfrontend.com/pictures/hero/play-app-apple.png"
										alt=""
									/>
								</a>
							</div>
						</div>
					</div>
					<div className="col-span-12 lg:col-span-5 text-center lg:text-end">
						<img
							src="https://cdn.easyfrontend.com/pictures/hero/hero_26_bg.png"
							alt=""
							className="max-w-full h-auto mx-auto max-h-[600px]"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Heroes;

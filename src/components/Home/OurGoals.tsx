
const OurGoals = () => {
	return (
		<section className="mt-[50px]" dir="rtl">
			<div className=" text-black py-20">
				<div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
					<div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
						<h1 className="text-5xl  md:text-6xl lg:text-7xl xl:text-8xl p-2 text-primary-text tracking-loose">PA Tech</h1>
						<h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">شرة برمجية تابعة ل PA Group 
						</h2>
						<a href="#"
							className="bg-transparent w-[80%] mt-[20px] lg:w-full  rounded-lg text-center py-[10px] hover:bg-primary-text text-primary-text hover:text-white duration-300  shadow hover:shadow-lg  px-4 border border-primary-text hover:border-transparent">
							تواصل مع فريقنا البرمجي الأن</a>
					</div>
					<div className="p-8 mt-12 mb-6 hidden md:!flex md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
						<div className="h-48 flex flex-wrap content-center">
							<div>
								<img className=" mt-28 hidden  xl:!inline-block" src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png" /></div>
							<div>
								<img className="inline-block   mt-24 md:mt-0 p-8 md:p-0" src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png" /></div>
							<div>
								<img className="mt-28 hidden lg:!inline-block" src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png" /></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurGoals;

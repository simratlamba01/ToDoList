import React from 'react';
import WeatherForm from '../components/Weather/WeatherForm';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function ShowWeather() {
	return (
		<>
			<Header />
			<section className='py-8 h-screen flex bg-gray-300'>
				<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 w-full'>
					<div className='flex flex-wrap'>
						<h1 className='font-bold xl:text-4xl text-2xl text-gray-700 mb-8 px-4'>Enter City to Check Weather</h1>
					</div>
					<div className='flex flex-wrap'>

						<WeatherForm />
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}

export default ShowWeather;

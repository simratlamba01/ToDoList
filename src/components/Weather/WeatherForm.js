import React, { useState } from 'react';
import axios from 'axios';

const WeatherForm = () => {
    const [input, setInput] = useState('');
    const [weather, setWeather] = useState({
        loading: false,
        data: {},
        error: false,
    });

    const toDateFunction = () => {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
        const WeekDays = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ];
        const currentDate = new Date();
        const date = `${WeekDays[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]
            }`;
        return date;
    };

    const search = async (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            setInput('');
            setWeather({ ...weather, loading: true });
            const url = 'https://api.openweathermap.org/data/2.5/weather';
            const api_key = 'f00c38e0279b7bc85480c3fe775d518c';
            await axios
                .get(url, {
                    params: {
                        q: input,
                        units: 'metric',
                        appid: api_key,
                    },
                })
                .then((res) => {
                    console.log('res', res);
                    setWeather({ data: res.data, loading: false, error: false });
                })
                .catch((error) => {
                    setWeather({ ...weather, data: {}, error: true });
                    setInput('');
                    console.log('error', error);
                });
        }
    };
    return (
        <>
            <div className="bg-gray-400 w-full mw-full py-3 rounded px-4 h-24 flex items-center justify-center mx-4 shadow-lg">
                <input
                    type="text"
                    className="add-task py-2 px-4 rounded mr-4 md:w-1/2 w-full"
                    placeholder="Enter City Name.."
                    name="query"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    onKeyPress={search}
                />
            </div>

            <div className='mx-full w-full mx-4 flex flex-wrap justify-center'>

                {weather.loading && (
                    <>
                        <div className='md:basis-1/2 shrink-0 grow-0 basis-full mx-auto'>
                            <div className='bg-white rounded mt-6 overflow-hidden h-56'>
                                <div className="bg-gray-600 text-center py-3 px-4">
                                    <h2 className='md:text-2xl text-lg font-bold bg-gray-300 h-6'>
                                    </h2>
                                </div>
                                <div className='text-center pb-2'>
                                    <div className="py-2 bg-red-200">
                                        <span className='text-lg font-medium text-red-600 h-8 block'></span>
                                    </div>
                                    <div className="text-center">

                                    </div>

                                </div>
                            </div>
                        </div>
                    </>
                )}
                {weather.error && (
                    <>
                        <div class="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 mt-4 text-center mx-full w-full" role="alert">
                            <span class="font-bold text-lg">City not found</span>
                        </div>
                    </>
                )}
                {weather && weather.data && weather.data.main && (
                    <div className='md:basis-1/2 shrink-0 grow-0 basis-full mx-auto'>
                        <div className='bg-white rounded mt-6 overflow-hidden'>
                            <div className="bg-gray-600 text-center py-2">
                                <h2 className='md:text-2xl text-lg font-bold text-white'>
                                    {weather.data.name}, <span>{weather.data.sys.country}</span>
                                </h2>
                            </div>
                            <div className='text-center pb-2'>
                                <div className="py-2 bg-red-200">
                                    <span className='text-lg font-medium text-red-600'>{toDateFunction()}</span>
                                </div>
                                <div className="text-center">
                                    <img
                                        className="mx-auto"
                                        src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
                                        alt={weather.data.weather[0].description}
                                    />
                                    <span className='font-bold text-lg text-gray-700'>Todays Temperature: {Math.round(weather.data.main.temp)}</span>
                                    <sup className="deg">°C</sup>
                                </div>

                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default WeatherForm
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        // <div>
        //     <div className='max-w-7xl mx-auto flex items-center justify-between'>
        //         <div>
        //             <p>Volunteer together</p>
        //             <h2>Small acts. Stronger communities.</h2>
        //             <p>Join tree plantations, clean-up drives and blood donation camps happening near you, or organise your own.</p>
        //             <button>Create an Event</button>
        //         </div>
        //         <div>
        //             <Image src={'/hero.png'} alt='photo' width={300} height={300}></Image>
        //         </div>
        //     </div>
        // </div>
        <section className="bg-green-50 py-12 sm:py-16 lg:py-24">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 lg:gap-16">

                    {/* Left Content */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                            🌱 Volunteer together
                        </span>

                        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Small acts.
                            <span className="block text-green-700">
                                Stronger communities.
                            </span>
                        </h2>

                        <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                            Join tree plantations, clean-up drives and blood donation
                            camps happening near you, or organise your own.
                        </p>

                        <button className="mt-8 bg-green-700 hover:bg-green-800 text-white font-semibold px-7 py-3.5 rounded-xl transition duration-300 shadow-lg shadow-green-700/20">
                            Create an Event →
                        </button>

                        <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-8 text-sm text-gray-600">
                            <span>🌳 Tree Plantation</span>
                            <span>❤️ Blood Donation</span>
                            <span>🤝 Community Care</span>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="absolute -top-5 -right-5 w-28 h-28 bg-green-200 rounded-full blur-2xl opacity-70"></div>

                        <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
                            <Image
                                src="/hero.png"
                                alt="Community volunteers working together"
                                width={700}
                                height={550}
                                priority
                                className="w-full h-70 sm:h-95 lg:h-120 object-cover"
                            />
                        </div>

                        <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-white shadow-xl rounded-2xl p-4 sm:p-5">
                            <p className="text-green-700 font-bold text-lg">
                                Together We Grow 🌱
                            </p>
                            <p className="text-gray-500 text-xs sm:text-sm">
                                Make a difference in your community
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='max-w-7xl mx-auto sm:px-6 lg:px-8 mt-16 flex items-center justify-center gap-9'>
                <div className='bg-green-700 text-white p-4 rounded-2xl'>
                    <h3 className='text-3xl font-bold'>1250+</h3>
                    <p>Volunteers</p>
                </div>
                <div className='bg-green-700 text-white p-4 rounded-2xl'>
                    <h3 className='text-3xl font-bold'>120+</h3>
                    <p>Events completed</p>
                </div>
                <div className='bg-green-700 text-white p-4 rounded-2xl'>
                    <h3 className='text-3xl font-bold'>19000+</h3>
                    <p>Lives Impacted</p>
                </div>
                <div className='bg-green-700 text-white p-4 rounded-2xl '>
                    <h3 className='text-3xl font-bold'>100%</h3>
                    <p>Community Driven</p>
                </div>
            </div>
        </section>
    );
};

export default Banner;
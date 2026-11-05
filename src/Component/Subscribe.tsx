import React from 'react';
import { Leaf, Mail, ArrowRight, ShieldCheck } from "lucide-react";


const Subscribe = () => {
    return (
        // <div>
        //     <div>
        //         <p> Say Connected</p>
        //         <h2>Subscribe our Local Cause Alerts</h2>
        //     </div>
        //     <form action="">
        //         <input 
        //         type="email"
        //         placeholder='enter your email...' 
        //         />
        //         <button>Subscribe</button>
        //     </form>
        // </div>
        <section className="px-4 bg-green-50 dark:bg-black sm:px-6 lg:px-8 py-16 md:py-24">

            <div className="max-w-7xl mx-auto relative overflow-hidden
            rounded-[2rem] bg-linear-to-br from-green-900 to-emerald-500 p-7 sm:p-12
            lg:p-16 shadow-2xl">
                <div className="absolute -top-32 -right-20
                w-80 h-80 bg-green-400/20 rounded-full blur-3xl" />

                <div className="absolute -bottom-32 -left-20
                w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl" />

                <div className="relative z-10 grid grid-cols-1
                lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* Content */}
                    <div>

                        <div className="inline-flex items-center gap-2
                        rounded-full border border-green-300/20
                        bg-green-400/10 px-4 py-2 mb-6">

                            <Leaf size={16} className="text-green-300" />

                            <span className="text-green-200 text-xs
                            font-semibold tracking-wider uppercase">
                                Stay Connected
                            </span>

                        </div>

                        <h2 className="text-white text-3xl sm:text-4xl
                        lg:text-5xl font-bold leading-tight">
                            Good Things Grow
                            <span className="block text-green-300 mt-2">
                                When We`re Connected.
                            </span>
                        </h2>

                        <p className="text-green-100/80 mt-6
                        leading-7 text-sm sm:text-base max-w-lg">
                            Subscribe to our local cause alerts and
                            discover upcoming events, volunteer
                            opportunities and inspiring community stories.
                        </p>

                        <div className="flex flex-wrap gap-5 mt-8">

                            <div className="flex items-center gap-2">
                                <ShieldCheck size={18}
                                    className="text-green-300" />
                                <span className="text-green-100 text-xs">
                                    No spam
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Mail size={18}
                                    className="text-green-300" />
                                <span className="text-green-100 text-xs">
                                    Useful updates
                                </span>
                            </div>

                        </div>

                    </div>

                    {/* Subscribe Form */}
                    <div className="bg-white/10 backdrop-blur-xl
                    border border-white/20 rounded-3xl
                    p-6 sm:p-8 shadow-xl">

                        <div className="mb-6">
                            <h3 className="text-white text-2xl
                            font-bold">
                                Join Our Community
                            </h3>

                            <p className="text-green-100/70
                            text-sm mt-2">
                                Be the first to know about local initiatives.
                            </p>
                        </div>

                        <form className="space-y-4">

                            <label className="block text-green-100
                            text-sm font-medium">
                                Email Address
                            </label>

                            <div className="flex items-center gap-3
                            bg-white rounded-xl px-4
                            focus-within:ring-4 focus-within:ring-green-400/30
                            transition-all">

                                <Mail size={20}
                                    className="text-green-700 shrink-0" />

                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your email..."
                                    className="w-full py-4 outline-none
                                    text-gray-800 text-sm
                                    placeholder: bg-transparent"
                                />

                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center
                                justify-center gap-3 bg-green-400
                                hover:bg-green-300 text-green-950
                                font-bold py-4 rounded-xl
                                transition-all duration-300
                                hover:shadow-lg hover:shadow-green-400/20
                                hover:-translate-y-1"
                            >
                                Subscribe Now
                                <ArrowRight size={20} />
                            </button>

                        </form>

                        <p className="text-center text-green-100/60
                        text-xs mt-5">
                            By subscribing, you agree to receive
                            community updates.
                        </p>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Subscribe;
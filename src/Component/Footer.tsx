
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        // <div className='max-w-7xl mx-auto bg-green-900'>
        //     <div className='flrx items-center justify-between'>
        //         <div>
        //             <h2>GreenHands</h2>
        //             <p>A community platform connecting volunteers with plantation, clean-up and blood donation events.</p>
        //         </div>
        //         <div>
        //             <h3>Company</h3>
        //             <Link href='#'>About us</Link>
        //             <Link href='#'>Contact</Link>
        //             <Link href='#'>Privacy</Link>
        //             <Link href='#'>Terms of use</Link>
        //         </div>
        //         <div>
        //             <h3>Explore</h3>
        //             <Link href='#'>Upcoming events</Link>
        //             <Link href='#'>Create event</Link>
        //             <Link href='#'>Joined events</Link>
        //             <Link href='#'>Manage events</Link>
        //         </div>
        //     </div>
        //     <div className='flex items-center justify-between'>
        //         <h3>© [Year] GreenHands. All rights reserved.</h3>
        //         <div className='flex items-center justify-center'>
        //             <p>Facebook</p>
        //             <p>Instagram</p>
        //             <p>Youtube</p>
        //         </div>
        //     </div>
        // </div>
        <footer className="bg-green-950 text-white">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-12 pb-6">

                {/* Footer Main Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 pb-10">

                    {/* Brand */}
                    <div>
                        <h2 className="text-3xl font-bold text-green-400 mb-4">
                            GreenHands
                        </h2>

                        <p className="text-gray-300 text-sm leading-7 max-w-sm">
                            A community platform connecting volunteers
                            with plantation, clean-up and blood donation events.
                        </p>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-lg font-semibold mb-5">
                            Company
                        </h3>

                        <div className="flex flex-col gap-3">
                            <Link href="#" className="text-gray-300 hover:text-green-400 transition">
                                About us
                            </Link>
                            <Link href="#" className="text-gray-300 hover:text-green-400 transition">
                                Contact
                            </Link>
                            <Link href="#" className="text-gray-300 hover:text-green-400 transition">
                                Privacy
                            </Link>
                            <Link href="#" className="text-gray-300 hover:text-green-400 transition">
                                Terms of use
                            </Link>
                        </div>
                    </div>

                    {/* Explore */}
                    <div>
                        <h3 className="text-lg font-semibold mb-5">
                            Explore
                        </h3>

                        <div className="flex flex-col gap-3">
                            <Link href="#" className="text-gray-300 hover:text-green-400 transition">
                                Upcoming events
                            </Link>
                            <Link href="#" className="text-gray-300 hover:text-green-400 transition">
                                Create event
                            </Link>
                            <Link href="#" className="text-gray-300 hover:text-green-400 transition">
                                Joined events
                            </Link>
                            <Link href="#" className="text-gray-300 hover:text-green-400 transition">
                                Manage events
                            </Link>
                        </div>
                    </div>

                </div>

                {/* Bottom Footer */}
                <div className="border-t border-green-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-5">

                    <h3 className="text-sm text-gray-300 text-center">
                        © 2026 GreenHands. All rights reserved.
                    </h3>

                    {/* Social Links */}
                    <div className="flex items-center gap-6">
                        <Link href="#" className="text-sm text-gray-300 hover:text-green-400 transition">
                            Facebook
                        </Link>

                        <Link href="#" className="text-sm text-gray-300 hover:text-green-400 transition">
                            Instagram
                        </Link>

                        <Link href="#" className="text-sm text-gray-300 hover:text-green-400 transition">
                            Youtube
                        </Link>
                    </div>

                </div>
            </div>
        </footer>
    );
}


export default Footer;
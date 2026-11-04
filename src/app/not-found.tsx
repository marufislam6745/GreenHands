import Link from 'next/link'
import { Leaf, ArrowLeft } from "lucide-react";


export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-green-50 px-4 py-6">
            <div className="max-w-xl w-full text-center">

                {/* 404 Illustration */}
                <div className="relative mb-6">

                    <h1 className="text-[120px] sm:text-[180px] font-extrabold leading-none text-green-100">
                        404
                    </h1>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 sm:w-28 sm:h-28 bg-green-600 rounded-full flex items-center justify-center shadow-xl shadow-green-200">
                            <Leaf className="w-10 h-10 sm:w-14 sm:h-14 text-white" />
                        </div>
                    </div>

                </div>

                {/* Content */}
                <div className="space-y-4">

                    <span className="inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-bold">
                        Oops! Page Not Found
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                        Looks Like You`re <span className="text-green-600">Lost!</span>
                    </h2>

                    <p className="text-gray-500 text-sm sm:text-base leading-7 max-w-md mx-auto">
                        Sorry, we couldn`t find the page you`re looking for.
                        It might have been removed, renamed, or temporarily unavailable.
                    </p>

                    {/* Button */}
                    <div className="pt-5 flex flex-col sm:flex-row justify-center gap-4">

                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg shadow-green-200 transition-all duration-300 hover:-translate-y-1"
                        >
                            <ArrowLeft size={18} />
                            Return Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
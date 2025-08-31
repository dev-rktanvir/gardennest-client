import React, { use } from "react";
import { FaHeart, FaEye } from "react-icons/fa";
import { Link } from "react-router";

const tipsPromiss = fetch('http://localhost:5000/tips?limit=6').then(res => res.json())

const TopTrendingTips = () => {

    const tips = use(tipsPromiss);
    return (
        <section className="py-12 md:py-20 bg-base-200">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10 md:mb-20">
                    Top Trending Tips
                </h2>

                {/* Tips Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {tips.map((tip) => (
                        <div
                            key={tip._id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
                        >
                            {/* Image */}
                            <div className="h-48 w-full overflow-hidden rounded-t-2xl">
                                <img
                                    src={tip.imageUrl}
                                    alt={tip.title}
                                    className="w-full h-full object-cover hover:scale-110 transition"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col h-full">
                                <h3 className="text-lg md:text-xl font-semibold text-secondary line-clamp-2 mb-2">
                                    {tip.title}
                                </h3>
                                <p className="text-sm text-gray-500 mb-3">
                                    Category:{" "}
                                    <span className="font-medium text-primary">{tip.category}</span>
                                </p>
                                <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                                    {tip.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="flex items-center gap-1">
                                        <FaHeart className="text-red-500" /> {tip.totalLikes}
                                    </span>
                                    <Link
                                        to={`/tips-details/${tip._id}`}
                                        className="flex items-center gap-1 text-primary font-medium hover:text-secondary transition"
                                    >
                                        <FaEye /> See More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopTrendingTips;

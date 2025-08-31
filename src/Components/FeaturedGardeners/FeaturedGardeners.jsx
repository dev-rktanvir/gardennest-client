import React, { use } from "react";
import { FaLeaf, FaUser } from "react-icons/fa";

const gardenersPromiss = fetch("http://localhost:5000/gardeners?limit=6").then(res => res.json())

const FeaturedGardeners = () => {
    const gardeners = use(gardenersPromiss);

    return (
        <section className="py-12 md:py-20 bg-base-200">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Heading */}
                <div className="text-center mb-10 md:mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">
                        Featured Gardeners
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Meet our most active and inspiring gardeners in the community.
                    </p>
                </div>

                {/* Grid of Gardeners */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {gardeners.map((gardener) => (
                        <div
                            key={gardener._id}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center text-center"
                        >
                            {/* Image */}
                            <img
                                src={gardener.image}
                                alt={gardener.name}
                                className="w-24 h-24 rounded-full border-4 border-primary object-cover mb-4"
                            />

                            {/* Name + Status */}
                            <h3 className="text-xl font-bold text-gray-800">
                                {gardener.name}
                            </h3>
                            <p className="text-sm text-secondary mb-2">Status: {gardener.status}</p>

                            {/* Info */}
                            <div className="w-full text-sm text-gray-600 space-y-1 mb-4">
                                <p className="flex justify-center items-center gap-2">
                                    <FaLeaf className="text-primary" />{" "}
                                    <span>{gardener.totalTips} Tips Shared</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedGardeners;

import React from "react";
import { FaSeedling, FaRegUserCircle, FaLeaf } from "react-icons/fa";
import { useLoaderData } from "react-router";



const Gardeners = () => {
    const gardenersData = useLoaderData()

    return (
        <div className="min-h-screen bg-base-200 px-4 py-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">
                Meet Our Gardeners
            </h2>

            {/* Grid for Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {gardenersData.map((gardener) => (
                    <div
                        key={gardener._id}
                        className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
                    >
                        {/* Top Image */}
                        <div className="h-40 w-full bg-base-100 flex items-center justify-center">
                            <img
                                src={gardener.image}
                                alt={gardener.name}
                                className="w-24 h-24 rounded-full border-4 border-primary object-cover mt-12"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-bold text-gray-800">{gardener.name}</h3>
                            <p className="text-sm text-gray-500 mb-3">({gardener.gender}, {gardener.age} yrs)</p>

                            {/* Status */}
                            <span
                                className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${gardener.status === "Active"
                                    ? "bg-green-100 text-green-600"
                                    : "bg-red-100 text-red-600"
                                    }`}
                            >
                                {gardener.status}
                            </span>

                            {/* Experiences */}
                            <p className="text-gray-600 text-sm mb-4">
                                <FaLeaf className="inline mr-2 text-primary" />
                                {gardener.experience}
                            </p>

                            {/* Total Shared Tips */}
                            <div className="flex justify-center items-center gap-2 text-sm font-medium text-gray-700">
                                <FaSeedling className="text-secondary" />
                                <span>Total Shared Tips:</span>
                                <span className="text-primary font-bold">{gardener.totalTips}</span>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="bg-base-100 p-4 text-center">
                            <button className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-secondary transition">
                                View Profile
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gardeners;

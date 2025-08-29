import React from "react";
import { Link, useLoaderData } from "react-router";
import { FaEye } from "react-icons/fa";

const BrowseTips = () => {
    const tips = useLoaderData();

    return (
        <div className="min-h-screen bg-base-200 px-4 py-10">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-6">

                <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                    Browse Gardening Tips
                </h2>

                {/* ✅ Table view for Desktop */}
                <div className="hidden lg:block overflow-x-auto">
                    <table className="table-auto w-full border-collapse">
                        <thead>
                            <tr className="bg-primary text-white text-left">
                                <th className="px-4 py-3 rounded-tl-lg">Image</th>
                                <th className="px-4 py-3">Title</th>
                                <th className="px-4 py-3">Category</th>
                                <th className="px-4 py-3 text-center rounded-tr-lg">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tips.map((tip, index) => (
                                <tr
                                    key={tip._id}
                                    className={`border-b hover:bg-base-100 transition ${index % 2 === 0 ? "bg-gray-50" : "bg-base-200"
                                        }`}
                                >
                                    <td className="px-4 py-3">
                                        <img
                                            src={tip.imageUrl}
                                            alt={tip.title}
                                            className="w-16 h-16 object-cover rounded-lg border"
                                        />
                                    </td>
                                    <td className="px-4 py-3 font-medium text-gray-700">
                                        {tip.title}
                                    </td>
                                    <td className="px-4 py-3 text-gray-600">{tip.category}</td>
                                    <td className="px-4 py-3 text-center">
                                        <Link
                                            to={`/tips-details/${tip._id}`}
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition"
                                        >
                                            <FaEye />
                                            See More
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* ✅ Card view for Mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
                    {tips.map((tip) => (
                        <div
                            key={tip.id}
                            className="bg-base-100 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
                        >
                            {/* Image */}
                            <img
                                src={tip.imageUrl}
                                alt={tip.title}
                                className="w-full h-40 object-cover"
                            />

                            {/* Content */}
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-primary">
                                    {tip.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">{tip.category}</p>

                                {/* Action */}
                                <Link
                                    to={`/tips/${tip.id}`}
                                    className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-primary text-white font-medium hover:bg-secondary transition"
                                >
                                    <FaEye /> See More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrowseTips;

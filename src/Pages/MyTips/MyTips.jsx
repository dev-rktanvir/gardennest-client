import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import { FaEye, FaTrashAlt, FaEdit } from "react-icons/fa";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";

const MyTips = () => {
    const { user } = use(AuthContext);
    const [tips, setTips] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/tips?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setTips(data);
                })
        }
    }, [user?.email])

    const handleDelete = (id) => {
        // TODO: Add delete logic (e.g., API call)
        console.log("Deleting tip with id:", id);
    };

    const handleUpdate = (id) => {
        // TODO: Navigate to update page or open a modal
        console.log("Updating tip with id:", id);
    };

    return (
        <div className="min-h-screen bg-base-200 px-4 py-10">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-6">

                <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                    My Gardening Tips
                </h2>

                {/* ✅ Table view for Desktop */}
                <div className="hidden lg:block overflow-x-auto">
                    <table className="table-auto w-full border-collapse">
                        <thead>
                            <tr className="bg-primary text-white text-left">
                                <th className="px-4 py-3 rounded-tl-lg">Image</th>
                                <th className="px-4 py-3">Title</th>
                                <th className="px-4 py-3">Category</th>
                                <th className="px-4 py-3 text-center rounded-tr-lg">Actions</th>
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
                                    <td className="px-4 py-3 font-medium text-gray-700">{tip.title}</td>
                                    <td className="px-4 py-3 text-gray-600">{tip.category}</td>
                                    <td className="px-4 py-3 text-center space-x-2">
                                        <Link
                                            to={`/edit-tips/${tip._id}`}
                                            className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
                                        >
                                            <FaEdit />
                                            Update
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(tip._id)}
                                            className="inline-flex items-center gap-2 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                                        >
                                            <FaTrashAlt />
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* ✅ Card view for Mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden mt-6">
                    {tips.map((tip) => (
                        <div
                            key={tip._id}
                            className="bg-base-100 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
                        >
                            <img
                                src={tip.imageUrl}
                                alt={tip.title}
                                className="w-full h-40 object-cover"
                            />

                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-primary">{tip.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{tip.category}</p>

                                <div className="flex flex-col gap-2">
                                    <Link
                                        to={`/edit-tips/${tip._id}`}
                                        className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-yellow-500 text-white font-medium hover:bg-yellow-600 transition"
                                    >
                                        <FaEdit /> Update
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(tip._id)}
                                        className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition"
                                    >
                                        <FaTrashAlt /> Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default MyTips;

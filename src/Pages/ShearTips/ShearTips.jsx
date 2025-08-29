import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import Swal from "sweetalert2";

const ShearTips = () => {
    const { user } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        const newTips = {
            ...data,
            createdAt: new Date().toISOString(),
            likes: 0,
            userEmail: user?.email
        }

        // Send Data in DB
        fetch('http://localhost:5000/tips', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTips)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Your tip has been added successfully 🎉",
                        icon: "success",
                        confirmButtonColor: "#16a34a",
                        background: "#f0fdf4",
                        timer: 1500
                    });
                    form.reset();
                }
                else {
                    Swal.fire({
                        title: "Error!",
                        text: "Failed to add tip. Please try again.",
                        icon: "error",
                        confirmButtonColor: "#dc2626",
                        background: "#fef2f2",
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                Swal.fire({
                    title: "Error!",
                    text: error.message,
                    icon: "error",
                    confirmButtonColor: "#dc2626",
                    background: "#fef2f2",
                    timer: 1500
                });
            })
    };

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-6">
                    Share Your Gardening Tips 🌱
                </h2>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Title */}
                    <div className="col-span-1 md:col-span-2">
                        <label className="block text-sm font-medium text-primary mb-1">Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="e.g., How I Grow Tomatoes Indoors"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>

                    {/* Plant Type */}
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">Plant Type / Topic</label>
                        <input
                            type="text"
                            name="plantType"
                            placeholder="e.g., Tomato"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>

                    {/* Difficulty */}
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">Difficulty Level</label>
                        <select
                            name="difficulty"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        >
                            <option value="">Select Difficulty</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>

                    {/* Description */}
                    <div className="col-span-1 md:col-span-2">
                        <label className="block text-sm font-medium text-primary mb-1">Description</label>
                        <textarea
                            name="description"
                            placeholder="Write your gardening tip here..."
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            rows="4"
                            required
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">Image URL</label>
                        <input
                            type="url"
                            name="image"
                            placeholder="https://example.com/image.jpg"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">Category</label>
                        <select
                            name="category"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="Composting">Composting</option>
                            <option value="Plant Care">Plant Care</option>
                            <option value="Vertical Gardening">Vertical Gardening</option>
                            <option value="Indoor Plants">Indoor Plants</option>
                            <option value="Outdoor Plants">Outdoor Plants</option>
                        </select>
                    </div>

                    {/* Availability */}
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">Availability</label>
                        <select
                            name="availability"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        >
                            <option value="">Select Availability</option>
                            <option value="Public">Public</option>
                            <option value="Hidden">Hidden</option>
                        </select>
                    </div>

                    {/* User Info */}
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">Your Name</label>
                        <input
                            type="text"
                            value={user?.displayName || "Anonymous"}
                            readOnly
                            className="w-full px-4 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
                        />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <label className="block text-sm font-medium text-primary mb-1">Your Email</label>
                        <input
                            type="email"
                            value={user?.email || "Not Available"}
                            readOnly
                            className="w-full px-4 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-1 md:col-span-2">
                        <button
                            type="submit"
                            className="w-full py-2 rounded-lg bg-primary font-semibold text-white hover:bg-secondary transition"
                        >
                            Submit Tip
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ShearTips;

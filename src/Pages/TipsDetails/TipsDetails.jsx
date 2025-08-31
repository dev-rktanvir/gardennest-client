import React, { useState, useEffect, use } from "react";
import { useLoaderData } from "react-router";
import { FaHeart } from "react-icons/fa";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";

const TipsDetails = () => {
    const { user } = use(AuthContext);

    const { _id, title, plantType, imageUrl, difficulty, description, category, userEmail, createdAt, experience, totalLikes, likedBy } = useLoaderData()
    const [likes, setLikes] = useState(totalLikes);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        if (likedBy?.includes(user?.email)) {
            setIsLiked(true);
        }
    }, [likedBy, user]);


    const handleLikes = (id) => {
        const newLikes = likes + 1;
        setLikes(newLikes);
        setIsLiked(true);


        fetch(`http://localhost:5000/tips/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden">

                {/* Image */}
                <div className="h-[250px] md:h-[450px] w-full overflow-hidden">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover hover:scale-105 transition"
                    />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-10 space-y-4">
                    {/* Title + Category */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                            {title}
                        </h2>
                        <span className="inline-block bg-secondary text-white text-sm px-4 py-1 rounded-full text-center">
                            {category}
                        </span>
                    </div>

                    {/* Plant Type, Difficulty */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                        <p><span className="font-semibold">🌱 Plant Type:</span> {plantType}</p>
                        <p><span className="font-semibold">⚡ Difficulty:</span> {difficulty}</p>
                    </div>

                    {/* Description */}
                    <div>
                        <h3 className="text-lg font-semibold text-secondary mb-2">Description</h3>
                        <p className="text-gray-700 leading-relaxed">{description}</p>
                    </div>

                    {/* Experience (optional field check) */}
                    {experience && (
                        <div>
                            <h3 className="text-lg font-semibold text-secondary mb-2">Experience</h3>
                            <p className="text-gray-700">{experience}</p>
                        </div>
                    )}

                    {/* User Info */}
                    <div className="text-sm text-gray-500 mt-4">
                        <p><span className="font-semibold">Posted by:</span> {userEmail}</p>
                        <p><span className="font-semibold">Date:</span> {new Date(createdAt).toLocaleDateString()}</p>
                    </div>

                    {/* Like Button */}
                    <div className="mt-6 flex items-center gap-3">
                        <button
                            onClick={() => handleLikes(_id)}
                            disabled={isLiked}
                            className={`flex items-center gap-2 px-6 py-2 rounded-lg transition ${isLiked ? 'bg-secondary text-white cursor-not-allowed' : 'bg-primary hover:bg-secondary text-white'
                                }`}
                        >
                            <FaHeart /> {isLiked ? 'Liked' : 'Like'}
                        </button>
                        <span className="text-gray-600 font-medium">{likes} Likes</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TipsDetails;

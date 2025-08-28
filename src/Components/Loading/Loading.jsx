import React from "react";

const Loading = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
            <div className="flex flex-col items-center">
                {/* Spinner */}
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                {/* Text */}
                <p className="mt-4 text-primary font-semibold text-lg animate-pulse">
                    Loading...
                </p>
            </div>
        </div>
    );
};

export default Loading;

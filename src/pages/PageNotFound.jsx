import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#8573C2] flex flex-col justify-center items-center text-white px-6">
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <h2 className="text-3xl mb-6">Oops! Page Not Found</h2>
      <p className="mb-8 max-w-md text-center">
        Looks like you took a wrong turn. The page you are looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="bg-white text-[#8573C2] px-6 py-3 rounded font-semibold hover:bg-gray-200 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;

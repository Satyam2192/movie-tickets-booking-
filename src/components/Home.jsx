import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";
import Trailers from "./Trailers";

function Home() {
  const [shows, setShows] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => {
        setShows(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Header />
      <Trailers />
      <div className="bg-gray-100 min-h-screen flex justify-center p-8 px-12">
        <div className="container mx-auto py-10">
          <h1 className="text-4xl font-bold mb-10 text-center">Shows</h1>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {shows.map((show) => (
              <li
                key={show.show.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition duration-300"
              >
                <div className="relative">
                  <div className="flex items-center mb-2">
                    <img
                      src="https://img.freepik.com/free-vector/golden-star-3d_1053-79.jpg?w=740&t=st=1684027269~exp=1684027869~hmac=4e667bca09f22744407e6cb55919051744829a497b9ae28f3551611d424e79e8"
                      alt="Rating"
                      className="h-6 mr-2"
                    />
                    <span className="text-gray-300">
                      {show.show.rating.average || "N/A"}
                    </span>
                  </div>
                  {show.show.image && show.show.image.medium ? (
                    <img
                      src={show.show.image.medium}
                      className="object-cover h-full w-full"
                      alt={show.show.name}
                    />
                  ) : (
                    <div className="bg-gray-300 h-full flex items-center justify-center">
                      <img
                        src={
                          "https://img.freepik.com/free-vector/404-error-template-flat-style_23-2147757270.jpg?w=740&t=st=1684027076~exp=1684027676~hmac=023175b70090aba4b1fde400bc7274228531499cc67168199d910ba2b4ca5efe"
                        }
                        alt="#"
                        className="w-full h-[640px]"
                      />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <Link
                      to={`/shows/${show.show.id}`}
                      className="block text-xl font-bold text-white hover:text-blue-600 mb-2"
                    >
                      {show.show.name}
                    </Link>
                    <p className="text-gray-300 mb-2">{show.show.type}</p>
                    <p className="text-gray-300 mb-2">{show.show.language}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
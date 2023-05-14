import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function ShowDetails() {
  const [show, setShow] = useState({});
  const [error, setError] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => {
        setShow(response.data);
      })
      .catch((error) => {
        console.log(error);
        setError("Error fetching show details");
      });
  }, [id]);

  const handleBooking = () => {
    const movieDetails = {
      name: show.name,
      language: show.language,
      type: show.type,
    };
    localStorage.setItem("movieDetails", JSON.stringify(movieDetails));
    navigate("/booking");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4">{show.name}</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {show.image && show.image.original ? (
          <img
            src={show.image.original}
            className="object-cover h-full w-full"
            alt={show.name}
          />
        ) : (
          <div className="bg-gray-300 h-full flex items-center justify-center">
            <img
              src={
                "https://img.freepik.com/free-vector/404-error-template-flat-style_23-2147757270.jpg?w=740&t=st=1684027076~exp=1684027676~hmac=023175b70090aba4b1fde400bc7274228531499cc67168199d910ba2b4ca5efe"
              }
              alt="#"
              className="w-full h-[340px]"
            />
          </div>
        )}
        <p className="text-gray-700 mb-4">{show.language}</p>
        <p className="text-gray-700 mb-4">{show.type}</p>
        <p className="text-gray-700 mb-4">{show.rating?.average}</p>
        <p className="text-gray-700 mb-4">{show.summary}</p>
        <button
          onClick={handleBooking}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          Book Tickets
        </button>
      </div>
    </div>
  );
}

export default ShowDetails;
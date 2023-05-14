import React from 'react';
import { Link } from 'react-router-dom';

function ShowCard({ show }) {
  return (
    <div className="card">
      <img src={show.image.medium} className="card-img-top" alt={show.name} />
      <div className="card-body">
        <h5 className="card-title">{show.name}</h5>
        <p className="card-text">{show.summary}</p>
        <Link to={`/show/${show.id}`} className="btn btn-primary">View Details</Link>
      </div>
    </div>
  );
}

export default ShowCard;
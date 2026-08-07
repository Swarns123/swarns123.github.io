import React, { useState, useEffect } from 'react';
import './BengaliReviews.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function BengaliReviews() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Hardcoded JSON
  const mockData = [
    {
      imageUrl: "https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FaKYZfvYkjXYB5pN7En8RCRt0ZcZ.jpg",
      title: "Praktan",
      content: "A mature love story exploring relationships, memories, and second chances."
    },
    {
      imageUrl: "https://m.media-amazon.com/images/M/MV5BNjFkOWI4OTYtMmU1Ni00MDNkLWExNWItYmIxYjIxNGQ3ZDBhXkEyXkFqcGc@._V1_.jpg",
      title: "Baishe Srabon",
      content: "A gripping thriller involving serial killings, poetry, and dark psychological twists."
    },
    {
      imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/d23b6e22c28e6d9e3dca584aa59cd5d95bb1b13cbaae23e4fb353ef3fea20351.jpg",
      title: "Belaseshe",
      content: "A heartwarming story of an elderly couple rediscovering their relationship after decades."
    }
  ];

  useEffect(() => {
    // simulate API call
    setTimeout(() => {
      setData(mockData);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="content background1 shadow p-3 rounded row">
          {data.map((card, index) => (
            <div className="card col-sm-6 col-md-4 col-lg-3 mb-3 m-4" key={index}>
              
              <div className="card__image-container">
                <img
                  className="card__image img-fluid"
                  src={card.imageUrl}
                  alt={card.title}
                />
              </div>

              <div className="card__content">
                <h6 className="card__title">{card.title}</h6>
                <p className="card-text">{card.content}</p>
              </div>

              <button className="bottom-button">
                <Link to={`/Reviews/${card.title}`} className="reviewButton">
                  <b>Read Reviews</b>
                </Link>
              </button>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BengaliReviews;

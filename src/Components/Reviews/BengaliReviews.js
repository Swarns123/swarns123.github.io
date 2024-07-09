// 
import React, { useState, useEffect } from 'react';
import './BengaliReviews.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function BengaliReviews() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://run.mocky.io/v3/22e025b7-d2bc-4f91-a553-24d565b97931');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, []); // Empty dependency array means this effect runs only once, on component mount

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div class="content background1 shadow p-3 mb-5 bg-white rounded row">
        {data.map((card, index) => (
          <div className="card col-sm-6 col-md-4 col-lg-3 mb-3 m-4" key={index}>
            <div className="card__image-container">
              <img className="card__image img-fluid" src={card.imageUrl} alt="" />
            </div>
            <div className="card__content">
              <h1 className="card__title">{card.title}</h1>
              <p className="card-text">{card.content}</p>
            </div>
            <button className="btn btn-primary bottom-button">
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

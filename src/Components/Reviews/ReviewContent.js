import './ReviewContent.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import React from "react";

function ReviewContent() {
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(true);
  const { movieTitle } = useParams();

  // ✅ Hardcoded JSON (Bengali Movies)
  const mockReviews = [
    {
      movie: "Praktan",
      image: "https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FaKYZfvYkjXYB5pN7En8RCRt0ZcZ.jpg",
      director: "Shiboprosad Mukherjee & Nandita Roy",
      producer: "Windows Production",
      starring: "Prosenjit Chatterjee, Rituparna Sengupta",
      good1: "Strong emotional storytelling",
      good2: "Brilliant performances by lead actors",
      good3: "Relatable relationship dynamics",
      bad1: "Slightly slow pacing",
      bad2: "Predictable moments",
      bad3: "Limited supporting character depth",
      plot: "A story about former lovers meeting again on a train journey and revisiting their past.",
      performance: "Prosenjit and Rituparna deliver outstanding and mature performances.",
      direction: "Simple yet impactful direction focusing on emotions."
    },
    {
      movie: "Baishe Srabon",
      image: "https://m.media-amazon.com/images/M/MV5BNjFkOWI4OTYtMmU1Ni00MDNkLWExNWItYmIxYjIxNGQ3ZDBhXkEyXkFqcGc@._V1_.jpg",
      director: "Srijit Mukherji",
      producer: "SVF Entertainment",
      starring: "Prosenjit Chatterjee, Parambrata Chatterjee",
      good1: "Gripping thriller storyline",
      good2: "Unique blend of poetry and crime",
      good3: "Strong climax",
      bad1: "Dark tone may not suit everyone",
      bad2: "Complex narrative at times",
      bad3: "Violent scenes",
      plot: "A serial killer leaves poetic clues while committing murders, leading to a tense investigation.",
      performance: "Powerful performances, especially by Prosenjit.",
      direction: "Sharp and intelligent direction by Srijit Mukherji."
    },
    {
      movie: "Belaseshe",
      image: "https://m.media-amazon.com/images/S/pv-target-images/d23b6e22c28e6d9e3dca584aa59cd5d95bb1b13cbaae23e4fb353ef3fea20351.jpg",
      director: "Shiboprosad Mukherjee & Nandita Roy",
      producer: "Windows Production",
      starring: "Soumitra Chatterjee, Swatilekha Sengupta",
      good1: "Heart-touching story",
      good2: "Excellent veteran performances",
      good3: "Strong emotional connect",
      bad1: "Slow narrative",
      bad2: "Less cinematic drama",
      bad3: "Limited appeal for younger audience",
      plot: "An elderly man asks for divorce after decades of marriage, shocking his family.",
      performance: "Legendary performances by Soumitra and Swatilekha.",
      direction: "Subtle and realistic storytelling."
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      setReview(mockReviews);
      setLoading(false);
    }, 500);
  }, []);

  const movieShow = review.find(mov => mov.movie === movieTitle);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!movieShow) {
    return <p style={{ color: "white" }}>Movie not found</p>;
  }

  return (
    <div className="main background">
      <div className="m-3 row mx-0 contain">

        <div className="image mt-2 p-2 col-12 col-md-4">
          <img
            src={movieShow.image}
            height="200"
            width="300"
            className="img-thumbnail"
            alt="Movie Poster"
          />

          <div className="mt-2 p-2 text-white">
            <br /><br /><br />
            <strong>Director:</strong> {movieShow.director}
            <br />
            <strong>Producer:</strong> {movieShow.producer}
            <br />
            <strong>Starring:</strong> {movieShow.starring}
            <br /><br /><br />

            <strong>Rating:</strong> 3
            <br />
            <span className="fa fa-star checked p-1" style={{ color: 'gold' }}></span>
            <span className="fa fa-star checked p-1" style={{ color: 'gold' }}></span>
            <span className="fa fa-star checked p-1" style={{ color: 'gold' }}></span>
            <span className="fa fa-star p-1"></span>
            <span className="fa fa-star p-1"></span>
          </div>
        </div>

        <div className="col-12 col-md-8 mt-2 p-2 text-white">
          <p className="top-content pb-3">
            <strong style={{ fontSize: 'larger' }}>{movieShow.movie}</strong>
            <br />
            Directed by {movieShow.director}
            <br />
            Review: Swarnendu Saha
            <br />
          </p>

          <div style={{ fontFamily: 'Cabin, sans-serif' }}>
            <strong>Good points:</strong>
            <ol>
              <li>{movieShow.good1}</li>
              <li>{movieShow.good2}</li>
              <li>{movieShow.good3}</li>
            </ol>

            <strong>Bad points:</strong>
            <ol>
              <li>{movieShow.bad1}</li>
              <li>{movieShow.bad2}</li>
              <li>{movieShow.bad3}</li>
            </ol>

            <strong>Plot:</strong> {movieShow.plot}
            <br /><br />
            <strong>Performance:</strong> {movieShow.performance}
            <br /><br />
            <strong>Direction:</strong> {movieShow.direction}
          </div>
        </div>

      </div>
    </div>
  );
}

export default ReviewContent;
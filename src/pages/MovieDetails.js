import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../MovieState";
import { motion } from "framer-motion";
import { pageAnimate } from "../animate";

function MovieDetails() {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const currentMovie = movies.filter((current) => current.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details
          exit="exit"
          variants={pageAnimate}
          initial="hidden"
          animate="show"
        >
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </HeadLine>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                key={award.title}
                description={award.description}
              />
            ))}
          </Awards>
          <Images>
            <img src={movie.secondaryImg} />
          </Images>
        </Details>
      )}
    </>
  );
}

const Details = styled(motion.div)`
  color: #fff;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  margin-top: 3rem;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 3.5rem;
  }
  img {
    height: 80vh;
    width: 100%;
    object-fit: cover;
  }
`;
const AwardStyle = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-between;
  .line {
    background: #23d997;
    height: 5px;
    width: 100%;
  }
  p {
    max-width: 40vh;
  }
`;
const Images = styled.div`
  min-height: 70vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

export default MovieDetails;

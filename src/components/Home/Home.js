import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Home.module.css";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import MenuBar from "../MenuBar/MenuBar";
const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const params = {
        method: "post",
        url: "https://hoblist.com/api/movieList",
        data: {
          category: "movies",
          language: "kannada",
          genre: "all",
          sort: "voting",
        },
      };
      const data = await axios(params);
      console.log(data.data.result);
      setMovies(data.data.result);
    }
    fetchData();
  }, []);
  return (
  <>
  <MenuBar/>
  <Container>
      <Row>
        {movies.map((movie, index) => {
          const date = new Date(movie.releasedDate * 1000);
          const options = { day: "numeric", month: "long" };
          const formattedDate = date.toLocaleDateString("en-US", options);
          return (
            <Col key={index} xs={12} className={styles.movie}>
              <Row>
                <Col xs={2} className={styles.totalVoted}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-triangle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"
                    />
                  </svg>
                  {movie.totalVoted}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-triangle-fill"
                    viewBox="0 0 16 16"
                    style={{ transform: "rotate(180deg)" }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"
                    />
                  </svg>
                  <i className={styles.Vote}>votes</i>
                </Col>
                <Col xs={2} className={styles.movieimage}>
                  <Image src={movie.poster} fluid />
                </Col>
                <Col xs={8} className={styles.moviedetail}>
                  <b>{movie.title}</b>
                  <br />
                  <i>Genre: </i>
                  {movie.genre}
                  <br />
                  <i>Director: </i>
                  {movie.director}
                  <br />
                  <i>Starring: </i>
                  {movie.stars}
                  <br />
                  <i>
                    Mins | {movie.language} | {formattedDate}
                  </i>
                  <br />
                  <i className="text-primary">
                    {movie.pageViews} Views | Voted by {movie.totalVoted} People
                  </i>
                  <br />
                </Col>
                <Button variant="primary" className={styles.buttonwatch}>
                  Watch Trailer
                </Button>
              </Row>

            </Col>
          );
        })}
      </Row>
    </Container>
  </>
  );
};

export default Home;

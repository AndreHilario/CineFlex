import { PageContainer, ListContainer, MovieContainer } from "../../style/styleHomePage";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function HomePage() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
            .then((response) => {
                setMovies(response.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    }, []);

    if (movies.length === 0) {
        return <div>Loading...</div>
    }

    return (
        <PageContainer>
            Selecione o filme

            <ListContainer>
                {movies.map((m) => (
                    <MovieContainer key={m.id}>
                        <Link to={`/sessoes/${m.id}`}>
                            <img src={m.posterURL} alt="posterMovie" />
                        </Link>
                    </MovieContainer>

                ))}
            </ListContainer>
        </PageContainer>
    );
}
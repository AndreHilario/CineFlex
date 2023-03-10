import { PageContainer, SessionContainer, ButtonsContainer } from "../../style/styleSessionsPage";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import FooterSessionPage from "../../components/FooterSessionPage";


export default function SessionsPage() {

    const { idFilme } = useParams();

    const [sessionAvailable, setSessionAvailable] = useState([]);

    useEffect(() => {
        axios
            .get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
            .then((response) => {
                setSessionAvailable(response.data.days);
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    }, []);

    return (
        <PageContainer>
            Selecione o horário
            <div>
                <SessionContainer>
                    {sessionAvailable.map((s) => (
                        <span data-test="movie-day" key={s.id}>
                            {s.weekday} - {s.date}
                            <ButtonsContainer data-test="showtime">

                                {s.showtimes.map((showtime) => (
                                    <Link key={showtime.id} to={`/assentos/${showtime.id}`}>
                                        <button>{showtime.name}</button>
                                    </Link>
                                ))}

                            </ButtonsContainer>

                        </span>
                    ))}
                </SessionContainer>
            </div>

            <FooterSessionPage />

        </PageContainer>
    )
}
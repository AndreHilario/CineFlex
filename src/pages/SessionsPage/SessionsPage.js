import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";


export default function SessionsPage() {

    const { idFilme } = useParams();

    const [sessionAvaible, setSessionAvaible] = useState([]);

    useEffect(() => {
        axios
            .get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
            .then((response) => {
                setSessionAvaible(response.data.days);
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
                    {sessionAvaible.map((s) => (
                        <span key={s.id}>
                            {s.weekday} - {s.date}
                            <ButtonsContainer>
                                {s.showtimes.map((showtime) => (
                                    <button key={showtime.id}>{showtime.name}</button>
                                ))}
                            </ButtonsContainer>
                        </span>
                    ))}
                </SessionContainer>
            </div>

            <Footer />

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
    div {
        margin-top: 20px;
    }
`
const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Roboto';
    font-size: 20px;
    color: #293845;
    padding: 0 20px;
`
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row; 
    margin: 20px 0;
    button {
        margin-right: 20px;
    }
    a {
        text-decoration: none;
    }
`
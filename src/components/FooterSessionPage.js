import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function FooterSessionPage() {

    const { idFilme } = useParams();

    const [footerInfos, setFooterInfos] = useState("");

    useEffect(() => {
        axios
            .get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
            .then((response) => {
                setFooterInfos(response.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    }, []);


    return (
        <FooterContainer>
            <div key={footerInfos.id}>
                <img src={footerInfos.posterURL} alt="poster" />
            </div>
            <div key={footerInfos.overview}>
                <p>{footerInfos.title}</p>
            </div>
        </FooterContainer>
    );
}



const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;

    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin: 12px;
        img {
            width: 50px;
            height: 70px;
            padding: 8px;
        }
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
            text-align: left;
            &:nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`
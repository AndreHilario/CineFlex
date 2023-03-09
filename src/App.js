import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SeatsPage from "./pages/SeatsPage/SeatsPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import { useState } from "react";

export default function App() {

    const [arraySeats, setArraySeats] = useState([]);
    const [name, setName] = useState("");
    const [document, setDocument] = useState("");
    const [infoSession, setInfoSession] = useState([]);
    const [infoTime, setInfoTime] = useState([]);
    const [infoDay, setInfoDay] = useState([]);

    return (
        <BrowserRouter>
            <NavContainer>CINEFLEX</NavContainer>
            <Routes>
                <Route path="/" element={<HomePage />}> </Route>
                <Route path="/assentos/:idSessao" element={<SeatsPage
                    name={name}
                    setName={setName}
                    document={document}
                    setDocument={setDocument}
                    arraySeats={arraySeats}
                    setArraySeats={setArraySeats}
                    infoSession={infoSession}
                    setInfoSession={setInfoSession}
                    infoTime={infoTime}
                    setInfoTime={setInfoTime}
                    infoDay={infoDay}
                    setInfoDay={setInfoDay} />}>
                </Route>
                <Route path="/sessoes/:idFilme" element={<SessionsPage />}> </Route>
                <Route path="/sucesso" element={<SuccessPage
                    name={name}
                    document={document}
                    arraySeats={arraySeats}
                    infoSession={infoSession}
                    infoTime={infoTime}
                    infoDay={infoDay} />}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`

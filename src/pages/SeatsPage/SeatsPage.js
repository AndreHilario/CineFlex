import { PageContainer, SeatsContainer, SeatItem, CaptionContainer, CaptionItem, CaptionCircle, FormContainer, FooterContainer } from "./styleSeatsPage";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function SeatsPage(props) {

    const { idSessao } = useParams();
    const { name, document, arraySeats, setName, setDocument, setArraySeats, infoSession, infoDay, infoTime, setInfoSession, setInfoDay, setInfoTime } = props;

    const [seats, setSeats] = useState([]);

    function selectSeat(id, index) {
        const selectedSeat = arraySeats.find(seat => seat.id === id);
        if (seats[index].isAvailable) {
            if (selectedSeat) {
                const newSeats = arraySeats.filter(seat => seat.id !== id);
                setArraySeats(newSeats);
            } else {
                const newSeats = [...arraySeats, { "id": id, "index": index }];
                setArraySeats(newSeats);
            }
        } else {
            messageAlert();
        }
    }

    function messageAlert() {
        alert("Esse assento não está disponível");
    }

    function sendRequest() {     
        const selectedIdsInfos = seats.filter((s) => {
            return arraySeats.some(selectedSeat => selectedSeat.id === s.id);
        }).map(s => s.id);

        if(selectedIdsInfos.length === 0){
            alert("Você deve selecionar um assento");
            return;
        }
             
        const allInfos = {
            ids: selectedIdsInfos,
            name: name,
            cpf: document
        }
        axios
            .post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", allInfos)
            .then((response) => {
                console.log(response.data)
            })
            .catch((err) => {
                console.log(err.response);
            });
    }

    useEffect(() => {
        axios
            .get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
            .then((response) => {
                setSeats(response.data.seats);
                setInfoSession(response.data.movie);
                setInfoTime(response.data);
                setInfoDay(response.data.day);
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    }, []);

    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer>
                {seats.map((seat, index) => {
                    const selectedSeat = arraySeats.find(selected => selected.id === seat.id);
                    const status = selectedSeat ? 2 : seat.isAvailable ? 1 : 0;
                    return (
                        <SeatItem
                            data-test="seat"
                            onClick={() => selectSeat(seat.id, index)}
                            status={status}
                            key={seat.id}
                        >
                            {seat.name}
                        </SeatItem>
                    );
                })}
            </SeatsContainer>

            <CaptionContainer>
                <CaptionItem>
                    <CaptionCircle status={2} />
                    Selecionado
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle status={1} />
                    Disponível
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle status={0} />
                    Indisponível
                </CaptionItem>
            </CaptionContainer>

            <FormContainer>
                <form>
                    <p>Nome do Comprador:</p>
                    <input data-test="client-name" required type="text" placeholder="Digite seu nome..." onChange={e => setName(e.target.value)} value={name} />

                    <p>CPF do Comprador:</p>
                    <input data-test="client-cpf" required type="text" placeholder="Digite seu CPF..." onChange={e => setDocument(e.target.value)} value={document} />

                    <Link to={"/sucesso"}>
                        <button data-test="book-seat-btn" onClick={() => sendRequest()}>Reservar Assento(s)</button>
                    </Link>
                </form>
            </FormContainer>

            <FooterContainer data-test="footer">
                <div>
                    <img src={infoSession.posterURL} alt="poster" />
                </div>
                <div>
                    <p>{infoSession.title}</p>
                    <p>{infoDay.weekday} - {infoTime.name}</p>
                </div>
            </FooterContainer>

        </PageContainer>
    )
}
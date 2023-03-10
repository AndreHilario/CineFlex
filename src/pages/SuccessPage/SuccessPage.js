import { Link } from "react-router-dom";
import { PageContainer, TextContainer } from "../../style/styleSucessPage";

export default function SuccessPage(props) {

    const { name, document, arraySeats, infoSession, infoTime, infoDay } = props;
    return (
        <PageContainer>
            <h1>Pedido feito <br /> com sucesso!</h1>

            <TextContainer data-test="movie-info">
                <strong><p>Filme e sessão</p></strong>
                <p>{infoSession.title}</p>
                <p>{infoDay.date} {infoTime.name}</p>
            </TextContainer>

            <TextContainer data-test="seats-info">
                <strong><p>Ingressos</p></strong>
                {arraySeats.map((i) => <p key={i.id}>Assento {i.index + 1}</p>)}
            </TextContainer>

            <TextContainer data-test="client-info">
                <strong><p>Comprador</p></strong>
                <p>Nome: {name}</p>
                <p>CPF: {document}</p>
            </TextContainer>
            <Link to={"/"}>
                <button data-test="go-home-btn">Voltar para Home</button>
            </Link>
        </PageContainer >
    )
}
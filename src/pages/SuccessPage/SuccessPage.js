import { Link } from "react-router-dom";
import { PageContainer, TextContainer } from "../../style/styleSucessPage";

export default function SuccessPage(props) {

    const { name, document, arraySeats, infoSession, infoTime, infoDay } = props;
    return (
        <PageContainer>
            <h1>Pedido feito <br /> com sucesso!</h1>

            <TextContainer>
                <strong><p>Filme e sessão</p></strong>
                <p>{infoSession.title}</p>
                <p>{infoDay.weekday} {infoTime.name}</p>
            </TextContainer>

            <TextContainer>
                <strong><p>Ingressos</p></strong>
                {arraySeats.map((i) => <p key={i.id}>Assento {i.index + 1}</p>)}
            </TextContainer>

            <TextContainer>
                <strong><p>Comprador</p></strong>
                <p>Nome: {name}</p>
                <p>CPF: {document}</p>
            </TextContainer>
            <Link to={"/"}>
                <button>Voltar para Home</button>
            </Link>
        </PageContainer >
    )
}
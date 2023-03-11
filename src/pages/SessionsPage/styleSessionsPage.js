import styled from "styled-components";

export const PageContainer = styled.div`
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
export const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Roboto';
    font-size: 20px;
    color: #293845;
    padding: 0 20px;
`
export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row; 
    margin: 20px 0;
    button {
        margin-right: 20px;
    }
    a {
        display: flex;
        text-decoration: none;
    }
`
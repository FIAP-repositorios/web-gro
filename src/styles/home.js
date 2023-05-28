import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
`

export const Header = styled.div`
    width: 100%;
    background: #00A066;
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10rem;

    h2 {
        color: white;
    }
`

export const Title = styled.h1`
    color: #00A066;
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
` 

export const List = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 8rem;
    height: 10rem;
    background: white;
    margin: 2rem;
    border-radius: 10px;
    box-shadow: 0.5px 0.8px 1px 0.3px gray;

    button {
        background: #00A066;
        border-radius: 2px;
        padding: 2px;
        margin: 0.5rem;
        width: 6rem;
        height: 1.5rem;
        color: white;
        border: 0px;
        cursor: pointer;
    }
` 
import styled from "styled-components";

export const Container = styled.div`
    grid-area: MF;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    padding: 20px 0;

    background-color: var(--primary);

    max-height: calc(100vh - 50px);
`

export const Functionalities = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    :not(:last-child){
        margin-bottom: 30px;
    }
`
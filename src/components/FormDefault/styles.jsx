import styled from "styled-components";

export const Container = styled.form`
    display: flex;
    flex-direction: column;

    width: 80%;
    max-width: 600px;
    
    margin: 60px 0;

    :not(:first-child) ~label{
       margin-top: 12px;
    }

    height: fit-content;
`

export const Title = styled.h2`
    font-size: 18px;
    color: var(--white);
    font-weight: 400;
    text-transform: uppercase;

    margin-bottom: 25px;
`
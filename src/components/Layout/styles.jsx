import styled from "styled-components";

/*
    LA - LOGO AREA
    IC - INFO COMPANY
    MF - MAIN FEATURES
    FA - FEATURES AREA
    BA - BODY AREA
    MA - MAIN AREA
*/

export const Grid = styled.div`
    display: grid;

    grid-template-columns: 70px 210px 1fr;

    grid-template-rows: 50px auto;

    grid-template-areas: 
    'LA IC IC'
    'MF FA BA';

    height: 100vh;
    gap: 3px;
    background-color: var(--secondary);

    ::-webkit-scrollbar {
        width: 3px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--scroll);
        border-radius: 20px;
    }
`
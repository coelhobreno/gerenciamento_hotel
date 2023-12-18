import styled from "styled-components";

export const Container = styled.div`
    width: 80%;

    margin: 50px 0;

    height: fit-content;
`

export const Title = styled.h2`
    color: var(--text-primary);
    font-size: 16px;
    text-transform: uppercase;
`

export const Topic = styled.div`
    margin-top: 15px;
`

export const SubTitle = styled.h3`
    color: var(--text-primary);
    font-size: 14px;
    text-transform: uppercase;
    font-style: italic;
    font-weight: 500;
    letter-spacing: 1px;
`

export const List = styled.ul`
    list-style: disc;
    list-style-position: inside;
`

export const Item = styled.li`
    color: var(--text-primary);
    font-size: 15px;

    margin-top: 5px;

    padding-left: 0;
`
import styled from "styled-components";

export const Container = styled.div`
    width: 80%;

    margin: 50px 0;
`

export const Filter = styled.div`
    height: 40px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const InputDate = styled.div`
    width: 120px;
    height: 100%;

    color: var(--white);

    background-color: var(--secondary);

    border: 1px solid var(--grey);

    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
`

export const ContItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const Header = styled.div`
    height: 40px;
    width: 100%;

    margin-top: 10px;

    border-bottom: 2px solid var(--tertiary);

    padding: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: var(--text-primary);
`

export const Item = styled.div`
    height: 40px;
    width: 100%;

    color: var(--text-primary);

    margin-top: 10px;

    border: 1px solid var(--grey);

    border-radius: 20px;

    background-color: var(--secondary);

    padding: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    opacity: .7;

    cursor: pointer;

    transition: .2s opacity;

    &:hover {
        opacity: 1;
    }
`
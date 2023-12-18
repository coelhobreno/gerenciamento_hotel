import styled from "styled-components";

export const Label = styled.label`
    color: var(--text-primary);
    font-size: 15px;
    font-weight: bold;

    text-align: left;
`

export const Input = styled.input`
    width: 100%;
    
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 500;

    margin-top: 5px;
    padding: 10px;

    border: 1px solid var(--grey);

    ::placeholder{
        color: var(--text-secondary); 
    }

    background-color: var(--secondary);
`

export const Button = styled.button`
    color: var(--white);
    font-size: 15px;

    width: 100%;

    padding: 8px 0;
    margin-top: 20px;

    background-color: var(--tertiary);
    border: 1px solid var(--tertiary);

    cursor: pointer;

    transition: background-color .2s, color .2s;

    &:hover {
        background-color: transparent;
        color: var(--tertiary);
    }
`

export const Select = styled.select`
    width: 100%;
    
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 500;

    margin-top: 5px;
    padding: 10px;

    border: 1px solid var(--grey);

    ::placeholder{
        color: var(--text-secondary); 
    }

    background-color: var(--secondary);

    > option {
        //CONFIG
    }
`
import styled from "styled-components";

import { SlArrowUp, SlArrowDown } from "react-icons/sl";

export const Container = styled.div`
    width: 90%;

    display: flex;

    margin: 100px 0;
`

export const UpDownArea = styled.div`
    background-color: var(--secondary);

    width: 100px;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > svg {
        width: 30px;
        height: 30px;

        color: var(--white);
        font-size: 20px;

        padding: 6px;

        border-radius: 50%;
        border: 1px solid var(--grey);

        cursor: pointer;

        background-color: var(--grey);

        transition: background-color .2s;

        &:hover {
            background-color: var(--secondary);
        }

    }
`

export const ShowRoomsArea = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    border: 1px solid var(--grey);
    
    gap: 5px;
`

export const Room = styled.div`
    width: 40px;
    height: 40px;

    font-weight: 600;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--color-right);
    color: var(--text-primary);

    cursor: pointer;

    opacity: .8;

    transition: opacity .2s;

    &:hover {
        opacity: 1;
    }

    &.occupied {
        background-color: var(--color-wrong);
    }
`

export const IconUp = styled(SlArrowUp)``

export const CurrentFloor = styled.h2`
    font-size: 14px;
    font-weight: 500;

    margin: 10px 0;

    > span {
        color: var(--white);
        font-weight: 500;
    }
`

export const IconDown = styled(SlArrowDown)``
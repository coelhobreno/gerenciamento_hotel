import styled from "styled-components";

import { FaAngleRight } from "react-icons/fa";

export const HeaderUpdate = styled.div`
    width: fit-content;

    color: var(--white);

    margin-top: 10px;

    display: flex;
    align-items: center;

    cursor: pointer;

    > span {
        margin-left: 5px;
        font-size: 15px;

        &:hover {
            border-bottom: 1px solid var(--tertiary);
        }
    }

    &.active svg{
        transform: rotate(90deg);
    }
`

export const IconShow = styled(FaAngleRight)`
    width: 28px;
    height: 28px;
    padding: 5px;

    display: flex;
    align-items: center;
    
    border-radius: 50%;

    border: 1px solid var(--secondary);

    cursor: pointer;

    background-color: var(--secondary);

    &:hover {
        background-color: transparent;
    }

    transition: transform 0.3s ease;
`

export const AllItems = styled.div`
    margin-top: 10px;
    
    display: none;

    &.show {
        display: block;
    }
    
`

export const Header = styled.div`
    border-bottom: 2px solid var(--grey);

    padding-bottom: 5px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > span {
        color: var(--text-primary);
        font-size: 15px;
    }
`
import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const Container = styled(NavLink)`
    width: 30%;
    height: 65px;

    cursor: pointer;
    border-radius: 20px;
    border: 1px solid var(--secondary);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;

    background-color: var(--secondary);

    transition: background-color .2s;

    > svg {
        color: var(--icons);
    }

    > span {
        font-size: 10px;
        font-weight: 500;
        color: var(--text-primary);
    }

    &:hover {
        background-color: transparent;
    }

    &.active svg{
        color: var(--tertiary);
    }
`